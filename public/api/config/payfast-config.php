<?php
// PayFast Configuration - Keep this file secure and outside public_html if possible
// For security, consider moving this to /private/ or outside web root

return [
    'merchant_id' => '31578553',
    'merchant_key' => 'cs71udro03dzm',
    'passphrase' => '', // Optional - add if you set one in PayFast
    'sandbox' => false, // Set to true for testing
    'return_url' => 'https://www.togglebox.co.za/payment-success',
    'cancel_url' => 'https://www.togglebox.co.za/payment-cancelled',
    'notify_url' => 'https://www.togglebox.co.za/api/payfast/itn.php'
];
?>