import { useEffect, useState } from 'react';
import { ConfigProvider } from 'antd';
import { useTranslation } from 'react-i18next';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Stats } from './components/sections/Stats';
import { Products } from './components/sections/Products';
import { Applications } from './components/sections/Applications';
import { Technology } from './components/sections/Technology';
import { About } from './components/sections/About';
import { Contact } from './components/sections/Contact';
import { CompanyProfile } from './pages/CompanyProfile';

const theme = {
    token: {
        colorPrimary: '#0066CC',
        fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
        borderRadius: 8,
    },
};

export default function App() {
    const { i18n } = useTranslation();
    const [currentPage, setCurrentPage] = useState<'home' | 'company'>('home');

    useEffect(() => {
        document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = i18n.language;
    }, [i18n.language]);

    return (
        <ConfigProvider theme={theme} direction={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
            <div className="min-h-screen">
                <Header onNavigate={setCurrentPage} />
                {currentPage === 'company' ? (
                    <CompanyProfile onNavigate={setCurrentPage} />
                ) : (
                    <main>
                        <Hero />
                        <Stats />
                        <Products />
                        <Applications />
                        <Technology />
                        <About />
                        <Contact />
                    </main>
                )}
                {currentPage === 'home' && <Footer />}
            </div>
        </ConfigProvider>
    );
}
