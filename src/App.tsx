import React, { useState } from 'react';

// Impor Tipe Data
import { PageName } from './types';

// Impor Halaman
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import DealsPage from './pages/DealsPage';
import AboutPage from './pages/AboutPage';

// Impor Komponen Bersama (Shared) dan UI
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import GlowCursor from './components/ui/GlowCursor';

/**
 * Komponen utama (root) dari aplikasi.
 * Bertanggung jawab untuk:
 * 1. Mengelola state halaman mana yang sedang aktif (currentPage).
 * 2. Mengelola state menu mobile (isMenuOpen).
 * 3. Merender Header, Footer, dan halaman yang aktif.
 */
const App: React.FC = () => {
    // State untuk melacak halaman yang sedang ditampilkan
    const [currentPage, setCurrentPage] = useState<PageName>('Home');
    // State untuk mengontrol visibilitas menu pada perangkat mobile
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    // Komponen untuk menyuntikkan style CSS custom (animasi) ke dalam aplikasi
    const CustomStyles: React.FC = () => (
        <style>{`
            @keyframes gradient-x { 
                0%, 100% { background-position: left center; } 
                50% { background-position: right center; } 
            }
            .animate-gradient-x:hover { 
                animation: gradient-x 2s ease infinite; 
            }
            @keyframes slide-down {
                0% { transform: translateY(-100%); opacity: 0; }
                100% { transform: translateY(0); opacity: 1; }
            }
            .animate-slide-down {
                animation: slide-down 0.7s ease-out forwards;
            }
        `}</style>
    );

    // Fungsi untuk menentukan komponen halaman mana yang akan dirender
    const renderPage = (): JSX.Element => {
        switch (currentPage) {
            case 'Home':
                return <HomePage setCurrentPage={setCurrentPage} />;
            case 'Products':
                return <ProductsPage />;
            case 'Deals':
                return <DealsPage />;
            case 'About':
                return <AboutPage />;
            default:
                // Jika state tidak valid, kembali ke Halaman Beranda
                return <HomePage setCurrentPage={setCurrentPage} />;
        }
    };

    return (
        <div className="bg-black font-sans">
            <CustomStyles />
            <GlowCursor />
            
            {/* Header menerima state dan fungsi untuk mengontrol navigasi */}
            <Header
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
            
            {/* Merender halaman yang aktif */}
            <main>
                {renderPage()}
            </main>
            
            {/* Footer menerima fungsi untuk navigasi */}
            <Footer setCurrentPage={setCurrentPage} />
        </div>
    );
}

export default App;
