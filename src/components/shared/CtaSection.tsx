import React from 'react';
import AnimatedSection from '../ui/AnimatedSection';

/**
 * Section Call-to-Action (CTA) untuk mengajak pengguna mendaftar newsletter.
 */
const CtaSection: React.FC = () => (
    <AnimatedSection className="py-20 bg-black">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Join The <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">Elite</span></h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Dapatkan akses eksklusif ke diskon, info produk baru, dan konten khusus gamer dengan bergabung di newsletter kami.</p>
            <form className="mt-8 max-w-md mx-auto">
                <div className="flex">
                    <input type="email" placeholder="Your email address" className="w-full px-4 py-3 bg-black border border-gray-700 rounded-l-md focus:outline-none focus:ring-2 focus:ring-pink-500 text-white"/>
                    <button type="submit" className="px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white font-bold rounded-r-md transition-colors">Sign Up</button>
                </div>
            </form>
        </div>
    </AnimatedSection>
);

export default CtaSection;
