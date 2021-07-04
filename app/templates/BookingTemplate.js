const BookingTemplate = (data) => `
<!doctype html>
<html
    style='box-sizing:border-box;font-family:sans-serif;line-height:1.15;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:transparent;'>

<head style='box-sizing:border-box;'>
    <meta name='viewport' content='width=device-width' style='box-sizing:border-box;' />
    <meta http-equiv='Content-Type' content='text/html; charset=UTF-8' style='box-sizing:border-box;' />
</head>

<body class=''
    style='box-sizing:border-box;-webkit-font-smoothing:antialiased;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;'>
    <table role='presentation' border='0' cellpadding='0' cellspacing='0' class='body'
        style='box-sizing:border-box;mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;background-color:#f6f6f6;width:100%;'>
        <tr style='box-sizing:border-box;'>
            <td style='box-sizing:border-box;font-family:sans-serif;font-size:14px;vertical-align:top;'>&nbsp;</td>
            <td class='container'
                style='box-sizing:border-box;font-family:sans-serif;font-size:14px;vertical-align:top;display:block;margin-top:0 !important;margin-bottom:0 !important;max-width:580px;padding-top:10px;padding-bottom:10px;width:100%;padding-right:15px;padding-left:15px;margin-right:auto !important;margin-left:auto !important; '>
                <div class='content'
                    style='box-sizing:border-box;display:block;margin-top:0;margin-bottom:0;margin-right:auto;margin-left:auto;max-width:580px;padding-top:10px;padding-bottom:10px;padding-right:10px;padding-left:10px;'>

                    <!-- START CENTERED WHITE CONTAINER -->
                    <!--<span class='preheader' style='box-sizing:border-box;color:transparent;display:none;height:0;max-height:0;max-width:0;opacity:0;overflow:hidden;mso-hide:all;visibility:hidden;width:0;' >" .$mail->Subject ."</span>-->
                    <table role='presentation' class='main'
                        style='box-sizing:border-box;mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;background-color:#ffffff;background-image:none;background-repeat:repeat;background-position:top left;background-attachment:scroll;border-radius:3px;width:100%;'>

                        <!-- START MAIN CONTENT AREA -->
                        <tr style='box-sizing:border-box;'>
                            <td class='wrapper'
                                style='font-family:sans-serif;font-size:14px;vertical-align:top;box-sizing:border-box;padding-top:40px;padding-bottom:40px;padding-right:50px;padding-left:50px;'>
                                <table role='presentation' border='0' cellpadding='0' cellspacing='0'
                                    style='box-sizing:border-box;mso-table-lspace:0pt;mso-table-rspace:0pt;width:100%;border-collapse:collapse;'>
                                    <tr style='box-sizing:border-box;'>
                                        <td
                                            style='box-sizing:border-box;font-family:sans-serif;font-size:14px;vertical-align:top;'>
                                            <div class='logo'
                                                style='display: flex; justify-content: center;align-items: center; box-sizing:border-box;margin-top:15px;margin-bottom:15px;margin-right:0;margin-left:0;'>
                                                <img src='https://i.ibb.co/vcpx9V1/logo.png' alt='Logo Consultify'
                                                    style='box-sizing:border-box;-ms-interpolation-mode:bicubic;width:40px; margin-right: 5px;'>
                                                <span style="font-weight: bold; font-size: 20px;">Consultify</span>
                                            </div>

                                            <h1
                                                style='box-sizing:border-box;margin-right:0;margin-left:0;text-align:center;text-transform:capitalize;margin-top:0;margin-bottom:.5rem;font-family:inherit;font-weight:700;line-height:1.2;color:inherit;font-size:2.5rem;'>
                                                Consulta Agendada</h1><br style='box-sizing:border-box;'>
                                            <table class='table'
                                                style='box-sizing:border-box;mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;width:100%;margin-bottom:1rem;background-color:transparent;'>
                                                <tbody style='box-sizing:border-box;'>
                                                    <tr style='box-sizing:border-box;'>
                                                        <td
                                                            style='box-sizing:border-box;font-family:sans-serif;font-size:14px;padding-top:.75rem;padding-bottom:.75rem;padding-right:.75rem;padding-left:.75rem;vertical-align:top;border-top-width:1px;border-top-style:solid;border-top-color:#dee2e6;'>
                                                            <p> Hola <strong>${data.user_name}</strong> Tu consulta ha sido agendada exitosamente.</p>
                                                            </p>
                                                            <p>Tu <strong>experto:</strong> ${data.consultant_name}, te estará esperando el:</p>
                                                            <p><strong>Fecha y hora:</strong> ${data.booking_startat}</p>
                                                            <p>Ingresa en el siguiente enlace para más detalles</p>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <a href="https://www.consultify.online/profile/history" target='_blank' type='button'
                                                class='btn btn-success' name='button'
                                                style='margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;font-family:inherit;overflow:visible;text-transform:none;-webkit-appearance:button;box-sizing:border-box;width:100%;display:inline-block;font-weight:400;text-align:center;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-width:1px;border-style:solid;padding-top:.375rem;padding-bottom:.375rem;padding-right:.75rem;padding-left:.75rem;font-size:1rem;line-height:1.5;border-radius:.25rem;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;color:#fff;background-color:#ffb900;border-color:#ffb900; text-decoration: none;'>Ingresar</a>
                                            <br style='box-sizing:border-box;'>
                                            <p
                                                style='box-sizing:border-box;font-family:sans-serif;font-size:14px;font-weight:normal;marin-right:0;margin-left:0;margin-top:15px;margin-bottom:1rem;'>
                                                Para mayor información contacta nuestro <a
                                                    href='mailto:support@consultify.online'
                                                    style='box-sizing:border-box;color:#007bff;text-decoration:none;background-color:transparent;'>equipo
                                                    de soporte</a></p>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>

                        <!-- END MAIN CONTENT AREA -->
                    </table>

                    <!-- START FOOTER -->
                    <div class='footer'
                        style='box-sizing:border-box;clear:both;margin-top:10px;text-align:center;width:100%;'>
                        <table role='presentation' border='0' cellpadding='0' cellspacing='0'
                            style='box-sizing:border-box;mso-table-lspace:0pt;mso-table-rspace:0pt;width:100%;border-collapse:collapse;'>
                            <tr style='box-sizing:border-box;'>
                                <td class='content-block'
                                    style='box-sizing:border-box;font-family:sans-serif;vertical-align:top;padding-bottom:10px;padding-top:10px;color:#999999;font-size:12px;text-align:center;'>
                                    <span class='apple-link'
                                        style='box-sizing:border-box;color:#999999;font-size:12px;text-align:center;'>Consultify,
                                        &copy; 2021</span>

                                </td>
                            </tr>
                        </table>
                    </div>
                    <!-- END FOOTER -->

                    <!-- END CENTERED WHITE CONTAINER -->
                </div>
            </td>
            <td style='box-sizing:border-box;font-family:sans-serif;font-size:14px;vertical-align:top;'>&nbsp;</td>
        </tr>
    </table>
</body>

</html>
`;

module.exports = BookingTemplate;
