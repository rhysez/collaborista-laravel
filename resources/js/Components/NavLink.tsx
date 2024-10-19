import { InertiaLinkProps, Link } from '@inertiajs/react';

export default function NavLink({
    active = false,
    className = '',
    children,
    ...props
}: InertiaLinkProps & { active: boolean }) {
    return (
        <Link
            {...props}
            className={
                'inline-flex items-center text-foreground rounded-full px-3 lg:text-3xl text-xl leading-5 transition duration-150 ease-in-out focus:outline-none ' +
                (active
                    ? 'font-bold'
                    : 'font-normal') +
                className
            }
        >
            {children}
        </Link>
    );
}
