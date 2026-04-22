import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { SectionTitle } from '../ui/SectionTitle';
import { AnimatedSection } from '../ui/AnimatedSection';

const MILESTONE_YEARS = ['2012', '2015', '2018', '2021', '2024'];

export function About() {
    const { t } = useTranslation();
    const milestoneItems = t('about.milestoneItems', { returnObjects: true }) as string[];
    const teamMembers = t('about.teamMembers', { returnObjects: true }) as Array<{
        name: string;
        title: string;
        note: string;
    }>;
    return (
        <section id="about" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Left: Company story */}
                    <div>
                        <SectionTitle
                            badge={t('about.badge')}
                            title={t('about.title')}
                            titleAccent={t('about.titleAccent')}
                            subtitle=""
                            center={false}
                        />
                        <AnimatedSection delay={0.15} className="mt-6 space-y-4 text-gray-600 leading-relaxed">
                            <p>{t('about.story1')}</p>
                            <p>{t('about.story2')}</p>
                            <p>{t('about.story3')}</p>
                        </AnimatedSection>

                        {/* Values */}
                        <AnimatedSection delay={0.2} className="mt-8 grid grid-cols-2 gap-4">
                            {(['base', 'capacity', 'rd', 'markets'] as const).map((key) => (
                                <div key={key} className="bg-gray-50 rounded-xl p-4">
                                    <div className="text-xs text-gray-500 uppercase tracking-wide font-medium">
                                        {t(`about.stats.${key}.label`)}
                                    </div>
                                    <div className="text-base font-bold text-gray-900 mt-1">
                                        {t(`about.stats.${key}.value`)}
                                    </div>
                                </div>
                            ))}
                        </AnimatedSection>
                    </div>

                    {/* Right: Timeline + Team */}
                    <div className="space-y-8">
                        {/* Timeline */}
                        <AnimatedSection delay={0.2} direction="right">
                            <div className="bg-gray-50 rounded-2xl p-6">
                                <h3 className="font-bold text-gray-900 mb-5">{t('about.milestones')}</h3>
                                <div className="relative">
                                    <div className="absolute left-[52px] top-0 bottom-0 w-px bg-gray-200" />
                                    <div className="space-y-5">
                                        {MILESTONE_YEARS.map((year, i) => (
                                            <motion.div
                                                key={year}
                                                initial={{ opacity: 0, x: 20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: i * 0.1 }}
                                                className="flex items-start gap-4"
                                            >
                                                <div className="w-[44px] text-right shrink-0">
                                                    <span className="text-xs font-bold text-blue-600">{year}</span>
                                                </div>
                                                <div className="relative">
                                                    <div className="w-2.5 h-2.5 rounded-full bg-blue-500 border-2 border-white shadow mt-0.5 relative z-10" />
                                                </div>
                                                <p className="text-sm text-gray-600 flex-1 -mt-0.5">
                                                    {milestoneItems[i]}
                                                </p>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>

                        {/* Team */}
                        <AnimatedSection delay={0.3} direction="right">
                            <div>
                                <h3 className="font-bold text-gray-900 mb-4">{t('about.team')}</h3>
                                <div className="space-y-3">
                                    {teamMembers.map((member) => (
                                        <div
                                            key={member.name}
                                            className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:border-blue-100 hover:bg-blue-50/30 transition-colors"
                                        >
                                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white font-bold text-sm shrink-0">
                                                {member.name.charAt(member.name.lastIndexOf(' ') + 1)}
                                            </div>
                                            <div>
                                                <div className="text-sm font-bold text-gray-900">{member.name}</div>
                                                <div className="text-xs text-blue-600 font-medium">{member.title}</div>
                                                <div className="text-xs text-gray-500 mt-0.5">{member.note}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </div>
        </section>
    );
}
