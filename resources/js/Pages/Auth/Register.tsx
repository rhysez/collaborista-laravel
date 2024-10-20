import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import {Head, Link, useForm} from '@inertiajs/react';
import {FormEventHandler, useState} from 'react';
import {Button} from "@/Components/ui/button";
import {ToggleGroup, ToggleGroupItem} from "@/Components/ui/toggle-group"


export default function Register() {
    type FormContent = "Account" | "Platform" | "Personal";
    const [content, setContent] = useState<FormContent>("Account");
    const {data, setData, post, processing, errors, reset} = useForm({
        name: '',
        username: '',
        email: '',
        password: '',
        password_confirmation: '',
        platforms: [],
        tags: [],
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    type Platform = { name: string, display_name: string, color: string };

    const platforms: Platform[] = [
        {name: "youtube", display_name: "YouTube", color: "#dc2626"},
        {name: "instagram", display_name: "Instagram", color: "#d946ef"},
        {name: "twitch", display_name: "Twitch", color: "#7c3aed"},
        {name: "tiktok", display_name: "TikTok", color: "#f8fafc"},
        {name: "linkedin", display_name: "LinkedIn", color: "#2563eb"},
    ]

    const PlatformOptionsUI = platforms.map((platform: Platform) => {
        return (
            <ToggleGroupItem
                className={`font-bold radix-state-on:bg-[${platform.color}] radix-state-on:text-white`}
                value={platform.name}
                key={platform.name}

            >
                {platform.display_name}
            </ToggleGroupItem>
        )
    })

    const tags: string[] = [
        "vlogging",
        "blogging",
        "beauty",
        "podcasting",
    ];

    console.log(data);

    return (
        <GuestLayout>
            <Head title="Register"/>

            <section className={"mt-4 mb-8"}>
                <h1 className={"text-primary text-center font-bold text-5xl"}>Collaborista</h1>
                <p className={"text-primary text-center font-extralight text-2xl"}>Join as a creator</p>
            </section>

            <form onSubmit={submit}>
                {
                content == "Account" ?
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

                    <div className="mt-4 flex items-center justify-end">
                        <Link
                            href={route('login')}
                            className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100 dark:focus:ring-offset-gray-800"
                        >
                            Already registered?
                        </Link>

                        <Button onClick={() => setContent("Platform")}
                                className={"rounded-full hover:bg-manuka ml-4"}>Next</Button>
                        {/*Add this submit button to final form*/}
                        {/*<PrimaryButton className="ms-4" disabled={processing}>*/}
                        {/*    Register*/}
                        {/*</PrimaryButton>*/}
                    </div>
                </> : content == "Platform" ?
                <>
                    <InputLabel htmlFor="platforms" value="Which platforms do you create content for?"/>
                    <p className={"text-sm opacity-75"}>Select at least one option</p>
                    <ToggleGroup
                        variant={"outline"}
                        type="multiple"
                        className={"mt-4"}
                        onValueChange={(value: any) => {
                            if (value) setData('platforms', value);
                        }}
                    >
                        <ToggleGroupItem
                            className={"font-bold radix-state-on:bg-red-600 radix-state-on:text-white"}
                            value="youtube"

                        >
                            YouTube
                        </ToggleGroupItem>
                        <ToggleGroupItem
                            className={"font-bold radix-state-on:bg-fuchsia-500 radix-state-on:text-white"}
                            value="instagram"
                        >
                            Instagram
                        </ToggleGroupItem>
                        <ToggleGroupItem
                            className={"font-bold radix-state-on:bg-purple-600 radix-state-on:text-white"}
                            value="twitch"
                        >
                            Twitch
                        </ToggleGroupItem>
                        <ToggleGroupItem
                            className={"font-bold radix-state-on:bg-foreground radix-state-on:text-background"}
                            value="tiktok"
                        >
                            TikTok
                        </ToggleGroupItem>
                        <ToggleGroupItem
                            className={"font-bold radix-state-on:bg-blue-600 radix-state-on:text-white"}
                            value="linkedin"
                        >
                            LinkedIn
                        </ToggleGroupItem>
                    </ToggleGroup>

                    <InputLabel className={"mt-4"} htmlFor="tags" value="Pick some tags to describe your content"/>
                    <p className={"text-sm opacity-75"}>Select at least one option</p>
                    <ToggleGroup
                        variant={"outline"}
                        type="multiple"
                        className={"mt-4"}
                        onValueChange={(value: any) => {
                            if (value) setData('tags', value);
                        }}
                    >
                        <ToggleGroupItem
                            className={"font-bold radix-state-on:bg-manuka radix-state-on:text-white"}
                            value="vlogging"

                        >
                            vlogging
                        </ToggleGroupItem>
                    </ToggleGroup>
                </> : <p>Personal</p>
            }
            </form>
        </GuestLayout>
    );
}
