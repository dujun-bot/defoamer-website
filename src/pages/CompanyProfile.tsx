import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowLeftOutlined } from '@ant-design/icons';

interface CompanyProfileProps {
    onNavigate: (page: 'home' | 'company') => void;
}

function StatCard({ value, label }: { value: string; label: string }) {
    return (
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
            <div className="text-4xl font-bold text-white mb-1">{value}</div>
            <div className="text-blue-200 text-sm">{label}</div>
        </div>
    );
}

function SectionCard({ title, content }: { title: string; content: string }) {
    return (
        <motion.div
            className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
        >
            <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
            <p className="text-gray-600 leading-relaxed">{content}</p>
        </motion.div>
    );
}

export function CompanyProfile({ onNavigate }: CompanyProfileProps) {
    const { t } = useTranslation();

    const stats = ['years', 'series', 'varieties', 'countries', 'capacity'] as const;

    const handleBackToHome = () => {
        onNavigate('home');
        // Scroll to top after navigation
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 0);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero */}
            <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-700 py-24 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t('company.pageTitle')}</h1>
                        <p className="text-blue-200 text-lg md:text-xl">{t('company.subtitle')}</p>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {stats.map((key) => (
                            <StatCard
                                key={key}
                                value={t(`company.stats.${key}.value`)}
                                label={t(`company.stats.${key}.label`)}
                            />
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-6 py-16">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <SectionCard title={t('company.intro.title')} content={t('company.intro.content')} />
                    <SectionCard title={t('company.philosophy.title')} content={t('company.philosophy.content')} />
                </div>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <SectionCard title={t('company.industries.title')} content={t('company.industries.content')} />
                    <SectionCard title={t('company.productRange.title')} content={t('company.productRange.content')} />
                </div>

                {/* Manufacturing */}
                <motion.div
                    className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                >
                    <h3 className="text-xl font-bold text-gray-900 mb-6">{t('company.manufacturing.title')}</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-blue-50 rounded-xl p-6">
                            <h4 className="font-semibold text-blue-800 mb-2">
                                {t('company.manufacturing.facility1Name')}
                            </h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {t('company.manufacturing.facility1Detail')}
                            </p>
                        </div>
                        <div className="bg-cyan-50 rounded-xl p-6">
                            <h4 className="font-semibold text-cyan-800 mb-2">
                                {t('company.manufacturing.facility2Name')}
                            </h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {t('company.manufacturing.facility2Detail')}
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Back to home */}
                <div className="text-center">
                    <button
                        type="button"
                        onClick={handleBackToHome}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm"
                    >
                        <ArrowLeftOutlined />
                        {t('company.backToHome')}
                    </button>
                </div>
            </div>
        </div>
    );
}
