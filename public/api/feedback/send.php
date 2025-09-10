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
    echo json_encode(['success' => false, 'error' => 'Method not allowed']);
    exit;
}

// Get POST data
$input = json_decode(file_get_contents('php://input'), true);

if (!$input) {
    echo json_encode(['success' => false, 'error' => 'Invalid JSON data']);
    exit;
}

// Validate required fields
if (empty($input['subject']) || empty($input['comment'])) {
    echo json_encode(['success' => false, 'error' => 'Subject and comment are required']);
    exit;
}

// Sanitize input data
$name = !empty($input['name']) ? strip_tags(trim($input['name'])) : 'Anonymous';
$email = !empty($input['email']) ? filter_var(trim($input['email']), FILTER_VALIDATE_EMAIL) : '';
$subject = strip_tags(trim($input['subject']));
$comment = strip_tags(trim($input['comment']));

// Email configuration
$to = 'christo@yellowarcher.co.za';
$from_email = 'noreply@togglebox.co.za';
$reply_to = $email ?: $from_email;

// Build email content
$email_subject = 'ToggleBox Feedback: ' . $subject;
$email_body = "New feedback received from ToggleBox:\n\n";
$email_body .= "From: $name\n";
$email_body .= "Email: " . ($email ?: 'Not provided') . "\n";
$email_body .= "Subject: $subject\n";
$email_body .= "Submitted: " . date('Y-m-d H:i:s') . "\n";
$email_body .= "IP Address: " . $_SERVER['REMOTE_ADDR'] . "\n\n";
$email_body .= "Message:\n";
$email_body .= str_repeat('-', 40) . "\n";
$email_body .= $comment . "\n";
$email_body .= str_repeat('-', 40) . "\n\n";
$email_body .= "Sent via ToggleBox feedback form\n";
$email_body .= "https://www.togglebox.co.za/\n";

// Email headers
$headers = array();
$headers[] = 'From: ToggleBox Feedback <' . $from_email . '>';
$headers[] = 'Reply-To: ' . $reply_to;
$headers[] = 'X-Mailer: PHP/' . phpversion();
$headers[] = 'Content-Type: text/plain; charset=UTF-8';

// Attempt to send email
try {
    $success = mail($to, $email_subject, $email_body, implode("\r\n", $headers));
    
    if ($success) {
        echo json_encode([
            'success' => true,
            'message' => 'Feedback sent successfully'
        ]);
    } else {
        // Log error for debugging
        error_log("Failed to send feedback email to $to");
        echo json_encode([
            'success' => false,
            'error' => 'Failed to send email. Please try again later.'
        ]);
    }
} catch (Exception $e) {
    error_log("Feedback email exception: " . $e->getMessage());
    echo json_encode([
        'success' => false,
        'error' => 'Server error. Please try again later.'
    ]);
}
?>