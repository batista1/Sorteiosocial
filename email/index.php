
<?php
if (isset($_GET['act'])   && isset($_GET['email']) && isset($_GET['nome'])) {
			
require 'PHPMailerAutoload.php';

$mail = new PHPMailer;

if ($_GET['act'] == 'register') {

$mail->Subject = 'Cadastro de novo sorteio';
$mail->Body = '
<meta charset="UTF-8">
<style>
    /* Reset styles */
    
    body {
        margin: 0;
        padding: 0;
        min-width: 100%;
        width: 100% !important;
        height: 100% !important;
    }
    
    body,
    table,
    td,
    div,
    p,
    a {
        -webkit-font-smoothing: antialiased;
        text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        line-height: 100%;
    }
    
    table,
    td {
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
        border-collapse: collapse !important;
        border-spacing: 0;
    }
    
    img {
        border: 0;
        line-height: 100%;
        outline: none;
        text-decoration: none;
        -ms-interpolation-mode: bicubic;
    }
    
    #outlook a {
        padding: 0;
    }
    
    .ReadMsgBody {
        width: 100%;
    }
    
    .ExternalClass {
        width: 100%;
    }
    
    .ExternalClass,
    .ExternalClass p,
    .ExternalClass span,
    .ExternalClass font,
    .ExternalClass td,
    .ExternalClass div {
        line-height: 100%;
    }
    /* Extra floater space for advanced mail clients only */
    
    @media all and (max-width: 600px) {
        .floater {
            width: 320px;
        }
    }
    /* Set color for auto links (addresses, dates, etc.) */
    
    a,
    a:hover {
        color: #127DB3;
    }
    
    .footer a,
    .footer a:hover {
        color: #999999;
    }
</style>

<!-- MESSAGE SUBJECT -->
<title>Mercado Fácil</title>

</head>

<!-- BODY -->
<!-- Set message background color (twice) and text color (twice) -->

<body topmargin="0" rightmargin="0" bottommargin="0" leftmargin="0" marginwidth="0" marginheight="0" width="100%" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; width: 100%; height: 100%; -webkit-font-smoothing: antialiased; text-size-adjust: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; line-height: 100%;
    background-color: #FFFFFF;
    color: #000000;" bgcolor="#FFFFFF" text="#000000">

    <!-- SECTION / BACKGROUND -->
    <!-- Set section background color -->
    <table width="100%" align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; width: 100%;" class="background">
        <tr>
            <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0;" bgcolor="#FFF">

                <!-- WRAPPER -->
                <!-- Set wrapper width (twice) -->
                <table border="0" cellpadding="0" cellspacing="0" align="center" width="600" style="border-collapse: collapse; border-spacing: 0; padding: 0; width: inherit;
    max-width: 600px;" class="wrapper">

                    <tr>
                        <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%;
            padding-top: 20px;">


                            <!-- LOGO -->
                            <!-- Image text color should be opposite to background color. Set your url, image src, alt and title. Alt text should fit the image size. Real image size should be x2. URL format: http://domain.com/?utm_source={{Campaign-Source}}&utm_medium=email&utm_content=logo&utm_campaign={{Campaign-Name}} -->
                          <a href="http://mercadofacil.site"> <img  border="0" vspace="0" hspace="0" src="http://sorteiosocial.com/images/header/logo.png"  height="90" alt="Logo vPad" title="Logo vPad" style="
                color: #000000;
                font-size: 10px; margin: 0; padding: 0; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; border: none; display: block;" />
</a>
                        </td>
                    </tr>

                    <!-- HEADER -->
                    <!-- Set text color and font family ("sans-serif" or "Georgia, serif") -->
                    <tr>
                        <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%; font-size: 24px; font-weight: bold; line-height: 130%;
            padding-top: 20px;
            color: black;
            font-family: sans-serif;" class="header">
                            <a href="https://instagram.com/'.$_GET['nome'].'" target="_blank"> @'.$_GET['nome'].'</a> cadastrou um novo sorteio.
                        </td>
                    </tr>

                    <!-- SUBHEADER -->
                    <!-- Set text color and font family ("sans-serif" or "Georgia, serif") -->
                    <tr>
                        <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-bottom: 3px; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%; font-size: 18px; font-weight: 300; line-height: 150%;
            padding-top: 5px;
            color: black;
            font-family: sans-serif;" class="subheader">
                           Você deve acessar o painel para aceitar ou bloquear o sorteio.
                        </td>
                    </tr>

                    <!-- HERO IMAGE -->
                    <!-- Image text color should be opposite to background color. Set your url, image src, alt and title. Alt text should fit the image size. Real image size should be x2 (wrapper x2). Do not set height for flexible images (including "auto"). URL format: http://domain.com/?utm_source={{Campaign-Source}}&utm_medium=email&utm_content={{Ìmage-Name}}&utm_campaign={{Campaign-Name}} -->
                    

                    <!-- PARAGRAPH -->
                    <!-- Set text color and font family ("sans-serif" or "Georgia, serif"). Duplicate all text styles in links, including line-height -->
                    <tr>
                        <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%; font-size: 17px; font-weight: 400; line-height: 160%;
            padding-top: 25px; 
            color: black;
            font-family: sans-serif;" class="paragraph">
                            
                        </td>
                    </tr>

                    <!-- BUTTON -->
                    <!-- Set button background color at TD, link/text color at A and TD, font family ("sans-serif" or "Georgia, serif") at TD. For verification codes add "letter-spacing: 5px;". Link format: http://domain.com/?utm_source={{Campaign-Source}}&utm_medium=email&utm_content={{Button-Name}}&utm_campaign={{Campaign-Name}} -->
                    <tr>
                        <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%;
            padding-top: 25px;
            padding-bottom: 35px;" class="button">
                            <a href="https://github.com/konsav/email-templates/" target="_blank">
                                <table border="0" cellpadding="0" cellspacing="0" align="center" style="max-width: 240px; min-width: 120px; border-collapse: collapse; border-spacing: 0; padding: 0;">
                                    <tr>
                                        <td align="center" valign="middle" style="padding: 12px 24px; margin: 0; border-collapse: collapse; border-spacing: 0; border-radius: 4px; -webkit-border-radius: 4px; -moz-border-radius: 4px; -khtml-border-radius: 4px;" bgcolor="#228dcd"><a target="_blank" style="
                    color: #FFFFFF; font-family: sans-serif; font-size: 17px; font-weight: 400; line-height: 120%;" href="http://sorteiosocial.com/admin">
                       Acessar sistema
                    </a>
                                        </td>
                                    </tr>
                                </table>
                            </a>
                        </td>
                    </tr>

                    <!-- End of WRAPPER -->
                </table>

                <!-- SECTION / BACKGROUND -->
                <!-- Set section background color -->
            </td>
        </tr>

        <tr>
            <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0;" bgcolor="#F0F0F0">

                <!-- WRAPPER -->
                <!-- Set wrapper width (twice) -->
                <table border="0" cellpadding="0" cellspacing="0" align="center" width="600" style="border-collapse: collapse; border-spacing: 0; padding: 0; width: inherit;
    max-width: 600px;" class="wrapper">

                    <!-- SOCIAL NETWORKS -->
                    <!-- Image text color should be opposite to background color. Set your url, image src, alt and title. Alt text should fit the image size. Real image size should be x2 -->
                    <tr>
                        <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%;
            padding-top: 25px;" class="social-icons">
                            <table width="256" border="0" cellpadding="0" cellspacing="0" align="center" style="border-collapse: collapse; border-spacing: 0; padding: 0;">
                                <tr>

                                   
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- FOOTER -->
                    <!-- Set text color and font family ("sans-serif" or "Georgia, serif"). Duplicate all text styles in links, including line-height -->
                    <tr>
                        <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%; font-size: 13px; font-weight: 400; line-height: 150%;
            padding-top: 20px;
            padding-bottom: 20px;
            color: #999999;
            font-family: sans-serif;" class="footer">
                            Equipe <a href="http://vpad.com.br" target="_blank"> Sorteio Social </a>

                            <!-- ANALYTICS -->
                            <img width="1" height="1" border="0" vspace="0" hspace="0" style="margin: 0; padding: 0; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; border: none; display: block;" src="https://raw.githubusercontent.com/konsav/email-templates/master/images/tracker.png" />

                        </td>
                    </tr>

                    <!-- End of WRAPPER -->
                </table>

                <!-- End of SECTION / BACKGROUND -->
            </td>
        </tr>
    </table>

</body>
';
	}




