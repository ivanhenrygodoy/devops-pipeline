<?php

namespace App\Http\Controllers\logs;

use App\Http\Controllers\Controller as ControllersController;
use App\Http\Controllers\logs\Controller;
use Illuminate\Http\Request;
use App\Models\mongo\ActionLog;
use App\Models\mongo\ErrorLog;

class LogController extends ControllersController
{
    /**
     * Guardar log (acción o error) recibido por API.
     */
    public function store(Request $request)
    {
        $request->validate([
            'type' => 'required|string|in:action,error',
            'message' => 'required|string',
            'meta' => 'nullable|array',
        ]);

        $data = [
            'message' => $request->message,
            'meta' => $request->meta ?? [],
            'timestamp' => now(),
        ];

        if ($request->type === 'action') {
            ActionLog::create($data);
        } else {
            ErrorLog::create($data);
        }

        return response()->json(['success' => true]);
    }
}

