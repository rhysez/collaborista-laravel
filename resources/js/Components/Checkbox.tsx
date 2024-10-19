import { InputHTMLAttributes } from 'react';

export default function Checkbox({
    className = '',
    ...props
}: InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input
            {...props}
            type="checkbox"
            className={
                'rounded border-zinc-200 dark:border-zinc-600 text-manuka shadow-sm focus:ring-manuka dark:bg-zinc-700 dark:focus:ring-manuka dark:focus:ring-offset-gray-800 ' +
                className
            }
        />
    );
}
