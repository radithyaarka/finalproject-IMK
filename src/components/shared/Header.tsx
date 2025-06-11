import React from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { PageName } from '../../types';
import LogoIcon from '../ui/LogoIcon';

interface HeaderProps {
    isMenuOpen: boolean;
    setIsMenuOpen: (isOpen: boolean) => void;
    currentPage: PageName;
    setCurrentPage: (page: PageName) => void;
}

/**
 * Komponen Header utama aplikasi, termasuk navigasi.
 * Mengelola state menu mobile (hamburger).
 */
const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen, currentPage, setCurrentPage }) => (
    <header className="fixed top-0 left-0 right-0 bg-black/50 backdrop-blur-lg border-b border-white/10 z-40 animate-slide-down">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center relative">
            {/* Kolom Kiri: Logo */}
            <a href="#" onClick={() => setCurrentPage('Home')} className="flex items-center text-2xl font-bold tracking-wider">
                <LogoIcon />
                <span>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">OneTap</span>
                    <span className="text-white">Store</span>
                </span>
            </a>

            {/* Kolom Tengah: Navigasi Desktop */}
            <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center space-x-2">
                {(['Home', 'Products', 'Deals', 'About'] as PageName[]).map((item) => (
                    <a
                        key={item}
                        href="#"
                        onClick={() => setCurrentPage(item)}
                        className={`relative px-3 py-2 text-gray-300 hover:text-white transition-colors duration-300 group ${currentPage === item ? 'text-white' : ''}`}
                    >
                        {item}
                        <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transform ${currentPage === item ? 'scale-x-100' : 'scale-x-0'} group-hover:scale-x-100 transition-transform duration-300 ease-out`}></span>
                    </a>
                ))}
            </nav>

            {/* Kolom Kanan: Aksi (Keranjang & Menu Mobile) */}
            <div className="flex items-center space-x-4">
                <button className="text-gray-300 hover:text-white relative group">
                    <ShoppingCart size={24} />
                    <span className="absolute -top-2 -right-2 w-5 h-5 bg-pink-500 text-white text-xs rounded-full flex items-center justify-center border-2 border-black/80">3</span>
                    <span className="absolute -inset-2 rounded-full bg-pink-500/30 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </button>
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white">
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>
        </div>
        
        {/* Navigasi Mobile (Dropdown) */}
        {isMenuOpen && (
            <div className="md:hidden bg-black/80 backdrop-blur-xl">
                <nav className="flex flex-col items-center space-y-6 py-8">
                    {(['Home', 'Products', 'Deals', 'About'] as PageName[]).map((item) => (
                        <a
                            key={item}
                            href="#"
                            onClick={() => { setCurrentPage(item); setIsMenuOpen(false); }}
                            className={`text-gray-200 hover:text-pink-400 text-lg ${currentPage === item ? 'text-pink-400' : ''}`}
                        >
                            {item}
                        </a>
                    ))}
                </nav>
            </div>
        )}
    </header>
);

export default Header;
