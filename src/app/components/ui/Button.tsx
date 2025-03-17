// src/app/components/ui/Button.tsx
'use client'

import { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className,
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest dark:focus-visible:ring-green-400 disabled:opacity-50";
  
  const variantStyles = {
    primary: "bg-forest text-white hover:bg-forest/90 dark:bg-green-700 dark:hover:bg-green-600",
    secondary: "bg-sage/20 text-forest hover:bg-sage/30 dark:bg-green-900/30 dark:text-green-300 dark:hover:bg-green-900/50",
    outline: "border border-forest text-forest hover:bg-forest/10 dark:border-green-500 dark:text-green-400 dark:hover:bg-green-900/30"
  };
  
  const sizeStyles = {
    sm: "text-sm px-3 py-1.5",
    md: "text-base px-4 py-2",
    lg: "text-lg px-6 py-3"
  };
  
  const widthStyles = fullWidth ? "w-full" : "";

  return (
    <button
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        widthStyles,
        "hover:scale-[1.02] active:scale-[0.98] transform transition-transform",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}