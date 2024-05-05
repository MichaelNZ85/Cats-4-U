<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class FileUploadController extends Controller
{
    public function show()
    {
        return Inertia::render('FileUpload');
    }

    public function upload(Request $request)
    {
        $meow = 'purr';
        // Validate the request to ensure a file was uploaded
        $request->validate([
            'file' => 'required|file',
        ]);

        // Retrieve the uploaded file
        $file = $request->file('file');

        // Store the file on the Supabase disk
        $filePath = Storage::disk('supabase')->put('/meow', $file);

        // Optionally, you can return the path to the uploaded file
        return redirect()->to('cats.index');
    }
}
