import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { usePage } from "@inertiajs/react";
import { User } from "@/types";
import IntroCard from "@/Pages/Profile/IntroCard"

// This component should display a grid of 3 cards.
// Each card reflecting a different segment of the profile.
export default function Profile() {
    const user: User = usePage().props.auth.user;

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Profile
                </h2>
            }
        >
            <main className="grid grid-cols-2 grid-rows-2 gap-2 p-2 mx-auto lg:w-4/6">
                <section className="bg-zinc-100 dark:bg-zinc-900 rounded-md p-6 row-span-2">
                   <IntroCard user={user} />
                </section>
                <section className="bg-zinc-100 dark:bg-zinc-900 rounded-md p-6">
                    <h1>Some content goes here</h1>
                </section>
                <section className="bg-zinc-100 dark:bg-zinc-900 rounded-md p-6">
                    <h1>Some content goes here</h1>
                </section>
            </main>
        </AuthenticatedLayout>
    );
}
