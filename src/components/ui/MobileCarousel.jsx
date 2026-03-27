import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * MobileCarousel — 3D coverflow carousel adapted from feature-carousel.tsx
 * Accepts `items` (array of React nodes) and optional `containerHeight` (px).
 * Shows center item in full, adjacent items blurred + rotated, auto-advances every 4s.
 */
const MobileCarousel = ({ items, containerHeight = 300 }) => {
    const [current, setCurrent] = useState(0);
    const total = items.length;
    const touchRef = useRef(null);

    const next = useCallback(() => setCurrent(i => (i + 1) % total), [total]);
    const prev = useCallback(() => setCurrent(i => (i - 1 + total) % total), [total]);

    useEffect(() => {
        const t = setInterval(next, 4000);
        return () => clearInterval(t);
    }, [next]);

    return (
        <div
            className="relative w-full flex items-center justify-center"
            style={{ height: containerHeight, perspective: '1000px' }}
            onTouchStart={(e) => { touchRef.current = e.touches[0].clientX; }}
            onTouchEnd={(e) => {
                if (touchRef.current === null) return;
                const dx = touchRef.current - e.changedTouches[0].clientX;
                if (dx > 40) next();
                else if (dx < -40) prev();
                touchRef.current = null;
            }}
        >
            {items.map((item, index) => {
                let pos = index - current;
                // Normalize for circular carousel
                if (pos > Math.floor(total / 2)) pos -= total;
                if (pos < -Math.floor(total / 2)) pos += total;

                const isCenter = pos === 0;
                const isAdj = Math.abs(pos) === 1;

                return (
                    <div
                        key={index}
                        className="absolute transition-all duration-500 ease-in-out"
                        style={{
                            transform: `translateX(${pos * 45}%) scale(${isCenter ? 1 : isAdj ? 0.85 : 0.7}) rotateY(${pos * -10}deg)`,
                            zIndex: isCenter ? 10 : isAdj ? 5 : 1,
                            opacity: isCenter ? 1 : isAdj ? 0.4 : 0,
                            filter: isCenter ? 'none' : 'blur(4px)',
                            visibility: Math.abs(pos) <= 1 ? 'visible' : 'hidden',
                        }}
                    >
                        {item}
                    </div>
                );
            })}

            {/* Nav buttons */}
            <button
                onClick={prev}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm border border-white/30 shadow-md flex items-center justify-center"
            >
                <ChevronLeft className="w-4 h-4 text-primary" />
            </button>
            <button
                onClick={next}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm border border-white/30 shadow-md flex items-center justify-center"
            >
                <ChevronRight className="w-4 h-4 text-primary" />
            </button>

            {/* Dot indicators */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-1.5 z-20">
                {items.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={`rounded-full transition-all duration-300 ${i === current ? 'bg-secondary w-4 h-1.5' : 'bg-secondary/30 w-1.5 h-1.5'}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default MobileCarousel;
