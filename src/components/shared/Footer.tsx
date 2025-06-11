import React from 'react';
import { Twitter, Instagram, Twitch } from 'lucide-react';
import { PageName } from '../../types';
import LogoIcon from '../ui/LogoIcon';

interface FooterProps {
    setCurrentPage: (page: PageName) => void;
}

/**
 * Komponen Footer utama aplikasi.
 * Berisi link navigasi, sosial media, dan copyright.
 */
const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => (
    <footer className="bg-black-t border-t border-gray-800 text-gray-400">
        <div className="container mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Kolom 1: Logo dan Info */}
                <div className="md:col-span-1">
                    <a href="#" onClick={() => setCurrentPage('Home')} className="flex items-center text-2xl font-bold tracking-wider">
                        <LogoIcon/>
                        <span>
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">OneTap</span>
                            <span className="text-white">Store</span>
                        </span>
                    </a>
                    <p className="mt-4 text-sm">Your ultimate destination for professional gaming equipment.</p>
                    <div className="flex space-x-4 mt-6">
                        <a href="#" className="hover:text-pink-400"><Twitter/></a>
                        <a href="#" className="hover:text-pink-400"><Instagram/></a>
                        <a href="#" className="hover:text-pink-400"><Twitch/></a>
                    </div>
                </div>
                {/* Kolom 2: Shop Links */}
                <div>
                    <h4 className="font-bold text-white mb-4">Shop</h4>
                    <ul className="space-y-2">
                        <li><a href="#" onClick={() => setCurrentPage('Products')} className="hover:text-white">Keyboards</a></li>
                        <li><a href="#" onClick={() => setCurrentPage('Products')} className="hover:text-white">Mice</a></li>
                        <li><a href="#" onClick={() => setCurrentPage('Products')} className="hover:text-white">Headsets</a></li>
                        <li><a href="#" onClick={() => setCurrentPage('Products')} className="hover:text-white">Controllers</a></li>
                    </ul>
                </div>
                {/* Kolom 3: Support Links */}
                <div>
                    <h4 className="font-bold text-white mb-4">Support</h4>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-white">Contact Us</a></li>
                        <li><a href="#" onClick={() => setCurrentPage('About')} className="hover:text-white">FAQ</a></li>
                        <li><a href="#" className="hover:text-white">Shipping</a></li>
                        <li><a href="#" className="hover:text-white">Warranty</a></li>
                    </ul>
                </div>
                {/* Kolom 4: Newsletter */}
                <div>
                    <h4 className="font-bold text-white mb-4">Stay Connected</h4>
                    <p className="mb-4">Get the latest deals and new product announcements.</p>
                    <form>
                        <div className="flex">
                            <input type="email" placeholder="Your email" className="w-full px-4 py-2 bg-black border border-gray-700 rounded-l-md focus:outline-none focus:ring-2 focus:ring-pink-500 text-white"/>
                            <button type="submit" className="px-4 py-2 bg-pink-600 hover:bg-pink-700 text-white font-bold rounded-r-md transition-colors">&rarr;</button>
                        </div>
                    </form>
                </div>
            </div>
            {/* Copyright */}
            <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm">
                <p>&copy; {new Date().getFullYear()} OneTapStore. All Rights Reserved.</p>
            </div>
        </div>
    </footer>
);

export default Footer;
