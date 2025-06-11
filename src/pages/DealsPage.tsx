import React from 'react';
import { deals } from '../data/dummyData.tsx';
import { Deal } from '../types';
import AnimatedSection from '../components/ui/AnimatedSection';
import CtaSection from '../components/shared/CtaSection';

/**
 * Halaman untuk menampilkan penawaran dan diskon eksklusif.
 */
const DealsPage: React.FC = () => (
    <div className="pt-24 bg-black min-h-screen">
        <AnimatedSection className="py-20 bg-black">
            <div className="container mx-auto px-6">
                <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-red-500">Exclusive Deals</h1>
                <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">Jangan lewatkan penawaran terbatas untuk perlengkapan gaming premium!</p>
                
                {/* Grid untuk menampilkan penawaran */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {deals.map((deal: Deal) => (
                        <div key={deal.id} className="group relative bg-black border border-pink-700 rounded-xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_0_25px_theme(colors.pink.600/0.5)]">
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-pink-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <img src={deal.image} alt={deal.name} className="w-full h-56 object-cover" onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => { e.currentTarget.onerror = null; e.currentTarget.src='https://placehold.co/600x400/1a1a1a/f0f?text=Error'; }} />
                            <div className="p-5 relative">
                                <h3 className="text-lg font-bold text-white mb-2">{deal.name}</h3>
                                <p className="text-3xl font-black text-pink-400 mb-2">{deal.discount}</p>
                                <p className="text-gray-300 text-sm mb-4">{deal.description}</p>
                                <p className="text-gray-500 text-xs mt-2">Berakhir: {deal.endDate}</p>
                                <button className="w-full py-2.5 bg-pink-600 text-white font-semibold rounded-lg border border-pink-700 hover:bg-pink-700 transition-colors duration-300 mt-4">Grab Deal</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </AnimatedSection>
        <CtaSection />
    </div>
);

export default DealsPage;
