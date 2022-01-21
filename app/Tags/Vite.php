<?php

namespace App\Tags;

use Statamic\Tags\Tags;
use Illuminate\Support\Facades\App;

class Vite extends Tags
{
    /**
     * The {{ vite }} tag.
     *
     * @return string|array
     */
    public function index()
    {
        if(! App::environment('local')) {
            return app()->make(\Innocenzi\Vite\Manifest::class)->toHtml();
        }

        return vite_tags();
    }
}
