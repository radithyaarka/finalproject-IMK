import React from 'react';
import { Twitter, Instagram, Twitch } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';

/**
 * Section untuk menampilkan link ke media sosial dengan gaya visual yang menarik.
 * Setiap ikon media sosial berada di dalam sebuah 'card' yang memiliki animasi hover.
 */
const SocialMediaSection: React.FC = () => (
    <AnimatedSection className="py-20 bg-black">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
                Follow Us On <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">Social Media</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
                
                {/* Card untuk Twitter */}
                <a href="#" className="group relative text-center bg-black border-2 border-gray-800 p-8 rounded-xl hover:border-purple-500 hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_0_25px_theme(colors.purple.500/0.5)]">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                    <div className="relative flex justify-center items-center text-gray-400 group-hover:text-purple-400 transition-colors duration-300 mb-4">
                        <Twitter size={48} />
                    </div>
                    <h3 className="relative text-xl font-bold text-white">Twitter</h3>
                    <p className="relative text-gray-500">@OneTapStore</p>
                </a>
                
                {/* Card untuk Instagram */}
                <a href="#" className="group relative text-center bg-black border-2 border-gray-800 p-8 rounded-xl hover:border-pink-500 hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_0_25px_theme(colors.pink.500/0.5)]">
                     <div className="absolute inset-0 bg-gradient-to-br from-pink-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                    <div className="relative flex justify-center items-center text-gray-400 group-hover:text-pink-400 transition-colors duration-300 mb-4">
                        <Instagram size={48} />
                    </div>
                    <h3 className="relative text-xl font-bold text-white">Instagram</h3>
                     <p className="relative text-gray-500">@onetap.store</p>
                </a>

                {/* Card untuk Twitch */}
                 <a href="#" className="group relative text-center bg-black border-2 border-gray-800 p-8 rounded-xl hover:border-blue-500 hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_0_25px_theme(colors.blue.500/0.5)]">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                    <div className="relative flex justify-center items-center text-gray-400 group-hover:text-blue-400 transition-colors duration-300 mb-4">
                        <Twitch size={48} />
                    </div>
                    <h3 className="relative text-xl font-bold text-white">Twitch</h3>
                     <p className="relative text-gray-500">OneTapStoreLive</p>
                </a>

            </div>
        </div>
    </AnimatedSection>
);

export default SocialMediaSection;
