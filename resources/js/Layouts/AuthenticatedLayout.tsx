import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link, usePage } from '@inertiajs/react';
import { PropsWithChildren, ReactNode, useState } from 'react';
import {ThemeProvider} from "@/Components/theme-provider";
import {ModeToggle} from "@/Components/mode-toggle";
import {UserCircleIcon} from "@heroicons/react/24/outline";

export default function Authenticated({
    header,
    children,
}: PropsWithChildren<{ header?: ReactNode }>) {
    const user = usePage().props.auth.user;

    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
            <div className="min-h-screen bg-background">
                <nav className="bg-zinc-100 dark:bg-zinc-900 border-b-[1px] border-zinc-200 dark:border-zinc-800 pt-4">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="flex h-16 justify-between">
                            <div className="flex">
                                <div className="hidden space-x-8 sm:flex py-4">
                                    <NavLink
                                        href={route('home')}
                                        active={route().current('home')}
                                    >
                                        Home
                                    </NavLink>
                                </div>
                            </div>

                            <div className="hidden sm:ms-6 sm:flex sm:items-center space-x-4">
                                <div className="relative ms-3">
                                    <Dropdown>
                                        <Dropdown.Trigger>
                                        <div className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center rounded-full px-5 py-2 text-foreground text-sm font-bold leading-4 transition duration-150 ease-in-out"
                                            >
                                                <UserCircleIcon className={"w-8 h-8"} />
                                            </button>
                                        </div>
                                        </Dropdown.Trigger>

                                        <Dropdown.Content>
                                            <p className={"text-background font-bold text-2xl px-4 py-2"}>{user.username}</p>
                                            <Dropdown.Link
                                                href={route('profile.get')}
                                            >
                                                Profile
                                            </Dropdown.Link>
                                            <Dropdown.Link
                                                href={route('profile.edit')}
                                            >
                                                My Settings
                                            </Dropdown.Link>
                                            <Dropdown.Link
                                                href={route('logout')}
                                                method="post"
                                                as="button"
                                            >
                                                Log Out
                                            </Dropdown.Link>
                                        </Dropdown.Content>
                                    </Dropdown>
                                </div>
                                <ModeToggle />
                            </div>

                            <div className="-me-2 flex items-center sm:hidden">
                                <button
                                    onClick={() =>
                                        setShowingNavigationDropdown(
                                            (previousState) => !previousState,
                                        )
                                    }
                                    className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none dark:text-gray-500 dark:hover:bg-gray-900 dark:hover:text-gray-400 dark:focus:bg-gray-900 dark:focus:text-gray-400"
                                >
                                    <svg
                                        className="h-6 w-6"
                                        stroke="currentColor"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            className={
                                                !showingNavigationDropdown
                                                    ? 'inline-flex'
                                                    : 'hidden'
                                            }
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                        <path
                                            className={
                                                showingNavigationDropdown
                                                    ? 'inline-flex'
                                                    : 'hidden'
                                            }
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div
                        className={
                            (showingNavigationDropdown ? 'block' : 'hidden') +
                            ' sm:hidden'
                        }
                    >
                        <div className="space-y-1 pb-3 pt-2">
                            <ResponsiveNavLink
                                href={route('home')}
                                active={route().current('home')}
                            >
                                Home
                            </ResponsiveNavLink>
                        </div>

                        <div className="border-t border-gray-200 pb-1 pt-4 dark:border-gray-600">
                            <div className="px-4">
                                <div className="text-base font-medium text-gray-800 dark:text-gray-200">
                                    {user.name}
                                </div>
                                <div className="text-sm font-medium text-gray-500">
                                    {user.email}
                                </div>
                            </div>

                            <div className="mt-3 space-y-1">
                                <ResponsiveNavLink href={route('profile.edit')}>
                                    Profile
                                </ResponsiveNavLink>
                                <ResponsiveNavLink
                                    method="post"
                                    href={route('logout')}
                                    as="button"
                                >
                                    Log Out
                                </ResponsiveNavLink>
                            </div>
                        </div>
                    </div>
                </nav>

                <main>{children}</main>
            </div>
        </ThemeProvider>

    );
}
