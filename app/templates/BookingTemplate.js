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
                                                <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQZSURBVHgB7ZhvaJVVHMc/Z01dw0hpRWXQlaBeVBBEq66Qs+V0L9TAwQiDMKmRpJSk0Ry10vSFCGm90AwiSyJNbqT5Z2XrRTAMWxm9GII4Rb2oE/8M3dTtHr/PvWPseu99/k984RcO58dzvs/zfJ9zzu/PeeA2bhHYL5lt32IiMaOMGGD3sogKUlyl0y7gYWJEJIHWYuwePpa5Xk8qw5BQ+9O+wePEhNAC7c9U0sb3EvThDUMPqXXYt5lBDAgl0O7iXsbRLrOxOIG76OcXu5AmIiKwQLubx7iDv2RWuxLHiHU/G+wqmokAE4Qscc/rk3bIvKdg8IzaH0P2OLUHGPn5K3XHJ6aJawSE7xm0vzFP7Lai4kZivNqDBU9u4Sxbbat8fTQEKowsZZBvh15fGner3UepdXmZsXKelcHCkOsS64vLeY5WsZq9uNz5FHQNQM//eKBb8XKWacWT6KDkDNp2iUuyWbKW42evVkyAeXLsxEtezIQcqN2uxpNYUqDdwSRt530KF68QBJVVMDcFTy9y5xmqyJCyn+JBLCJQ+22yvHC3xL1AGIzVNp2+DpIteIgcr7ZOYajFt0CJe1Zdp8Q9SRQY7YipK6B2bc52kwkrJHKtkzZxE2jbssu5R20CcaF6iXx3O5RXejGXsIrt9k0KiMZa+w69/z3B6dQCoqAiAZNeKz526iD8UA+X0njgoFav3iwnPVLgOeKctVK40A1bpuV6dzhhaJrCUJboCLTcLFxWPvxxDpzo8GI6iXOOaaYjloLVN4xeN9Dvh+nUlv05A85zM3D+CGxOaj/+486ziEjSfECWmHOSvmOTSX+zEJspJyzcnCR9AFIN2n9H8cABBfAG08IwcTj22F+Zq4Jgk66EO/hMrIFn2guvd22DnfPh2iX3+y3bVEzMN0vJIw7vQTMdBaxsfjxJXNi/Bn5q9CNujcqRxhvF5QnMipypLJJhiswjRIHNQNti+H1Z9mTlgozELVbcW6aEU5RY4MWmXvHnCjUy9xMGV3s1a0pKf3/uxex1ihGJcyUWDTNmNseoU3lvdGoLgss98J1qjK6t7jxLj1OMSJwH0UedpwKiVd1HXjxMAg5plS56emq3nKHGvIcnMftYPyQVEk364g2uJCf2d6pVubL+1Vlvlnmf4/iEr0xi6tgo5kyZ7tn+4hBjsOjoTh23qoOI8y3QgcLQXnV1mnP3pekjJ3Ig7+p6lacNYY6dgc7FDuw+HtFrdunOR/MGRp6LHTg5KXf8fFeZ4TNCInCxYGo5rK5Gzb0kGeQCp3k9ijgHoaoZBfS0/r7U6u4tJShpjdWbL/iaiAhdbpkkfdqXr8pcnT+QzUJTzEY8iz4/iFwPmhnKomX68+CE3zIFmjFMNV9FTJWjAbuJF1W4jf7R4TYC4jpVDiwvAw9lSAAAAABJRU5ErkJggg=='
                                                    alt='Logo Consultify'
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
