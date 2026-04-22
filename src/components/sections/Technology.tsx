import {
    ThunderboltOutlined,
    SafetyCertificateOutlined,
    ExperimentOutlined,
    GlobalOutlined,
    CustomerServiceOutlined,
    DollarOutlined,
} from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { SectionTitle } from '../ui/SectionTitle';
import { AnimatedSection } from '../ui/AnimatedSection';

const FEATURE_KEYS = ['knockdown', 'reach', 'lab', 'range', 'support', 'cost'] as const;
const FEATURE_ICONS = [
    <ThunderboltOutlined />,
    <SafetyCertificateOutlined />,
    <ExperimentOutlined />,
    <GlobalOutlined />,
    <CustomerServiceOutlined />,
    <DollarOutlined />,
];
const FEATURE_COLORS = ['#f59e0b', '#10b981', '#8b5cf6', '#0ea5e9', '#f43f5e', '#06b6d4'];

const CERTIFICATION_NAMES = [
    'ISO 9001:2015',
    'REACH Compliant',
    'RoHS Compliant',
    'NP / APEO Free',
    'SVHC Free',
    'SDS Available',
];

export function Technology() {
    const { t } = useTranslation();
    const certSubs = t('technology.certificationSubs', { returnObjects: true }) as string[];
    return (
        <section
            id="technology"
            className="py-24 relative overflow-hidden"
            style={{ background: 'linear-gradient(160deg, #020c1b 0%, #050f1f 50%, #0a0520 100%)' }}
        >
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-20 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl"
                    style={{ background: 'radial-gradient(circle, #2563eb, transparent)' }}
                />
                <div
                    className="absolute bottom-10 left-0 w-80 h-80 rounded-full opacity-8 blur-3xl"
                    style={{ background: 'radial-gradient(circle, #0891b2, transparent)' }}
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <SectionTitle
                    badge={t('technology.badge')}
                    title={t('technology.title')}
                    titleAccent={t('technology.titleAccent')}
                    subtitle={t('technology.subtitle')}
                    dark
                />

                {/* Features grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
                    {FEATURE_KEYS.map((key, i) => (
                        <AnimatedSection key={key} delay={i * 0.08}>
                            <div className="group h-full rounded-2xl p-6 border border-white/8 bg-white/4 hover:bg-white/8 hover:border-white/16 transition-all duration-300">
                                <div
                                    className="w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-5 transition-transform duration-300 group-hover:scale-110"
                                    style={{ background: `${FEATURE_COLORS[i]}20`, color: FEATURE_COLORS[i] }}
                                >
                                    {FEATURE_ICONS[i]}
                                </div>
                                <h3 className="text-white font-bold text-base mb-2">
                                    {t(`technology.features.${key}.title`)}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {t(`technology.features.${key}.description`)}
                                </p>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>

                {/* Certifications */}
                <AnimatedSection delay={0.3} className="mt-16">
                    <div className="rounded-2xl border border-white/10 bg-white/4 p-8">
                        <div className="text-center mb-8">
                            <h3 className="text-white text-xl font-bold">{t('technology.quality.title')}</h3>
                            <p className="text-gray-400 text-sm mt-1">{t('technology.quality.subtitle')}</p>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                            {CERTIFICATION_NAMES.map((name, i) => (
                                <div
                                    key={name}
                                    className="text-center p-4 rounded-xl border border-white/8 hover:border-blue-400/30 transition-colors"
                                >
                                    <div className="text-sm font-bold text-white">{name}</div>
                                    <div className="text-[11px] text-gray-500 mt-0.5">{certSubs[i]}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}
