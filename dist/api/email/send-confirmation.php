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

// Check if this is feedback or download confirmation
$isFeedback = isset($input['feedback']) && $input['feedback'] === true;

if ($isFeedback) {
    // Handle feedback email
    $name = isset($input['name']) ? strip_tags(trim($input['name'])) : 'Anonymous';
    $userEmail = isset($input['userEmail']) ? filter_var(trim($input['userEmail']), FILTER_VALIDATE_EMAIL) : '';
    $subject = isset($input['subject']) ? strip_tags(trim($input['subject'])) : '';
    $comment = isset($input['comment']) ? strip_tags(trim($input['comment'])) : '';
    
    if (empty($subject) || empty($comment)) {
        echo json_encode(['success' => false, 'error' => 'Subject and comment are required']);
        exit;
    }
    
    $to = 'christo@yellowarcher.co.za';
    $from_email = 'noreply@togglebox.co.za';
    $reply_to = $userEmail ?: $from_email;
    
    $email_subject = 'ToggleBox Feedback: ' . $subject;
    $email_body = "New feedback received from ToggleBox:\n\n";
    $email_body .= "From: $name\n";
    $email_body .= "Email: " . ($userEmail ?: 'Not provided') . "\n";
    $email_body .= "Subject: $subject\n";
    $email_body .= "Submitted: " . date('Y-m-d H:i:s') . "\n";
    $email_body .= "IP Address: " . $_SERVER['REMOTE_ADDR'] . "\n\n";
    $email_body .= "Message:\n";
    $email_body .= str_repeat('-', 40) . "\n";
    $email_body .= $comment . "\n";
    $email_body .= str_repeat('-', 40) . "\n\n";
    $email_body .= "Sent via ToggleBox feedback form\n";
    $email_body .= "https://www.togglebox.co.za/\n";
    
} else {
    // Handle download confirmation email
    $email = isset($input['email']) ? filter_var(trim($input['email']), FILTER_VALIDATE_EMAIL) : '';
    $token = isset($input['token']) ? strip_tags(trim($input['token'])) : '';
    
    if (empty($email) || empty($token)) {
        echo json_encode(['success' => false, 'error' => 'Email and token are required']);
        exit;
    }
    
    $to = $email;
    $from_email = 'noreply@togglebox.co.za';
    $reply_to = $from_email;
    
    $confirmUrl = 'https://www.togglebox.co.za/confirm/' . $token;
    
    $email_subject = 'ToggleBox - Confirm your download';
    $email_body = "Thank you for using ToggleBox!\n\n";
    $email_body .= "Click the link below to confirm your email and download your custom CSS files:\n\n";
    $email_body .= $confirmUrl . "\n\n";
    $email_body .= "Your download includes:\n";
    $email_body .= "• Custom CSS stylesheet\n";
    $email_body .= "• Demo HTML file\n";
    $email_body .= "• Ready-to-use components\n\n";
    $email_body .= "This link will expire in 24 hours.\n\n";
    $email_body .= "If you didn't request this, you can safely ignore this email.\n\n";
    $email_body .= "Thanks for using ToggleBox!\n";
    $email_body .= "https://www.togglebox.co.za/\n";
}

// Email headers
$headers = array();
$headers[] = 'From: ToggleBox <' . $from_email . '>';
$headers[] = 'Reply-To: ' . $reply_to;
$headers[] = 'X-Mailer: PHP/' . phpversion();
$headers[] = 'Content-Type: text/plain; charset=UTF-8';

// Attempt to send email
try {
    // Check if we're on the production domain
    $isProduction = strpos($_SERVER['HTTP_HOST'], 'togglebox.co.za') !== false;
    
    if ($isProduction) {
        // Try to send real email
        $success = mail($to, $email_subject, $email_body, implode("\r\n", $headers));
        
        if ($success) {
            echo json_encode([
                'success' => true,
                'message' => $isFeedback ? 'Feedback sent successfully' : 'Confirmation email sent successfully'
            ]);
        } else {
            // Log error for debugging
            error_log("Failed to send email to $to: " . error_get_last()['message']);
            echo json_encode([
                'success' => false,
                'error' => 'Failed to send email. Please try again later.'
            ]);
        }
    } else {
        // Development mode - simulate email sending
        error_log("DEV MODE - Email that would be sent to $to:");
        error_log("Subject: $email_subject");
        error_log("Body: $email_body");
        
        echo json_encode([
            'success' => true,
            'message' => $isFeedback ? 'Feedback sent (dev mode)' : 'Confirmation email sent (dev mode)',
            'dev_mode' => true
        ]);
    }
    
} catch (Exception $e) {
    error_log("Email exception: " . $e->getMessage());
    echo json_encode([
        'success' => false,
        'error' => 'Server error. Please try again later.'
    ]);
}
?>