import React from 'react';
import { allProducts } from '../data/dummyData.tsx';
import { Product } from '../types';

import AnimatedSection from '../components/ui/AnimatedSection';
import StarRating from '../components/ui/StarRating';
// import CtaSection from '../components/shared/CtaSection';
// import FaqSection from '../components/shared/FAQSection.tsx';

/**
 * Halaman untuk menampilkan semua produk yang tersedia.
 */
const ProductsPage: React.FC = () => (
    <div className="pt-24 bg-black min-h-screen">
        <AnimatedSection className="py-20 bg-black">
            <div className="container mx-auto px-6">
                <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">All Products</h1>
                <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">Jelajahi koleksi lengkap perlengkapan gaming kami yang dirancang untuk keunggulan.</p>
                
                {/* Grid untuk menampilkan produk */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {allProducts.map((product: Product) => (
                        <div key={product.id} className="group relative bg-black border border-gray-800 rounded-xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_0_25px_theme(colors.purple.600/0.5)]">
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <img src={product.image} alt={product.name} className="w-full h-56 object-cover" onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => { e.currentTarget.onerror = null; e.currentTarget.src='https://placehold.co/600x400/1a1a1a/f0f?text=Error'; }} />
                            <div className="p-5 relative">
                                <h3 className="text-lg font-bold text-white mb-2">{product.name}</h3>
                                <div className="flex justify-between items-center mb-4">
                                    <p className="text-xl font-semibold text-pink-400">{product.price}</p>
                                    <StarRating rating={product.rating} />
                                </div>
                                <button className="w-full py-2.5 bg-black text-white font-semibold rounded-lg border border-gray-700 hover:bg-purple-600 hover:border-purple-600 transition-colors duration-300">Add to Cart</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </AnimatedSection>
    </div>
);

export default ProductsPage;
