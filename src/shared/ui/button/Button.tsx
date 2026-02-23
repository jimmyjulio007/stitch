'use client';

import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
    children: React.ReactNode;
}

export const Button = ({ variant = 'primary', children, className, ...props }: ButtonProps) => {
    const baseStyles = "inline-flex h-12 items-center justify-center rounded-full px-5 font-medium transition-colors";

    const variants = {
        primary: "bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc]",
        secondary: "border border-solid border-black/[.08] hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
    };

    return (
        <button className={`${baseStyles} ${variants[variant]} ${className || ''}`} {...props}>
            {children}
        </button>
    );
};
