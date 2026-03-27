import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import MobileCarousel from '../components/ui/MobileCarousel';

const Cart = () => {
    const { t } = useTranslation();

    return (
        <div className="bg-surface text-on-surface font-body selection:bg-secondary-fixed selection:text-on-secondary-container min-h-screen">
            <main className="pt-40 pb-24 px-6 md:px-24 max-w-7xl mx-auto">
                <header className="mb-16">
                    <span className="font-label text-xs uppercase tracking-[0.2em] text-secondary mb-4 block">{t('cart_badge')}</span>
                    <h1 className="font-headline text-5xl md:text-6xl font-semibold tracking-tight text-primary">{t('cart_title')}</h1>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Item List */}
                    <div className="lg:col-span-8 space-y-12">
                        {/* Product 1 */}
                        <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-start pb-12 border-b border-outline-variant/15">
                            <div className="w-24 h-24 md:w-48 md:aspect-square bg-surface-container-highest rounded-xl overflow-hidden flex-shrink-0">
                                <img alt="Premium Lapis Lazuli Bracelet" className="w-full h-full object-cover mix-blend-multiply transition-transform duration-500 hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBN8U0BW6RbiVkbou3y6eJmWj3wuVGipJFMKLgmebj8E-dbJAHGxWfZr5O3qOR5IPxNjHEz4G3xzw5m3CIamnFJ7uhiNkb3xTk0-Is7Kp0_hzJxHYTEnm1aGcjESZry_K9siyuAJbAor48NPVIe-YI8wu6A8XVK0tBrUbxcoDHM1ZD2Yn9WrmQMFNgxUH0s6PtdgAAOeW4jd9OpMDjoMAXY4jLjWNtKxzR4h0q_cYamtdb62x8gqeHjy_i0gv069_CrME3EkQJIJqPa" />
                            </div>
                            <div className="flex-1 flex flex-col justify-between self-stretch w-full">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <Link to="/producto/premium"><h3 className="font-headline text-2xl font-semibold text-primary mb-1 hover:text-secondary transition-colors">{t('chk_prod1_name')}</h3></Link>
                                        <p className="font-label text-xs uppercase tracking-wider text-on-surface-variant">High Andes Collection • Grade AAA</p>
                                    </div>
                                    <button className="p-2 hover:bg-error-container hover:text-error rounded-full transition-all group">
                                        <span className="material-symbols-outlined text-[20px]" style={{fontVariationSettings: "'FILL' 0, 'wght' 300"}}>delete</span>
                                    </button>
                                </div>
                                <div className="flex flex-wrap items-end justify-between mt-8 md:mt-0">
                                    <div className="flex items-center bg-surface-container rounded-full p-1 border border-outline-variant/10">
                                        <button className="w-10 h-10 flex items-center justify-center hover:bg-surface-container-high rounded-full transition-colors">
                                            <span className="material-symbols-outlined text-sm" style={{fontVariationSettings: "'FILL' 0, 'wght' 300"}}>remove</span>
                                        </button>
                                        <span className="w-12 text-center font-mono font-medium">1</span>
                                        <button className="w-10 h-10 flex items-center justify-center hover:bg-surface-container-high rounded-full transition-colors">
                                            <span className="material-symbols-outlined text-sm" style={{fontVariationSettings: "'FILL' 0, 'wght' 300"}}>add</span>
                                        </button>
                                    </div>
                                    <div className="font-mono text-xl font-medium text-primary">$340.000</div>
                                </div>
                            </div>
                        </div>

                        {/* Product 2 */}
                        <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-start pb-12 border-b border-outline-variant/15">
                            <div className="w-24 h-24 md:w-48 md:aspect-square bg-surface-container-highest rounded-xl overflow-hidden flex-shrink-0">
                                <img alt="Classic Lapis Lazuli Ring" className="w-full h-full object-cover mix-blend-multiply transition-transform duration-500 hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBs8LUT7C9qv_07z5fDTkfpk83FdUny_wJj79k-RBwI84JHKYW0W_JF5p3WR0oY_RVBhg7Jmve-PGs_N4nO_l_8mq5XmS2dmEiuKAdzC1aK4xKfBugwkETxOa3tHyohl6L-jYtOQwsXAc4I1f0EEf-66OgFjcE-SwHGdCGcqIgv5vLjCB8NQrVGL60z_1JEWm1u3ASaXTIDOLSIyvlqULqzXm4YoT6AQsWSwrP5WQKyEmok9j1Hn5ujO66UZ1gwTJTLSuDid-XpEKzd" />
                            </div>
                            <div className="flex-1 flex flex-col justify-between self-stretch w-full">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <Link to="/producto/classic"><h3 className="font-headline text-2xl font-semibold text-primary mb-1 hover:text-secondary transition-colors">{t('cart_prod2_name')}</h3></Link>
                                        <p className="font-label text-xs uppercase tracking-wider text-on-surface-variant">Timeless Essentials • Chilean Ore</p>
                                    </div>
                                    <button className="p-2 hover:bg-error-container hover:text-error rounded-full transition-all group">
                                        <span className="material-symbols-outlined text-[20px]" style={{fontVariationSettings: "'FILL' 0, 'wght' 300"}}>delete</span>
                                    </button>
                                </div>
                                <div className="flex flex-wrap items-end justify-between mt-8 md:mt-0">
                                    <div className="flex items-center bg-surface-container rounded-full p-1 border border-outline-variant/10">
                                        <button className="w-10 h-10 flex items-center justify-center hover:bg-surface-container-high rounded-full transition-colors">
                                            <span className="material-symbols-outlined text-sm" style={{fontVariationSettings: "'FILL' 0, 'wght' 300"}}>remove</span>
                                        </button>
                                        <span className="w-12 text-center font-mono font-medium">1</span>
                                        <button className="w-10 h-10 flex items-center justify-center hover:bg-surface-container-high rounded-full transition-colors">
                                            <span className="material-symbols-outlined text-sm" style={{fontVariationSettings: "'FILL' 0, 'wght' 300"}}>add</span>
                                        </button>
                                    </div>
                                    <div className="font-mono text-xl font-medium text-primary">$125.000</div>
                                </div>
                            </div>
                        </div>

                        <Link className="inline-flex items-center gap-2 group pt-4" to="/coleccion">
                            <span className="material-symbols-outlined text-secondary group-hover:-translate-x-1 transition-transform" style={{fontVariationSettings: "'FILL' 0, 'wght' 300"}}>arrow_back</span>
                            <span className="font-label text-xs uppercase tracking-widest text-secondary font-semibold">{t('cart_continue')}</span>
                        </Link>
                    </div>

                    {/* Summary Sidebar */}
                    <div className="lg:col-span-4">
                        <div className="bg-surface-container-low rounded-xl p-10 sticky top-40 bg-noise overflow-hidden">
                            <h2 className="font-headline text-2xl font-semibold text-primary mb-8 relative z-10">{t('cart_summary_title')}</h2>
                            <div className="space-y-6 mb-10 relative z-10">
                                <div className="flex justify-between items-center text-on-surface-variant">
                                    <span className="font-body">{t('chk_subtotal')}</span>
                                    <span className="font-mono text-primary">$465.000</span>
                                </div>
                                <div className="flex justify-between items-center text-on-surface-variant">
                                    <span className="font-body">{t('cart_est_shipping')}</span>
                                    <span className="font-label text-[10px] uppercase font-bold tracking-widest text-secondary">{t('chk_free')}</span>
                                </div>
                                <div className="pt-6 border-t border-outline-variant/30 flex justify-between items-center">
                                    <span className="font-headline font-semibold text-primary">{t('chk_total')}</span>
                                    <span className="font-mono text-2xl font-semibold text-primary">$465.000</span>
                                </div>
                            </div>

                            <div className="space-y-4 relative z-10">
                                <Link to="/checkout" className="block text-center w-full arctic-gradient text-white py-5 rounded-xl font-label text-xs uppercase tracking-[0.2em] font-bold hover:scale-[1.02] hover:-translate-y-1 transition-all shadow-xl shadow-primary/10">
                                    {t('cart_checkout_btn')}
                                </Link>
                                <div className="flex items-center justify-center gap-2 pt-4 opacity-40">
                                    <span className="material-symbols-outlined text-sm" style={{fontVariationSettings: "'FILL' 0, 'wght' 300"}}>lock</span>
                                    <span className="text-[10px] uppercase tracking-widest font-bold">{t('cart_ssl')}</span>
                                </div>
                            </div>

                            <div className="mt-12 p-6 bg-surface-container rounded-lg border border-outline-variant/20 relative z-10">
                                <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant mb-3 font-bold">{t('cart_packaging_title')}</p>
                                <p className="text-xs text-on-surface-variant leading-relaxed">{t('cart_packaging_desc')}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Recommendations */}
                <section className="mt-40">
                    <div className="flex items-end justify-between mb-12">
                        <div>
                            <span className="font-label text-xs uppercase tracking-[0.2em] text-secondary mb-2 block">{t('cart_rec_badge')}</span>
                            <h2 className="font-headline text-4xl font-semibold tracking-tight text-primary">{t('cart_rec_title')}</h2>
                        </div>
                        <Link to="/coleccion" className="hidden md:flex items-center gap-2 font-label text-xs uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors">
                            {t('cart_see_all')}
                            <span className="material-symbols-outlined text-sm" style={{fontVariationSettings: "'FILL' 0, 'wght' 300"}}>trending_flat</span>
                        </Link>
                    </div>

                    {/* Desktop Grid */}
                    <div className="hidden md:grid grid-cols-4 gap-8">
                        <div className="md:col-span-2 bg-surface-container-high rounded-xl p-8 relative overflow-hidden group">
                            <div className="relative z-10 h-full flex flex-col justify-between">
                                <div>
                                    <h3 className="font-headline text-2xl font-semibold mb-2 text-primary">{t('cart_rec1_name')}</h3>
                                    <p className="text-sm text-on-surface-variant max-w-xs">{t('cart_rec1_desc')}</p>
                                </div>
                                <span className="font-mono text-lg mt-12 text-primary">$24.000</span>
                            </div>
                            <img alt="Jewelry cleaning kit" className="absolute -right-12 bottom-0 w-64 h-64 object-contain opacity-40 group-hover:opacity-60 transition-opacity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhZoLL5-hpvziOxCogQp1Pa34YTqxM1Od1BWHHl_uexjkD7akEABCmDup8_R6iXeNWWGdbTScA-IBYODyofyIZVT-F2C_XrsqgQWjFEIIkg1yuREZZ22-11EGaEE08hvhedyvt_SE09MGSpPl1BuvKjFqtRs_maKxSd9UUmkR0_ykVPqzpdZVFncFYNhS2QY9mKa07xlKlzkEsUAUUa_OFHPKjaQwfrP-I63G7XMrmwj20mTXglXxqGtryV6Is16CCUpNLpmk7pwpB" />
                        </div>

                        <div className="bg-surface-container rounded-xl p-8 flex flex-col justify-between hover:bg-surface-container-high transition-colors">
                            <div className="aspect-square bg-surface-container-highest rounded-lg mb-6 overflow-hidden">
                                <img alt="Small Lapis Earrings" className="w-full h-full object-cover mix-blend-multiply" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXw8-VY6b_9YWiopxkyaiumaeFvSOc0Pt8VtU0y6yLtVWsum8bg9AD9zaQ_oqG5iQgSfLPW4A4N8Bler2nw5n9tKEHqy1m1BshsipQe838L3hy0CZ5oH-BHiCcqQaR1x1Ehz3tZYF3hn-TNIS0cXawiRxyPDexW9G0Tn0dIOPgj0ogWRzPUub23GRURWJTDu4f2oT-SFesxPzZGBPj6fyG1G8fFFlfFMDuEAHoTB2Y-6sskrh7z8qOI6prDR0f52Gu4emLekVdJW2W" />
                            </div>
                            <div>
                                <h4 className="font-headline font-semibold mb-1 text-primary">{t('cart_rec2_name')}</h4>
                                <div className="flex justify-between items-center">
                                    <span className="font-mono text-sm text-primary">$85.000</span>
                                    <button className="w-8 h-8 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                                        <span className="material-symbols-outlined text-sm" style={{fontVariationSettings: "'FILL' 0, 'wght' 300"}}>add</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="bg-surface-container rounded-xl p-8 flex flex-col justify-between hover:bg-surface-container-high transition-colors">
                            <div className="aspect-square bg-surface-container-highest rounded-lg mb-6 overflow-hidden">
                                <img alt="Silver Necklace" className="w-full h-full object-cover mix-blend-multiply" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC40LtJZpwvXQnZfXXLD7iUtQ074kof01fYVohB6wV1dTSA3K0OB6CSfbbKbGEWhxzlZxRlieGSkFDS-4upt8315dYLpghG6Yw1rKCIS6i7ypX1-OBvCNQs-PB9ZMsKwegmuj9R7d5KTkdIUbs7gxTmGEjfvyg4J6tB2OjLtxBP95CGEmYlUOKlL3EYEO6NZhCbBNQ-9I3C0N_mlBMSx1lxP-RaMa_U8zEGN-bcx0CMVEpJvUgJYzny9sTE81uJjcwr59eQHl9_BKp5" />
                            </div>
                            <div>
                                <h4 className="font-headline font-semibold mb-1 text-primary">{t('chk_prod2_name')}</h4>
                                <div className="flex justify-between items-center">
                                    <span className="font-mono text-sm text-primary">$110.000</span>
                                    <button className="w-8 h-8 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                                        <span className="material-symbols-outlined text-sm" style={{fontVariationSettings: "'FILL' 0, 'wght' 300"}}>add</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Carousel */}
                    <div className="md:hidden">
                        <MobileCarousel
                            items={[
                                <div className="w-full max-w-xs bg-surface-container-high rounded-xl p-8 relative overflow-hidden group">
                                    <div className="relative z-10 h-full flex flex-col justify-between">
                                        <div>
                                            <h3 className="font-headline text-2xl font-semibold mb-2 text-primary">{t('cart_rec1_name')}</h3>
                                            <p className="text-sm text-on-surface-variant max-w-xs">{t('cart_rec1_desc')}</p>
                                        </div>
                                        <span className="font-mono text-lg mt-12 text-primary">$24.000</span>
                                    </div>
                                    <img alt="Jewelry cleaning kit" className="absolute -right-12 bottom-0 w-64 h-64 object-contain opacity-40 group-hover:opacity-60 transition-opacity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhZoLL5-hpvziOxCogQp1Pa34YTqxM1Od1BWHHl_uexjkD7akEABCmDup8_R6iXeNWWGdbTScA-IBYODyofyIZVT-F2C_XrsqgQWjFEIIkg1yuREZZ22-11EGaEE08hvhedyvt_SE09MGSpPl1BuvKjFqtRs_maKxSd9UUmkR0_ykVPqzpdZVFncFYNhS2QY9mKa07xlKlzkEsUAUUa_OFHPKjaQwfrP-I63G7XMrmwj20mTXglXxqGtryV6Is16CCUpNLpmk7pwpB" />
                                </div>,
                                <div className="w-full max-w-xs bg-surface-container rounded-xl p-8 flex flex-col justify-between hover:bg-surface-container-high transition-colors">
                                    <div className="aspect-square bg-surface-container-highest rounded-lg mb-6 overflow-hidden">
                                        <img alt="Small Lapis Earrings" className="w-full h-full object-cover mix-blend-multiply" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXw8-VY6b_9YWiopxkyaiumaeFvSOc0Pt8VtU0y6yLtVWsum8bg9AD9zaQ_oqG5iQgSfLPW4A4N8Bler2nw5n9tKEHqy1m1BshsipQe838L3hy0CZ5oH-BHiCcqQaR1x1Ehz3tZYF3hn-TNIS0cXawiRxyPDexW9G0Tn0dIOPgj0ogWRzPUub23GRURWJTDu4f2oT-SFesxPzZGBPj6fyG1G8fFFlfFMDuEAHoTB2Y-6sskrh7z8qOI6prDR0f52Gu4emLekVdJW2W" />
                                    </div>
                                    <div>
                                        <h4 className="font-headline font-semibold mb-1 text-primary">{t('cart_rec2_name')}</h4>
                                        <div className="flex justify-between items-center">
                                            <span className="font-mono text-sm text-primary">$85.000</span>
                                            <button className="w-8 h-8 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                                                <span className="material-symbols-outlined text-sm" style={{fontVariationSettings: "'FILL' 0, 'wght' 300"}}>add</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>,
                                <div className="w-full max-w-xs bg-surface-container rounded-xl p-8 flex flex-col justify-between hover:bg-surface-container-high transition-colors">
                                    <div className="aspect-square bg-surface-container-highest rounded-lg mb-6 overflow-hidden">
                                        <img alt="Silver Necklace" className="w-full h-full object-cover mix-blend-multiply" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC40LtJZpwvXQnZfXXLD7iUtQ074kof01fYVohB6wV1dTSA3K0OB6CSfbbKbGEWhxzlZxRlieGSkFDS-4upt8315dYLpghG6Yw1rKCIS6i7ypX1-OBvCNQs-PB9ZMsKwegmuj9R7d5KTkdIUbs7gxTmGEjfvyg4J6tB2OjLtxBP95CGEmYlUOKlL3EYEO6NZhCbBNQ-9I3C0N_mlBMSx1lxP-RaMa_U8zEGN-bcx0CMVEpJvUgJYzny9sTE81uJjcwr59eQHl9_BKp5" />
                                    </div>
                                    <div>
                                        <h4 className="font-headline font-semibold mb-1 text-primary">{t('chk_prod2_name')}</h4>
                                        <div className="flex justify-between items-center">
                                            <span className="font-mono text-sm text-primary">$110.000</span>
                                            <button className="w-8 h-8 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                                                <span className="material-symbols-outlined text-sm" style={{fontVariationSettings: "'FILL' 0, 'wght' 300"}}>add</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>,
                            ]}
                            containerHeight={400}
                        />
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Cart;
