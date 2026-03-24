import { type ElementType, type ReactNode, type HTMLAttributes } from 'react';

interface GlassCardProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  as?: ElementType;
}

export default function GlassCard({ children, as: Tag = 'div', className = '', ...props }: GlassCardProps) {
  return (
    <Tag className={`glass ${className}`} {...props}>
      {children}
    </Tag>
  );
}
