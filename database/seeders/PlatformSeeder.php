<?php

namespace Database\Seeders;

use App\Models\Platform;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PlatformSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Platform::factory()->create([
            'name' => 'youtube',
            'display_name' => 'YouTube',
            'color' => '#dc2626'
        ]);

        Platform::factory()->create([
            'name' => 'instagram',
            'display_name' => 'Instagram',
            'color' => '#d946ef',
        ]);

        Platform::factory()->create([
            'name' => 'twitch',
            'display_name' => 'Twitch',
            'color' => '#7c3aed',
        ]);

        Platform::factory()->create([
            'name' => 'tiktok',
            'display_name' => 'TikTok',
            'color' => '#f8fafc',
        ]);

        Platform::factory()->create([
            'name' => 'linkedin',
            'display_name' => 'LinkedIn',
            'color' => '#2563eb',
        ]);
    }
}
