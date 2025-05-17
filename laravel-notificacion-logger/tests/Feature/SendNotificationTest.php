<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Support\Facades\Mail;
use App\Mail\NotificationEmail;

class SendNotificationTest extends TestCase
{
    /** @test */
    public function envia_un_correo_correctamente()
    {
        Mail::fake(); // Simulación de envio de correo

        $payload = [
            'user' => [
                'email' => 'usuario@correo.com',
                'name' => 'Usuario Prueba'
            ],
            'message' => 'Este es un mensaje de prueba'
        ];

        $response = $this->postJson('/api/send-email', $payload);

        $response->assertStatus(200)
                 ->assertJson([
                     'success' => true,
                     'message' => 'El correo se ha enviado correctamente'
                 ]);

        // Verifica que se envió un correo del tipo NotificationEmail al destinatario correcto
        Mail::assertSent(NotificationEmail::class, function ($mail) use ($payload) {
            return $mail->hasTo($payload['user']['email']);
        });
    }
}
