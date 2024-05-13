<?php
    if (isset($_POST['name']) && isset($_POST['message'])) {
        $name = $_POST['name'];
		$email = $_POST['email'];
		$phone = $_POST['phone_number'];
		$message = $_POST['message'];
        $subject = 'Neomani web sitesinden gelen e-posta: ' . $name;

        require_once "class.phpmailer.php";
        $mail = new PHPMailer();

        // smtp settings Gmail and Natro
        $mail->isSMTP();
        $mail->Host = "mail.websitesi.com";
        $mail->SMTPAuth = true;
        $mail->Username = "mailaddress@website.com";
        $mail->Password = "123456";
        $mail->From = "mailaddress@website.com";
        $mail->Fromname = $name;
        $mail->SMTPSecure = "ssl";

        // email settings
        $mail->isHTML(true);
        $mail->Charset = 'UTF-8';
        $mail->addAddress = "mailaddress@website.com";
        $mail->Subject = $subject;
        $mail->Body = "<strong>İsim / Soyisim:</strong>" . $name . "<br><br><strong>Telefon Numarası:</strong>" . $phone . "<br><br><strong>E-Posta:</strong>" . $email. "<br><br><strong>Mesajınız:</strong>"  . $message;
        
        if ($mail->send()) {
            $status = "success";
            $response = "Email is sent!";
        }
        else {
            $status = "failed";
            $response = "Something is wrong: <br>"  . $mail->ErrorInfo;
        }
        
        exit(json_encode(array("status" => $status, "response" => $response))); 
    }
?>