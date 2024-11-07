import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';
import {ThemeProvider} from "@/Components/theme-provider";

export default function Guest({ children }: PropsWithChildren) {
    return (
        <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
            <div className="flex min-h-screen flex-col items-center bg-background pt-6 sm:justify-center sm:pt-0">
                <div className="mt-6 w-full overflow-hidden bg-popover px-6 py-4 shadow-lg sm:max-w-md sm:rounded-xl">
                    {children}
                </div>
            </div>
        </ThemeProvider>
    );
}
