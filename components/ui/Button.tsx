import Link from 'next/link';
import { type ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'ghost';
  className?: string;
  onClick?: () => void;
}

export default function Button({ children, href, variant = 'primary', className = '', onClick, ...props }: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const baseClass =
    variant === 'primary'
      ? 'iypt-btn iypt-btn-primary'
      : 'iypt-btn iypt-btn-ghost';

  if (href) {
    return (
      <Link href={href} className={`${baseClass} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button className={`${baseClass} ${className}`} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
