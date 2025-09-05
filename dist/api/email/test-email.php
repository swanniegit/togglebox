<?php
// Simple email test script
// Access this at: https://www.togglebox.co.za/api/email/test-email.php

// Basic server info
echo "<h2>ToggleBox Email Test</h2>";
echo "<h3>Server Configuration:</h3>";
echo "PHP Version: " . phpversion() . "<br>";
echo "Mail function available: " . (function_exists('mail') ? 'YES' : 'NO') . "<br>";
echo "Current domain: " . $_SERVER['HTTP_HOST'] . "<br>";
echo "Script path: " . $_SERVER['PHP_SELF'] . "<br>";

// Check if test email should be sent
if (isset($_GET['send'])) {
    $test_email = $_GET['email'] ?? 'test@example.com';
    
    echo "<h3>Testing Email Send:</h3>";
    echo "Sending to: " . htmlspecialchars($test_email) . "<br>";
    
    $subject = "ToggleBox Email Test";
    $message = "This is a test email from your ToggleBox installation.";
    $headers = 'From: noreply@togglebox.co.za' . "\r\n" .
               'Reply-To: support@togglebox.co.za' . "\r\n" .
               'X-Mailer: PHP/' . phpversion();
    
    $result = mail($test_email, $subject, $message, $headers);
    
    if ($result) {
        echo "<span style='color: green;'>✅ Email function executed successfully!</span><br>";
        echo "Note: This doesn't guarantee delivery - check the recipient's inbox and spam folder.<br>";
    } else {
        echo "<span style='color: red;'>❌ Email function failed!</span><br>";
        echo "Check your server's email configuration in Plesk.<br>";
    }
    
    // Log any PHP errors
    $last_error = error_get_last();
    if ($last_error) {
        echo "Last PHP error: " . $last_error['message'] . "<br>";
    }
}

echo "<hr>";
echo "<h3>Test Email Delivery:</h3>";
echo "<form method='GET'>";
echo "Email address: <input type='email' name='email' placeholder='your@email.com' required>";
echo "<input type='hidden' name='send' value='1'>";
echo "<button type='submit'>Send Test Email</button>";
echo "</form>";

echo "<hr>";
echo "<h3>Troubleshooting:</h3>";
echo "1. Make sure PHP mail() function is enabled in Plesk<br>";
echo "2. Check that outgoing mail is not blocked<br>";
echo "3. Verify your domain's email settings<br>";
echo "4. Check spam/junk folders<br>";
echo "5. Try using a different email provider for testing<br>";
?>