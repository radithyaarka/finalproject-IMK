import React from 'react';

/**
 * Komponen untuk menampilkan logo utama aplikasi.
 * Menggunakan SVG dengan gradien untuk efek visual.
 */
const LogoIcon: React.FC = () => (
    <svg width="32" height="32" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" className="mr-3">
        <defs>
            <linearGradient id="grad_icon_only" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor:"#A855F7", stopOpacity:1}} />
                <stop offset="100%" style={{stopColor:"#EC4899", stopOpacity:1}} />
            </linearGradient>
        </defs>
        <g>
            <path d="M20 2 L38 20 L20 38 L2 20 Z" stroke="url(#grad_icon_only)" strokeWidth="3.5" fill="none"/>
            <path d="M20 12 L28 20 L20 28 L12 20 Z" fill="#FFFFFF"/>
        </g>
    </svg>
);

export default LogoIcon;
