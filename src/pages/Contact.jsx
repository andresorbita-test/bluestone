import React from 'react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
    const { t } = useTranslation();

    return (
        <div className="text-on-background selection:bg-secondary-container selection:text-on-secondary-container bg-surface min-h-screen">
            {/* Hero Section */}
            <header className="pt-48 pb-24 px-6 md:px-24 bg-gradient-to-br from-surface to-surface-container-low bg-noise overflow-hidden">
                <div className="max-w-7xl mx-auto relative z-10">
                    <span className="font-label text-xs uppercase tracking-[0.2em] text-secondary mb-6 block">{t('contact_badge')}</span>
                    <h1 className="text-6xl md:text-8xl font-semibold text-primary tracking-tighter leading-none mb-8">{t('contact_title')}</h1>
                    <p className="text-lg md:text-xl text-on-surface-variant max-w-xl leading-relaxed">
                        {t('contact_subtitle')}
                    </p>
                </div>
            </header>

            {/* Contact Grid */}
            <main className="py-24 px-6 md:px-24">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
                    {/* Left Column: Form */}
                    <section className="lg:col-span-7 bg-surface-container-lowest rounded-xl p-8 md:p-12 shadow-[0_20px_80px_rgba(15,42,68,0.04)]">
                        <h2 className="text-2xl font-semibold text-primary mb-10">{t('contact_form_title')}</h2>

                        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="group">
                                    <label className="block text-xs font-label uppercase tracking-widest text-on-surface-variant/70 mb-2 group-focus-within:text-secondary transition-colors">{t('contact_name')}</label>
                                    <input type="text" placeholder={t('contact_name_ph')} className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-secondary focus:ring-0 transition-all py-2 placeholder:text-on-surface-variant/30" />
                                </div>
                                <div className="group">
                                    <label className="block text-xs font-label uppercase tracking-widest text-on-surface-variant/70 mb-2 group-focus-within:text-secondary transition-colors">Email</label>
                                    <input type="email" placeholder={t('contact_email_ph')} className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-secondary focus:ring-0 transition-all py-2 placeholder:text-on-surface-variant/30" />
                                </div>
                            </div>
                            
                            <div className="group">
                                <label className="block text-xs font-label uppercase tracking-widest text-on-surface-variant/70 mb-2 group-focus-within:text-secondary transition-colors">{t('contact_subject')}</label>
                                <input type="text" placeholder={t('contact_subject_ph')} className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-secondary focus:ring-0 transition-all py-2 placeholder:text-on-surface-variant/30" />
                            </div>

                            <div className="group">
                                <label className="block text-xs font-label uppercase tracking-widest text-on-surface-variant/70 mb-2 group-focus-within:text-secondary transition-colors">{t('contact_message')}</label>
                                <textarea rows="4" placeholder={t('contact_message_ph')} className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-secondary focus:ring-0 transition-all py-2 placeholder:text-on-surface-variant/30 resize-none"></textarea>
                            </div>

                            <button type="submit" className="arctic-gradient text-white px-12 py-4 rounded-xl text-sm font-semibold tracking-wide hover:scale-[1.03] active:scale-[0.98] transition-all flex items-center gap-3">
                                {t('contact_send')}
                                <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </button>
                        </form>
                    </section>

                    {/* Right Column: Info */}
                    <aside className="lg:col-span-5 space-y-12 lg:pt-12">
                        <div className="space-y-4">
                            <span className="font-label text-xs uppercase tracking-[0.2em] text-secondary">{t('contact_location_label')}</span>
                            <p className="text-xl text-primary font-medium leading-snug">Alonso de Córdova 3890,<br/>Vitacura, Santiago</p>
                        </div>
                        
                        <div className="space-y-4">
                            <span className="font-label text-xs uppercase tracking-[0.2em] text-secondary">{t('contact_direct_label')}</span>
                            <div className="space-y-2">
                                <p className="font-mono text-lg text-primary">+56 2 2345 6789</p>
                                <a href="mailto:hola@bluestone.cl" className="block text-lg text-secondary underline decoration-secondary/30 underline-offset-4 hover:decoration-secondary transition-all">hola@bluestone.cl</a>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <span className="font-label text-xs uppercase tracking-[0.2em] text-secondary">{t('contact_hours_label')}</span>
                            <div className="flex justify-between max-w-xs text-on-surface-variant">
                                <span>{t('contact_hours_weekdays')}</span>
                                <span className="font-mono">10:00 — 19:30</span>
                            </div>
                            <div className="flex justify-between max-w-xs text-on-surface-variant">
                                <span>{t('contact_hours_saturday')}</span>
                                <span className="font-mono">11:00 — 14:00</span>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-outline-variant/30">
                            <a href="#" className="group flex items-center justify-between p-6 bg-surface-container-high rounded-xl hover:bg-surface-container-highest transition-all">
                                <div>
                                    <p className="text-primary font-semibold">{t('contact_faq_link')}</p>
                                    <p className="text-sm text-on-surface-variant mt-1">{t('contact_faq_desc')}</p>
                                </div>
                                <span className="material-symbols-outlined text-secondary group-hover:translate-x-2 transition-transform">chevron_right</span>
                            </a>
                        </div>
                    </aside>
                </div>
            </main>

            {/* Map Section */}
            <section className="w-full h-[500px] relative overflow-hidden bg-noise">
                <div className="absolute inset-0 bg-surface-container-highest flex items-center justify-center">
                    <div className="w-full h-full bg-surface-dim relative">
                        <img className="w-full h-full object-cover opacity-40 mix-blend-multiply" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAH_3cLXQX9zXiRRekeBTPVh4LjYfov6Kwp8njGvc17CV91KdjS5zqeEuUm1Gf3NpwKc3bB4BkJOrUO7RuT7ZacS3hmKshWFCIVVofYoTU4U_a9-PmY_rJFpADxZVzKwfwYMlzIea9MnrOg9_Fo-4_xNYUqeK6C3Xy9MzW-Zey1Z4C47rrJhSMXJnpyCzHUlWj0TcSP9Y9v8ojfD0CXyEfSd9OekkzrmPhY0-LAhlZ8wKDKy7O6MToL90tYsrdhJ1Nsvhc009gwPaD" alt="Santiago Map" />
                        
                        {/* Custom Marker */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-2xl ring-8 ring-white/20">
                                <span className="material-symbols-outlined text-white" style={{fontVariationSettings: "'FILL' 1"}}>location_on</span>
                            </div>
                            <div className="mt-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-lg shadow-lg border border-white/50">
                                <p className="text-xs font-bold uppercase tracking-widest text-primary">Bluestone Boutique</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
