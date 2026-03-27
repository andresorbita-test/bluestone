import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-primary-container text-white py-24 px-6 bg-noise">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                    <div>
                        <span className="text-3xl font-bold tracking-tighter mb-6 block font-headline">Bluestone</span>
                        <p className="text-on-primary-container text-sm leading-relaxed mb-6">Elevando el patrimonio mineral de Chile a través del diseño contemporáneo y la maestría artesanal.</p>
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors cursor-pointer">
                                <span className="material-symbols-outlined text-sm">share</span>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors cursor-pointer">
                                <span className="material-symbols-outlined text-sm">mail</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h5 className="font-label uppercase tracking-widest text-xs text-secondary-container mb-8">Información de Marca</h5>
                        <ul className="space-y-4 text-sm text-on-primary-container">
                            <li><a className="hover:text-white transition-colors" href="#">Nuestra Historia</a></li>
                            <li><a className="hover:text-white transition-colors" href="#">Artesanos</a></li>
                            <li><a className="hover:text-white transition-colors" href="#">Compromiso Ético</a></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-label uppercase tracking-widest text-xs text-secondary-container mb-8">Productos</h5>
                        <ul className="space-y-4 text-sm text-on-primary-container">
                            <li><a className="hover:text-white transition-colors" href="#">Anillos</a></li>
                            <li><a className="hover:text-white transition-colors" href="#">Collares</a></li>
                            <li><a className="hover:text-white transition-colors" href="#">Esculturas</a></li>
                            <li><a className="hover:text-white transition-colors" href="#">Colecciones</a></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-label uppercase tracking-widest text-xs text-secondary-container mb-8">Empresa</h5>
                        <ul className="space-y-4 text-sm text-on-primary-container">
                            <li><a className="hover:text-white transition-colors" href="#">Soporte</a></li>
                            <li><a className="hover:text-white transition-colors" href="#">Envíos</a></li>
                            <li><a className="hover:text-white transition-colors" href="#">Términos</a></li>
                            <li><a className="hover:text-white transition-colors" href="#">Privacidad</a></li>
                        </ul>
                    </div>
                </div>
                <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <span className="text-xs font-mono text-on-primary-container">© Bluestone. Estado del Sistema: Online</span>
                    <div className="flex gap-8 text-[10px] font-label uppercase tracking-widest text-on-primary-container">
                        <a className="hover:text-white" href="#">Facebook</a>
                        <a className="hover:text-white" href="#">Instagram</a>
                        <a className="hover:text-white" href="#">LinkedIn</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
