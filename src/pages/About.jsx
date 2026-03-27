import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation();

    return (
        <div className="bg-background text-on-background font-body selection:bg-secondary-container selection:text-on-secondary-container">
            {/* Section 1: Hero */}
            <header className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img className="w-full h-full object-cover scale-105" alt="Panoramic view of the snow-capped Chilean Andes mountains at sunrise" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAA_sZ1jmLHYt5_I-gdCnUY97x4KP4EeCQTSo8k6tsRZOnTBQEIbWbQZoDjBex27XmG8T6Oz29fxyplGBz5LRQfbiNGoAYneUczyuUECY0zEATlrjbqjO-3LCltYyKcfobLDZpXjnrOcwZm2zqhozSz1WCgmDZtOSYVzOg5l-iEEdJAJDv1CmTYAGErKOAR8CqUiV4839f_rXi4YbvTc6IZ1Ls0Idxw-7tB8Qvj_NLIozuiOi3otyzjNC_xgn--q2eAdiFjUmxaPze4" />
                    <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
                </div>
                <div className="relative z-10 text-center px-6 max-w-4xl pt-24">
                    <span className="font-label text-xs uppercase tracking-[0.2em] text-white/80 mb-6 block">{t('about_hero_badge')}</span>
                    <h1 className="font-headline text-5xl md:text-7xl font-semibold text-white tracking-tight leading-[1.1] mb-8">
                        {t('about_hero_title_1')}<br/><span className="text-secondary-container text-opacity-80">{t('about_hero_title_2')}</span>
                    </h1>
                    <div className="flex justify-center">
                        <div className="w-px h-24 bg-gradient-to-b from-white to-transparent"></div>
                    </div>
                </div>
            </header>

            {/* Section 2: The Stone */}
            <section className="py-32 px-6 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <span className="font-label text-xs uppercase tracking-[0.1em] text-secondary font-bold">{t('about_stone_badge')}</span>
                        <h2 className="font-headline text-4xl md:text-5xl font-semibold text-primary leading-tight">{t('about_stone_title')}</h2>
                        <p className="text-lg text-on-surface-variant leading-relaxed max-w-lg">
                            {t('about_stone_desc')}
                        </p>
                        <div className="pt-4">
                            <div className="font-mono text-xs text-secondary bg-secondary/10 px-3 py-1 rounded-full inline-block">
                                MINERAL_ID: LAPIS_CHILE_950
                            </div>
                        </div>
                    </div>
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-surface-container rounded-xl -rotate-2 z-0"></div>
                        <div className="relative z-10 overflow-hidden rounded-lg aspect-square">
                            <img className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="Macro texture of raw deep blue lapis lazuli with golden pyrite specks" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBFRWaLj18zktmQjxaL9_lhCXetdis6bLt2ybzLi035yl-Fe-1V-Ea2Q6P8TqDvPMZF2c2SfzrLpc7XdzWG15x_DWVj3KpWtpkoOfygXdi_jZzTUuLVa-q0TfOJmv9-lQHk6HtQ2R5CA_vz1nUMP_ZqBZy5hEDsIGk7lEsDckQw4F6WqlM8iK3ZqrVl7wPYTrQLP5gOoXHC5ByNxQwmfL6S18v56IhHCqV8F71Tpv2qaVL_uSxc7siwh7O27PNxfavv7RX26XdTMlW" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: The Process */}
            <section className="bg-surface-container py-32 px-6 relative overflow-hidden bg-noise">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                        <div className="max-w-xl">
                            <span className="font-label text-xs uppercase tracking-[0.1em] text-secondary font-bold">{t('about_craft_badge')}</span>
                            <h2 className="font-headline text-4xl font-semibold text-primary mt-4">{t('about_craft_title')}</h2>
                        </div>
                        <p className="text-lg text-on-surface-variant max-w-sm mb-2">
                            {t('about_craft_desc')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                        <div className="col-span-12 md:col-span-7 rounded-lg overflow-hidden h-[500px] hover:translate-y-[-4px] hover:scale-[1.02] transition-all duration-400">
                            <img className="w-full h-full object-cover" alt="Close up of an artisan's hands working with silver in a rustic workshop" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3AFuPvm3QA3akROGmjLsT9csCCgw8yAGRMhDVrzS7nUTHI_vyYlxNZEQ_1NAo9tiu6UTWkbCwWMl1XGZqKGZywU2g6hFvaeQ7DhIPt9YYk3muPj7lacTheANJiEgtIsbTZhg5Q96OzTNyMzDTLAzntFjjXDSii4sCkWNM6r-e1OeIq8tA_8V8KQOMuGm9nLTDpu7ASXdXuUJfe7_wQNwz67foBGOWaM18w6k1tIwDVCUOf4czQi8XOgQxtWMtCcjFoofV-cBsZZdJ" />
                        </div>
                        <div className="col-span-12 md:col-span-5 flex flex-col gap-6">
                            <div className="bg-surface-container-lowest p-8 rounded-lg flex-1 hover:translate-y-[-4px] hover:scale-[1.02] transition-all duration-400">
                                <span className="material-symbols-outlined text-secondary text-4xl mb-4">precision_manufacturing</span>
                                <h3 className="font-headline text-xl font-bold text-primary mb-2">{t('about_step1_title')}</h3>
                                <p className="text-on-surface-variant text-sm">{t('about_step1_desc')}</p>
                            </div>
                            <div className="bg-primary-container p-8 rounded-lg flex-1 hover:translate-y-[-4px] hover:scale-[1.02] transition-all duration-400 text-surface-container-lowest">
                                <span className="material-symbols-outlined text-secondary-container text-4xl mb-4">local_fire_department</span>
                                <h3 className="font-headline text-xl font-bold mb-2">{t('about_step2_title')}</h3>
                                <p className="text-primary-container-lowest opacity-80 text-sm">{t('about_step2_desc')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 4: Sustainability */}
            <section className="py-32 px-6 max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <span className="font-label text-xs uppercase tracking-[0.1em] text-secondary font-bold">{t('about_ethics_badge')}</span>
                    <h2 className="font-headline text-4xl font-semibold text-primary mt-4">{t('about_ethics_title')}</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
                    <div className="space-y-4 flex flex-col items-center md:items-start">
                        <div className="w-12 h-12 bg-surface-container flex items-center justify-center rounded-lg">
                            <span className="material-symbols-outlined text-secondary">eco</span>
                        </div>
                        <h4 className="font-headline text-lg font-bold text-primary">{t('about_ethic1_title')}</h4>
                        <p className="text-on-surface-variant text-sm leading-relaxed">{t('about_ethic1_desc')}</p>
                    </div>
                    <div className="space-y-4 flex flex-col items-center md:items-start">
                        <div className="w-12 h-12 bg-surface-container flex items-center justify-center rounded-lg">
                            <span className="material-symbols-outlined text-secondary">diversity_3</span>
                        </div>
                        <h4 className="font-headline text-lg font-bold text-primary">{t('about_ethic2_title')}</h4>
                        <p className="text-on-surface-variant text-sm leading-relaxed">{t('about_ethic2_desc')}</p>
                    </div>
                    <div className="space-y-4 flex flex-col items-center md:items-start">
                        <div className="w-12 h-12 bg-surface-container flex items-center justify-center rounded-lg">
                            <span className="material-symbols-outlined text-secondary">auto_awesome</span>
                        </div>
                        <h4 className="font-headline text-lg font-bold text-primary">{t('about_ethic3_title')}</h4>
                        <p className="text-on-surface-variant text-sm leading-relaxed">{t('about_ethic3_desc')}</p>
                    </div>
                </div>
            </section>

            {/* Section 5: CTA */}
            <section className="pb-32 px-6">
                <div className="max-w-5xl mx-auto arctic-gradient rounded-xl p-16 text-center relative overflow-hidden bg-noise">
                    <div className="relative z-10">
                        <h2 className="font-headline text-3xl md:text-5xl font-semibold text-white mb-8">{t('about_cta_title')}</h2>
                        <Link className="inline-flex items-center gap-3 bg-white text-primary px-12 md:px-10 py-5 rounded-full font-label text-sm uppercase tracking-widest font-bold hover:scale-105 transition-transform duration-300 whitespace-nowrap" to="/coleccion">
                            {t('about_cta_btn')}
                            <span className="material-symbols-outlined">arrow_right_alt</span>
                        </Link>
                    </div>
                    {/* Decorative element */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                </div>
            </section>
        </div>
    );
};

export default About;
