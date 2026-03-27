import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MeshGradient } from '@paper-design/shaders-react';
import { motion } from 'framer-motion';
import CircularTestimonials from '../components/ui/CircularTestimonials';

const TESTIMONIALS = [
    {
        name: 'Claudio Rengifo',
        designation: 'Cliente verificado',
        quote: 'La calidad del azul es hipnotizante. Se nota que es piedra genuina. Nunca había visto un lapislázuli tan puro y bien trabajado.',
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDdIOlC08xTupFE4Kdw5CuVq1IBsDTdkmV5UcuelurG4p4NY6vPkKOCeXpWm2GmrCBF08gkxNzyEl-pajiBxby1kERJonnuQaKuP92du2NwoiqUDGDQOo343c71LV55LYaDJtLDpczagItfhzeKPapjX9KhEsBjBOx45K4p9B9-uKMnxNbSPswmWrLLAQxiuybb4qM4azaBySWAh671rGiwDC1GxYsEpE7Tkh2MYRIOrnG3CV8OP9AQ4t7F6v6Xu86Ecz5tvuj-2yMf',
    },
    {
        name: 'Laura Ohara',
        designation: 'Compradora frecuente',
        quote: 'Un regalo inolvidable. El empaque y la terminación son impecables. Lo regalé en un aniversario y fue un éxito total.',
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuByJoPn-2rkZ78fBdCBJaT7ul9k49T2p6ETm7U_KYHNsRLIAJbaVvcG0EF8emcXX6qNfZ2JD1iJIC1QtSvwAlgf3OWWWZgF0ZHKCi_LicfYtDkMhUykH5lrdEL-nQt81p29G_nlkH3twCi4RijSZJOHTQm9L3KvCcY9_GnGlt8APyZZAFblnW7FzYJ4v4bMS9IxuCHZ7KzvXq93381Zhhc9uHfLFcWfv4F8xbBJebRnfuGNwWh8G3oq_F7dF34I6LH-ptKj9N4bCIB9',
    },
    {
        name: 'Tamar Mendelson',
        designation: 'Coleccionista de arte',
        quote: 'Compré una escultura y quedé sin palabras. El detalle del tallado a mano es excepcional. Se nota el amor y la dedicación artesanal en cada pieza.',
        src: 'https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?q=80&w=400&auto=format&fit=crop',
    },
    {
        name: 'Martina Edelweist',
        designation: 'Joyería entusiasta',
        quote: 'El anillo que pedí llegó con certificado de autenticidad y una caja preciosa. La piedra tiene un azul profundo que no he visto en ningún otro lugar.',
        src: 'https://images.unsplash.com/photo-1524267213992-b76e8577d046?q=80&w=400&auto=format&fit=crop',
    },
    {
        name: 'Jorge Castillo',
        designation: 'Emprendedor, Santiago',
        quote: 'Compré un set completo para mi esposa. La atención al cliente fue impecable y el producto superó todas mis expectativas. Definitivamente volvería.',
        src: 'https://images.unsplash.com/photo-1628749528992-f5702133b686?q=80&w=400&auto=format&fit=crop',
    },
];

