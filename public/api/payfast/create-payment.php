<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// Get POST data
$input = json_decode(file_get_contents('php://input'), true);

// Validate required fields
$required = ['amount', 'itemName', 'customerEmail', 'returnUrl'];
foreach ($required as $field) {
    if (empty($input[$field])) {
        http_response_code(400);
        echo json_encode(['error' => "Missing required field: $field"]);
        exit;
    }
}

// Load PayFast configuration
$config = include '../config/payfast-config.php';
$merchantId = $config['merchant_id'];
$merchantKey = $config['merchant_key'];
$passPhrase = $config['passphrase'];

// Payment data
$data = [
    'merchant_id' => $merchantId,
    'merchant_key' => $merchantKey,
    'amount' => number_format((float)$input['amount'], 2, '.', ''),
    'item_name' => substr($input['itemName'], 0, 100),
    'item_description' => $input['itemDescription'] ?? 'Payment via ToggleBox',
    'return_url' => $input['returnUrl'],
    'cancel_url' => $input['cancelUrl'] ?? $input['returnUrl'] . '?cancelled=1',
    'notify_url' => $config['notify_url'],
    'email_address' => $input['customerEmail'],
    'm_payment_id' => uniqid('tb_'), // Unique payment ID
];

// Generate signature if passphrase is set
if (!empty($passPhrase)) {
    $signature = '';
    foreach ($data as $key => $value) {
        $signature .= $key . '=' . urlencode($value) . '&';
    }
    $signature = rtrim($signature, '&');
    $signature .= '&passphrase=' . urlencode($passPhrase);
    $data['signature'] = md5($signature);
}

// Return payment form data for auto-submission
echo json_encode([
    'success' => true,
    'paymentData' => $data,
    'paymentUrl' => 'https://www.payfast.co.za/eng/process',
    'message' => 'Payment data generated successfully'
]);
?>