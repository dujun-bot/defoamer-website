import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LANGUAGES = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' },
    { code: 'id', name: 'Indonesia', flag: '🇮🇩' },
    { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
    { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
    { code: 'pt', name: 'Português', flag: '🇧🇷' },
    { code: 'af', name: 'Afrikaans', flag: '🇿🇦' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
];

export function LanguageSwitcher({ dark = false }: { dark?: boolean }) {
    const { i18n } = useTranslation();
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    const current = LANGUAGES.find((l) => l.code === i18n.language) ?? LANGUAGES[0];

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    }, []);

    const handleSelect = (code: string) => {
        i18n.changeLanguage(code);
        setOpen(false);
    };

    return (
        <div ref={ref} className="relative">
            <button
                type="button"
                onClick={() => setOpen((o) => !o)}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    dark ? 'text-white hover:bg-white/10' : 'text-slate-600 hover:bg-slate-100'
                }`}
                aria-haspopup="listbox"
                aria-expanded={open}
            >
                <span className="text-base leading-none">{current.flag}</span>
                <span className="hidden sm:inline">{current.name}</span>
                <svg
                    className={`w-3.5 h-3.5 transition-transform ${open ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {open && (
                <div
                    role="listbox"
                    className="absolute right-0 top-full mt-2 w-44 bg-white rounded-xl shadow-xl border border-slate-100 py-1 z-50 max-h-72 overflow-y-auto"
                >
                    {LANGUAGES.map((lang) => (
                        <button
                            key={lang.code}
                            type="button"
                            role="option"
                            aria-selected={lang.code === i18n.language}
                            onClick={() => handleSelect(lang.code)}
                            className={`w-full flex items-center gap-2.5 px-3 py-2 text-sm text-left transition-colors ${
                                lang.code === i18n.language
                                    ? 'bg-blue-50 text-blue-700 font-medium'
                                    : 'text-slate-700 hover:bg-slate-50'
                            }`}
                        >
                            <span className="text-base">{lang.flag}</span>
                            <span>{lang.name}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