const Home = () => {
    const { t } = useTranslation();

    // --- Image comparison slider ---
    const [sliderPos, setSliderPos] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const compareRef = useRef(null);

    const updateSlider = (clientX) => {
        if (!compareRef.current) return;
        const rect = compareRef.current.getBoundingClientRect();
        const x = clientX - rect.left;
        const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
        setSliderPos(pct);
    };

    const handleMouseDown = (e) => {
        setIsDragging(true);
        updateSlider(e.clientX);
    };
    const handleMouseMove = (e) => {
        if (!isDragging) return;
        updateSlider(e.clientX);
    };
    const handleMouseUp = () => setIsDragging(false);
    const handleTouchMove = (e) => updateSlider(e.touches[0].clientX);

    // --- Process scroll animation ---
    const processRef = useRef(null);
    const [lineProgress, setLineProgress] = useState(0);

    useEffect(() => {
        const onScroll = () => {
            if (!processRef.current) return;
            const rect = processRef.current.getBoundingClientRect();
            const windowH = window.innerHeight;
            // Start when section is 65% into viewport, complete when top reaches 15%
            const progress = Math.max(0, Math.min(1,
                (windowH * 0.65 - rect.top) / (windowH * 0.5)
            ));
            setLineProgress(progress * 100);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const steps = [
        { icon: 'manufacturing', titleKey: 'proc_1_title', descKey: 'proc_1_desc' },
        { icon: 'diamond',       titleKey: 'proc_2_title', descKey: 'proc_2_desc' },
        { icon: 'precision_manufacturing', titleKey: 'proc_3_title', descKey: 'proc_3_desc' },
        { icon: 'check_circle',  titleKey: 'proc_4_title', descKey: 'proc_4_desc' },
    ];
    // Each step activates at 0%, 33%, 66%, 100% of line progress
    const activeStep = lineProgress >= 95 ? 3
        : lineProgress >= 60 ? 2
        : lineProgress >= 28 ? 1
        : lineProgress >= 5  ? 0
        : -1;

    return (
        <div className="text-on-surface selection:bg-secondary-container bg-surface overflow-x-hidden">
            {/* Hero Section */}
            <header className="pt-48 pb-24 px-6 overflow-hidden relative">
                {/* Animated mesh gradient background */}
                <MeshGradient
                    className="absolute inset-0 w-full h-full"
                    colors={['#f7f9ff', '#e4effd', '#8eb7fd', '#c5d8f9', '#ffffff']}
                    speed={0.9}
                    backgroundColor="#f7f9ff"
                />
                {/* Noise texture overlay */}
                <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{
                    backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='filter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23filter)'/%3E%3C/svg%3E\")"
                }} />

                <div className="max-w-7xl mx-auto text-center mb-16 relative z-10">
                    {/* Animated badge */}
                    <motion.div
                        className="inline-flex items-center px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm mb-8 border border-secondary/20 shadow-sm"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <div className="absolute top-0 left-2 right-2 h-px bg-gradient-to-r from-transparent via-secondary/40 to-transparent rounded-full" />
                        <span className="text-secondary text-sm font-label font-medium tracking-wide">
                            ✦ {t('home_badge_1')}
                        </span>
                    </motion.div>

                    <motion.h1
                        className="text-5xl md:text-7xl font-headline font-bold tracking-tight text-primary mb-6"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        {t('home_title_1')} <span className="text-secondary italic">{t('home_title_2')}</span>
                    </motion.h1>

                    <motion.p
                        className="text-xl text-on-surface-variant max-w-2xl mx-auto mb-10 leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        {t('home_subtitle')}
                    </motion.p>

                    {/* Hero Grid */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <div className="group relative aspect-[4/5] rounded-[24px] overflow-hidden shadow-2xl transition-transform duration-500 hover:-translate-y-4">
                            <img className="w-full h-full object-cover" alt="Anillo de lapislázuli con plata fina" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCM6wZHx3fOFxrRl7VGO-kgv-nikLyBRm3l-AZuvdJng6TVWLb1SU9l5WA9a25jj0-P7luFy0dB342dGh1mk5-BXBwxprSQDixSUwkha_6xGgMJ50sTsflnWhn4WLRpkAbmHx65E1pZHqOjbWOoviEsTJwsaf_2vJRnY73ajLXx9Ff31iu4LjRG1ZTlT_A-Vcl2KhVmPIYT6COFWWswVeNKha-2qTvFXxyPHKM2PiZCCMgs3jtjdq8-s_l7LXXHPoTy_1kqDU5RoPvu" />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-8">
                                <span className="text-white font-mono text-sm tracking-wider">REF: AN-2024</span>
                            </div>
                        </div>

                        <div className="group relative aspect-[4/5] rounded-[24px] overflow-hidden shadow-2xl translate-y-8 transition-transform duration-500 hover:translate-y-4">
                            <img className="w-full h-full object-cover" alt="Collar de cuentas de lapislázuli azul profundo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6R1xyk0qwQe0oWKs23hQ8VEBuvBMxWW_L1-L0wue6nTd7Z5zPSdZfrQJnUitl7EtCuRUF9pDgn7BC7p2vJ42mj1RexDtDk1irAU-p0qwDUYV0qj_sNrogLMgwrLf2BJLS0ZPcGDgir5cMshluWkiumtFLX9m5l1aVbfdgIWIEaZabHGk0Q4-v5zASYCaw1G4AEAFkUAwTYTtvVK98yBPrWVwyeCAOzEr8MY-nFOv75Qu6Fevzjsn_Ps4EwdV1-dUBRG_ukREN4JiG" />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-8">
                                <span className="text-white font-mono text-sm tracking-wider">REF: CL-8812</span>
                            </div>
                        </div>

                        <div className="group relative aspect-[4/5] rounded-[24px] overflow-hidden shadow-2xl transition-transform duration-500 hover:-translate-y-4">
                            <img className="w-full h-full object-cover" alt="Escultura artesanal tallada en piedra lapislázuli" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBFRWaLj18zktmQjxaL9_lhCXetdis6bLt2ybzLi035yl-Fe-1V-Ea2Q6P8TqDvPMZF2c2SfzrLpc7XdzWG15x_DWVj3KpWtpkoOfygXdi_jZzTUuLVa-q0TfOJmv9-lQHk6HtQ2R5CA_vz1nUMP_ZqBZy5hEDsIGk7lEsDckQw4F6WqlM8iK3ZqrVl7wPYTrQLP5gOoXHC5ByNxQwmfL6S18v56IhHCqV8F71Tpv2qaVL_uSxc7siwh7O27PNxfavv7RX26XdTMlW" />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-8">
                                <span className="text-white font-mono text-sm tracking-wider">REF: AR-5540</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="flex flex-wrap justify-center gap-4 mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.85 }}
                    >
                        <span className="px-6 py-2 bg-white/70 backdrop-blur-sm rounded-full text-sm font-label uppercase tracking-widest text-primary flex items-center gap-2 border border-secondary/20 shadow-sm">
                            <span className="material-symbols-outlined text-sm">verified</span> {t('home_badge_1')}
                        </span>
                        <span className="px-6 py-2 bg-white/70 backdrop-blur-sm rounded-full text-sm font-label uppercase tracking-widest text-primary flex items-center gap-2 border border-secondary/20 shadow-sm">
                            <span className="material-symbols-outlined text-sm">brush</span> {t('home_badge_2')}
                        </span>
                        <span className="px-6 py-2 bg-white/70 backdrop-blur-sm rounded-full text-sm font-label uppercase tracking-widest text-primary flex items-center gap-2 border border-secondary/20 shadow-sm">
                            <span className="material-symbols-outlined text-sm">featured_seasonal_and_gifts</span> {t('home_badge_3')}
                        </span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.0 }}
                    >
                        <motion.div whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.97 }} style={{ display: 'inline-block' }}>
                            <Link to="/coleccion" className="inline-block arctic-gradient text-white px-10 py-5 rounded-full text-lg font-bold shadow-xl transition-shadow hover:shadow-2xl">
                                {t('home_cta')}
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </header>

            {/* Social Proof */}
            <section className="bg-surface-container-low py-20 px-6">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
                    <div className="flex flex-col">
                        <span className="text-5xl font-mono font-bold text-secondary">+5000</span>
                        <span className="text-sm font-label uppercase tracking-widest text-on-surface-variant">{t('sp_clients')}</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-5xl font-mono font-bold text-secondary">4.9 ★</span>
                        <span className="text-sm font-label uppercase tracking-widest text-on-surface-variant">{t('sp_reviews')}</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-5xl font-mono font-bold text-secondary">100%</span>
                        <span className="text-sm font-label uppercase tracking-widest text-on-surface-variant">{t('sp_natural')}</span>
                    </div>
                </div>
            </section>

            {/* Features Bento Grid */}
            <section className="py-32 px-6 border-outline-variant/10">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                        {/* Row 1 — Left: Before/After Comparison Slider */}
                        <div className="lg:col-span-7 bg-surface-container-lowest border-outline-variant/10 border rounded-[32px] overflow-hidden p-8 flex flex-col justify-between min-h-[500px]">
                            <div>
                                <span className="text-xs font-label uppercase tracking-[0.2em] text-secondary mb-4 block">{t('feat_trans_badge')}</span>
                                <h3 className="text-3xl font-bold mb-6 font-headline">{t('feat_trans_title')}</h3>
                            </div>

                            {/* Draggable comparison slider */}
                            <div
                                ref={compareRef}
                                className="relative flex-grow rounded-2xl overflow-hidden select-none"
                                style={{ cursor: isDragging ? 'grabbing' : 'ew-resize' }}
                                onMouseDown={handleMouseDown}
                                onMouseMove={handleMouseMove}
                                onMouseUp={handleMouseUp}
                                onMouseLeave={handleMouseUp}
                                onTouchStart={(e) => updateSlider(e.touches[0].clientX)}
                                onTouchMove={handleTouchMove}
                                onTouchEnd={handleMouseUp}
                            >
                                <img className="absolute inset-0 w-full h-full object-cover pointer-events-none" alt="Piedra de lapislázuli en bruto recién extraída" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNKoFcEgHL7tJp2bz8_CDkydWf2Z9WbFqKLvSCS--lPi7OesxCnn68Ack3topQQAFIC10K2k6Du9m96poqyg8hvLLN9Tbqzzav11fhpL3Iy9_F3lCQVbLBsr1vbo4jfutaE9pmLhyWFN9p3idNJX_Chw-9qHeaiJGCWCRwDCr4q84GGlKRdwbcXazjuzuTAeGv0xcjxdWpwbbcp7WJjoc9qFe1dfIlN_gSPbx4ytjncvyYuYMkuZ69k8OHmBncPmj4Rdbl4wdsE7lg" />
                                <img className="absolute inset-0 w-full h-full object-cover pointer-events-none z-10" style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }} alt="Joya terminada de lapislázuli pulido" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkGKhk_2cOWEN2JuYKgBWpZb-vNvT1EEFutUw6PvHEmlD9udIYyknSq4E2KYGHi10XmpZmag7G8nGMGvW9BpA7arZyVLl-EByKXvtIVmJno_53Gm0d0ev5y6K6cJeaiyMILAgNp0jqhjoVBRVCndpE-PjDf8zNZyL0CEe7U6t1S0kBogEYDkh8JLXxTY6by5shmLPYr3Uj0t68VSbBPLUTHpObEyWMj7TWGgsAcYhIQsGIfEQhe0ZNTzgpmohiVBsVorDk7qoGQ3QS" />
                                <div className="absolute top-0 bottom-0 w-0.5 bg-white z-20 pointer-events-none" style={{ left: `${sliderPos}%` }} />
                                <div className="absolute top-1/2 z-30 -translate-x-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-xl pointer-events-none" style={{ left: `${sliderPos}%` }}>
                                    <span className="material-symbols-outlined text-primary">unfold_more</span>
                                </div>
                                <span className="absolute bottom-3 left-3 z-20 text-white text-xs font-label uppercase tracking-widest bg-black/30 px-2 py-1 rounded-full pointer-events-none">Terminada</span>
                                <span className="absolute bottom-3 right-3 z-20 text-white text-xs font-label uppercase tracking-widest bg-black/30 px-2 py-1 rounded-full pointer-events-none">En bruto</span>
                            </div>
                        </div>

                        {/* Row 1 — Right: Agendar Visita (text on top, calendar below) */}
                        <div className="lg:col-span-5 bg-surface-container-lowest border border-outline-variant/10 rounded-[32px] p-10 flex flex-col gap-8 relative overflow-hidden">
                            <div className="z-10">
                                <span className="text-xs font-label uppercase tracking-[0.2em] text-secondary mb-4 block">{t('feat_book_badge')}</span>
                                <h3 className="text-3xl font-headline font-bold mb-4 text-primary">{t('feat_book_title')}</h3>
                                <p className="text-on-surface-variant mb-6 text-sm">{t('feat_book_desc')}</p>
                                <button className="arctic-gradient text-white px-6 py-3 rounded-full font-bold hover:opacity-90 transition-opacity text-sm">{t('feat_book_cta')}</button>
                            </div>

                            <div className="relative bg-surface-container rounded-3xl p-5 border border-outline-variant/10">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="font-mono text-sm uppercase text-primary">{t('feat_book_cal_month')}</span>
                                    <div className="flex gap-2 text-secondary">
                                        <span className="material-symbols-outlined text-xs cursor-pointer">chevron_left</span>
                                        <span className="material-symbols-outlined text-xs cursor-pointer">chevron_right</span>
                                    </div>
                                </div>
                                <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-bold text-on-surface-variant mb-3">
                                    {t('feat_book_cal_days').split(',').map(day => <span key={day}>{day}</span>)}
                                </div>
                                <div className="grid grid-cols-7 gap-1 text-center text-on-surface">
                                    <div className="p-1.5 text-xs opacity-30">29</div><div className="p-1.5 text-xs opacity-30">30</div>
                                    <div className="p-1.5 text-xs arctic-gradient text-white rounded-lg font-bold">1</div>
                                    <div className="p-1.5 text-xs hover:bg-surface-container-highest rounded-lg cursor-pointer">2</div>
                                    <div className="p-1.5 text-xs hover:bg-surface-container-highest rounded-lg cursor-pointer">3</div>
                                    <div className="p-1.5 text-xs hover:bg-surface-container-highest rounded-lg cursor-pointer">4</div>
                                    <div className="p-1.5 text-xs hover:bg-surface-container-highest rounded-lg cursor-pointer">5</div>
                                </div>
                                <div className="mt-4 bg-surface-container-highest rounded-xl p-3 flex items-center gap-3">
                                    <span className="material-symbols-outlined fill text-secondary">ads_click</span>
                                    <span className="text-xs font-bold font-label tracking-widest uppercase text-primary">{t('feat_book_conf')}</span>
                                </div>
                            </div>
                        </div>

                        {/* Row 2 — Full width: Testimonials — dark style */}
                        <div className="lg:col-span-12 bg-primary-container rounded-[32px] p-8 flex flex-col items-center relative overflow-hidden bg-noise">
                            <div className="w-full mb-2 z-10">
                                <span className="text-xs font-label uppercase tracking-[0.2em] text-secondary-container mb-2 block">{t('feat_exp_badge')}</span>
                                <h3 className="text-3xl font-bold font-headline text-white">{t('feat_exp_title')}</h3>
                            </div>
                            <CircularTestimonials
                                testimonials={TESTIMONIALS}
                                autoplay={true}
                                colors={{
                                    name: '#ffffff',
                                    designation: '#8eb7fd',
                                    testimony: '#c5d8f9',
                                    arrowBackground: '#325e9e',
                                    arrowForeground: '#ffffff',
                                    arrowHoverBackground: '#8eb7fd',
                                }}
                                fontSizes={{
                                    name: '1.3rem',
                                    designation: '0.85rem',
                                    quote: '1rem',
                                }}
                            />
                        </div>

                    </div>
                </div>
            </section>

            {/* Process Section — scroll-animated line */}
            <section ref={processRef} className="py-24 px-6 bg-surface-container-low">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-center text-4xl font-bold mb-20 font-headline">
                        {t('proc_title_1')}<span className="text-secondary italic">{t('proc_title_2')}</span>
                    </h2>

                    <div className="relative flex flex-col md:flex-row justify-between gap-12 md:gap-4">
                        {/* Background line (gray) */}
                        <div className="absolute top-8 left-8 right-8 h-px bg-outline-variant/30 hidden md:block" />

                        {/* Animated progress line */}
                        <div
                            className="absolute top-8 left-8 h-px bg-secondary hidden md:block transition-all duration-300 ease-out"
                            style={{ width: `calc(${lineProgress}% * 0.84)` }}
                        />

                        {steps.map((step, i) => {
                            const isActive = i <= activeStep;
                            const isLast = i === steps.length - 1;
                            return (
                                <div
                                    key={step.titleKey}
                                    className="relative z-10 flex flex-col items-center text-center max-w-[250px] transition-all duration-500"
                                >
                                    <div
                                        className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg mb-6 border transition-all duration-500 ${
                                            isActive
                                                ? isLast
                                                    ? 'arctic-gradient border-transparent scale-110'
                                                    : 'bg-secondary border-secondary scale-110'
                                                : 'bg-white border-outline-variant/10'
                                        }`}
                                    >
                                        <span
                                            className={`material-symbols-outlined transition-colors duration-500 ${
                                                isActive ? 'text-white' : 'text-secondary'
                                            }`}
                                        >
                                            {step.icon}
                                        </span>
                                    </div>
                                    <h4
                                        className={`font-bold mb-2 font-headline transition-colors duration-500 ${
                                            isActive ? 'text-primary' : 'text-on-surface-variant'
                                        }`}
                                    >
                                        {t(step.titleKey)}
                                    </h4>
                                    <p className="text-sm text-on-surface-variant leading-relaxed">{t(step.descKey)}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Product Showcase */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold mb-16 text-center font-headline">{t('prod_title_1')}<span className="text-secondary italic">{t('prod_title_2')}</span></h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-end">
                        {/* Classic */}
                        <div className="bg-surface-container-lowest p-8 rounded-[2rem] border border-outline-variant/10 transition-all hover:scale-[1.02]">
                            <div className="aspect-[4/5] bg-surface-container rounded-2xl mb-8 overflow-hidden">
                                <img className="w-full h-full object-cover" alt="Anillo clásico de lapislázuli" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAp-3WXCOppVLR-W_zl7YZ8xteTQf-QU6_fzOVed4X6VG9p0YVA8kLHWimM4BdgXK-ZjoER9Rzk4eIXaUhIwNjBs0uEBruZL4Butyqi2juDibIgUWODZEzyKwvffhL73WukEuCM2lSkAHPAjZEW0xk0mdbrqsrHg5k_X7OwiJWRPavMGFmr7BZhoW7V9IMF746vlbiq10jR426FfV-6cz8euqwOnZVU5IAnMC_LFir4ka8iZy1lSY5EUq8gKFYb4psPiHcEbmKw5hsJ" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2 font-headline">{t('prod_classic_title')}</h3>
                            <p className="text-on-surface-variant mb-6 text-sm">{t('prod_classic_desc')}</p>
                            <div className="flex justify-between items-center">
                                <span className="font-mono text-xl font-bold text-primary">$125.000</span>
                                <button className="bg-surface-container text-primary px-6 py-3 rounded-full font-bold hover:bg-secondary hover:text-white transition-all">{t('prod_add')}</button>
                            </div>
                        </div>

                        {/* Premium - Highlighted */}
                        <div className="bg-primary-container text-white p-10 rounded-[2.5rem] shadow-2xl scale-105 relative z-10 bg-noise mb-8 md:mb-0">
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-white text-[10px] font-label uppercase tracking-widest px-4 py-1 rounded-full whitespace-nowrap">{t('prod_best')}</div>
                            <div className="aspect-[4/5] bg-white/10 rounded-3xl mb-8 overflow-hidden">
                                <img className="w-full h-full object-cover" alt="Set premium" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhzLgQVmLLm2HDHZDpMspvwDILciiKBSBkYxSb5Sx_uohA7Oic1J2pfqT3fGqEXxw8bQHPfUZicF4SoO6AtpP8OrQaD8A45gdfw3EMr1XfX5fecbTKFK84pnIBu4X7rshtl6aUYr7LuOMuqrIBDeJH0KdYAPR8R-zqpNrPhxvVZVUydebiADZVyYh-3qyYuHEPIMIqc0zUvfYtwmfWeNXMUVufTyWgPX4uPcHYmVfU0YyhLXgufxg9uXdQdQT1Jfj3_ADeenCzVxlr" />
                            </div>
                            <h3 className="text-3xl font-bold mb-2 font-headline">{t('prod_premium_title')}</h3>
                            <p className="text-on-primary-container mb-6 text-sm">{t('prod_premium_desc')}</p>
                            <div className="flex justify-between items-center">
                                <span className="font-mono text-2xl font-bold text-white">$340.000</span>
                                <Link to="/producto/1" className="bg-secondary text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-primary transition-all">{t('prod_buy')}</Link>
                            </div>
                        </div>

                        {/* Special Edition */}
                        <div className="bg-surface-container-lowest p-8 rounded-[2rem] border border-outline-variant/10 transition-all hover:scale-[1.02]">
                            <div className="aspect-[4/5] bg-surface-container rounded-2xl mb-8 overflow-hidden">
                                <img className="w-full h-full object-cover" alt="Escultura especial" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_TUhG24M4eX0yUiNv8prfq69alPvighDNwiJrkP5OliC6X55e_SDeo_lUulp5Gt5cnwCVSmT_Olt2HuStFXG_mt9RagLFIrZOg9NOIAcmShk3Z0JJ360qJsll7bgZCVZVhtRvpkyOuuD5DSsL9QSIa1bFwxJRVzfOTl8eptNbVOFgnZAw8CeoYnvlEu6emuBV-VfvSnIfH5v7JieBlpn26TRi2yExH8kFAh_0xicbOfyf3lxzHCB37kCrPzwMy6l1JtG0zH9iFaOw" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2 font-headline">{t('prod_special_title')}</h3>
                            <p className="text-on-surface-variant mb-6 text-sm">{t('prod_special_desc')}</p>
                            <div className="flex justify-between items-center">
                                <span className="font-mono text-xl font-bold text-primary">$580.000</span>
                                <button className="bg-surface-container text-primary px-6 py-3 rounded-full font-bold hover:bg-secondary hover:text-white transition-all">{t('prod_detail')}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 px-6 bg-surface-container-low">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-4xl font-bold mb-12 text-center italic font-headline text-primary">{t('faq_title')}</h2>

                    <div className="space-y-4">
                        <div className="bg-surface-container-lowest rounded-2xl overflow-hidden group">
                           <button className="w-full px-8 py-6 text-left flex justify-between items-center">
                              <span className="font-bold text-primary">{t('faq_1_q')}</span>
                              <span className="material-symbols-outlined text-secondary">expand_more</span>
                           </button>
                           <div className="px-8 pb-6 text-sm text-on-surface-variant leading-relaxed">
                              {t('faq_1_a')}
                           </div>
                        </div>
                        <div className="bg-surface-container-lowest rounded-2xl overflow-hidden opacity-70">
                           <button className="w-full px-8 py-6 text-left flex justify-between items-center group">
                              <span className="font-bold text-primary">{t('faq_2_q')}</span>
                              <span className="material-symbols-outlined text-secondary group-focus:rotate-180 transition-transform">expand_more</span>
                           </button>
                        </div>
                        <div className="bg-surface-container-lowest rounded-2xl overflow-hidden opacity-70">
                           <button className="w-full px-8 py-6 text-left flex justify-between items-center group">
                              <span className="font-bold text-primary">{t('faq_3_q')}</span>
                              <span className="material-symbols-outlined text-secondary group-focus:rotate-180 transition-transform">expand_more</span>
                           </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
