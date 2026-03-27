import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Gem, Hammer, Users, Mail, X, Menu, ShoppingCart, ChevronDown } from 'lucide-react';

// --- Animation variants (same as GlowMenu) ---
const itemVariants = {
    initial: { rotateX: 0, opacity: 1 },
    hover:   { rotateX: -90, opacity: 0 },
};
const backVariants = {
    initial: { rotateX: 90, opacity: 0 },
    hover:   { rotateX: 0, opacity: 1 },
};
const glowVariants = {
    initial: { opacity: 0, scale: 0.8 },
    hover: {
        opacity: 1, scale: 2,
        transition: {
            opacity: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
            scale: { duration: 0.5, type: 'spring', stiffness: 300, damping: 25 },
        },
    },
};
const navGlowVariants = {
    initial: { opacity: 0 },
    active: { opacity: 1, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
};
const sharedTransition = { type: 'spring', stiffness: 100, damping: 20, duration: 0.5 };

// Individual flip nav item
const NavItem = ({ icon: Icon, label, href, gradient, iconColor, isActive, onClick }) => (
    <motion.li className="relative list-none">
        <button onClick={() => onClick(label, href)} className="block w-full">
            <motion.div
                className="block rounded-xl overflow-visible group relative"
                style={{ perspective: '600px' }}
                whileHover="hover"
                initial="initial"
            >
                {/* Glow blob */}
                <motion.div
                    className="absolute inset-0 z-0 pointer-events-none rounded-2xl"
                    variants={glowVariants}
                    animate={isActive ? 'hover' : 'initial'}
                    style={{ background: gradient }}
                />
                {/* Front */}
                <motion.div
                    className={`flex items-center gap-2 px-3 py-2 relative z-10 rounded-xl transition-colors ${isActive ? 'text-primary' : 'text-on-surface-variant'}`}
                    variants={itemVariants}
                    transition={sharedTransition}
                    style={{ transformStyle: 'preserve-3d', transformOrigin: 'center bottom' }}
                >
                    <Icon className={`h-4 w-4 transition-colors duration-300 ${isActive ? iconColor : ''}`} />
                    <span className="text-xs font-label uppercase tracking-widest">{label}</span>
                </motion.div>
                {/* Back */}
                <motion.div
                    className={`flex items-center gap-2 px-3 py-2 absolute inset-0 z-10 rounded-xl transition-colors ${isActive ? 'text-primary' : 'text-on-surface-variant'}`}
                    variants={backVariants}
                    transition={sharedTransition}
                    style={{ transformStyle: 'preserve-3d', transformOrigin: 'center top', rotateX: 90 }}
                >
                    <Icon className={`h-4 w-4 transition-colors duration-300 ${iconColor}`} />
                    <span className="text-xs font-label uppercase tracking-widest">{label}</span>
                </motion.div>
            </motion.div>
        </button>
    </motion.li>
);

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const location = useLocation();
    const navigate = useNavigate();
    const [langOpen, setLangOpen] = useState(false);
    const [currentLang, setCurrentLang] = useState(i18n.language);
    const [mobileOpen, setMobileOpen] = useState(false);

    const languages = [
        { code: 'ES', flag: '🇨🇱', label: 'Español' },
        { code: 'EN', flag: '🇺🇸', label: 'English' },
        { code: 'PT', flag: '🇧🇷', label: 'Português' },
    ];
    const activeLang = languages.find(l => l.code === currentLang) ?? languages[0];

    const navItems = [
        { icon: Home,   label: t('nav_home'),         href: '/',          gradient: 'radial-gradient(circle, rgba(50,94,158,0.18) 0%, rgba(50,94,158,0.07) 50%, transparent 100%)', iconColor: 'text-secondary' },
        { icon: Gem,    label: t('nav_jewelry'),       href: '/coleccion', gradient: 'radial-gradient(circle, rgba(142,183,253,0.22) 0%, rgba(142,183,253,0.08) 50%, transparent 100%)', iconColor: 'text-secondary' },
        { icon: Hammer, label: t('nav_artisanship'),   href: '/artesania', gradient: 'radial-gradient(circle, rgba(0,21,42,0.15) 0%, rgba(0,21,42,0.06) 50%, transparent 100%)', iconColor: 'text-primary' },
        { icon: Users,  label: t('nav_about'),         href: '/nosotros',  gradient: 'radial-gradient(circle, rgba(50,94,158,0.18) 0%, rgba(50,94,158,0.07) 50%, transparent 100%)', iconColor: 'text-secondary' },
        { icon: Mail,   label: t('nav_contact'),       href: '/contacto',  gradient: 'radial-gradient(circle, rgba(142,183,253,0.22) 0%, rgba(142,183,253,0.08) 50%, transparent 100%)', iconColor: 'text-secondary' },
    ];

    const activeItem = navItems.find(item =>
        item.href === '/' ? location.pathname === '/' : location.pathname.startsWith(item.href)
    )?.label ?? '';

    const handleNavClick = (label, href) => {
        navigate(href);
        setMobileOpen(false);
    };

    return (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-7xl z-50">
            {/* Main navbar pill — motion wrapper for glow effect */}
            <motion.nav
                className="relative flex items-center justify-between px-4 py-2 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/30 shadow-lg"
                initial="initial"
                whileHover="active"
            >
                {/* Nav-wide glow overlay — uses "active" key, not "hover", so it doesn't propagate flip to menu items */}
                <motion.div
                    className="absolute -inset-2 rounded-3xl z-0 pointer-events-none"
                    style={{
                        background: 'radial-gradient(ellipse at center, rgba(50,94,158,0.1) 0%, rgba(142,183,253,0.06) 40%, transparent 70%)',
                    }}
                    variants={navGlowVariants}
                />

                {/* Logo */}
                <Link to="/" className="flex-shrink-0 relative z-10">
                    <img src="/images/bluestone-logo-1568587135.jpg" alt="Bluestone Logo" className="h-9 w-auto object-contain mix-blend-multiply" />
                </Link>

                {/* Desktop nav items */}
                <ul className="hidden lg:flex items-center gap-0.5 relative z-10">
                    {navItems.map(item => (
                        <NavItem
                            key={item.href}
                            {...item}
                            isActive={item.label === activeItem}
                            onClick={handleNavClick}
                        />
                    ))}
                </ul>

                {/* Right side */}
                <div className="flex items-center gap-1.5 relative z-10">
                    {/* Language */}
                    <div className="relative">
                        <button
                            onClick={() => setLangOpen(!langOpen)}
                            className="flex items-center gap-1.5 px-3 py-2 border border-outline-variant/30 text-on-surface-variant hover:bg-surface-container rounded-xl transition-all"
                        >
                            <span className="leading-none">{activeLang.flag}</span>
                            <span className="font-label tracking-widest text-[10px] uppercase leading-none hidden sm:block">{activeLang.code}</span>
                            <ChevronDown className="w-3 h-3 flex-shrink-0" />
                        </button>
                        <AnimatePresence>
                            {langOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: -8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -8 }}
                                    transition={{ duration: 0.15 }}
                                    className="absolute top-full right-0 mt-2 bg-white border border-outline-variant/20 rounded-xl shadow-xl py-2 min-w-[140px] z-50"
                                >
                                    {languages.map(lang => (
                                        <button
                                            key={lang.code}
                                            onClick={() => { setCurrentLang(lang.code); i18n.changeLanguage(lang.code); setLangOpen(false); }}
                                            className={`flex items-center gap-3 px-4 py-2 hover:bg-surface-container transition-colors text-sm w-full text-left ${currentLang === lang.code ? 'bg-surface-container-low text-primary' : 'text-on-surface-variant'}`}
                                        >
                                            <span>{lang.flag}</span>
                                            <span className="font-label tracking-widest text-[10px] uppercase">{lang.label}</span>
                                        </button>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Cart */}
                    <button onClick={() => navigate('/carrito')} className="p-2 text-on-surface-variant hover:bg-surface-container rounded-xl transition-all">
                        <ShoppingCart className="w-4 h-4" />
                    </button>

                    {/* Buy CTA */}
                    <motion.button
                        onClick={() => navigate('/coleccion')}
                        className="hidden sm:flex arctic-gradient text-white px-5 py-2 rounded-xl font-semibold text-sm items-center gap-1.5"
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                    >
                        {t('nav_buy')}
                    </motion.button>

                    {/* Mobile hamburger */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="lg:hidden p-2 text-on-surface-variant hover:bg-surface-container rounded-xl transition-all"
                    >
                        {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile dropdown */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -12, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -12, scale: 0.97 }}
                        transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                        className="mt-2 bg-white/95 backdrop-blur-xl border border-white/30 rounded-2xl shadow-2xl overflow-hidden"
                    >
                        <div className="p-3 flex flex-col gap-1">
                            {navItems.map(item => {
                                const Icon = item.icon;
                                const isActive = item.label === activeItem;
                                return (
                                    <button
                                        key={item.href}
                                        onClick={() => handleNavClick(item.label, item.href)}
                                        className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-left w-full ${isActive ? 'bg-surface-container-low text-primary font-semibold' : 'text-on-surface-variant hover:bg-surface-container'}`}
                                    >
                                        <Icon className={`w-4 h-4 ${isActive ? 'text-secondary' : ''}`} />
                                        <span className="text-xs font-label uppercase tracking-widest">{item.label}</span>
                                    </button>
                                );
                            })}
                            <div className="border-t border-outline-variant/10 mt-1 pt-2">
                                <button
                                    onClick={() => { navigate('/coleccion'); setMobileOpen(false); }}
                                    className="arctic-gradient text-white px-6 py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 w-full"
                                >
                                    <ShoppingCart className="w-4 h-4" />
                                    {t('nav_buy')}
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Navbar;
