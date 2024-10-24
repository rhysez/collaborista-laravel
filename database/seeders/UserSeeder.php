<?php

namespace Database\Seeders;

use App\Models\Platform;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $platform = Platform::where('name', 'youtube')->first();

        // Our test user
        User::factory()->create([
            'name' => 'Test User',
            'username' => 'testuser',
            'email' => 'test@example.com',
            'bio' => 'Hello! I am a test user for Collaborista',
            'platforms' => [$platform->id]
        ]);

        // Additional test users
        User::factory()->count(2)->create();
    }
}
