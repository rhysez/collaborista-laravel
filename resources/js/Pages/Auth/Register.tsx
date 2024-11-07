import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import {Head, Link, useForm} from '@inertiajs/react';
import {FormEventHandler, useState} from 'react';
import {Button} from "@/Components/ui/button";
import PrimaryButton from "@/Components/PrimaryButton";

export default function Register() {
    const [formContent, setFormContent] = useState<boolean>(false)
    const {data, setData, post, processing, errors, reset} = useForm({
        name: '',
        username: '',
        email: '',
        password: '',
        password_confirmation: '',
        youtube: '',
        instagram: '',
        twitch: '',
        tiktok: '',
        linkedin: '',
    });
    console.log(data);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    const PlatformInputs = () => {
        return (
            <>
                <div>
                    <h1 className={"font-bold text-2xl"}>Add platform links</h1>
                    <p className={"text-sm opacity-75"}>Populate at least one platform</p>
                </div>
                <div className="mt-4">
                    <InputLabel style={{color: "#ef4444", fontWeight: "bold"}} htmlFor="youtube" value="YouTube"/>

                    <TextInput
                        id="youtube"
                        name="youtube"
                        value={data.youtube}
                        className="mt-1 block w-full"
                        onChange={(e) => setData('youtube', e.target.value)}
                    />

                    <InputError message={errors.youtube} className="mt-2"/>
                </div>

                <div className="mt-4">
                    <InputLabel style={{color: "#c026d3", fontWeight: "bold"}} htmlFor="instagram" value="Instagram"/>
                    <TextInput
                        id="instagram"
                        name="instagram"
                        value={data.instagram}
                        className="mt-1 block w-full"
                        onChange={(e) => setData('instagram', e.target.value)}
                    />

                    <InputError message={errors.instagram} className="mt-2"/>
                </div>

                <div className="mt-4">
                    <InputLabel style={{color: "#9333ea", fontWeight: "bold"}} htmlFor="twitch" value="Twitch"/>
                    <TextInput
                        id="twitch"
                        name="twitch"
                        value={data.twitch}
                        className="mt-1 block w-full"
                        onChange={(e) => setData('twitch', e.target.value)}
                    />

                    <InputError message={errors.youtube} className="mt-2"/>
                </div>

                <div className="mt-4">
                    <InputLabel style={{fontWeight: "bold"}} htmlFor="tiktok" value="TikTok"/>

                    <TextInput
                        id="tiktok"
                        name="tiktok"
                        value={data.tiktok}
                        className="mt-1 block w-full"
                        onChange={(e) => setData('tiktok', e.target.value)}
                    />

                    <InputError message={errors.tiktok} className="mt-2"/>
                </div>

                <div className="mt-4">
                    <InputLabel style={{color: "#2563eb", fontWeight: "bold"}} htmlFor="linkedin" value="LinkedIn"/>

                    <TextInput
                        id="linkedin"
                        name="linkedin"
                        value={data.linkedin}
                        className="mt-1 block w-full"
                        onChange={(e) => setData('linkedin', e.target.value)}
                    />

                    <InputError message={errors.linkedin} className="mt-2"/>
                </div>

                <div className="mt-6 flex items-center justify-end">
                    <div>
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
                </div>
            </>
        )
    }


    const CredInputs = () => {
        return (
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

                <div className={"flex justify-end mt-4"}>
                    <Button className={"rounded-full"} onClick={() => setFormContent(!formContent)}>Next</Button>
                </div>
            </>
        )
    }

    const getFormContent = () => {
        if (!formContent) return CredInputs()
        else return PlatformInputs()
    }

    return (
        <GuestLayout>
            <Head title="Register"/>

            <section className={"mt-4 mb-8"}>
                <h1 className={"text-primary text-center font-bold text-5xl"}>Collaborista</h1>
                <p className={"text-primary text-center font-extralight text-2xl"}>Join as a creator</p>
            </section>

            <form onSubmit={submit}>
                {getFormContent()}
            </form>
        </GuestLayout>
    );
}
