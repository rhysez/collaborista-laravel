import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';
import {ThemeProvider} from "@/Components/theme-provider";

export default function Guest({ children }: PropsWithChildren) {
    return (
        <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
            <div className="flex min-h-screen flex-col items-center bg-background space-y-12 pt-6 sm:justify-center sm:pt-0">
                <div>
                    <h1 className={"text-primary font-bold text-5xl"}>Collaborista</h1>
                </div>

                <div className="mt-6 w-full overflow-hidden bg-popover px-6 py-4 shadow-lg sm:max-w-md sm:rounded-lg">
                    {children}
                </div>
            </div>
        </ThemeProvider>
    );
}
