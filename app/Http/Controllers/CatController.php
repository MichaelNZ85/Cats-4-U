<?php

namespace App\Http\Controllers;

use App\Models\Cat;
use App\Services\CatService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class CatController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(CatService $service): Response
    {
            $meow = "Big purrs";
	     return Inertia::render('Cats/Index', [
            'cats' => $service->getAvailableCats(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Cat $cat)
    {
        return Inertia::render('Cats/Show', [
            'cat' => $cat
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Cat $cat)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Cat $cat)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Cat $cat)
    {
        //
    }
}
