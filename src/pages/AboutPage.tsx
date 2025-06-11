import React from 'react';
import { Award, Zap, ShieldCheck, Gamepad2 } from 'lucide-react';
import AnimatedSection from '../components/ui/AnimatedSection';
import CtaSection from '../components/shared/CtaSection';
import { testimonials } from '../data/dummyData.tsx';
import { Testimonial } from '../types';
import StarRating from '../components/ui/StarRating';

// --- Bagian yang spesifik untuk Halaman About ---

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

/**
 * Halaman 'About Us' yang berisi cerita, nilai, dan testimoni perusahaan.
 */
const AboutPage: React.FC = () => (
    <div className="pt-24 bg-black min-h-screen">
        <AnimatedSection className="py-20 bg-black">
            <div className="container mx-auto px-6 text-center max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">About OneTapStore</h1>
                <p className="text-gray-400 mb-12 text-lg">Misi kami adalah memberdayakan gamer di seluruh dunia dengan peralatan terbaik, menginspirasi presisi, performa, dan kemenangan.</p>

                <div className="grid md:grid-cols-2 gap-12 text-left">
                    {/* Kolom Cerita Kami */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-4">Our Story</h3>
                        <p className="text-gray-300 leading-relaxed mb-4">Didirikan oleh para gamer, untuk para gamer. OneTapStore lahir dari semangat untuk keunggulan dalam dunia gaming kompetitif. Kami memahami bahwa setiap *millisecond* dan setiap *pixel* itu penting, dan itulah mengapa kami berdedikasi untuk menyediakan hanya perlengkapan yang paling canggih dan teruji di pasar.</p>
                        <p className="text-gray-300 leading-relaxed">Kami percaya bahwa dengan alat yang tepat, setiap pemain memiliki potensi untuk mencapai level permainan tertinggi mereka. Dari keyboard mekanik yang responsif hingga headset dengan audio imersif, setiap produk di OneTapStore dipilih dengan cermat untuk meningkatkan pengalaman bermain game Anda.</p>
                    </div>
                    {/* Kolom Nilai Kami */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-4">Our Values</h3>
                        <ul className="space-y-3 text-gray-300">
                            <li className="flex items-start"><Award size={20} className="text-purple-400 mr-3 flex-shrink-0 mt-1"/> <span>**Kualitas Tanpa Kompromi:** Kami hanya menawarkan produk yang memenuhi standar performa dan ketahanan tertinggi.</span></li>
                            <li className="flex items-start"><Zap size={20} className="text-pink-400 mr-3 flex-shrink-0 mt-1"/> <span>**Inovasi:** Selalu mencari teknologi gaming terbaru untuk memberikan keunggulan kompetitif.</span></li>
                            <li className="flex items-start"><ShieldCheck size={20} className="text-green-400 mr-3 flex-shrink-0 mt-1"/> <span>**Dukungan Pelanggan:** Menjamin pengalaman belanja yang mulus dengan dukungan yang cepat dan responsif.</span></li>
                            <li className="flex items-start"><Gamepad2 size={20} className="text-blue-400 mr-3 flex-shrink-0 mt-1"/> <span>**Komunitas:** Membangun jembatan antar gamer, merayakan kemenangan bersama.</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </AnimatedSection>
        <WhyChooseUsSection />
        <TestimonialsSection />
        <CtaSection />
    </div>
);

export default AboutPage;
