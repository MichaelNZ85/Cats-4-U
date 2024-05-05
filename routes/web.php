<?php

use App\Http\Controllers\CatController;
use App\Http\Controllers\FileUploadController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/file', [FileUploadController::class, 'show']);
Route::post('/file', [FileUploadController::class, 'upload'])->name('file.upload');
Route::prefix('/cats')->group(function () {
    Route::get('/', [CatController::class, 'index'])->name('cats.index');
    Route::get('/{cat}', [CatController::class, 'show'])->name('cats.show');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
