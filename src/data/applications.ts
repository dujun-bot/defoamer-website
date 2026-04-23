import type { Application, StatItem } from '../types';

export const applications: Application[] = [
    {
        id: 'paper-pulp',
        name: 'Paper & Pulp',
        description:
            'Control foam in white water systems, pulping, and surface sizing. Our CS and SX series are tested with real paper industry white water at process temperatures.',
        products: ['SX-530', 'CS-300H', 'CS-300L', 'CS-300CD'],
        bgColor: '#f0f9ff',
        iconBg: '#0ea5e9',
        image: '/images/industries/paper-pulp.jpg',
    },
    {
        id: 'daily-chemicals',
        name: 'Daily Chemicals',
        description:
            'Effective defoaming in the emulsification, mixing, and filling of detergents, cosmetics, and personal care products. SX-530 and SX-230 are suited for surfactant-based daily chemical formulation systems.',
        products: ['SX-530', 'SX-230', 'S-2060'],
        bgColor: '#fef9ec',
        iconBg: '#f59e0b',
        image: '/images/industries/daily-chemicals.jpg',
    },
    {
        id: 'metalworking',
        name: 'Metalworking Fluids',
        description:
            'Stable foam suppression in semi-synthetic and fully synthetic cutting fluids, grinding fluids, and rolling oils. SX-230 is specifically formulated and tested for this application.',
        products: ['SX-230', 'SX-460'],
        bgColor: '#f0fdf4',
        iconBg: '#22c55e',
        image: '/images/industries/metalworking.jpg',
    },
    {
        id: 'wastewater',
        name: 'Wastewater Treatment',
        description:
            'Fast-acting foam control in aeration tanks, biological treatment systems, and leachate processing. S-2060 with >70 ml/s defoaming speed handles the most demanding conditions.',
        products: ['S-2060', 'CS-2020', 'CS-1401'],
        bgColor: '#f5f3ff',
        iconBg: '#8b5cf6',
        image: '/images/industries/wastewater.jpg',
    },
    {
        id: 'coatings',
        name: 'Coatings & Paints',
        description:
            'Control foam in water-based coatings, latex paints, and architectural coatings production. SX-530 and SX-460 provide excellent defoaming and foam inhibition in waterborne dispersion systems.',
        products: ['SX-530', 'SX-460', 'SX-230'],
        bgColor: '#fff1f2',
        iconBg: '#ef4444',
        image: '/images/industries/coatings.jpg',
    },
    {
        id: 'petroleum',
        name: 'Petroleum & Energy',
        description:
            'High-efficiency defoaming in petroleum extraction, refining, and fuel desulfurization. SX-460 performs reliably at pH 12+ in high-temperature alkaline environments, suitable for wet FGD systems.',
        products: ['SX-460'],
        bgColor: '#ecfdf5',
        iconBg: '#10b981',
        image: '/images/industries/petroleum.jpg',
    },
    {
        id: 'construction',
        name: 'Construction Chemicals',
        description:
            'Defoaming in polycarboxylate water reducers (PCE), concrete admixtures, and cementitious systems. SX-460 and CS-2020 are compatible with alkaline concrete environments.',
        products: ['SX-460', 'CS-2020'],
        bgColor: '#fff7ed',
        iconBg: '#f97316',
        image: '/images/industries/construction.jpg',
    },
    {
        id: 'textiles',
        name: 'Textiles & Sizing',
        description:
            'Control foam in starch paste, acrylic slurries, dyeing baths, and textile auxiliaries. SX-230 and SX-530 are optimized and tested with actual textile process media.',
        products: ['SX-230', 'SX-530'],
        bgColor: '#fdf4ff',
        iconBg: '#d946ef',
        image: '/images/industries/textiles.jpg',
    },
];

export const stats: StatItem[] = [
    { value: '10', label: 'Years of R&D Experience', suffix: '+' },
    { value: '9', label: 'Product Lines', suffix: '' },
    { value: '50', label: 'Export Countries', suffix: '+' },
    { value: '98', label: 'Customer Reorder Rate', suffix: '%' },
];