if ($_GET['act'] == 'recover') {

$mail->Subject = 'Recuperação de senha';
    $mail->Body = '
<meta charset="UTF-8">
<style>
    /* Reset styles */
    
    body {
        margin: 0;
        padding: 0;
        min-width: 100%;
        width: 100% !important;
        height: 100% !important;
    }
    
    body,
    table,
    td,
    div,
    p,
    a {
        -webkit-font-smoothing: antialiased;
        text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        line-height: 100%;
    }
    
    table,
    td {
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
        border-collapse: collapse !important;
        border-spacing: 0;
    }
    
    img {
        border: 0;
        line-height: 100%;
        outline: none;
        text-decoration: none;
        -ms-interpolation-mode: bicubic;
    }
    
    #outlook a {
        padding: 0;
    }
    
    .ReadMsgBody {
        width: 100%;
    }
    
    .ExternalClass {
        width: 100%;
    }
    
    .ExternalClass,
    .ExternalClass p,
    .ExternalClass span,
    .ExternalClass font,
    .ExternalClass td,
    .ExternalClass div {
        line-height: 100%;
    }
    /* Extra floater space for advanced mail clients only */
    
    @media all and (max-width: 600px) {
        .floater {
            width: 320px;
        }
    }
    /* Set color for auto links (addresses, dates, etc.) */
    
    a,
    a:hover {
        color: #127DB3;
    }
    
    .footer a,
    .footer a:hover {
        color: #999999;
    }
