interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  className?: string;
}

export default function SectionHeader({ label, title, description, className = '' }: SectionHeaderProps) {
  return (
    <div className={className}>
      {label && (
        <div
          style={{ fontFamily: 'var(--mono)', fontSize: '0.62rem', letterSpacing: '3px', color: 'var(--text-faint)' }}
          className="uppercase mb-3"
        >
          {label}
        </div>
      )}
      <h2
        style={{ fontFamily: 'var(--serif)', letterSpacing: '-0.8px', color: 'var(--text)' }}
        className="text-[clamp(2rem,4vw,2.8rem)] font-normal leading-tight"
      >
        {title}
      </h2>
      {description && (
        <p
          style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}
          className="mt-3 max-w-[500px] leading-relaxed font-light"
        >
          {description}
        </p>
      )}
    </div>
  );
}
