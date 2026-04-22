import { MailOutlined, PhoneOutlined, EnvironmentOutlined, WhatsAppOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

const PRODUCT_LINKS = [
    { label: 'SX-530 Emulsion Defoamer', href: '#products' },
    { label: 'SX-230 Silicone Defoamer', href: '#products' },
    { label: 'S-2060 Organosilicone', href: '#products' },
    { label: 'SX-460 Polyether Defoamer', href: '#products' },
    { label: 'CS-2020 Polyether Defoamer', href: '#products' },
    { label: 'CS-300 Series', href: '#products' },
];

const APP_LINKS = [
    { label: 'Paper & Pulp', href: '#applications' },
    { label: 'Metalworking Fluids', href: '#applications' },
    { label: 'Wastewater Treatment', href: '#applications' },
    { label: 'Industrial Cleaning', href: '#applications' },
    { label: 'Textiles & Sizing', href: '#applications' },
    { label: 'Construction Chemicals', href: '#applications' },
];

const COMPANY_LINKS = [
    { label: 'About Us', href: '#about' },
    { label: 'Technology', href: '#technology' },
    { label: 'Quality & Certifications', href: '#technology' },
    { label: 'Contact Us', href: '#contact' },
];

function Logo() {
    return (
        <a href="#" className="flex items-center gap-2.5 select-none">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <circle cx="8" cy="16" r="3" fill="white" opacity="0.9" />
                    <circle cx="16" cy="10" r="4" fill="white" opacity="0.7" />
                    <circle cx="5" cy="8" r="2" fill="white" opacity="0.5" />
                    <path d="M8 13V5M16 6V2" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
                </svg>
            </div>
            <div className="leading-none">
                <div className="font-bold text-lg text-white">SinoFoam</div>
                <div className="text-[10px] font-medium tracking-widest uppercase text-blue-400">Technology</div>
            </div>
        </a>
    );
}

export function Footer() {
    const { t } = useTranslation();
    return (
        <footer className="bg-gray-950 text-gray-400">
            {/* Main footer */}
            <div className="max-w-7xl mx-auto px-6 pt-16 pb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <Logo />
                        <p className="mt-4 text-sm leading-relaxed text-gray-500 max-w-xs">{t('footer.tagline')}</p>
                        <div className="mt-6 space-y-2.5 text-sm">
                            <a
                                href="mailto:info@sinofoam-tech.com"
                                className="flex items-center gap-2.5 hover:text-blue-400 transition-colors"
                            >
                                <MailOutlined /> info@sinofoam-tech.com
                            </a>
                            <a
                                href="tel:+864008001234"
                                className="flex items-center gap-2.5 hover:text-blue-400 transition-colors"
                            >
                                <PhoneOutlined /> +86 400-800-1234
                            </a>
                            <a
                                href="https://wa.me/8613800001234"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2.5 hover:text-green-400 transition-colors"
                            >
                                <WhatsAppOutlined /> +86 138-0000-1234
                            </a>
                            <div className="flex items-start gap-2.5">
                                <EnvironmentOutlined className="mt-0.5 shrink-0" />
                                <span>{t('contact.info.addressValue')}</span>
                            </div>
                        </div>
                    </div>

                    {/* Products */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">{t('footer.columns.products')}</h3>
                        <ul className="space-y-2">
                            {PRODUCT_LINKS.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-gray-500 hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Applications */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">{t('footer.columns.applications')}</h3>
                        <ul className="space-y-2">
                            {APP_LINKS.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-gray-500 hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">{t('footer.columns.company')}</h3>
                        <ul className="space-y-2">
                            {COMPANY_LINKS.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-gray-500 hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-6">
                            <h4 className="text-white text-sm font-semibold mb-3">
                                {t('footer.columns.certifications')}
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {['ISO 9001', 'REACH', 'RoHS', 'NP/APEO Free'].map((cert) => (
                                    <span
                                        key={cert}
                                        className="px-2.5 py-1 text-xs border border-gray-700 text-gray-400 rounded-md"
                                    >
                                        {cert}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600">
                    <span>{t('footer.copyright')}</span>
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-gray-400 transition-colors">
                            Privacy Policy
                        </a>
                        <a href="#" className="hover:text-gray-400 transition-colors">
                            Terms of Use
                        </a>
                        <a href="#" className="hover:text-gray-400 transition-colors">
                            SDS Downloads
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
