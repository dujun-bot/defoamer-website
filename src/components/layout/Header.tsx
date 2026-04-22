import { useState } from 'react';
import { Drawer } from 'antd';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useScrollHeader } from '../../hooks/useScrollHeader';
import { LanguageSwitcher } from '../ui/LanguageSwitcher';

const NAV_HREFS = [
    { key: 'products', href: '#products' },
    { key: 'applications', href: '#applications' },
    { key: 'technology', href: '#technology' },
    { key: 'about', href: '#about' },
    { key: 'contact', href: '#contact' },
];

function Logo({ dark = false, onClick }: { dark?: boolean; onClick?: () => void }) {
    return (
        <a
            href="#"
            onClick={(e) => {
                e.preventDefault();
                onClick?.();
            }}
            className="flex items-center gap-2.5 select-none"
        >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <circle cx="8" cy="16" r="3" fill="white" opacity="0.9" />
                    <circle cx="16" cy="10" r="4" fill="white" opacity="0.7" />
                    <circle cx="5" cy="8" r="2" fill="white" opacity="0.5" />
                    <path d="M8 13V5M16 6V2" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
                </svg>
            </div>
            <div className="leading-none">
                <div className={`font-bold text-base tracking-tight ${dark ? 'text-white' : 'text-gray-900'}`}>
                    SinoFoam
                </div>
                <div
                    className={`text-[10px] font-medium tracking-widest uppercase ${dark ? 'text-blue-300' : 'text-blue-500'}`}
                >
                    Technology
                </div>
            </div>
        </a>
    );
}

export function Header({ onNavigate }: { onNavigate: (page: 'home' | 'company') => void }) {
    const scrolled = useScrollHeader(50);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const { t } = useTranslation();

    const isDark = !scrolled;

    return (
        <>
            <motion.header
                className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
                style={{
                    backgroundColor: scrolled ? 'rgba(255,255,255,0.92)' : 'transparent',
                    backdropFilter: scrolled ? 'blur(16px)' : 'none',
                    boxShadow: scrolled ? '0 1px 0 rgba(0,0,0,0.08)' : 'none',
                }}
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">
                    <Logo dark={isDark} onClick={() => onNavigate('home')} />

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-1">
                        {NAV_HREFS.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                                    isDark
                                        ? 'text-white/80 hover:text-white hover:bg-white/10'
                                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                                }`}
                            >
                                {t(`nav.${item.key}`)}
                            </a>
                        ))}
                        <button
                            type="button"
                            onClick={() => onNavigate('company')}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                                isDark
                                    ? 'text-white/80 hover:text-white hover:bg-white/10'
                                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                            }`}
                        >
                            {t('nav.company')}
                        </button>
                    </nav>

                    <div className="flex items-center gap-3">
                        <LanguageSwitcher dark={isDark} />
                        <a
                            href="#contact"
                            className="hidden lg:inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold bg-blue-600 hover:bg-blue-500 text-white transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm"
                        >
                            {t('common.requestSample')}
                        </a>

                        {/* Mobile hamburger */}
                        <button
                            type="button"
                            onClick={() => setDrawerOpen(true)}
                            className={`lg:hidden p-2 rounded-lg ${
                                isDark ? 'text-white hover:bg-white/10' : 'text-gray-700 hover:bg-gray-100'
                            }`}
                            aria-label="Open menu"
                        >
                            <MenuOutlined className="text-xl" />
                        </button>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Drawer */}
            <Drawer
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                placement="right"
                width={280}
                styles={{ header: { display: 'none' }, body: { padding: 0 } }}
                closable={false}
            >
                <div className="p-6">
                    <div className="flex items-center justify-between mb-8">
                        <Logo
                            dark={false}
                            onClick={() => {
                                onNavigate('home');
                                setDrawerOpen(false);
                            }}
                        />
                        <button
                            type="button"
                            onClick={() => setDrawerOpen(false)}
                            className="p-2 rounded-lg text-gray-500 hover:bg-gray-100"
                            aria-label="Close menu"
                        >
                            <CloseOutlined />
                        </button>
                    </div>
                    <nav className="flex flex-col gap-1">
                        {NAV_HREFS.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                onClick={() => setDrawerOpen(false)}
                                className="px-4 py-3 rounded-xl text-gray-700 font-medium hover:bg-gray-50 hover:text-blue-600 transition-colors"
                            >
                                {t(`nav.${item.key}`)}
                            </a>
                        ))}
                        <button
                            type="button"
                            onClick={() => {
                                onNavigate('company');
                                setDrawerOpen(false);
                            }}
                            className="px-4 py-3 rounded-xl text-gray-700 font-medium hover:bg-gray-50 hover:text-blue-600 transition-colors text-left"
                        >
                            {t('nav.company')}
                        </button>
                    </nav>
                    <div className="mt-6 pt-6 border-t border-gray-100">
                        <a
                            href="#contact"
                            onClick={() => setDrawerOpen(false)}
                            className="flex items-center justify-center w-full py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-colors"
                        >
                            {t('common.requestFreeSample')}
                        </a>
                    </div>
                </div>
            </Drawer>
        </>
    );
}
