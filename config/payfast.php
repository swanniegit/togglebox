<?php
/**
 * PayFast Configuration - KEEP THIS FILE SECURE!
 * Move this outside of public_html/www directory for maximum security
 * Current location: /private/config/payfast.php (or similar secure location)
 */

return [
    'merchant_id' => '31578553',
    'merchant_key' => 'cs71udro03dzm',
    'passphrase' => '', // Add if you set one in PayFast dashboard
    'sandbox' => false, // Set to true for testing
    'return_url' => 'https://www.togglebox.co.za/payment-success',
    'cancel_url' => 'https://www.togglebox.co.za/payment-cancelled',
    'notify_url' => 'https://www.togglebox.co.za/api/payfast/itn.php',
    
    // Additional security settings
    'allowed_ips' => [
        '41.74.179.194', // PayFast IP range - verify current IPs
        '41.74.179.195',
        '197.97.145.144',
        '197.97.145.145'
    ],
    
    // Rate limiting
    'max_requests_per_minute' => 10
];
?>