<?php
if($_SERVER["REQUEST_METHOD"] == "POST") {
    $feedback = $_POST['feedback'];
    $to = "samira.akram@yahoo.com"; // Replace with your email address
    $subject = "New Feedback Submission";
    $body = "You have received a new feedback:\n\n" . $feedback;
    $headers = "From: samira.akram@yahoo.com"; // Replace with a valid address

    if(mail($to, $subject, $body, $headers)) {
        echo "Feedback sent successfully!";
    } else {
        echo "Failed to send feedback.";
    }
}
?>