</style>

<!-- MESSAGE SUBJECT -->
<title>Mercado Fácil</title>

</head>

<!-- BODY -->
<!-- Set message background color (twice) and text color (twice) -->

<body topmargin="0" rightmargin="0" bottommargin="0" leftmargin="0" marginwidth="0" marginheight="0" width="100%" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; width: 100%; height: 100%; -webkit-font-smoothing: antialiased; text-size-adjust: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; line-height: 100%;
    background-color: #FFFFFF;
    color: #000000;" bgcolor="#FFFFFF" text="#000000">

    <!-- SECTION / BACKGROUND -->
    <!-- Set section background color -->
    <table width="100%" align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; width: 100%;" class="background">
        <tr>
            <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0;" bgcolor="#FFF">

                <!-- WRAPPER -->
                <!-- Set wrapper width (twice) -->
                <table border="0" cellpadding="0" cellspacing="0" align="center" width="600" style="border-collapse: collapse; border-spacing: 0; padding: 0; width: inherit;
    max-width: 600px;" class="wrapper">

                    <tr>
                        <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%;
            padding-top: 20px;">


                            <!-- LOGO -->
                            <!-- Image text color should be opposite to background color. Set your url, image src, alt and title. Alt text should fit the image size. Real image size should be x2. URL format: http://domain.com/?utm_source={{Campaign-Source}}&utm_medium=email&utm_content=logo&utm_campaign={{Campaign-Name}} -->
                           <a href="http://mercadofacil.site"> <img  border="0" vspace="0" hspace="0" src="http://vpad.com.br/src/img/new_logo_vpad.png" width="300" height="90" alt="Logo vPad" title="Logo vPad" style="
                color: #000000;
                font-size: 10px; margin: 0; padding: 0; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; border: none; display: block;" />
