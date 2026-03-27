import React, { useEffect, useRef, useState, useMemo, useCallback } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

function calculateGap(width) {
    const minWidth = 1024, maxWidth = 1456, minGap = 60, maxGap = 86;
    if (width <= minWidth) return minGap;
    if (width >= maxWidth) return Math.max(minGap, maxGap + 0.06018 * (width - maxWidth));
    return minGap + (maxGap - minGap) * ((width - minWidth) / (maxWidth - minWidth));
}

const CircularTestimonials = ({
    testimonials,
    autoplay = true,
    colors = {},
    fontSizes = {},
}) => {
    const colorName        = colors.name            ?? '#00152a';
    const colorDesignation = colors.designation     ?? '#325e9e';
    const colorTestimony   = colors.testimony       ?? '#43474d';
    const colorArrowBg     = colors.arrowBackground ?? '#00152a';
    const colorArrowFg     = colors.arrowForeground ?? '#ffffff';
    const colorArrowHover  = colors.arrowHoverBackground ?? '#325e9e';
    const fontSizeName     = fontSizes.name         ?? '1.4rem';
    const fontSizeDesig    = fontSizes.designation  ?? '0.9rem';
    const fontSizeQuote    = fontSizes.quote        ?? '1.05rem';

    const [activeIndex, setActiveIndex]   = useState(0);
    const [hoverPrev, setHoverPrev]       = useState(false);
    const [hoverNext, setHoverNext]       = useState(false);
    const [containerWidth, setContainerWidth] = useState(600);

    const imageContainerRef  = useRef(null);
    const autoplayIntervalRef = useRef(null);

    const len = useMemo(() => testimonials.length, [testimonials]);
    const active = useMemo(() => testimonials[activeIndex], [activeIndex, testimonials]);

    useEffect(() => {
        const handleResize = () => {
            if (imageContainerRef.current)
                setContainerWidth(imageContainerRef.current.offsetWidth);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (autoplay) {
            autoplayIntervalRef.current = setInterval(() =>
                setActiveIndex(p => (p + 1) % len), 5000);
        }
        return () => clearInterval(autoplayIntervalRef.current);
    }, [autoplay, len]);

    const handleNext = useCallback(() => {
        setActiveIndex(p => (p + 1) % len);
        clearInterval(autoplayIntervalRef.current);
    }, [len]);

    const handlePrev = useCallback(() => {
        setActiveIndex(p => (p - 1 + len) % len);
        clearInterval(autoplayIntervalRef.current);
    }, [len]);

    useEffect(() => {
        const onKey = e => {
            if (e.key === 'ArrowLeft') handlePrev();
            if (e.key === 'ArrowRight') handleNext();
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [handlePrev, handleNext]);

    const getImageStyle = (index) => {
        const gap = calculateGap(containerWidth);
        const maxStickUp = gap * 0.8;
        const isActive = index === activeIndex;
        const isLeft  = (activeIndex - 1 + len) % len === index;
        const isRight = (activeIndex + 1) % len === index;
        const base = { transition: 'all 0.8s cubic-bezier(.4,2,.3,1)' };

        if (isActive) return { ...base, zIndex: 3, opacity: 1, pointerEvents: 'auto',
            transform: 'translateX(0) translateY(0) scale(1) rotateY(0deg)' };
        if (isLeft)   return { ...base, zIndex: 2, opacity: 1, pointerEvents: 'auto',
            transform: `translateX(-${gap}px) translateY(-${maxStickUp}px) scale(0.85) rotateY(15deg)` };
        if (isRight)  return { ...base, zIndex: 2, opacity: 1, pointerEvents: 'auto',
            transform: `translateX(${gap}px) translateY(-${maxStickUp}px) scale(0.85) rotateY(-15deg)` };
        return { ...base, zIndex: 1, opacity: 0, pointerEvents: 'none' };
    };

    const quoteVariants = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit:    { opacity: 0, y: -20 },
    };

    return (
        <div className="w-full max-w-4xl p-6 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">

                {/* Images */}
                <div
                    ref={imageContainerRef}
                    className="relative w-full h-80 md:h-96"
                    style={{ perspective: '1000px' }}
                >
                    {testimonials.map((t, i) => (
                        <img
                            key={t.src}
                            src={t.src}
                            alt={t.name}
                            className="absolute w-full h-full object-cover rounded-3xl"
                            style={{
                                boxShadow: '0 10px 30px rgba(0,0,0,0.18)',
                                ...getImageStyle(i),
                            }}
                        />
                    ))}
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            variants={quoteVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                        >
                            <h3 className="font-bold mb-1" style={{ color: colorName, fontSize: fontSizeName }}>
                                {active.name}
                            </h3>
                            <p className="mb-8 font-label" style={{ color: colorDesignation, fontSize: fontSizeDesig }}>
                                {active.designation}
                            </p>
                            <p style={{ color: colorTestimony, fontSize: fontSizeQuote, lineHeight: 1.75 }}>
                                {active.quote.split(' ').map((word, i) => (
                                    <motion.span
                                        key={i}
                                        initial={{ filter: 'blur(10px)', opacity: 0, y: 5 }}
                                        animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
                                        transition={{ duration: 0.22, ease: 'easeInOut', delay: 0.025 * i }}
                                        style={{ display: 'inline-block' }}
                                    >
                                        {word}&nbsp;
                                    </motion.span>
                                ))}
                            </p>
                        </motion.div>
                    </AnimatePresence>

                    {/* Arrow buttons */}
                    <div className="flex gap-6 pt-10 md:pt-0 mt-8">
                        <button
                            onClick={handlePrev}
                            onMouseEnter={() => setHoverPrev(true)}
                            onMouseLeave={() => setHoverPrev(false)}
                            aria-label="Testimonio anterior"
                            className="w-11 h-11 rounded-full flex items-center justify-center border-none cursor-pointer transition-colors duration-300"
                            style={{ backgroundColor: hoverPrev ? colorArrowHover : colorArrowBg }}
                        >
                            <FaArrowLeft size={16} color={colorArrowFg} />
                        </button>
                        <button
                            onClick={handleNext}
                            onMouseEnter={() => setHoverNext(true)}
                            onMouseLeave={() => setHoverNext(false)}
                            aria-label="Siguiente testimonio"
                            className="w-11 h-11 rounded-full flex items-center justify-center border-none cursor-pointer transition-colors duration-300"
                            style={{ backgroundColor: hoverNext ? colorArrowHover : colorArrowBg }}
                        >
                            <FaArrowRight size={16} color={colorArrowFg} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CircularTestimonials;
