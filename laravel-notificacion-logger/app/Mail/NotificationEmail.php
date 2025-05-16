<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class NotificationEmail extends Mailable
{
    use Queueable, SerializesModels;

    public $user;
    public $messageText;

    public function __construct($user, $messageText)
    {
        $this->user = $user;
        $this->messageText = $messageText;
    }

    public function build()
    {
        return $this->subject('Notificación desde el Microservicio')
                    ->view('emails.notification');
    }
}
