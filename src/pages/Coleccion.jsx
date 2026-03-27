import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { Filter, SlidersHorizontal, ChevronRight, Gem } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Coleccion = () => {
  const { t } = useTranslation();
  const gridRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".product-card", {
        opacity: 0,
        y: 30,
        duration: 2,
        stagger: 0.1,
        ease: "power3.out"
      });
    }, gridRef);
    return () => ctx.revert();
  }, []);

  const sections = [
    {
      titleKey: "prod_classic_title",
      descKey: "prod_classic_desc",
      products: [
        { id: 1, name: "Anillo Classic Lapislázuli", price: "$185.000", image: "/images/anillo-1.jpg" },
        { id: 2, name: "Aros Gota de Medianoche", price: "$165.000", image: "/images/aros-1.jpg" }
      ]
    },
    {
      titleKey: "prod_premium_title",
      descKey: "prod_premium_desc",
      products: [
        { id: 3, name: "Pulsera de Lapislázuli Edición Premium", price: "$245.000", image: "/images/pulsera-1.jpg" },
        { id: 4, name: "Collar Astral Plata 950", price: "$310.000", image: "/images/pulsera-1.jpg" }
      ]
    },
    {
      titleKey: "prod_special_title",
      descKey: "prod_special_desc",
      products: [
        { id: 5, name: "Gemelos Imperial Chilenos", price: "$220.000", image: "/images/artesania-3-condor.jpg" },
        { id: 6, name: "Amuleto Andes Ancestral", price: "$390.000", image: "/images/artesania-2.jpg" }
      ]
    }
  ];

  return (
    <div className="bg-surface pt-32 px-4 md:px-24 pb-40" ref={gridRef}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-24 gap-6 md:gap-12">
          <div>
             <p className="label-md text-secondary mb-4 tracking-[0.2em] uppercase">{t('col_badge')}</p>
             <h1 className="text-display-lg text-primary font-heading font-semibold text-4xl md:text-6xl tracking-tight">
               {t('col_title_1')} <br />
               <span className="italic font-light opacity-80">{t('col_title_2')}</span>
             </h1>
          </div>
          <div className="flex gap-6">
             <button className="flex items-center gap-3 px-8 py-4 bg-white border border-outline-variant/10 rounded-full label-md text-[10px] text-primary hover:bg-surface-container transition-all">
                <Filter size={14} /> {t('col_filter')}
             </button>
             <button className="flex items-center gap-3 px-8 py-4 bg-white border border-outline-variant/10 rounded-full label-md text-[10px] text-primary hover:bg-surface-container transition-all">
                <SlidersHorizontal size={14} /> {t('col_sort')}
             </button>
          </div>
        </div>

        {sections.map((section, sIdx) => (
           <div key={section.titleKey} className="mb-16 md:mb-32 last:mb-0">
              <div className="mb-16 pb-6 border-b border-primary/5 flex flex-col md:flex-row justify-between items-center gap-8">
                 <div>
                    <h2 className="text-3xl font-heading font-semibold text-primary mb-2 flex items-center gap-4">
                       <Gem size={20} className="text-secondary opacity-40" /> {t(section.titleKey)}
                    </h2>
                    <p className="text-primary/40 text-sm italic">{t(section.descKey)}</p>
                 </div>
                 <Link to="/nosotros" className="label-md text-[10px] text-secondary tracking-widest hover:translate-x-1 transition-all flex items-center gap-2">
                    {t('col_craft_link')} <ChevronRight size={10} />
                 </Link>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-12">
                 {section.products.map((product) => (
                   <Link 
                     key={product.id} 
                     to={`/producto/${product.id}`}
                     className="flex flex-col gap-6 group product-card"
                   >
                     <div className="aspect-[4/5] bg-surface-container rounded-2xl overflow-hidden relative shadow-sm group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-700">
                        <img src={product.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={product.name} />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute bottom-6 left-6 right-6 translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                           <button className="w-full py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white label-md text-[10px] tracking-widest rounded-full hover:bg-white hover:text-primary transition-all">
                              {t('col_quick_view')}
                           </button>
                        </div>
                     </div>
                     <div className="flex justify-between items-start px-2">
                        <div>
                           <h3 className="text-sm font-bold text-primary uppercase tracking-tighter mb-1 leading-tight max-w-[140px]">{product.name}</h3>
                           <p className="text-[10px] label-md text-primary/30 tracking-widest uppercase">{t('col_stone_grade')}</p>
                        </div>
                        <p className="font-mono text-secondary font-bold text-sm">{product.price}</p>
                     </div>
                   </Link>
                 ))}
              </div>
           </div>
        ))}
      </div>
    </div>
  );
};

export default Coleccion;
