<?php
if($_SERVER["REQUEST_METHOD"] == "POST") {
    $faqs = $_POST['FAQs'];
    $to = "samira.akram@yahoo.com";
    $subject = "New FAQ Submission";
    $body = "You have received a new FAQ:\n\n" . $faqs;
    $headers = "From: samira.akram@yahoo.com";

    if(mail($to, $subject, $body, $headers)) {
        echo "FAQ sent successfully!";
    } else {
        echo "Failed to send FAQ.";
    }
}
?>
