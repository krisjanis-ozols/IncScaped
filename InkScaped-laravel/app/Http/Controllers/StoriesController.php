<?php

namespace App\Http\Controllers;

use App\Http\Requests\storieRequest;
use App\Http\Resources\StorieResource;
use App\Models\stories;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class StoriesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $stories = stories::with('user')->get();

        return StorieResource::collection($stories);
    }

    

    /**
     * Store a newly created resource in storage.
     */
    public function create(storieRequest $request)
    {
        $data = $request->validated();
        $user = Auth::user();
        stories::create([            
            'prompt_id' => $data['prompt_id'],
            'user_id' => $user->id,
            'title' => $data['title'],
            'content' => $data['content']
        ]);
    }

    public function show($id)
    {
        $story = stories::with('user')->find($id);

        if (!$story) {
            return response()->json(['error' => 'Story not found'], 404);
        }

        // Transform the story using the StorieResource
        $storyResource = new StorieResource($story);

        return $storyResource;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $story = stories::find($id);
        if (!$story) {
            return response()->json(['error' => 'Story not found'], 404);
        }
        $story->delete();    
        return response()->json(['message' => 'Story deleted successfully']);
    }

    public function indexByRatingAsc()
    {
        $stories = stories::with('comments') 
        ->withAvg('comments', 'rating') 
        ->orderBy('comments_avg_rating') 
        ->get();

        $stories = StorieResource::collection($stories);

        return response()->json($stories);
    }

    public function indexByRatingDesc()
    {
        $stories = stories::with('comments') 
        ->withAvg('comments', 'rating') 
        ->orderByDesc('comments_avg_rating') 
        ->get();

        $stories = StorieResource::collection($stories);

        return response()->json($stories);
    }
}
