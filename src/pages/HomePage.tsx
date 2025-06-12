import React from 'react';
import { ArrowRight, ChevronDown, Award, Zap, ShieldCheck } from 'lucide-react';
import { featuredProducts, newArrivals, categories, testimonials } from '../data/dummyData.tsx';
import { PageName, Product, Category, Testimonial } from '../types';

import AnimatedSection from '../components/ui/AnimatedSection';
import StarRating from '../components/ui/StarRating';
import CtaSection from '../components/shared/CtaSection.tsx';
import FaqSection from '../components/shared/FaqSection.tsx';

// --- Bagian-bagian yang spesifik untuk Halaman Beranda ---

const HeroSection: React.FC<{ onShopNowClick: () => void }> = ({ onShopNowClick }) => (
    <section className="relative h-screen flex flex-col justify-center items-center bg-black text-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-black via-purple-900/40 to-black"></div>
        <div className="relative z-20 container mx-auto px-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter drop-shadow-2xl">
                One Tap Away
            </h1>
            <h2 className="mt-4 text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                From Victory
            </h2>
            <p className="mt-8 max-w-xl mx-auto text-lg text-gray-300">
                Precision-engineered gaming gear for the aspiring champion.
            </p>
            <button onClick={onShopNowClick} className="mt-12 px-10 py-5 bg-white text-black font-bold rounded-lg text-xl transform hover:scale-105 transition-all duration-300 shadow-lg shadow-white/30 hover:shadow-2xl hover:shadow-white/50">
                Shop Now <ArrowRight className="inline-block ml-2" />
            </button>
        </div>
        <div className="absolute bottom-10 z-20 text-white animate-bounce">
            <ChevronDown size={32} />
        </div>
    </section>
);

const CategorySection: React.FC = () => (
    <AnimatedSection className="py-20 bg-black">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Shop by Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                {categories.map((category: Category) => (
                    <div key={category.name} className="group relative text-center bg-black border-gray-800 p-8 rounded-xl hover:border-pink-500 hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_0_20px_theme(colors.pink.500/0.4)]">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                        <div className="relative flex justify-center items-center text-purple-400 group-hover:text-pink-400 transition-colors duration-300 mb-4">{category.icon}</div>
                        <h3 className="relative text-lg font-bold text-white">{category.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    </AnimatedSection>
);

const FeaturedProductsSection: React.FC = () => (
     <AnimatedSection className="py-20 bg-black">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-2">Featured Gear</h2>
                <p className="text-center text-gray-400 mb-12">Pilihan terbaik dari para pro-player.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {featuredProducts.map((product: Product) => (
                        <div key={product.id} className="group relative bg-black border-gray-800 rounded-xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_0_25px_theme(colors.purple.600/0.5)]">
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
);

const WhyChooseUsSection: React.FC = () => (
    <AnimatedSection className="py-20 bg-black">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">The OneTapStore Advantage</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
                 <div className="border border-gray-800 p-8 rounded-lg transition-all hover:border-purple-500/50 hover:shadow-[0_0_15px_theme(colors.purple.500/0.3)]">
                        <div className="flex justify-center mb-4"><Award size={40} className="text-purple-400"/></div>
                        <h3 className="text-xl font-bold text-white mb-2">Pro-Grade Quality</h3>
                        <p className="text-gray-400">Setiap produk diuji ketahanannya untuk memastikan performa maksimal.</p>
                    </div>
                    <div className="border border-pink-500/50 p-8 rounded-lg bg-pink-500/5 transition-all shadow-pink-500/10 hover:shadow-xl hover:shadow-pink-500/30">
                        <div className="flex justify-center mb-4"><Zap size={40} className="text-pink-400"/></div>
                        <h3 className="text-xl font-bold text-white mb-2">Lightning-Fast Shipping</h3>
                        <p className="text-gray-400">Dapatkan gear barumu lebih cepat dan kembali ke permainan tanpa delay.</p>
                    </div>
                    <div className="border border-gray-800 p-8 rounded-lg transition-all hover:border-purple-500/50 hover:shadow-[0_0_15px_theme(colors.purple.500/0.3)]">
                        <div className="flex justify-center mb-4"><ShieldCheck size={40} className="text-purple-400"/></div>
                        <h3 className="text-xl font-bold text-white mb-2">Guaranteed & Supported</h3>
                        <p className="text-gray-400">Garansi resmi dan dukungan pelanggan 24/7 siap membantumu.</p>
                    </div>
            </div>
        </div>
    </AnimatedSection>
);

const TestimonialsSection: React.FC = () => (
    <AnimatedSection className="py-20 bg-black">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">What Gamers Are Saying</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {testimonials.map((testimonial: Testimonial, index: number) => (
                    <div key={index} className="bg-black border-gray-800 p-8 rounded-xl transition-all hover:border-pink-500/30 hover:shadow-[0_0_15px_theme(colors.pink.500/0.2)]">
                        <StarRating rating={testimonial.rating} />
                        <p className="text-gray-300 my-4 text-lg">"{testimonial.quote}"</p>
                        <p className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">- {testimonial.name}</p>
                    </div>
                ))}
            </div>
        </div>
    </AnimatedSection>
);

const NewArrivalsSection: React.FC = () => (
     <AnimatedSection className="py-20 bg-black">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-2">New Arrivals</h2>
                <p className="text-center text-gray-400 mb-12">Jadilah yang pertama memiliki gear terbaru.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-center">
                    {newArrivals.map((product: Product) => (
                        <div key={product.id} className="group relative bg-black border-gray-800 rounded-xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_0_25px_theme(colors.purple.600/0.5)]">
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
);


// --- Komponen Utama Halaman Beranda ---
interface HomePageProps {
    setCurrentPage: (page: PageName) => void;
}

const HomePage: React.FC<HomePageProps> = ({ setCurrentPage }) => {
    return (
        <main>
            <HeroSection onShopNowClick={() => setCurrentPage('Products')} />
            <CategorySection />
            <FeaturedProductsSection />
            <WhyChooseUsSection />
            <TestimonialsSection />
            <NewArrivalsSection />
            <CtaSection />
            <FaqSection />
        </main>
    );
};

export default HomePage;
