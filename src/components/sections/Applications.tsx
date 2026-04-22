import { motion } from 'framer-motion';
import {
    ExperimentOutlined,
    ToolOutlined,
    ControlOutlined,
    FilterOutlined,
    CodeSandboxOutlined,
    ThunderboltOutlined,
    HomeOutlined,
    ScissorOutlined,
} from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { SectionTitle } from '../ui/SectionTitle';
import { AnimatedSection } from '../ui/AnimatedSection';
import { applications } from '../../data/applications';
import type { Application } from '../../types';

const ICONS: Record<string, React.ReactNode> = {
    'paper-pulp': <ExperimentOutlined />,
    'industrial-cleaning': <ToolOutlined />,
    metalworking: <ControlOutlined />,
    wastewater: <FilterOutlined />,
    fermentation: <CodeSandboxOutlined />,
    desulfurization: <ThunderboltOutlined />,
    construction: <HomeOutlined />,
    textiles: <ScissorOutlined />,
};

function AppCard({ app, index }: { app: Application; index: number }) {
    const { t } = useTranslation();
    return (
        <AnimatedSection delay={index * 0.06}>
            <motion.div
                whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}
                className="group bg-white rounded-2xl p-6 border border-gray-100 cursor-default h-full transition-shadow duration-300"
            >
                {/* Icon */}
                <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-xl text-white mb-4 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: app.iconBg }}
                >
                    {ICONS[app.id] ?? <ExperimentOutlined />}
                </div>

                <h3 className="text-base font-bold text-gray-900 mb-2">{t(`applications.items.${app.id}.name`)}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                    {t(`applications.items.${app.id}.description`)}
                </p>

                {/* Product tags */}
                <div className="flex flex-wrap gap-1.5">
                    {app.products.map((p) => (
                        <span
                            key={p}
                            className="px-2 py-0.5 text-[11px] font-semibold rounded-full"
                            style={{
                                background: `${app.iconBg}18`,
                                color: app.iconBg,
                                border: `1px solid ${app.iconBg}30`,
                            }}
                        >
                            {p}
                        </span>
                    ))}
                </div>
            </motion.div>
        </AnimatedSection>
    );
}

export function Applications() {
    const { t } = useTranslation();
    return (
        <section id="applications" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <SectionTitle
                    badge={t('applications.badge')}
                    title={t('applications.title')}
                    titleAccent={t('applications.titleAccent')}
                    subtitle={t('applications.subtitle')}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
                    {applications.map((app, i) => (
                        <AppCard key={app.id} app={app} index={i} />
                    ))}
                </div>

                {/* CTA Banner */}
                <AnimatedSection delay={0.3} className="mt-14">
                    <div
                        className="rounded-3xl p-8 sm:p-12 text-center"
                        style={{
                            background: 'linear-gradient(135deg, #0052CC 0%, #0891b2 100%)',
                        }}
                    >
                        <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">
                            {t('applications.cta.title')}
                        </h3>
                        <p className="text-blue-100 max-w-xl mx-auto mb-8 text-base">
                            {t('applications.cta.subtitle')}
                        </p>
                        <a
                            href="#contact"
                            className="inline-flex items-center px-8 py-3.5 rounded-full bg-white text-blue-700 font-bold text-sm hover:bg-blue-50 transition-all duration-200 hover:scale-105 active:scale-95"
                        >
                            {t('applications.cta.button')}
                        </a>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}
