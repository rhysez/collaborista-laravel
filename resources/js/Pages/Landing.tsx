import {PageProps} from '@/types';
import {Head, Link} from '@inertiajs/react';
import {ModeToggle} from "@/Components/mode-toggle";
import {ThemeProvider} from "@/Components/theme-provider";
import {Button} from "@/Components/ui/button";
import Overview from "@/Components/landing/Overview";

export default function Landing({
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
            <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
                <Head title="Landing"/>
                <div className="bg-white dark:bg-black text-primary p-4">
                    <nav className="flex md:flex-row flex-col md:gap-0 gap-2 justify-between items-center py-4 px-8">
                        <h1 className={"text-3xl font-semibold"}>Collaborista</h1>
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
                                    <Button className={"rounded-full"}>Log in</Button>
                                </Link>
                                <Link
                                    href={route('register')}
                                    className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                >
                                    <Button className={"rounded-full"}>Sign up</Button>
                                </Link>
                                <ModeToggle />
                            </div>
                        )}
                    </nav>

                    <main className={"mt-20"}>
                        <article className={"flex flex-col items-center space-y-8"}>
                            <section className={"flex flex-col items-center space-y-2"}>
                                <h2 className={"text-center text-6xl font-bold mt-20"}>
                                    Caffeinating your creator network ☕
                                </h2>
                                <p className={"text-center text-lg text-wrap opacity-75 max-w-[700px]"}>
                                    Supercharge your growth by seemlessly discovering, connecting and
                                    engaging with other creators within your target niche.
                                </p>
                            </section>
                            <Link href={route('register')}>
                                <Button className={"text-xl px-6 py-5 rounded-full transition-all ease-in-out hover:bg-green-400"}>
                                    Get started for free
                                </Button>
                            </Link>
                        </article>
                    </main>
                    <Overview />
                </div>
            </ThemeProvider>
        </>
    );
}
