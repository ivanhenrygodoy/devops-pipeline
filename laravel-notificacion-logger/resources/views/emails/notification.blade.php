<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Notificación</title>
</head>
<body style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
    <div style="max-width: 600px; margin: auto; background: #ffffff; padding: 20px; border-radius: 6px; border: 1px solid #e0e0e0;">
        <h2 style="color: #007bff; text-align: center;">Microservicio de Notificaciones</h2>
        <p style="text-align: center; font-style: italic; color: #666;">Servicio automatizado de envío de correos</p>
        <hr>
        <p>Hola,</p>
        <p>Has recibido una nueva notificación:</p>
        <blockquote style="background-color: #eaf4ff; padding: 10px; border-left: 4px solid #007bff; color: #0056b3;">
            {{ $messageText }}
        </blockquote>
        <p>Gracias por usar nuestro servicio.</p>
        <footer style="text-align: center; font-size: 12px; color: #aaa; margin-top: 20px;">
            © {{ date('Y') }} Laravel Service | Notificaciones automatizadas
        </footer>
    </div>
</body>
</html>

