<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Models\mongo\ActionLog;
use App\Models\mongo\ErrorLog;
use App\Mail\NotificationEmail;

class EmailController extends Controller
{
    public function sendNotification(Request $request)
    {
        $request->validate([
            'user' => 'required|array',
            'user.email' => 'required|email',
            'message' => 'required|string',
        ]);

        try {
            Mail::to($request->input('user.email'))->send(
                new NotificationEmail(
                    $request->input('user'),
                    $request->input('message')
                )
            );

            // Log en base de datos (ActionLog)
            ActionLog::create([
                'type' => 'action',
                'message' => 'Correo enviado desde microservicio Laravel',
                'meta' => [
                    'email' => $request->input('user.email'),
                    'message' => $request->input('message'),
                ],
            ]);

            return response()->json([
                'success' => true,
                'message' => 'El correo se ha enviado correctamente'
            ]);
        } catch (\Exception $e) {
            // Log en base de datos (ErrorLog)
            ErrorLog::create([
                'type' => 'error',
                'message' => 'Error enviando correo desde microservicio Laravel',
                'meta' => [
                    'error' => $e->getMessage(),
                    'email' => $request->input('user.email'),
                    'message' => $request->input('message'),
                ],
            ]);

            return response()->json([
                'error' => 'Error enviando correo',
                'message' => $e->getMessage()
            ], 500);
        }
    }
}

