import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { stats } from '../../data/applications';

const STAT_KEYS = ['yearsRD', 'productLines', 'exportCountries', 'reorderRate'] as const;

export function Stats() {
    const { t } = useTranslation();
    return (
        <section className="bg-white border-b border-gray-100">
            <div className="max-w-6xl mx-auto px-6 py-12">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x divide-gray-100">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={STAT_KEYS[i]}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="text-center px-6 py-2"
                        >
                            <div className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight tabular-nums">
                                {stat.value}
                                <span className="text-blue-600">{stat.suffix}</span>
                            </div>
                            <div className="mt-1.5 text-sm text-gray-500 font-medium">{t(`stats.${STAT_KEYS[i]}`)}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
