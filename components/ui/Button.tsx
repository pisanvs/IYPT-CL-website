import Link from 'next/link';
import { type ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'ghost';
  className?: string;
  onClick?: () => void;
}

export default function Button({ children, href, variant = 'primary', className = '', onClick }: ButtonProps) {
  const baseStyle: React.CSSProperties =
    variant === 'primary'
      ? { background: 'var(--accent)', color: 'white', fontFamily: 'var(--sans)', letterSpacing: '0.2px' }
      : { color: 'var(--text-secondary)', borderColor: 'var(--border)', fontFamily: 'var(--sans)' };

  const baseClass =
    variant === 'primary'
      ? 'inline-flex items-center gap-2 border-none px-8 py-3 rounded-md text-sm font-medium cursor-pointer no-underline transition-all hover:opacity-90'
      : 'inline-flex items-center bg-transparent border px-7 py-3 rounded-md text-sm font-normal cursor-pointer no-underline transition-all hover:opacity-90';

  if (href) {
    return (
      <Link href={href} className={`${baseClass} ${className}`} style={baseStyle}>
        {children}
      </Link>
    );
  }

  return (
    <button className={`${baseClass} ${className}`} style={baseStyle} onClick={onClick}>
      {children}
    </button>
  );
}
