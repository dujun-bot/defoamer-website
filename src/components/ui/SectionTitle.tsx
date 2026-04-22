import { AnimatedSection } from './AnimatedSection';

interface SectionTitleProps {
    badge?: string;
    title: string;
    titleAccent?: string;
    subtitle?: string;
    dark?: boolean;
    center?: boolean;
    delay?: number;
}

export function SectionTitle({
    badge,
    title,
    titleAccent,
    subtitle,
    dark = false,
    center = true,
    delay = 0,
}: SectionTitleProps) {
    const textColor = dark ? 'text-white' : 'text-gray-900';
    const subtitleColor = dark ? 'text-gray-400' : 'text-gray-500';
    const badgeBg = dark ? 'bg-white/10 border-white/20 text-blue-300' : 'bg-blue-50 border-blue-100 text-blue-600';

    return (
        <AnimatedSection delay={delay} className={center ? 'text-center' : ''}>
            {badge && (
                <span
                    className={`inline-block mb-3 px-3.5 py-1 rounded-full text-xs font-semibold tracking-widest uppercase border ${badgeBg}`}
                >
                    {badge}
                </span>
            )}
            <h2 className={`text-4xl sm:text-5xl font-bold leading-tight tracking-tight ${textColor}`}>
                {title}
                {titleAccent && <span className="block gradient-text mt-1">{titleAccent}</span>}
            </h2>
            {subtitle && (
                <p className={`mt-4 text-lg max-w-2xl leading-relaxed ${subtitleColor} ${center ? 'mx-auto' : ''}`}>
                    {subtitle}
                </p>
            )}
        </AnimatedSection>
    );
}
