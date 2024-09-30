import {PageProps} from '@/types';
import {Head, Link} from '@inertiajs/react';
import {ModeToggle} from "@/Components/mode-toggle";
import {ThemeProvider} from "@/Components/theme-provider";
import {Button} from "@/Components/ui/button";

export default function Welcome({
                                    auth,
                                    laravelVersion,
                                    phpVersion,
                                }: PageProps<{ laravelVersion: string; phpVersion: string }>) {
    const handleImageError = () => {
        document
            .getElementById('screenshot-container')
            ?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document
            .getElementById('docs-card-content')
            ?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <Head title="Welcome"/>
                <div className="bg-background text-primary">
                    <nav className="flex flex-1 justify-between items-center py-4 px-8">
                        <h1 className={"text-4xl font-semibold"}>Collaborista</h1>
                        {auth.user ? (
                            <div className={"flex items-center"}>
                                <Link
                                    href={route('dashboard')}
                                    className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                >
                                    <Button>Dashboard</Button>
                                </Link>
                                <ModeToggle />
                            </div>
                        ) : (
                            <div className={"flex items-center text-xl"}>
                                <Link
                                    href={route('login')}
                                    className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                >
                                    <Button>Log in</Button>
                                </Link>
                                <Link
                                    href={route('register')}
                                    className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                >
                                    <Button>Sign up</Button>
                                </Link>
                                <ModeToggle />
                            </div>
                        )}
                    </nav>

                    <main>
                        <h2 className={"text-center text-5xl font-extrabold mt-16"}>Caffeinating your creator network.</h2>
                    </main>
                </div>
            </ThemeProvider>
        </>
    );
}
