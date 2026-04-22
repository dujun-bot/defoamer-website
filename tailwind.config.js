/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
            },
            colors: {
                brand: {
                    50: '#eff6ff',
                    100: '#dbeafe',
                    400: '#60a5fa',
                    500: '#0066CC',
                    600: '#0052CC',
                    700: '#003d99',
                    900: '#001a66',
                },
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            },
            animation: {
                'bubble-rise': 'bubbleRise var(--duration, 12s) var(--delay, 0s) ease-in infinite',
                'fade-up': 'fadeUp 0.6s ease-out both',
                'float': 'float 6s ease-in-out infinite',
                'blob': 'blobMove 8s ease-in-out infinite alternate',
            },
            keyframes: {
                bubbleRise: {
                    '0%': { transform: 'translateY(110vh) scale(0.4)', opacity: '0' },
                    '10%': { opacity: '0.5' },
                    '85%': { opacity: '0.15' },
                    '100%': { transform: 'translateY(-20vh) scale(1.1)', opacity: '0' },
                },
                fadeUp: {
                    '0%': { transform: 'translateY(40px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-16px)' },
                },
                blobMove: {
                    '0%': { transform: 'translate(0, 0) scale(1)' },
                    '33%': { transform: 'translate(40px, -30px) scale(1.1)' },
                    '66%': { transform: 'translate(-20px, 20px) scale(0.95)' },
                    '100%': { transform: 'translate(10px, -10px) scale(1.05)' },
                },
            },
        },
    },
    plugins: [],
};
