import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircleOutlined, FileTextOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { SectionTitle } from '../ui/SectionTitle';
import { AnimatedSection } from '../ui/AnimatedSection';
import { featuredProducts } from '../../data/products';
import type { Product, ProductType } from '../../types';

const TYPE_CONFIG: Record<
    ProductType,
    { typeKey: string; from: string; to: string; badgeBg: string; badgeText: string }
> = {
    silicone: {
        typeKey: 'silicone',
        from: '#4f46e5',
        to: '#7c3aed',
        badgeBg: 'bg-indigo-50',
        badgeText: 'text-indigo-700',
    },
    polyether: {
        typeKey: 'polyether',
        from: '#d97706',
        to: '#b45309',
        badgeBg: 'bg-amber-50',
        badgeText: 'text-amber-700',
    },
    'fatty-alcohol': {
        typeKey: 'fatty-alcohol',
        from: '#059669',
        to: '#047857',
        badgeBg: 'bg-emerald-50',
        badgeText: 'text-emerald-700',
    },
    emulsion: {
        typeKey: 'emulsion',
        from: '#0891b2',
        to: '#0e7490',
        badgeBg: 'bg-cyan-50',
        badgeText: 'text-cyan-700',
    },
};

const BADGE_CONFIG: Record<string, string> = {
    'Best Seller': 'bg-orange-100 text-orange-700 border-orange-200',
    Premium: 'bg-purple-100 text-purple-700 border-purple-200',
    'High Temp': 'bg-red-100 text-red-700 border-red-200',
    'Eco-Friendly': 'bg-green-100 text-green-700 border-green-200',
};

