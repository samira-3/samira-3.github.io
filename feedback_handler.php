<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the FAQ input from the form
    $faq = trim($_POST["FAQs"]);

    // Set your email address (Yahoo)
    $to = "samira.akram@yahoo.com";

    // Set the email subject and message
    $subject = "New FAQ Submission from Website";
    $message = "You received a new FAQ:nn" . $faq;

    // Set email headers
    $headers = "From: no-reply@yourdomain.comrn";
    $headers .= "Reply-To: no-reply@yourdomain.comrn";
    $headers .= "X-Mailer: PHP/" . phpversion();

    // Send the email
    if (mail($to, $subject, $message, $headers)) {
        echo "<h2 style='text-align:center;'>✅ Thank you! Your message has been sent.</h2>";
    } else {
        echo "<h2 style='text-align:center;color:red;'>❌ Something went wrong. Please try again.</h2>";
    }
} else {
    echo "Invalid request.";
}
?>