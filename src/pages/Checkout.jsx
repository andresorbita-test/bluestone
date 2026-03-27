import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Checkout = () => {
    const { t } = useTranslation();

    return (
        <div className="bg-surface font-body text-on-surface antialiased min-h-screen">
            <main className="max-w-7xl mx-auto pt-32 pb-24 px-6 lg:px-12">
                <div className="mb-12">
                    <Link to="/carrito" className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-all group">
                        <span className="material-symbols-outlined text-sm">arrow_back</span>
                        <span className="font-label text-xs uppercase tracking-widest">{t('chk_back')}</span>
                    </Link>
                    <h1 className="text-4xl font-headline font-semibold mt-4 text-primary tracking-tight">Checkout</h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    {/* Left Column: Checkout Flow */}
                    <div className="lg:col-span-7 space-y-16">
                        {/* Section 1: Shipping */}
                        <section>
                            <div className="flex items-center gap-4 mb-8">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-container text-on-primary-container font-label text-xs">1</span>
                                <h2 className="text-xl font-headline font-medium">{t('chk_shipping_title')}</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
                                <div className="space-y-2">
                                    <label className="block font-label text-[10px] uppercase tracking-widest text-on-surface-variant ml-1">{t('chk_first_name')}</label>
                                    <input type="text" placeholder="Julian" className="w-full bg-surface-container-low border-0 border-b border-outline-variant/30 py-3 px-1 focus:ring-0 transition-all placeholder:text-outline/50 focus:border-b-secondary" />
                                </div>
                                <div className="space-y-2">
                                    <label className="block font-label text-[10px] uppercase tracking-widest text-on-surface-variant ml-1">{t('chk_last_name')}</label>
                                    <input type="text" placeholder="Andes" className="w-full bg-surface-container-low border-0 border-b border-outline-variant/30 py-3 px-1 focus:ring-0 transition-all placeholder:text-outline/50 focus:border-b-secondary" />
                                </div>
                                <div className="md:col-span-2 space-y-2">
                                    <label className="block font-label text-[10px] uppercase tracking-widest text-on-surface-variant ml-1">{t('chk_address')}</label>
                                    <input type="text" placeholder="123 Glacial Trail, Altos Andes" className="w-full bg-surface-container-low border-0 border-b border-outline-variant/30 py-3 px-1 focus:ring-0 transition-all placeholder:text-outline/50 focus:border-b-secondary" />
                                </div>
                                <div className="space-y-2">
                                    <label className="block font-label text-[10px] uppercase tracking-widest text-on-surface-variant ml-1">{t('chk_city')}</label>
                                    <input type="text" placeholder="Santiago" className="w-full bg-surface-container-low border-0 border-b border-outline-variant/30 py-3 px-1 focus:ring-0 transition-all placeholder:text-outline/50 focus:border-b-secondary" />
                                </div>
                                <div className="space-y-2">
                                    <label className="block font-label text-[10px] uppercase tracking-widest text-on-surface-variant ml-1">{t('chk_zip')}</label>
                                    <input type="text" placeholder="8320000" className="w-full bg-surface-container-low border-0 border-b border-outline-variant/30 py-3 px-1 focus:ring-0 transition-all placeholder:text-outline/50 focus:border-b-secondary" />
                                </div>
                            </div>
                        </section>

                        {/* Section 2: Delivery */}
                        <section>
                            <div className="flex items-center gap-4 mb-8">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-surface-container-highest text-on-surface-variant font-label text-xs">2</span>
                                <h2 className="text-xl font-headline font-medium">{t('chk_delivery_title')}</h2>
                            </div>
                            <div className="space-y-4">
                                <label className="relative flex items-center p-6 rounded-lg bg-surface-container-lowest border border-outline-variant/20 cursor-pointer hover:border-secondary transition-all group">
                                    <input type="radio" name="shipping" defaultChecked className="w-4 h-4 text-secondary border-outline focus:ring-secondary" />
                                    <div className="ml-4 flex-1">
                                        <p className="font-headline font-medium text-primary">{t('chk_std_shipping')}</p>
                                        <p className="text-sm text-on-surface-variant">{t('chk_std_days')}</p>
                                    </div>
                                    <span className="font-label text-sm font-medium text-primary">{t('chk_free')}</span>
                                </label>
                                <label className="relative flex items-center p-6 rounded-lg bg-surface-container-lowest border border-outline-variant/20 cursor-pointer hover:border-secondary transition-all group">
                                    <input type="radio" name="shipping" className="w-4 h-4 text-secondary border-outline focus:ring-secondary" />
                                    <div className="ml-4 flex-1">
                                        <p className="font-headline font-medium text-primary">{t('chk_express_shipping')}</p>
                                        <p className="text-sm text-on-surface-variant">{t('chk_express_days')}</p>
                                    </div>
                                    <span className="font-label text-sm font-medium text-primary">$25.000</span>
                                </label>
                            </div>
                        </section>

                        {/* Section 3: Payment */}
                        <section>
                            <div className="flex items-center gap-4 mb-8">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-surface-container-highest text-on-surface-variant font-label text-xs">3</span>
                                <h2 className="text-xl font-headline font-medium">{t('chk_payment_title')}</h2>
                            </div>
                            <div className="bg-surface-container-low rounded-lg p-8 space-y-8">
                                <div className="flex gap-4 p-1 bg-surface-container rounded-full w-fit">
                                    <button className="px-6 py-2 rounded-full bg-surface-container-lowest text-primary text-sm font-medium shadow-sm transition-all">{t('chk_credit_card')}</button>
                                    <button className="px-6 py-2 rounded-full text-on-surface-variant text-sm font-medium hover:text-primary transition-all">PayPal</button>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
                                    <div className="md:col-span-2 space-y-2">
                                        <label className="block font-label text-[10px] uppercase tracking-widest text-on-surface-variant ml-1">{t('chk_card_number')}</label>
                                        <div className="relative">
                                            <input type="text" placeholder="0000 0000 0000 0000" className="w-full bg-transparent border-0 border-b border-outline-variant/30 py-3 px-1 focus:ring-0 transition-all placeholder:text-outline/50 focus:border-b-secondary" />
                                            <span className="absolute right-2 top-3 material-symbols-outlined text-on-surface-variant opacity-50">credit_card</span>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="block font-label text-[10px] uppercase tracking-widest text-on-surface-variant ml-1">{t('chk_expiry')}</label>
                                        <input type="text" placeholder="MM / YY" className="w-full bg-transparent border-0 border-b border-outline-variant/30 py-3 px-1 focus:ring-0 transition-all placeholder:text-outline/50 focus:border-b-secondary" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="block font-label text-[10px] uppercase tracking-widest text-on-surface-variant ml-1">CVV</label>
                                        <input type="password" placeholder="***" className="w-full bg-transparent border-0 border-b border-outline-variant/30 py-3 px-1 focus:ring-0 transition-all placeholder:text-outline/50 focus:border-b-secondary" />
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Complete Button */}
                        <Link to="/confirmacion" className="block text-center w-full arctic-gradient text-white py-6 rounded-xl font-headline font-medium text-lg hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-primary/10">
                            {t('chk_complete')}
                        </Link>

                        {/* Trust Badges */}
                        <div className="flex flex-wrap items-center justify-center gap-12 py-8 opacity-60 grayscale hover:grayscale-0 transition-all">
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-xl">verified_user</span>
                                <span className="font-label text-[10px] uppercase tracking-widest font-semibold">{t('chk_ssl')}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-xl">payments</span>
                                <span className="font-label text-[10px] uppercase tracking-widest font-semibold">{t('chk_secure_pay')}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-xl">local_shipping</span>
                                <span className="font-label text-[10px] uppercase tracking-widest font-semibold">{t('chk_tracked')}</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Order Summary (Sticky) */}
                    <div className="lg:col-span-5 lg:sticky lg:top-36">
                        <div className="bg-surface-container-high/50 rounded-lg p-8 border border-outline-variant/10">
                            <h3 className="text-xl font-headline font-medium mb-8">{t('chk_order_summary')}</h3>
                            <div className="space-y-8 divide-y divide-outline-variant/20">
                                {/* Product 1 */}
                                <div className="flex gap-6 pb-6">
                                    <div className="w-24 h-24 bg-surface-dim rounded-lg overflow-hidden flex-shrink-0">
                                        <img alt="Lapis Lazuli Premium Bracelet" className="w-full h-full object-cover mix-blend-multiply opacity-90 hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwVHO7OoCrmXAyoLMUgifRVWMOJd1SILN0rAg1oDvx9l5yCbboBbr0bcAmVPwbnFRtG4V9GNx5eEYEwwUssG9nuNt_O7nPhc8dy8Lc6n9G4I4ppvQK2Ds6K4MToOCO4TIm0hFNrplbKIpir0VBpD5PqDlCodVXzeY9vMf1DigntXkq2bKajpEYl7F1jOJ15ga7imdCzyzzNPgq8qBnZCoTKOAjcOFvXYu6oiimHgrF7hBAiLArMEMDcloNAhYbYo5JFm6IX1ZIVPvM" />
                                    </div>
                                    <div className="flex-1 flex flex-col justify-between py-1">
                                        <div>
                                            <h4 className="font-headline font-medium text-primary">{t('chk_prod1_name')}</h4>
                                            <p className="text-xs text-on-surface-variant mt-1">{t('chk_prod1_desc')}</p>
                                        </div>
                                        <span className="font-label text-sm font-medium font-['JetBrains_Mono'] text-primary">$340.000</span>
                                    </div>
                                </div>
                                {/* Product 2 */}
                                <div className="flex gap-6 pt-8 pb-6">
                                    <div className="w-24 h-24 bg-surface-dim rounded-lg overflow-hidden flex-shrink-0">
                                        <img alt="Andean Pendant" className="w-full h-full object-cover mix-blend-multiply opacity-90 hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXZMraVQ4FePeRVN24pmLJwwRWWRozfykGoUhr-JsBy10OJi4Z-wr21pluPvBIqNwr00ZMMHQvywv3OL_lnolBcymeecIajOa3933OMBCvB9LjvOsd0P1OLjreoIITm1Ln-8TokYb-u5UB7AEEWveNLR839yvQtDgw47H_Z838gQsPFpdL-J0Du6vu01sGBAifoVxXV_ijLyr7w_R9ay-JhMOPGEpd2Q_lK5s2mpYxODH-Fod3xOCBQV1asFJmZQ1I0pfRRK54U-Dx" />
                                    </div>
                                    <div className="flex-1 flex flex-col justify-between py-1">
                                        <div>
                                            <h4 className="font-headline font-medium text-primary">{t('chk_prod2_name')}</h4>
                                            <p className="text-xs text-on-surface-variant mt-1">{t('chk_prod2_desc')}</p>
                                        </div>
                                        <span className="font-label text-sm font-medium font-['JetBrains_Mono'] text-primary">$120.000</span>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Totals */}
                            <div className="mt-12 pt-8 border-t border-outline-variant space-y-4">
                                <div className="flex justify-between text-sm">
                                    <span className="text-on-surface-variant font-label uppercase tracking-widest">{t('chk_subtotal')}</span>
                                    <span className="font-['JetBrains_Mono'] text-primary">$460.000</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-on-surface-variant font-label uppercase tracking-widest">{t('chk_shipping_cost')}</span>
                                    <span className="font-['JetBrains_Mono'] text-primary">{t('chk_calculated_later')}</span>
                                </div>
                                <div className="flex justify-between items-end pt-4">
                                    <span className="text-lg font-headline font-semibold text-primary">{t('chk_total')}</span>
                                    <div className="text-right">
                                        <p className="text-2xl font-headline font-semibold text-primary font-['JetBrains_Mono']">$460.000</p>
                                        <p className="text-[10px] text-on-surface-variant uppercase tracking-tighter">{t('chk_includes_vat')}</p>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Discount Code */}
                            <div className="mt-12 relative">
                                <input type="text" placeholder={t('chk_discount_ph')} className="w-full bg-surface-container-low border border-outline-variant/20 rounded-lg py-3 px-4 pr-24 text-sm focus:ring-0 transition-all" />
                                <button className="absolute right-2 top-2 bottom-2 px-4 rounded-md bg-primary-container text-on-primary-container text-xs font-label uppercase tracking-widest hover:bg-secondary transition-colors">{t('chk_apply')}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Checkout;