function ProductCard({ product, index }: { product: Product; index: number }) {
    const tc = TYPE_CONFIG[product.type];
    const { t } = useTranslation();

    return (
        <AnimatedSection delay={index * 0.08} className="h-full">
            <div className="product-card h-full bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm flex flex-col">
                {/* Header gradient */}
                <div
                    className="px-6 pt-6 pb-5"
                    style={{
                        background: `linear-gradient(135deg, ${tc.from}12 0%, ${tc.to}08 100%)`,
                        borderBottom: `3px solid ${tc.from}`,
                    }}
                >
                    <div className="flex items-start justify-between gap-2 mb-2">
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${tc.badgeBg} ${tc.badgeText}`}>
                            {t(`products.typeLabels.${tc.typeKey}`)}
                        </span>
                        {product.badge && (
                            <span
                                className={`px-3 py-1 rounded-full text-sm font-bold border ${BADGE_CONFIG[product.badge] ?? ''}`}
                            >
                                {t(`products.badges.${product.badge}`)}
                            </span>
                        )}
                    </div>
                    <h3 className="text-2xl font-black text-gray-900 tracking-tight">{product.name}</h3>
                    <p className="text-xs text-gray-500 mt-0.5 font-medium">{product.series}</p>
                    <p className="text-sm text-gray-600 mt-2 leading-snug font-medium">
                        {t(`products.taglines.${product.id}`)}
                    </p>
                </div>

                {/* Body */}
                <div className="px-6 py-5 flex-1 flex flex-col gap-4">
                    {/* Specs */}
                    <div className="bg-gray-50 rounded-xl p-4 space-y-2">
                        {[
                            [
                                t('products.specs.appearance'),
                                t(`products.appearances.${product.id}`, { defaultValue: product.specs.appearance }),
                            ],
                            product.specs.solidContent && [
                                t('products.specs.solidContent'),
                                product.specs.solidContent,
                            ],
                            product.specs.viscosity && [t('products.specs.viscosity'), product.specs.viscosity],
                            product.specs.ph && [t('products.specs.ph'), product.specs.ph],
                            product.specs.temperature && [
                                t('products.specs.tempRange'),
                                t(`products.temperatures.${product.id}`, { defaultValue: product.specs.temperature }),
                            ],
                            product.specs.defoamRate && [t('products.specs.defoamRate'), product.specs.defoamRate],
                            product.specs.antifoamRate && [
                                t('products.specs.antifoamRate'),
                                product.specs.antifoamRate,
                            ],
                        ]
                            .filter(Boolean)
                            .map((spec) => {
                                const [k, v] = spec as [string, string];
                                return (
                                    <div key={k} className="flex items-baseline justify-between text-xs gap-2">
                                        <span className="text-gray-500 shrink-0">{k}</span>
                                        <span className="text-gray-800 font-medium text-right">{v}</span>
                                    </div>
                                );
                            })}
                    </div>

                    {/* Features */}
                    <ul className="space-y-1.5 flex-1">
                        {(t(`products.features.${product.id}`, { returnObjects: true }) as string[] | string) instanceof
                        Array
                            ? (t(`products.features.${product.id}`, { returnObjects: true }) as string[])
                                  .slice(0, 3)
                                  .map((f) => (
                                      <li key={f} className="flex items-start gap-2 text-xs text-gray-600">
                                          <CheckCircleOutlined
                                              className="shrink-0 mt-0.5"
                                              style={{ color: tc.from, fontSize: 12 }}
                                          />
                                          <span>{f}</span>
                                      </li>
                                  ))
                            : product.features.slice(0, 3).map((f) => (
                                  <li key={f} className="flex items-start gap-2 text-xs text-gray-600">
                                      <CheckCircleOutlined
                                          className="shrink-0 mt-0.5"
                                          style={{ color: tc.from, fontSize: 12 }}
                                      />
                                      <span>{f}</span>
                                  </li>
                              ))}
                    </ul>

                    {/* Applications */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                        {product.applications.slice(0, 3).map((app) => (
                            <span key={app} className="px-2 py-0.5 bg-gray-100 text-gray-600 text-[11px] rounded-full">
                                {t(`products.appTags.${app}`, { defaultValue: app })}
                            </span>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2 pt-1">
                        <a
                            href="#contact"
                            className="flex-1 py-2.5 text-sm font-semibold text-center rounded-xl text-white transition-all hover:opacity-90 hover:scale-[1.02] active:scale-95"
                            style={{ background: `linear-gradient(135deg, ${tc.from}, ${tc.to})` }}
                        >
                            {t('products.requestSample')}
                        </a>
                        <a
                            href="#contact"
                            className="px-3 py-2.5 rounded-xl border border-gray-200 text-gray-500 hover:border-gray-300 hover:text-gray-700 transition-colors"
                            title="Request TDS"
                        >
                            <FileTextOutlined />
                        </a>
                    </div>
                </div>
            </div>
        </AnimatedSection>
    );
}

const FILTER_KEYS = ['all', 'silicone', 'polyether', 'fatty-alcohol', 'emulsion'] as const;

type FilterKey = (typeof FILTER_KEYS)[number];

export function Products() {
    const [filter, setFilter] = useState<FilterKey>('all');
    const { t } = useTranslation();

    const displayed = filter === 'all' ? featuredProducts : featuredProducts.filter((p) => p.type === filter);

    return (
        <section id="products" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <SectionTitle
                    badge={t('products.badge')}
                    title={t('products.title')}
                    titleAccent={t('products.titleAccent')}
                    subtitle={t('products.subtitle')}
                />

                {/* Filter tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-wrap items-center justify-center gap-2 mt-10 mb-10"
                >
                    {FILTER_KEYS.map((key) => (
                        <button
                            key={key}
                            type="button"
                            onClick={() => setFilter(key)}
                            className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
                                filter === key
                                    ? 'bg-blue-600 border-blue-600 text-white shadow-sm'
                                    : 'bg-white border-gray-200 text-gray-600 hover:border-blue-300 hover:text-blue-600'
                            }`}
                        >
                            {t(
                                `products.filter${key.charAt(0).toUpperCase()}${key.slice(1).replace(/-([a-z])/g, (_, c) => c.toUpperCase())}`,
                            )}
                        </button>
                    ))}
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {displayed.map((product, i) => (
                        <ProductCard key={product.id} product={product} index={i} />
                    ))}
                </div>

                {/* View all link */}
                <AnimatedSection delay={0.3} className="text-center mt-12">
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-200 bg-white text-gray-700 font-medium text-sm hover:border-blue-300 hover:text-blue-600 transition-all duration-200 hover:shadow-sm"
                    >
                        <FileTextOutlined />
                        {t('common.requestCatalog')}
                    </a>
                </AnimatedSection>
            </div>
        </section>
    );
}
