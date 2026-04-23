export type ProductType = 'silicone' | 'polyether' | 'fatty-alcohol' | 'emulsion';

export interface ProductSpec {
    appearance: string;
    solidContent?: string;
    viscosity?: string;
    ph?: string;
    ionicType?: string;
    temperature?: string;
    defoamRate?: string;
    antifoamRate?: string;
    shelfLife?: string;
}

export interface Product {
    id: string;
    name: string;
    series: string;
    type: ProductType;
    tagline: string;
    description: string;
    features: string[];
    applications: string[];
    specs: ProductSpec;
    badge?: 'Best Seller' | 'Premium' | 'High Temp' | 'Eco-Friendly';
    featured: boolean;
    packaging: string;
}

export interface Application {
    id: string;
    name: string;
    description: string;
    products: string[];
    bgColor: string;
    iconBg: string;
    image?: string;
}

export interface StatItem {
    value: string;
    label: string;
    suffix?: string;
}

export interface ContactFormValues {
    name: string;
    company: string;
    email: string;
    phone?: string;
    product?: string;
    message: string;
}
