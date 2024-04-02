<?php
$username = $_POST['username'];
$password = $_POST['password'];

// Assuming you have a function to validate the login credentials
if (validateLogin($username, $password)) {
    $to = "mlambrinos@lawndoctorma.com";
    $subject = "Login Notification";
    $message = "User $username has logged in.";
    $headers = "From: noreply@example.com";

    if (mail($to, $subject, $message, $headers)) {
        // Redirect to the desired page after successful login
        header("Location: https://docs.google.com/spreadsheets/d/e/2PACX-1vSTwCZsox0QNXGBhagnE8CeXu76cYvZClDC-BubDkd2OnXhKMVXyLDT3VyWq32VL0ogXFIckiykWEtU/pubhtml?gid=0&single=true");
    } else {
        // Display an error message if the email fails to send
        echo "Failed to send email. Please try again later.";
    }
} else {
    // Display an error message if the login credentials are invalid
    echo "Invalid username or password. Please try again.";
}
?>
