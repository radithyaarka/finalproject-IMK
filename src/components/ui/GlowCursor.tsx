import React, { useState, useEffect } from 'react';

/**
 * Komponen untuk menciptakan efek cahaya (glow) yang mengikuti kursor mouse.
 * Efek ini hanya aktif pada layar besar (lg) dan tidak akan muncul di perangkat mobile.
 */
const GlowCursor: React.FC = () => {
    const [position, setPosition] = useState<{ x: number; y: number }>({ x: -100, y: -100 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        
        // Cleanup listener saat komponen di-unmount
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div
            className="pointer-events-none fixed inset-0 z-50 transition duration-300 hidden lg:block"
            style={{
                background: `radial-gradient(circle 500px at ${position.x}px ${position.y}px, rgba(168, 85, 247, 0.25), transparent 80%)`,
            }}
        />
    );
};

export default GlowCursor;
