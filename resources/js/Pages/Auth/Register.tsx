import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import {Head, Link, useForm} from '@inertiajs/react';
import {FormEventHandler, useState} from 'react';
import {Button} from "@/Components/ui/button";
import {ToggleGroup, ToggleGroupItem} from "@/Components/ui/toggle-group"
import PrimaryButton from "@/Components/PrimaryButton";

export default function Register({platforms}: {platforms: any[]}) {

    const {data, setData, post, processing, errors, reset} = useForm({
        name: '',
        username: '',
        email: '',
        password: '',
        password_confirmation: '',
        platform_ids: [],
    });

    console.log(data);
    const PlatformToggleButtons = () =>
        platforms.map((platform: any, index: number) => {
            return (
                <ToggleGroupItem
                    className={`font-bold transition-all ease-in-out duration-100 radix-state-on:border-manuka`}
                    value={platform.id}
                    key={index}
                >{platform.display_name}</ToggleGroupItem>
            )
    })

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Register"/>

            <section className={"mt-4 mb-8"}>
                <h1 className={"text-primary text-center font-bold text-5xl"}>Collaborista</h1>
                <p className={"text-primary text-center font-extralight text-2xl"}>Join as a creator</p>
            </section>

            <form onSubmit={submit}>
                <>
                    <div>
                        <InputLabel htmlFor="name" value="Name (can be first name, or full name)"/>

                        <TextInput
                            id="name"
                            name="name"
                            value={data.name}
                            className="mt-1 block w-full"
                            autoComplete="name"
                            onChange={(e) => setData('name', e.target.value)}
                            required
                        />

                        <InputError message={errors.name} className="mt-2"/>
                    </div>

                    <div className={"mt-4"}>
                        <InputLabel htmlFor="username" value="Username"/>

                        <TextInput
                            id="username"
                            name="username"
                            value={data.username}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            onChange={(e) => setData('username', e.target.value)}
                            required
                        />

                        <InputError message={errors.username} className="mt-2"/>
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="email" value="Email"/>

                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full"
                            autoComplete="email"
                            onChange={(e) => setData('email', e.target.value)}
                            required
                        />

                        <InputError message={errors.email} className="mt-2"/>
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="password" value="Password"/>

                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="mt-1 block w-full"
                            autoComplete="new-password"
                            onChange={(e) => setData('password', e.target.value)}
                            required
                        />

                        <InputError message={errors.password} className="mt-2"/>
                    </div>

                    <div className="mt-4">
                        <InputLabel
                            htmlFor="password_confirmation"
                            value="Confirm Password"
                        />

                        <TextInput
                            id="password_confirmation"
                            type="password"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            className="mt-1 block w-full"
                            autoComplete="new-password"
                            onChange={(e) =>
                                setData('password_confirmation', e.target.value)
                            }
                            required
                        />

                        <InputError
                            message={errors.password_confirmation}
                            className="mt-2"
                        />
                    </div>

                    <InputLabel className={"text-lg mt-6"} htmlFor="platforms"
                                value="Which platforms do you create content for?"/>
                    <p className={"text-sm opacity-75"}>Select at least one option</p>

                    <ToggleGroup
                        variant={"outline"}
                        type="multiple"
                        className={"mt-4 grid gap-2 grid-cols-2"}
                        onValueChange={(value: any) => {
                            if (value) setData('platform_ids', value);
                        }}
                    >
                      <PlatformToggleButtons />
                    </ToggleGroup>

                    <div className="mt-6 flex items-center justify-end">
                        <Link
                            href={route('login')}
                            className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100 dark:focus:ring-offset-gray-800"
                        >
                            Already registered?
                        </Link>
                        <PrimaryButton className="ms-4" disabled={processing}>
                            Register
                        </PrimaryButton>
                    </div>
                </>
            </form>
        </GuestLayout>
    );
}
