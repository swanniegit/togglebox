import React, { useState } from 'react';

export default function EmailRegistrationModal({ isOpen, onClose, onSubmit, title = "Get Your Export" }) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      await onSubmit(email);
      setIsSuccess(true);
      // Auto-close after 3 seconds on success
      setTimeout(() => {
        onClose();
        resetModal();
      }, 3000);
    } catch (err) {
      setError(err.message || 'Failed to send confirmation email. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetModal = () => {
    setEmail('');
    setIsSuccess(false);
    setError('');
    setIsSubmitting(false);
  };

  const handleClose = () => {
    onClose();
    resetModal();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
        {!isSuccess ? (
          <>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
                <button
                  onClick={handleClose}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  data-testid="close-modal"
                >
                  ✕
                </button>
              </div>

              <p className="text-gray-600 mb-6">
                Enter your email address to receive your custom CSS and demo files. 
                We'll send you a download link right away!
              </p>

              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    data-testid="email-input"
                    disabled={isSubmitting}
                    required
                  />
                </div>

                {error && (
                  <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md">
                    <p className="text-red-700 text-sm">{error}</p>
                  </div>
                )}

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={handleClose}
                    className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
                    disabled={isSubmitting}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    data-testid="submit-email"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Download Link'}
                  </button>
                </div>
              </form>
            </div>
          </>
        ) : (
          <div className="p-6 text-center">
            <div className="mb-4">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">✅</span>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Check Your Email!</h3>
            <p className="text-gray-600 mb-4">
              We've sent your download link to <strong>{email}</strong>
            </p>
            <p className="text-sm text-gray-500">
              This window will close automatically...
            </p>
          </div>
        )}
      </div>
    </div>
  );
}