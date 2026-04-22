import { useState } from 'react';
import { Form, Input, Select, message } from 'antd';
import { MailOutlined, PhoneOutlined, EnvironmentOutlined, WhatsAppOutlined, SendOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { SectionTitle } from '../ui/SectionTitle';
import { AnimatedSection } from '../ui/AnimatedSection';
import type { ContactFormValues } from '../../types';

const { TextArea } = Input;

const PRODUCTS = [
    'SX-530 Emulsion Defoamer',
    'SX-230 Organosilicone Emulsion',
    'S-2060 Organosilicone Emulsion',
    'SX-460 Polyether Defoamer',
    'CS-2020 Polyether Defoamer',
    'CS-300H Fatty Alcohol Defoamer',
    'CS-300L Fatty Alcohol Defoamer',
    'CS-300CD Fatty Alcohol Defoamer',
    'CS-1401 Polyether Ester Defoamer',
    'Custom Formulation Request',
    'Full Catalog Request',
];

const CONTACT_INFO = [
    {
        icon: <MailOutlined />,
        label: 'Email',
        value: 'duziteng1987@gmail.com',
        href: 'mailto:duziteng1987@gmail.com',
        color: '#60a5fa',
    },
    {
        icon: <PhoneOutlined />,
        label: 'Phone',
        value: '+86 130-5158-4110',
        href: 'tel:+8613051584110',
        color: '#34d399',
    },
    {
        icon: <WhatsAppOutlined />,
        label: 'WhatsApp',
        value: '+86 130-5158-4110',
        href: 'https://wa.me/8613051584110',
        color: '#4ade80',
    },
    {
        icon: <EnvironmentOutlined />,
        label: 'Address',
        value: 'No. 88 Chemical Industry Park, Yangzhou, Jiangsu 225001, China',
        href: undefined,
        color: '#f9a8d4',
    },
];

export function Contact() {
    const { t } = useTranslation();
    const [form] = Form.useForm<ContactFormValues>();
    const [loading, setLoading] = useState(false);
    const [sent, setSent] = useState(false);

    const sendInquiryEmail = async (values: ContactFormValues) => {
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        const missingKeys = [
            !serviceId ? 'VITE_EMAILJS_SERVICE_ID' : null,
            !templateId ? 'VITE_EMAILJS_TEMPLATE_ID' : null,
            !publicKey ? 'VITE_EMAILJS_PUBLIC_KEY' : null,
        ].filter(Boolean) as string[];

        if (missingKeys.length > 0) {
            throw new Error(`缺少邮件配置：${missingKeys.join(', ')}`);
        }

        const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                service_id: serviceId,
                template_id: templateId,
                user_id: publicKey,
                template_params: {
                    to_email: 'duziteng1987@gmail.com',
                    from_name: values.name,
                    from_email: values.email,
                    from_phone: values.phone || 'Not provided',
                    from_company: values.company,
                    product_interest: values.product || 'Not specified',
                    message: values.message,
                    reply_to: values.email,
                },
            }),
        });

        if (!response.ok) {
            const responseText = await response.text();
            throw new Error(`EmailJS 请求失败（${response.status}）：${responseText || 'unknown error'}`);
        }
    };

    const handleSubmit = async (values: ContactFormValues) => {
        setLoading(true);

        try {
            await sendInquiryEmail(values);

            setSent(true);
            form.resetFields();
            message.success(t('contact.sent.title'));
        } catch (error) {
            console.error('Failed to send email:', error);
            const reason = error instanceof Error ? error.message : '未知错误';
            message.error(`发送失败：${reason}`);
        } finally {
            setLoading(false);
        }
    };

    const inputStyle = {
        background: 'rgba(255,255,255,0.07)',
        border: '1px solid rgba(255,255,255,0.12)',
        color: 'white',
        borderRadius: '12px',
    };

    return (
        <section
            id="contact"
            className="py-24 relative overflow-hidden"
            style={{ background: 'linear-gradient(160deg, #050e1c 0%, #020c1b 100%)' }}
        >
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute bottom-0 right-1/4 w-96 h-96 opacity-10 blur-3xl rounded-full"
                    style={{ background: 'radial-gradient(circle, #2563eb, transparent)' }}
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <SectionTitle
                    badge={t('contact.badge')}
                    title={t('contact.title')}
                    titleAccent={t('contact.titleAccent')}
                    subtitle={t('contact.subtitle')}
                    dark
                />

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mt-14">
                    <div className="lg:col-span-2 space-y-4">
                        {CONTACT_INFO.map((info, i) => (
                            <AnimatedSection key={info.label} delay={i * 0.08} direction="left">
                                {info.href ? (
                                    <a
                                        href={info.href}
                                        target={info.href.startsWith('http') ? '_blank' : undefined}
                                        rel="noopener noreferrer"
                                        className="flex items-start gap-4 p-5 rounded-2xl border border-white/8 bg-white/4 hover:bg-white/8 hover:border-white/16 transition-all group"
                                    >
                                        <span
                                            className="text-xl mt-0.5 transition-transform duration-300 group-hover:scale-110"
                                            style={{ color: info.color }}
                                        >
                                            {info.icon}
                                        </span>
                                        <div>
                                            <p className="text-white font-semibold text-sm">{info.label}</p>
                                            <p className="text-gray-400 text-sm">{info.value}</p>
                                        </div>
                                    </a>
                                ) : (
                                    <div className="flex items-start gap-4 p-5 rounded-2xl border border-white/8 bg-white/4">
                                        <span className="text-xl mt-0.5" style={{ color: info.color }}>
                                            {info.icon}
                                        </span>
                                        <div>
                                            <p className="text-white font-semibold text-sm">{info.label}</p>
                                            <p className="text-gray-400 text-sm">{info.value}</p>
                                        </div>
                                    </div>
                                )}
                            </AnimatedSection>
                        ))}

                        <AnimatedSection delay={0.35} direction="left">
                            <div className="p-5 rounded-2xl border border-blue-500/20 bg-blue-500/8">
                                <div className="text-blue-300 font-semibold text-sm mb-1">
                                    {t('contact.fastResponse.title')}
                                </div>
                                <div className="text-gray-400 text-sm whitespace-pre-line">
                                    {t('contact.fastResponse.text')}
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>

                    <AnimatedSection delay={0.15} className="lg:col-span-3">
                        <div className="rounded-2xl border border-white/10 bg-white/4 backdrop-blur-sm p-8">
                            {sent ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-12"
                                >
                                    <div className="text-5xl mb-4">OK</div>
                                    <h3 className="text-white text-xl font-bold mb-2">{t('contact.sent.title')}</h3>
                                    <p className="text-gray-400 mb-6">{t('contact.sent.subtitle')}</p>
                                    <button
                                        type="button"
                                        onClick={() => setSent(false)}
                                        className="px-6 py-2.5 rounded-full border border-white/20 text-white text-sm hover:bg-white/10 transition-colors"
                                    >
                                        {t('contact.sent.sendAnother')}
                                    </button>
                                </motion.div>
                            ) : (
                                <Form form={form} layout="vertical" onFinish={handleSubmit} className="contact-form">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <Form.Item
                                            name="name"
                                            label={
                                                <span className="text-gray-300 text-sm">{t('contact.form.name')}</span>
                                            }
                                            rules={[{ required: true, message: t('contact.form.nameRequired') }]}
                                        >
                                            <Input
                                                placeholder={t('contact.form.namePlaceholder')}
                                                size="large"
                                                style={inputStyle}
                                                className="placeholder-gray-600"
                                            />
                                        </Form.Item>
                                        <Form.Item
                                            name="company"
                                            label={
                                                <span className="text-gray-300 text-sm">
                                                    {t('contact.form.company')}
                                                </span>
                                            }
                                            rules={[{ required: true, message: t('contact.form.companyRequired') }]}
                                        >
                                            <Input
                                                placeholder={t('contact.form.companyPlaceholder')}
                                                size="large"
                                                style={inputStyle}
                                            />
                                        </Form.Item>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <Form.Item
                                            name="email"
                                            label={
                                                <span className="text-gray-300 text-sm">{t('contact.form.email')}</span>
                                            }
                                            rules={[
                                                { required: true, message: t('contact.form.emailRequired') },
                                                { type: 'email', message: t('contact.form.emailInvalid') },
                                            ]}
                                        >
                                            <Input
                                                placeholder={t('contact.form.emailPlaceholder')}
                                                size="large"
                                                style={inputStyle}
                                            />
                                        </Form.Item>
                                        <Form.Item
                                            name="phone"
                                            label={
                                                <span className="text-gray-300 text-sm">{t('contact.form.phone')}</span>
                                            }
                                        >
                                            <Input
                                                placeholder={t('contact.form.phonePlaceholder')}
                                                size="large"
                                                style={inputStyle}
                                            />
                                        </Form.Item>
                                    </div>

                                    <Form.Item
                                        name="product"
                                        label={
                                            <span className="text-gray-300 text-sm">{t('contact.form.product')}</span>
                                        }
                                    >
                                        <Select
                                            placeholder={t('contact.form.productPlaceholder')}
                                            size="large"
                                            options={PRODUCTS.map((p) => ({ value: p, label: p }))}
                                            style={{ borderRadius: 12 }}
                                            dropdownStyle={{
                                                background: '#1e293b',
                                                border: '1px solid rgba(255,255,255,0.1)',
                                            }}
                                        />
                                    </Form.Item>

                                    <Form.Item
                                        name="message"
                                        label={
                                            <span className="text-gray-300 text-sm">{t('contact.form.message')}</span>
                                        }
                                        rules={[{ required: true, message: t('contact.form.messageRequired') }]}
                                    >
                                        <TextArea
                                            rows={4}
                                            placeholder={t('contact.form.messagePlaceholder')}
                                            style={{ ...inputStyle, resize: 'none' }}
                                        />
                                    </Form.Item>

                                    <Form.Item className="mb-0">
                                        <button
                                            type="submit"
                                            disabled={loading}
                                            className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-base transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
                                        >
                                            {loading ? (
                                                <>
                                                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                    {t('contact.form.sending')}
                                                </>
                                            ) : (
                                                <>
                                                    <SendOutlined />
                                                    {t('contact.form.submit')}
                                                </>
                                            )}
                                        </button>
                                    </Form.Item>
                                </Form>
                            )}
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
}
