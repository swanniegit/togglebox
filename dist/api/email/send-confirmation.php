<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

function logDebug($message) {
    error_log(date('[Y-m-d H:i:s] ') . $message . "\n", 3, __DIR__ . '/email-debug.log');
}

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (!$data || !isset($data['email']) || !isset($data['token'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Missing required data (email, token)']);
    exit;
}

$email = filter_var($data['email'], FILTER_VALIDATE_EMAIL);
if (!$email) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid email address']);
    exit;
}

$token = htmlspecialchars($data['token']);
$protocol = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') ? "https://" : "http://";
$domain = $_SERVER['HTTP_HOST'] ?? 'www.togglebox.co.za';
$confirmUrl = $protocol . $domain . "/confirm/" . $token;

$subject = "🎨 Your ToggleBox Custom CSS Download";
$message = "
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f3f4f6; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #4f46e5, #7c3aed); color: white; padding: 30px; text-align: center; border-radius: 12px 12px 0 0; }
        .content { background: white; padding: 30px; border-radius: 0 0 12px 12px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); }
        .button { display: inline-block; background: #4f46e5; color: white; padding: 16px 32px; text-decoration: none; border-radius: 8px; margin: 20px 0; font-weight: 600; font-size: 16px; }
        .files-list { background: #f9fafb; padding: 20px; border-radius: 8px; border-left: 4px solid #4f46e5; margin: 20px 0; }
        .footer { text-align: center; margin-top: 30px; font-size: 14px; color: #6b7280; padding: 20px; }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <div style='font-size: 24px; font-weight: bold; margin-bottom: 10px;'>🎨 ToggleBox</div>
            <h2 style='margin: 0;'>Your Custom CSS is Ready!</h2>
        </div>
        <div class='content'>
            <p>Hi there! 👋</p>
            <p>Thank you for using <strong>ToggleBox</strong>! Your custom stylesheet has been generated and is ready for download.</p>
            <div class='files-list'>
                <h3 style='margin-top: 0; color: #4f46e5;'>📦 Your download includes:</h3>
                <ul>
                    <li><strong>six-cards-stylesheet.css</strong> - Your custom stylesheet</li>
                    <li><strong>index.html</strong> - Demo page with examples</li>
                    <li><strong>agent-instructions.md</strong> - AI integration guide</li>
                </ul>
            </div>
            <p style='text-align: center; margin: 30px 0;'>
                <a href='$confirmUrl' class='button'>📥 Download Your Files</a>
            </p>
            <p style='color: #6b7280; font-size: 14px;'><strong>Note:</strong> This download link is valid for 7 days.</p>
        </div>
        <div class='footer'>
            <p><strong>ToggleBox</strong> - Real-time CSS Preview Engine</p>
            <p><a href='https://www.togglebox.co.za' style='color: #4f46e5;'>www.togglebox.co.za</a></p>
        </div>
    </div>
</body>
</html>
";

$headers = array(
    'MIME-Version: 1.0',
    'Content-type: text/html; charset=UTF-8',
    'From: ToggleBox <noreply@togglebox.co.za>',
    'Reply-To: support@togglebox.co.za',
    'X-Mailer: PHP/' . phpversion()
);

$success = mail($email, $subject, $message, implode("\r\n", $headers));

if ($success) {
    echo json_encode([
        'success' => true, 
        'message' => 'Confirmation email sent successfully',
        'email' => $email,
        'confirmUrl' => $confirmUrl
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'error' => 'Failed to send email', 
        'details' => 'Please check server email configuration',
        'email' => $email
    ]);
}
?>