<?php
// Simple test to see if server can handle PHP
echo "<h2>Server Test</h2>";
echo "PHP is working!<br>";
echo "Server: " . $_SERVER['HTTP_HOST'] . "<br>";
echo "Time: " . date('Y-m-d H:i:s') . "<br>";

// Test if we can simulate the confirmation
echo "<hr>";
echo "<h3>Confirmation Test</h3>";

$token = isset($_GET['token']) ? $_GET['token'] : 'no-token';
echo "Token received: " . htmlspecialchars($token) . "<br>";

if ($token !== 'no-token') {
    echo "<p style='color: green;'>✅ Token processing would work here</p>";
    echo "<p>In the real app, this would trigger downloads...</p>";
}

echo "<hr>";
echo "<p><a href='?token=svpkjgaxxmf6wue6n'>Test with your token</a></p>";
?>