</a>
                        </td>
                    </tr>

                    <!-- HEADER -->
                    <!-- Set text color and font family ("sans-serif" or "Georgia, serif") -->
                    <tr>
                        <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%; font-size: 24px; font-weight: bold; line-height: 130%;
            padding-top: 20px;
            color: black;
            font-family: sans-serif;" class="header">
                            Fique atento ao procedimento de recuperação.
                        </td>
                    </tr>

                    <!-- SUBHEADER -->
                    <!-- Set text color and font family ("sans-serif" or "Georgia, serif") -->
                    <tr>
                        <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-bottom: 3px; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%; font-size: 18px; font-weight: 300; line-height: 150%;
            padding-top: 5px;
            color: black;
            font-family: sans-serif;" class="subheader">
                            Insira o seu token abaixo no Mercado Fácil para poder trocar sua senha.
                        </td>
                    </tr>
                    <!-- SUBHEADER -->
                    <!-- Set text color and font family ("sans-serif" or "Georgia, serif") -->
                    <tr>
                        <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-bottom: 3px; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%; font-size: 18px; font-weight: 300; line-height: 150%;
            padding-top: 5px;
            color: black;
            font-family: sans-serif;" class="subheader">
                            Token: '.$_GET['nome'].'

<br>
<br>
<br>
<br>
<br>
                        </td>
                    </tr>
                    <!-- HERO IMAGE -->
                    <!-- Image text color should be opposite to background color. Set your url, image src, alt and title. Alt text should fit the image size. Real image size should be x2 (wrapper x2). Do not set height for flexible images (including "auto"). URL format: http://domain.com/?utm_source={{Campaign-Source}}&utm_medium=email&utm_content={{Ìmage-Name}}&utm_campaign={{Campaign-Name}} -->
                    

                  

                    <!-- End of WRAPPER -->
                </table>

                <!-- SECTION / BACKGROUND -->
                <!-- Set section background color -->
            </td>
        </tr>

        <tr>
            <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0;" bgcolor="#F0F0F0">

                <!-- WRAPPER -->
                <!-- Set wrapper width (twice) -->
                <table border="0" cellpadding="0" cellspacing="0" align="center" width="600" style="border-collapse: collapse; border-spacing: 0; padding: 0; width: inherit;
    max-width: 600px;" class="wrapper">

                    <!-- SOCIAL NETWORKS -->
                    <!-- Image text color should be opposite to background color. Set your url, image src, alt and title. Alt text should fit the image size. Real image size should be x2 -->
                    <tr>
                        <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%;
            padding-top: 25px;" class="social-icons">
                            <table width="256" border="0" cellpadding="0" cellspacing="0" align="center" style="border-collapse: collapse; border-spacing: 0; padding: 0;">
                                <tr>

                                    <!-- ICON 1 -->
                                    <td align="center" valign="middle" style="margin: 0; padding: 0; padding-left: 10px; padding-right: 10px; border-collapse: collapse; border-spacing: 0;">
                                        <a target="_blank" href="https://www.facebook.com/mercadofacilclassificados" style="text-decoration: none;"><img border="0" vspace="0" hspace="0" style="padding: 0; margin: 0; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; border: none; display: inline-block;
                    color: #000000;" alt="F" title="Facebook" width="44" height="44" src="https://raw.githubusercontent.com/konsav/email-templates/master/images/social-icons/facebook.png"></a>
                                    </td>

                                    <!-- ICON 2 -->
                                    <td align="center" valign="middle" style="margin: 0; padding: 0; padding-left: 10px; padding-right: 10px; border-collapse: collapse; border-spacing: 0;">
                                        <a target="_blank" href="https://twitter.com/mercadofacilbr" style="text-decoration: none;"><img border="0" vspace="0" hspace="0" style="padding: 0; margin: 0; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; border: none; display: inline-block;
                    color: #000000;" alt="T" title="Twitter" width="44" height="44" src="https://raw.githubusercontent.com/konsav/email-templates/master/images/social-icons/twitter.png"></a>
                                    </td>

                                    <!-- ICON 3 -->
                                    <td align="center" valign="middle" style="margin: 0; padding: 0; padding-left: 10px; padding-right: 10px; border-collapse: collapse; border-spacing: 0;">
                                        <a target="_blank" href="https://plus.google.com/u/0/117985416348525719103" style="text-decoration: none;"><img border="0" vspace="0" hspace="0" style="padding: 0; margin: 0; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; border: none; display: inline-block;
                    color: #000000;" alt="G" title="Google Plus" width="44" height="44" src="https://raw.githubusercontent.com/konsav/email-templates/master/images/social-icons/googleplus.png"></a>
                                    </td>

                                    <!-- ICON 4 -->
                                    <td align="center" valign="middle" style="margin: 0; padding: 0; padding-left: 10px; padding-right: 10px; border-collapse: collapse; border-spacing: 0;">
                                        <a target="_blank" href="https://www.instagram.com/mercadofacilbr/" style="text-decoration: none;"><img border="0" vspace="0" hspace="0" style="padding: 0; margin: 0; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; border: none; display: inline-block;
                    color: #000000;" alt="I" title="Instagram" width="44" height="44" src="https://raw.githubusercontent.com/konsav/email-templates/master/images/social-icons/instagram.png"></a>
                                    </td>

                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- FOOTER -->
                    <!-- Set text color and font family ("sans-serif" or "Georgia, serif"). Duplicate all text styles in links, including line-height -->
                    <tr>
                        <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%; font-size: 13px; font-weight: 400; line-height: 150%;
            padding-top: 20px;
            padding-bottom: 20px;
            color: #999999;
            font-family: sans-serif;" class="footer">
                            Equipe <a href="http://mercadofacil.site" target="_blank"> Mercado Fácil - Classificados online </a>

                            <!-- ANALYTICS -->
                            <!-- http://www.google-analytics.com/collect?v=1&tid={{UA-Tracking-ID}}&cid={{Client-ID}}&t=event&ec=email&ea=open&cs={{Campaign-Source}}&cm=email&cn={{Campaign-Name}} -->
                            <img width="1" height="1" border="0" vspace="0" hspace="0" style="margin: 0; padding: 0; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; border: none; display: block;" src="https://raw.githubusercontent.com/konsav/email-templates/master/images/tracker.png" />

                        </td>
                    </tr>

                    <!-- End of WRAPPER -->
                </table>

                <!-- End of SECTION / BACKGROUND -->
            </td>
        </tr>
    </table>

</body>';

}






$mail->CharSet = 'UTF-8';
$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mailgun.org';                     // Specify main and backup SMTP servers
$mail->SMTPAuth = true;       
$mail->IsHTML(true);                            // Enable SMTP authentication
$mail->Username = 'postmaster@sorteiosocial.com';   // SMTP username
$mail->Password = '61567d28819360d1b55929bb114d7079';                           // SMTP password
$mail->SMTPSecure = 'tls';      
$mail->Port = 587;                      // Enable encryption, only 'tls' is accepted

$mail->From = 'contato@sorteiosocial.com';
$mail->FromName = 'Contato Sorteio Social';
$mail->addAddress($_GET['email']);                 // Add a recipient

$mail->WordWrap = 50;                                 // Set word wrap to 50 characters


if(!$mail->send()) {
    echo $mail->ErrorInfo;
} else {
    echo 'Message has been sent';
}

}else{
	echo "Vc sabe que tem alguma coisa errada aqui!";
}