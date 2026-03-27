import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ProductDetail = () => {
    const { t } = useTranslation();
    const [mainImage, setMainImage] = useState('https://lh3.googleusercontent.com/aida-public/AB6AXuB5NUZXHS5yhEt_BkruEVE60rZCmd7Vrmm-xbbiGHY36BxW4JEh2B7klxq23nHH8_qRhhh5Pb0l65xib0ok7CItuQMbvWiX5xPyoRwFv0dN5SvewDNKpLc4ikeOMR4rdpnUaEbAJWxRFqV0mquJRdekSR-JCocad51e7icUI_g6OfAq2vno7Gyjf9uMHIU6wpXMLJJNM0SFB60nEqh_HFizF10HgCMjTO-6adUj5LEHGK3dXjZtJO5gfkksm_QKC556YyviHsu4B4sv');

    const images = [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBLEsow6d_GicUixpKlPatZtkPd4upznSZleU_GD82h3wHbEVnemBLA7QLXJb2E0EiXxLizD33tx-WhDY2wOpcLlh8sIB3zV5sClAJPv3pRlXK77k-PDb1CHFFs3t7Bu26ldjz3erABuLaTmuhLIBHPPsJkJk-isXTlEr5MidvpH1PWivL1MC1BU62bf30hFjFxtZ0JcBjRBQpel4VfoWp-7-j1yOPCfmk_Eeiyx2hPLxO963DOKyWgbfCwhPx1l__qiUNmzL5BUVsp',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuA_ZKzXlvATPv21yegufWIIdS9XH2qzRj1VV2cGeXi2XCXhmS24m5wafBVv4a-3zgiY4PhIWgjP2UZ1Jmoexe9h43MMPybir8eygxIrjOZkwoM_Y_pr-B6tgvaNPFguyJHb7X3U4FRxj1fIvJvrwwVUUpYpl9v_kvTfoZfOKynJD2ntdNpuOXjZVIHOX9BHXvrS8LP865mIb175R8S1gvYbK9O3bOOa2Fnomuf1Xc0pFf12C_y2FS3J4NVqLVqCK8GXucrUWepe1TBu',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDO8U11q12zpVikNECXY1dJM__aZdwTRfVVutpccfF6I5TgBGApU97yk83rrc7Ff65hLvwltJga3z5dMG__jXOnsGieBuVFlePAw61_uIEvGbEt5UUed-7RW9U3SUhaQGi6N24Sa7KP1MXFveJ3dhWFFCXaZ2CFNC7IEgkS9PoqtKDAoZMkIppEIZIH0L4JfEEyNXLz0ZXVul5zeP8Z8_pHj5PKMzro8IHgASIRAm0UgwJUxOrLSxhEorISqWX72-qE_ZfVONObIB1j',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBgRa2qrvfdsbtFi-bT-xp66eF6YxfQ4oBYSRQcj4wqipn9CXDN7WHHrh8LlJAHdW_ucuGZOrnuakxwLFOkB2e2Ak7GowGwqEEfx9rUclw87qE4hbi-JqDLvuBCgepDesTQCRJXroVfu2gkG3ovhX-QGdkBkUnkzZXbY7eVOqYPVREHuPn8JmD-0kn_mVSvPwlagnevm4wzzrBQZ7XKzCljzcEhn00M2E0u0pIACl3neOtE3wb5zTpy8Nm9t03gH0JSogrpXyoZFtBP'
    ];

    return (
        <div className="bg-surface font-body text-on-surface">
            <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
                {/* Product Hero */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    <div className="lg:col-span-7 flex flex-col gap-4">
                        <div className="aspect-[4/5] bg-surface-container-highest rounded-[1.5rem] overflow-hidden group shadow-lg">
                            <motion.img 
                                key={mainImage}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                alt={t('pd_prod_name')}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                                src={mainImage} 
                            />
                        </div>
                        <div className="grid grid-cols-4 gap-4">
                            {images.map((img, index) => (
                                <div 
                                    key={index}
                                    onClick={() => setMainImage(img)}
                                    className={`aspect-square bg-surface-container-highest rounded-[1.5rem] overflow-hidden group shadow-sm cursor-pointer ${mainImage === img ? 'ring-2 ring-primary' : ''}`}
                                >
                                    <img alt={`Thumb ${index}`} className="w-full h-full object-cover transition-opacity group-hover:opacity-80" src={img} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Product Details */}
                    <div className="lg:col-span-5 lg:sticky lg:top-36 space-y-10 border-outline-variant/10">
                        <header className="space-y-4">
                            <span className="font-label text-xs uppercase tracking-[0.2em] text-secondary">{t('pd_badge')}</span>
                            <h1 className="font-headline text-5xl font-semibold leading-tight text-primary">{t('pd_prod_name')}</h1>
                            <div className="font-mono text-2xl text-primary">$340.000</div>
                        </header>
                        <p className="text-on-surface-variant leading-relaxed text-lg">
                            {t('pd_prod_desc')}
                        </p>

                        <div className="space-y-6 pt-6">
                            <div className="flex flex-col gap-4">
                                <Link to="/carrito" className="arctic-gradient text-white py-5 px-8 rounded-full font-label uppercase tracking-widest text-sm transition-all duration-300 hover:scale-[1.03] hover:-translate-y-0.5 flex items-center justify-center gap-2 shadow-md hover:text-white">
                                    {t('pd_add_cart')}
                                    <span className="material-symbols-outlined text-sm">shopping_bag</span>
                                </Link>
                                <Link to="/checkout" className="border border-outline-variant border-opacity-20 text-primary py-5 px-8 flex justify-center rounded-full font-label uppercase tracking-widest text-sm transition-all duration-300 hover:bg-surface-container-low hover:text-primary">
                                    {t('pd_buy_now')}
                                </Link>
                            </div>
                        </div>

                        <div className="space-y-8 pt-8 border-t border-outline-variant border-opacity-10">
                            <div className="space-y-3">
                                <h3 className="font-label text-xs uppercase tracking-widest text-primary flex items-center gap-2">
                                    <span className="material-symbols-outlined text-sm">local_shipping</span>
                                    {t('pd_shipping_title')}
                                </h3>
                                <p className="text-sm text-on-surface-variant">{t('pd_shipping_desc')}</p>
                            </div>
                            <div className="space-y-3">
                                <h3 className="font-label text-xs uppercase tracking-widest text-primary flex items-center gap-2">
                                    <span className="material-symbols-outlined text-sm">clean_hands</span>
                                    {t('pd_care_title')}
                                </h3>
                                <p className="text-sm text-on-surface-variant">{t('pd_care_desc')}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Materials Section */}
                <section className="mt-32 space-y-12">
                    <div className="text-center max-w-3xl mx-auto space-y-4">
                        <span className="font-label text-xs uppercase tracking-[0.3em] text-secondary">{t('pd_quality_badge')}</span>
                        <h2 className="font-headline text-4xl font-semibold text-primary">{t('pd_quality_title')}</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-surface-container-low rounded-[1.5rem] p-10 flex flex-col justify-between noise-overlay shadow-sm">
                            <div className="space-y-6">
                                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                                    <span className="material-symbols-outlined text-white">diamond</span>
                                </div>
                                <h3 className="font-headline text-2xl font-semibold text-primary">{t('pd_mat1_title')}</h3>
                                <p className="text-on-surface-variant leading-relaxed">
                                    {t('pd_mat1_desc')}
                                </p>
                            </div>
                            <div className="mt-12 aspect-video rounded-xl overflow-hidden shadow-inner">
                                <img alt="Lapis Lazuli Raw" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLEsow6d_GicUixpKlPatZtkPd4upznSZleU_GD82h3wHbEVnemBLA7QLXJb2E0EiXxLizD33tx-WhDY2wOpcLlh8sIB3zV5sClAJPv3pRlXK77k-PDb1CHFFs3t7Bu26ldjz3erABuLaTmuhLIBHPPsJkJk-isXTlEr5MidvpH1PWivL1MC1BU62bf30hFjFxtZ0JcBjRBQpel4VfoWp-7-j1yOPCfmk_Eeiyx2hPLxO963DOKyWgbfCwhPx1l__qiUNmzL5BUVsp" />
                            </div>
                        </div>

                        <div className="bg-surface-container-highest rounded-[1.5rem] p-10 flex flex-col justify-between shadow-sm">
                            <div className="space-y-6">
                                <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center">
                                    <span className="material-symbols-outlined text-white" style={{fontVariationSettings: "'FILL' 1"}}>architecture</span>
                                </div>
                                <h3 className="font-headline text-2xl font-semibold text-primary">{t('pd_mat2_title')}</h3>
                                <p className="text-on-surface-variant leading-relaxed">
                                    {t('pd_mat2_desc')}
                                </p>
                            </div>
                            <div className="mt-12 aspect-video rounded-xl overflow-hidden shadow-inner">
                                <img alt="Plata Fina" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_ZKzXlvATPv21yegufWIIdS9XH2qzRj1VV2cGeXi2XCXhmS24m5wafBVv4a-3zgiY4PhIWgjP2UZ1Jmoexe9h43MMPybir8eygxIrjOZkwoM_Y_pr-B6tgvaNPFguyJHb7X3U4FRxj1fIvJvrwwVUUpYpl9v_kvTfoZfOKynJD2ntdNpuOXjZVIHOX9BHXvrS8LP865mIb175R8S1gvYbK9O3bOOa2Fnomuf1Xc0pFf12C_y2FS3J4NVqLVqCK8GXucrUWepe1TBu" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Technical Specs */}
                <section className="mt-32 bg-primary-container text-white rounded-[1.5rem] p-12 lg:p-20 relative overflow-hidden noise-overlay shadow-xl">
                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                        <div className="space-y-2">
                            <div className="font-mono text-sm text-on-primary-container uppercase tracking-widest opacity-80">{t('pd_spec1_label')}</div>
                            <div className="text-4xl font-headline font-semibold">95.0% {t('pd_spec1_val')}</div>
                        </div>
                        <div className="space-y-2">
                            <div className="font-mono text-sm text-on-primary-container uppercase tracking-widest opacity-80">{t('pd_spec2_label')}</div>
                            <div className="text-4xl font-headline font-semibold">18.4 Carats</div>
                        </div>
                        <div className="space-y-2">
                            <div className="font-mono text-sm text-on-primary-container uppercase tracking-widest opacity-80">{t('pd_spec3_label')}</div>
                            <div className="text-4xl font-headline font-semibold">{t('pd_spec3_val')}</div>
                        </div>
                    </div>
                </section>

                {/* Related Products */}
                <section className="mt-32 space-y-12">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div className="space-y-4">
                            <span className="font-label text-xs uppercase tracking-[0.3em] text-secondary">{t('pd_related_badge')}</span>
                            <h2 className="font-headline text-4xl font-semibold text-primary">{t('pd_related_title')}</h2>
                        </div>
                        <Link to="/coleccion" className="font-label text-xs uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2 group">
                            {t('pd_see_all')}
                            <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { name: t('pd_rel1_name'), price: '$480.000', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB5NUZXHS5yhEt_BkruEVE60rZCmd7Vrmm-xbbiGHY36BxW4JEh2B7klxq23nHH8_qRhhh5Pb0l65xib0ok7CItuQMbvWiX5xPyoRwFv0dN5SvewDNKpLc4ikeOMR4rdpnUaEbAJWxRFqV0mquJRdekSR-JCocad51e7icUI_g6OfAq2vno7Gyjf9uMHIU6wpXMLJJNM0SFB60nEqh_HFizF10HgCMjTO-6adUj5LEHGK3dXjZtJO5gfkksm_QKC556YyviHsu4B4sv' },
                            { name: t('pd_rel2_name'), price: '$195.000', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBLEsow6d_GicUixpKlPatZtkPd4upznSZleU_GD82h3wHbEVnemBLA7QLXJb2E0EiXxLizD33tx-WhDY2wOpcLlh8sIB3zV5sClAJPv3pRlXK77k-PDb1CHFFs3t7Bu26ldjz3erABuLaTmuhLIBHPPsJkJk-isXTlEr5MidvpH1PWivL1MC1BU62bf30hFjFxtZ0JcBjRBQpel4VfoWp-7-j1yOPCfmk_Eeiyx2hPLxO963DOKyWgbfCwhPx1l__qiUNmzL5BUVsp' },
                            { name: t('pd_rel3_name'), price: '$260.000', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDO8U11q12zpVikNECXY1dJM__aZdwTRfVVutpccfF6I5TgBGApU97yk83rrc7Ff65hLvwltJga3z5dMG__jXOnsGieBuVFlePAw61_uIEvGbEt5UUed-7RW9U3SUhaQGi6N24Sa7KP1MXFveJ3dhWFFCXaZ2CFNC7IEgkS9PoqtKDAoZMkIppEIZIH0L4JfEEyNXLz0ZXVul5zeP8Z8_pHj5PKMzro8IHgASIRAm0UgwJUxOrLSxhEorISqWX72-qE_ZfVONObIB1j' },
                            { name: t('pd_rel4_name'), price: '$310.000', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_ZKzXlvATPv21yegufWIIdS9XH2qzRj1VV2cGeXi2XCXhmS24m5wafBVv4a-3zgiY4PhIWgjP2UZ1Jmoexe9h43MMPybir8eygxIrjOZkwoM_Y_pr-B6tgvaNPFguyJHb7X3U4FRxj1fIvJvrwwVUUpYpl9v_kvTfoZfOKynJD2ntdNpuOXjZVIHOX9BHXvrS8LP865mIb175R8S1gvYbK9O3bOOa2Fnomuf1Xc0pFf12C_y2FS3J4NVqLVqCK8GXucrUWepe1TBu' }
                        ].map((p) => (
                            <div key={p.name} className="group cursor-pointer">
                                <div className="aspect-[3/4] bg-surface-container-highest rounded-2xl overflow-hidden mb-6 relative">
                                    <img alt={p.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={p.img} />
                                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                </div>
                                <div className="space-y-2">
                                    <h3 className="font-headline text-lg font-semibold text-primary group-hover:text-secondary transition-colors">{p.name}</h3>
                                    <p className="font-mono text-sm text-on-surface-variant">{p.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Reviews */}
                <section className="mt-32 space-y-16">
                    <div className="flex flex-col items-center text-center space-y-4">
                        <span className="font-label text-xs uppercase tracking-[0.3em] text-secondary">{t('pd_reviews_badge')}</span>
                        <h2 className="font-headline text-4xl font-semibold text-primary">{t('pd_reviews_title')}</h2>
                        <div className="flex flex-col items-center gap-2 pt-4">
                            <div className="flex items-center gap-2">
                                <div className="flex text-secondary">
                                    {[...Array(4)].map((_, i) => <span key={i} className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>)}
                                    <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 0.5"}}>star_half</span>
                                </div>
                                <span className="font-headline text-2xl font-semibold text-primary">4.9/5</span>
                            </div>
                            <span className="text-on-surface-variant text-sm font-label uppercase tracking-widest">{t('pd_reviews_count')}</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { text: t('pd_review1_text'), name: 'Valentina R.', loc: 'Santiago, Chile', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBgRa2qrvfdsbtFi-bT-xp66eF6YxfQ4oBYSRQcj4wqipn9CXDN7WHHrh8LlJAHdW_ucuGZOrnuakxwLFOkB2e2Ak7GowGwqEEfx9rUclw87qE4hbi-JqDLvuBCgepDesTQCRJXroVfu2gkG3ovhX-QGdkBkUnkzZXbY7eVOqYPVREHuPn8JmD-0kn_mVSvPwlagnevm4wzzrBQZ7XKzCljzcEhn00M2E0u0pIACl3neOtE3wb5zTpy8Nm9t03gH0JSogrpXyoZFtBP' },
                            { text: t('pd_review2_text'), name: 'Andrés M.', loc: 'Viña del Mar, Chile', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB5NUZXHS5yhEt_BkruEVE60rZCmd7Vrmm-xbbiGHY36BxW4JEh2B7klxq23nHH8_qRhhh5Pb0l65xib0ok7CItuQMbvWiX5xPyoRwFv0dN5SvewDNKpLc4ikeOMR4rdpnUaEbAJWxRFqV0mquJRdekSR-JCocad51e7icUI_g6OfAq2vno7Gyjf9uMHIU6wpXMLJJNM0SFB60nEqh_HFizF10HgCMjTO-6adUj5LEHGK3dXjZtJO5gfkksm_QKC556YyviHsu4B4sv' },
                            { text: t('pd_review3_text'), name: 'Carolina L.', loc: 'La Serena, Chile', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBLEsow6d_GicUixpKlPatZtkPd4upznSZleU_GD82h3wHbEVnemBLA7QLXJb2E0EiXxLizD33tx-WhDY2wOpcLlh8sIB3zV5sClAJPv3pRlXK77k-PDb1CHFFs3t7Bu26ldjz3erABuLaTmuhLIBHPPsJkJk-isXTlEr5MidvpH1PWivL1MC1BU62bf30hFjFxtZ0JcBjRBQpel4VfoWp-7-j1yOPCfmk_Eeiyx2hPLxO963DOKyWgbfCwhPx1l__qiUNmzL5BUVsp' }
                        ].map((r) => (
                            <div key={r.name} className="bg-white p-8 rounded-[1.5rem] shadow-sm flex flex-col gap-6 border border-surface-container">
                                <div className="flex text-secondary">
                                    {[...Array(5)].map((_, i) => <span key={i} className="material-symbols-outlined text-sm" style={{fontVariationSettings: "'FILL' 1"}}>star</span>)}
                                </div>
                                <p className="text-on-surface-variant leading-relaxed">{r.text}</p>
                                <div className="flex items-center gap-4 mt-auto">
                                    <div className="w-12 h-12 rounded-full overflow-hidden bg-surface-container-highest">
                                        <img alt="Review" className="w-full h-full object-cover" src={r.img} />
                                    </div>
                                    <div>
                                        <div className="font-headline font-semibold text-sm text-primary">{r.name}</div>
                                        <div className="text-xs text-on-surface-variant">{r.loc}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
};

export default ProductDetail;
