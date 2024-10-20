import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {usePage} from "@inertiajs/react";
import {User} from "@/types";

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
            <main>
                <h1>{user.name}</h1>
            </main>
        </AuthenticatedLayout>
    )
}
