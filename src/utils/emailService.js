/**
 * Email Service - Handles email registration and verification
 * 
 * This service provides methods to:
 * - Register user email addresses
 * - Send confirmation emails with download links
 * - Verify email confirmation tokens
 * - Generate download packages
 */

// Configuration for production deployment
const EMAIL_SERVICE_CONFIG = {
  apiEndpoint: '/api/email', // Backend endpoint for email processing
  confirmationUrl: `${window.location.origin}/confirm`, // Base URL for confirmation links
  productionDomain: 'https://www.togglebox.co.za',
};

/**
 * Validates email format
 */
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Generates a unique token for email confirmation
 */
const generateConfirmationToken = () => {
  return Math.random().toString(36).substr(2, 9) + Date.now().toString(36);
};

/**
 * Stores email registration data temporarily (in localStorage for demo purposes)
 * In production, this would be handled by your backend
 */
const storeEmailRegistration = (email, token, data) => {
  const registrationData = {
    email,
    token,
    data,
    timestamp: Date.now(),
    confirmed: false
  };
  
  const key = `email_registration_${token}`;
  localStorage.setItem(key, JSON.stringify(registrationData));
  
  // Store a lookup by email as well
  const emailLookup = JSON.parse(localStorage.getItem('email_lookups') || '{}');
  emailLookup[email] = token;
  localStorage.setItem('email_lookups', JSON.stringify(emailLookup));
  
  return registrationData;
};

/**
 * Sends confirmation email via backend API
 */
const sendConfirmationEmail = async (email, token, downloadData) => {
  const confirmUrl = `${EMAIL_SERVICE_CONFIG.confirmationUrl}/${token}`;
  
  // Try to send via production API first
  if (window.location.hostname === 'www.togglebox.co.za' || window.location.hostname === 'togglebox.co.za') {
    try {
      const response = await fetch('/api/email/send-confirmation.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          token,
          downloadData
        })
      });

      if (response.ok) {
        const result = await response.json();
        return { success: true, confirmUrl, emailSent: true };
      }
    } catch (error) {
      console.log('Production email API not available, falling back to demo mode');
    }
  }
  
  // Fallback to demo mode for development
  console.log('🔗 Confirmation Email (Demo Mode)');
  console.log(`To: ${email}`);
  console.log(`Confirmation URL: ${confirmUrl}`);
  console.log(`Download includes: ${downloadData.files ? downloadData.files.length : 0} files`);
  
  // Auto-confirm in demo mode
  setTimeout(() => {
    console.log('🎯 Auto-confirming for demo...');
    confirmEmailRegistration(token);
  }, 2000);
  
  return { success: true, confirmUrl, emailSent: false };
};

/**
 * Main function to register email and initiate confirmation flow
 */
export const registerEmailForDownload = async (email, downloadData) => {
  if (!validateEmail(email)) {
    throw new Error('Please enter a valid email address');
  }
  
  // Check if email was recently registered
  const emailLookups = JSON.parse(localStorage.getItem('email_lookups') || '{}');
  const existingToken = emailLookups[email];
  
  if (existingToken) {
    const existingData = localStorage.getItem(`email_registration_${existingToken}`);
    if (existingData) {
      const parsed = JSON.parse(existingData);
      const hoursSinceRegistration = (Date.now() - parsed.timestamp) / (1000 * 60 * 60);
      
      if (hoursSinceRegistration < 24) {
        // Resend confirmation for existing registration
        await sendConfirmationEmail(email, existingToken, downloadData);
        return { success: true, token: existingToken, resent: true };
      }
    }
  }
  
  // Generate new registration
  const token = generateConfirmationToken();
  const registrationData = storeEmailRegistration(email, token, downloadData);
  
  // Send confirmation email
  await sendConfirmationEmail(email, token, downloadData);
  
  return { success: true, token, new: true };
};

/**
 * Confirms email registration and marks as verified
 */
export const confirmEmailRegistration = (token) => {
  const key = `email_registration_${token}`;
  const data = localStorage.getItem(key);
  
  if (!data) {
    return { success: false, error: 'Invalid confirmation token' };
  }
  
  const registrationData = JSON.parse(data);
  registrationData.confirmed = true;
  registrationData.confirmedAt = Date.now();
  
  localStorage.setItem(key, JSON.stringify(registrationData));
  
  return { success: true, data: registrationData };
};

/**
 * Retrieves download data for confirmed email
 */
export const getDownloadData = (token) => {
  const key = `email_registration_${token}`;
  const data = localStorage.getItem(key);
  
  if (!data) {
    return { success: false, error: 'Invalid token' };
  }
  
  const registrationData = JSON.parse(data);
  
  if (!registrationData.confirmed) {
    return { success: false, error: 'Email not confirmed yet' };
  }
  
  return { success: true, data: registrationData.data };
};

/**
 * Checks if an email is already confirmed for downloads
 */
export const isEmailConfirmed = (email) => {
  const emailLookups = JSON.parse(localStorage.getItem('email_lookups') || '{}');
  const token = emailLookups[email];
  
  if (!token) return false;
  
  const data = localStorage.getItem(`email_registration_${token}`);
  if (!data) return false;
  
  const registrationData = JSON.parse(data);
  return registrationData.confirmed || false;
};

/**
 * Cleans up old registration data (older than 7 days)
 */
export const cleanupOldRegistrations = () => {
  const keys = Object.keys(localStorage);
  const cutoff = Date.now() - (7 * 24 * 60 * 60 * 1000); // 7 days
  
  keys.forEach(key => {
    if (key.startsWith('email_registration_')) {
      const data = localStorage.getItem(key);
      if (data) {
        const parsed = JSON.parse(data);
        if (parsed.timestamp < cutoff) {
          localStorage.removeItem(key);
        }
      }
    }
  });
};

// Run cleanup on module load
cleanupOldRegistrations();