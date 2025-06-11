import React, { useRef, useState, useEffect } from 'react';

interface AnimatedSectionProps {
    children: React.ReactNode;
    className?: string;
}

/**
 * Wrapper komponen untuk memberikan animasi "fade-in" dan "slide-up" saat section masuk ke viewport.
 * Menggunakan IntersectionObserver API untuk efisiensi.
 */
const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className }) => {
    const ref = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Saat elemen mulai terlihat di layar
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Berhenti mengamati setelah animasi berjalan
                    observer.unobserve(entry.target);
                }
            },
            {
                root: null, // Menggunakan viewport sebagai root
                rootMargin: '0px',
                threshold: 0.1 // Memicu saat 10% elemen terlihat
            }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        // Cleanup observer saat komponen di-unmount
        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <section
            ref={ref}
            className={`${className} transition-all duration-1000 ease-in-out transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
            {children}
        </section>
    );
};

export default AnimatedSection;
