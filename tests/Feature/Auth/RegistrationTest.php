<?php

use App\Models\Platform;

test('registration screen can be rendered', function () {
    $response = $this->get('/register');
    $response->assertStatus(200);
});

test('new users can register', function () {
    $platform = Platform::factory()->create();

    $response = $this->post('/register', [
        'name' => 'Test User',
        'username' => 'testuser',
        'email' => 'test@example.com',
        'password' => 'password',
        'password_confirmation' => 'password',
        'platform_ids' => [$platform->id, $platform->id]
    ]);

    $this->assertAuthenticated();
    $response->assertRedirect(route('home', absolute: false));
});
