import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDownOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

// Pre-generate bubble data so it's stable across renders
const BUBBLES = [
    { id: 0, size: 64, left: 8, delay: 0, duration: 14 },
    { id: 1, size: 32, left: 18, delay: 3, duration: 12 },
    { id: 2, size: 80, left: 28, delay: 6, duration: 16 },
    { id: 3, size: 24, left: 38, delay: 1, duration: 11 },
    { id: 4, size: 56, left: 48, delay: 4, duration: 15 },
    { id: 5, size: 40, left: 58, delay: 7, duration: 13 },
    { id: 6, size: 72, left: 68, delay: 2, duration: 17 },
    { id: 7, size: 28, left: 76, delay: 5, duration: 12 },
    { id: 8, size: 48, left: 84, delay: 8, duration: 14 },
    { id: 9, size: 36, left: 92, delay: 1.5, duration: 16 },
    { id: 10, size: 20, left: 14, delay: 9, duration: 11 },
    { id: 11, size: 60, left: 54, delay: 3.5, duration: 15 },
];

const TYPE_TAG_COLORS = ['#60a5fa', '#34d399', '#f9a8d4'];

export function Hero() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { t } = useTranslation();

    // Subtle animated gradient background on canvas
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationId: number;
        let t = 0;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        const draw = () => {
            t += 0.003;
            const { width, height } = canvas;

            ctx.clearRect(0, 0, width, height);

            // Glow blobs
            const blobs = [
                {
                    x: width * 0.2 + Math.sin(t * 0.7) * 80,
                    y: height * 0.3 + Math.cos(t * 0.5) * 60,
                    r: 350,
                    color: 'rgba(37,99,235,0.18)',
                },
                {
                    x: width * 0.75 + Math.cos(t * 0.6) * 70,
                    y: height * 0.25 + Math.sin(t * 0.8) * 50,
                    r: 300,
                    color: 'rgba(6,182,212,0.14)',
                },
                {
                    x: width * 0.5 + Math.sin(t * 0.4) * 100,
                    y: height * 0.7 + Math.cos(t * 0.6) * 80,
                    r: 280,
                    color: 'rgba(99,102,241,0.12)',
                },
            ];

            for (const blob of blobs) {
                const grd = ctx.createRadialGradient(blob.x, blob.y, 0, blob.x, blob.y, blob.r);
                grd.addColorStop(0, blob.color);
                grd.addColorStop(1, 'transparent');
                ctx.fillStyle = grd;
                ctx.fillRect(0, 0, width, height);
            }

            animationId = requestAnimationFrame(draw);
        };

        draw();
        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationId);
        };
    }, []);

    const containerVariants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.12 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 36 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
    };

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-start justify-center overflow-hidden pt-[88px] sm:pt-[96px] lg:items-center lg:pt-0"
            style={{ background: 'linear-gradient(160deg, #020d1e 0%, #050e1c 40%, #0a0520 100%)' }}
        >
            {/* Canvas glow */}
            <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

            {/* Grid overlay */}
            <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(148,163,184,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.3) 1px, transparent 1px)',
                    backgroundSize: '64px 64px',
                }}
            />

            {/* Rising bubbles */}
            {BUBBLES.map((b) => (
                <div
                    key={b.id}
                    className="absolute rounded-full pointer-events-none"
                    style={{
                        width: b.size,
                        height: b.size,
                        left: `${b.left}%`,
                        bottom: '-120px',
                        border: '1px solid rgba(96,165,250,0.2)',
                        background: 'radial-gradient(circle at 35% 35%, rgba(96,165,250,0.12), transparent)',
                        animation: `bubbleRise ${b.duration}s ${b.delay}s ease-in infinite`,
                    }}
                />
            ))}

            {/* Content */}
            <motion.div
                className="relative z-10 max-w-6xl mx-auto px-6 pt-8 pb-16 text-center sm:pt-10 lg:py-0"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Badge */}
                <motion.div variants={itemVariants}>
                    <span className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-sm font-medium tracking-wide">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                        {t('hero.badge')}
                    </span>
                </motion.div>

                {/* Heading */}
                <motion.h1
                    variants={itemVariants}
                    className="text-5xl sm:text-6xl lg:text-7xl xl:text-[84px] font-black text-white leading-none tracking-tight"
                >
                    {t('hero.line1')}
                    <span className="block gradient-text mt-2 pb-1">{t('hero.line2')}</span>
                </motion.h1>

                {/* Subtext */}
                <motion.p
                    variants={itemVariants}
                    className="mt-6 text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
                >
                    {t('hero.subtitle')}
                </motion.p>

                {/* Product type tags */}
                <motion.div variants={itemVariants} className="flex items-center justify-center gap-3 mt-5">
                    {[
                        t('products.filterSilicone'),
                        t('products.filterPolyether'),
                        t('products.filterFattyAlcohol'),
                    ].map((label, i) => (
                        <span
                            key={label}
                            className="px-3 py-1 rounded-full text-xs font-medium"
                            style={{
                                background: `${TYPE_TAG_COLORS[i]}18`,
                                color: TYPE_TAG_COLORS[i],
                                border: `1px solid ${TYPE_TAG_COLORS[i]}30`,
                            }}
                        >
                            {label}
                        </span>
                    ))}
                </motion.div>

                {/* CTA buttons */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
                >
                    <a
                        href="#products"
                        className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-base font-bold tracking-wide transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-blue-900/40"
                    >
                        {t('hero.cta1')}
                    </a>
                    <a
                        href="#contact"
                        className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full glass-card text-white text-base font-semibold hover:bg-white/15 transition-all duration-200 hover:scale-105 active:scale-95"
                    >
                        {t('hero.cta2')}
                    </a>
                </motion.div>

                {/* Stats mini bar */}
                <motion.div
                    variants={itemVariants}
                    className="mt-14 flex flex-wrap items-center justify-center gap-8 border-t border-white/8 pt-10"
                >
                    {[
                        { v: '10+', l: t('common.years') },
                        { v: '9', l: t('common.productLines') },
                        { v: '50+', l: t('common.countriesServed') },
                        { v: 'REACH', l: t('common.reachCompliant') },
                    ].map((item) => (
                        <div key={item.l} className="text-center">
                            <div className="text-2xl font-black text-white">{item.v}</div>
                            <div className="text-xs text-gray-500 mt-0.5 tracking-wide">{item.l}</div>
                        </div>
                    ))}
                </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.a
                href="#products"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 hover:text-white/60 transition-colors animate-bounce"
                aria-label="Scroll to products"
            >
                <ArrowDownOutlined className="text-xl" />
            </motion.a>
        </section>
    );
}
