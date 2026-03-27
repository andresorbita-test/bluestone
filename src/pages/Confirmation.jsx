import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Confirmation = () => {
    const { t } = useTranslation();

    return (
        <div className="text-on-background bg-surface min-h-screen">
            <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left Column: Celebration & Core Info */}
                    <div className="lg:col-span-7 space-y-8">
                        <section className="bg-surface-container-low p-10 md:p-16 rounded-xl relative overflow-hidden">
                            <div className="relative z-10">
                                <div className="w-16 h-16 rounded-full bg-secondary-container flex items-center justify-center mb-8">
                                    <span className="material-symbols-outlined text-on-secondary-container text-4xl" style={{fontVariationSettings: "'FILL' 0, 'wght' 600"}}>check</span>
                                </div>
                                <h1 className="text-display-lg text-4xl md:text-5xl font-headline font-semibold text-primary mb-6 tracking-tight leading-tight">
                                    {t('conf_title')}
                                </h1>
                                <p className="text-lg text-on-surface-variant max-w-lg leading-relaxed mb-8">
                                    {t('conf_subtitle_1')}<span className="font-bold text-primary">#BST-8842</span>{t('conf_subtitle_2')}
                                </p>

                                <div className="flex flex-wrap gap-4">
                                    <Link to="/" className="arctic-gradient text-white px-10 py-4 rounded-xl font-label text-sm uppercase tracking-widest hover:scale-105 transition-transform">
                                        {t('conf_back_btn')}
                                    </Link>
                                </div>
                            </div>
                            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
                                <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_eQ5LAJUZ0s_ZSOtgiJ6kcItdnE13JsOAkNBJk8yVbRy71PdRSThop0ybpFo6p2HCruUXsbKmTFqJ2c2P60Uoyc2qwXCszepcCX5C1M72XAmtun0Y7RwbZrV2y1V0VJnLDoC5bQ9Lq1YOuQyFOsZgoWNpvH0tyeZVHdEyEdwtePBmH9HdZQA1IzXWGpi225nzglT9GGRGzu5XLRrj9zAETJEL3Mcn4jIvtT7LDkfTmWAOYhjMuCc3LtuVCVQPCSliOPIJ8RNNjZdk" alt="Lapis Texture" />
                            </div>
                        </section>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Shipping Details */}
                            <section className="bg-surface-container p-8 rounded-xl">
                                <h3 className="font-label text-xs uppercase tracking-[0.2em] text-secondary mb-6">{t('conf_shipping_title')}</h3>
                                <div className="space-y-4">
                                    <div>
                                        <p className="text-xs text-on-surface-variant font-label uppercase mb-1">{t('conf_client')}</p>
                                        <p className="text-primary font-medium">Julian Alarcon</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-on-surface-variant font-label uppercase mb-1">{t('conf_address')}</p>
                                        <p className="text-primary font-medium">Av. Vitacura 2670, Depto 1204<br/>Santiago, Chile</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-on-surface-variant font-label uppercase mb-1">{t('conf_est_delivery')}</p>
                                        <p className="text-secondary font-bold font-label">24 Oct - 26 Oct, 2024</p>
                                    </div>
                                </div>
                            </section>

                            {/* Next Steps */}
                            <section className="bg-primary-container p-8 rounded-xl text-on-primary-container">
                                <h3 className="font-label text-xs uppercase tracking-[0.2em] text-secondary-container mb-6">{t('conf_next_steps')}</h3>
                                <ul className="space-y-6">
                                    <li className="flex gap-4">
                                        <span className="material-symbols-outlined text-secondary-container">mail</span>
                                        <p className="text-sm">{t('conf_step1')}</p>
                                    </li>
                                    <li className="flex gap-4">
                                        <span className="material-symbols-outlined text-secondary-container">diamond</span>
                                        <p className="text-sm">{t('conf_step2')}</p>
                                    </li>
                                    <li className="flex gap-4">
                                        <span className="material-symbols-outlined text-secondary-container">local_shipping</span>
                                        <p className="text-sm">{t('conf_step3')}</p>
                                    </li>
                                </ul>
                            </section>
                        </div>
                    </div>

                    {/* Right Column: Order Summary */}
                    <div className="lg:col-span-5 space-y-8">
                        <section className="bg-white p-8 rounded-xl shadow-sm border border-outline-variant/10">
                            <h3 className="font-label text-xs uppercase tracking-[0.2em] text-secondary mb-8">{t('conf_order_summary')}</h3>
                            <div className="space-y-6 mb-10">
                                <div className="flex items-center gap-4">
                                    <div className="w-24 h-24 rounded-lg bg-surface-container-highest overflow-hidden flex-shrink-0">
                                        <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCP8O7srnE-y-c8o8Q47IYPLUg0PnSNIrGwrv-uyi8x5vzAmuyFH5FwHOefsHQF-G-xmTXlZD26qm1Z7QmYo6VA4BXure_6_A4EmzUcyx2W0RmsUQlGNXwTb7H4bjZO8e54I685-D6MkhA18tW94gFSLzkeJhE4s92FysQ-3DttwEjULQRpF7L9HMTZcJGGa7w3kvxfFOrdmRx5uyroDkhPOhfFvNRp9VrREyHi27hLkMp95Tfeb8jooTqSaJf2wQhl1zJ_AxZBWXDF" alt="Bracelet" />
                                    </div>
                                    <div className="flex-grow">
                                        <h4 className="text-primary font-semibold text-sm cursor-pointer hover:text-secondary hover:underline transition-colors"><Link to="/producto/premium">{t('conf_prod_name')}</Link></h4>
                                        <p className="text-xs text-on-surface-variant font-label">{t('conf_prod_desc')}</p>
                                        <p className="font-mono text-sm mt-2 text-secondary">$340.000</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="border-t border-outline-variant/20 pt-6 space-y-3">
                                <div className="flex justify-between text-sm">
                                    <span className="text-on-surface-variant">{t('chk_subtotal')}</span>
                                    <span className="font-mono text-primary">$325.000</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-on-surface-variant">{t('chk_shipping_cost')}</span>
                                    <span className="font-mono text-primary">$15.000</span>
                                </div>
                                <div className="flex justify-between pt-4 mt-2 border-t border-outline-variant/40">
                                    <span className="font-headline font-semibold text-primary">{t('chk_total')}</span>
                                    <span className="font-mono text-xl font-bold text-primary">$340.000</span>
                                </div>
                            </div>
                        </section>

                        {/* Brand Mood Image */}
                        <div className="rounded-xl overflow-hidden h-64 relative group">
                            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKAQ-75o6VF0N28398_EQk5-GcJfRWGIDOK7puTfx4svJKTQpggNol-OHpeAbD79qmkZ4cV137TMviby4RaPPYspclm8MstUztXXphhiu4ZCZCPn1oE8VDarpJTtPmFyzzCMRHXzDM1AdQQvuHypGLEDOfbklcj35ncW5gV3ZTago35mzzVEscNs8S0DouTX7_vJbH3_kfydsqJzIt75w01rAUaGGyjgb4x_p6JTl430PTBcj6AVd0okkGI5yGCgG6dkVL2R_jNSto" alt="Gift box" />
                            <div className="absolute inset-0 bg-primary-container/20 flex items-end p-8">
                                <p className="text-white font-label text-xs uppercase tracking-widest bg-primary/40 backdrop-blur-md px-4 py-2 rounded-full">{t('conf_quality_badge')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Confirmation;
