import React from 'react';
import { ShoppingCart, Menu, X, ArrowRight, Twitter, Instagram, Twitch, ShieldCheck, Zap, Award, Keyboard, Mouse, Headset, Gamepad2, ChevronDown } from 'lucide-react';

// --- Tipe Data (Interfaces) ---
interface Product {
    id: number;
    name: string;
    price: string;
    rating: number;
    image: string;
    category?: string; // Optional, only used for full product list for now
}

interface Category {
    name: string;
    icon: JSX.Element;
}

interface Testimonial {
    name: string;
    quote: string;
    rating: number;
}

interface FAQ {
    q: string;
    a: string;
}

interface Deal {
    id: number;
    name: string;
    discount: string;
    description: string;
    image: string;
    endDate: string;
}

type PageName = 'Home' | 'Products' | 'Deals' | 'About';

// --- Komponen Logo SVG ---
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

// --- Komponen Glow Cursor ---
const GlowCursor: React.FC = () => {
    const [position, setPosition] = React.useState<{ x: number; y: number }>({ x: -100, y: -100 });

    React.useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div
            className="pointer-events-none fixed inset-0 z-50 transition duration-300 hidden lg:block"
            style={{
                background: `radial-gradient(circle 500px at ${position.x}px ${position.y}px, rgba(168, 85, 247, 0.25), transparent 80%)`,
            }}
        />
    );
};

// --- Komponen Wrapper untuk Animasi Scroll ---
interface AnimatedSectionProps {
    children: React.ReactNode;
    className?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className }) => {
    const ref = React.useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = React.useState<boolean>(false);

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <section
            ref={ref}
            className={`${className} transition-all duration-1000 ease-in-out transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
            {children}
        </section>
    );
};

// --- Komponen untuk Ikon Bintang (Rating Produk) ---
interface StarRatingProps {
    rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => (
    <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
            <svg key={i} className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-600'}`} fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.446a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.368-2.446a1 1 0 00-1.175 0l-3.368 2.446c-.784.57-1.838-.197-1.54-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.07 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
            </svg>
        ))}
    </div>
);

// --- Data Dummy ---
const allProducts: Product[] = [
    { id: 1, name: 'Keyboard "Aura Glow"', price: 'Rp 1.250.000', rating: 5, image: 'https://placehold.co/600x400/1a1a1a/f0f?text=Keyboard', category: 'Keyboard' },
    { id: 2, name: 'Mouse "Cyberion X"', price: 'Rp 850.000', rating: 4, image: 'https://placehold.co/600x400/1a1a1a/f0f?text=Mouse', category: 'Mouse' },
    { id: 3, name: 'Headset "Sonic Rift"', price: 'Rp 1.500.000', rating: 5, image: 'https://placehold.co/600x400/1a1a1a/f0f?text=Headset', category: 'Headset' },
    { id: 4, name: 'Mousepad "Nexus Glide"', price: 'Rp 450.000', rating: 4, image: 'https://placehold.co/600x400/1a1a1a/f0f?text=Mousepad', category: 'Mousepad' },
    { id: 5, name: 'Webcam "Streamer Pro"', price: 'Rp 1.800.000', rating: 5, image: 'https://placehold.co/600x400/111/fff?text=Webcam', category: 'Webcam' },
    { id: 6, name: 'Gaming Chair "ThroneX"', price: 'Rp 3.500.000', rating: 5, image: 'https://placehold.co/600x400/111/fff?text=Gaming+Chair', category: 'Gaming Chair' },
    { id: 7, name: 'Monitor "VividSight"', price: 'Rp 4.200.000', rating: 5, image: 'https://placehold.co/600x400/1a1a1a/f0f?text=Monitor', category: 'Monitor' },
    { id: 8, name: 'Controller "Apex Tact"', price: 'Rp 990.000', rating: 4, image: 'https://placehold.co/600x400/111/fff?text=Controller', category: 'Controller' },
];

const featuredProducts: Product[] = allProducts.slice(0, 4); // Ambil 4 produk pertama sebagai unggulan
const newArrivals: Product[] = allProducts.slice(4, 6); // Ambil produk ke-5 dan ke-6 sebagai pendatang baru

const categories: Category[] = [
    { name: 'Keyboards', icon: <Keyboard size={40} /> },
    { name: 'Mice', icon: <Mouse size={40} /> },
    { name: 'Headsets', icon: <Headset size={40} /> },
    { name: 'Controllers', icon: <Gamepad2 size={40} /> },
];

const testimonials: Testimonial[] = [
    { name: 'ZuxxyGaming', quote: '"Gear dari sini bikin aim auto-nempel! Kualitasnya juara, desainnya keren abis."', rating: 5 },
    { name: 'ScarletFTW', quote: '"Keyboard mekanikalnya responsif banget, cocok buat game kompetitif. Highly recommended!"', rating: 5 },
];

const faqs: FAQ[] = [
    { q: 'Berapa lama waktu pengiriman?', a: 'Untuk Jabodetabek, pengiriman biasanya memakan waktu 1-2 hari kerja. Untuk kota lain, estimasi 2-5 hari kerja tergantung lokasi.' },
    { q: 'Apakah ada garansi untuk produk?', a: 'Ya, semua produk kami memiliki garansi resmi dari produsen selama 1 tahun. Kerusakan akibat kesalahan pengguna tidak termasuk dalam garansi.' },
    { q: 'Bagaimana cara melakukan klaim garansi?', a: 'Anda bisa menghubungi tim support kami melalui email atau WhatsApp dengan menyertakan bukti pembelian dan video unboxing produk.' },
    { q: 'Apakah saya bisa mengembalikan produk?', a: 'Produk dapat dikembalikan dalam waktu 7 hari setelah diterima jika terdapat cacat produksi, dengan syarat kondisi produk masih seperti baru dan kemasan lengkap.' },
];

// Data Dummy untuk Halaman Deals
const deals: Deal[] = [
    { id: 1, name: 'Bundle Keyboard & Mouse', discount: '20% OFF', description: 'Dapatkan kombo sempurna untuk dominasi gaming Anda!', image: 'https://placehold.co/600x400/1a1a1a/f0f?text=Bundle', endDate: '30 Juni 2025' },
    { id: 2, name: 'Diskon Headset Premium', discount: '15% OFF', description: 'Rasakan suara yang jernih dengan headset gaming terbaik.', image: 'https://placehold.co/600x400/111/fff?text=Headset+Promo', endDate: '15 Juli 2025' },
    { id: 3, name: 'Mousepad Edisi Terbatas', discount: 'Beli 1 Gratis 1', description: 'Tingkatkan presisi dengan mousepad edisi terbatas kami.', image: 'https://placehold.co/600x400/1a1a1a/f0f?text=Mousepad+Deal', endDate: '20 Juli 2025' },
];


// --- Komponen Utama Aplikasi ---
const App: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);
    const [currentPage, setCurrentPage] = React.useState<PageName>('Home'); // State untuk melacak halaman saat ini

    // --- Style untuk animasi custom ---
    const CustomStyles: React.FC = () => (
        <style>{`
            @keyframes gradient-x { 0%, 100% { background-position: left center; } 50% { background-position: right center; } }
            .animate-gradient-x:hover { animation: gradient-x 2s ease infinite; }
            @keyframes slide-down {
                0% { transform: translateY(-100%); opacity: 0; }
                100% { transform: translateY(0); opacity: 1; }
            }
            .animate-slide-down {
                animation: slide-down 0.7s ease-out forwards;
            }
        `}</style>
    );

    // --- Header dan Navigasi ---
const Header: React.FC = () => (
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

            {/* Kolom Tengah: Navigasi (Diposisikan Absolut) */}
            <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center space-x-2">
                {/* FIX: Explicitly type the array as PageName[] */}
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

            {/* Kolom Kanan: Aksi */}
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
        {isMenuOpen && (
            <div className="md:hidden bg-black/80 backdrop-blur-xl">
                <nav className="flex flex-col items-center space-y-6 py-8">
                     {/* FIX: Explicitly type this array as well */}
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

    // --- Hero Section (Tanpa Glassmorphism) ---
    const HeroSection: React.FC = () => {
        return (
            <section className="relative h-screen flex flex-col justify-center items-center bg-black text-center overflow-hidden">
                {/* Gradien Latar Belakang Halus */}
                <div className="absolute inset-0 z-0 bg-gradient-to-b from-black via-purple-900/40 to-black"></div>

                {/* Konten Utama */}
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
                    <button onClick={() => setCurrentPage('Products')} className="mt-12 px-10 py-5 bg-white text-black font-bold rounded-lg text-xl transform hover:scale-105 transition-all duration-300 shadow-lg shadow-white/30 hover:shadow-2xl hover:shadow-white/50">
                        Shop Now <ArrowRight className="inline-block ml-2" />
                    </button>
                </div>
                {/* Indikator scroll ke bawah */}
                <div className="absolute bottom-10 z-20 text-white animate-bounce">
                    <ChevronDown size={32} />
                </div>
            </section>
        );
    };

    // --- Bagian Kategori ---
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

    // --- Bagian Produk Unggulan ---
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

    // --- Bagian "Why Choose Us" ---
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

    // --- Bagian Testimoni ---
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

    // --- Bagian New Arrivals ---
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

    // --- Bagian CTA ---
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

    // --- Bagian FAQ ---
    const FaqSection: React.FC = () => {
        const [openIndex, setOpenIndex] = React.useState<number | null>(null);
        const toggleFaq = (index: number) => { setOpenIndex(openIndex === index ? null : index); };
        return (
            <AnimatedSection className="py-20 bg-black">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {faqs.map((faq: FAQ, index: number) => (
                            <div key={index} className={`border border-gray-800 rounded-lg overflow-hidden transition-all duration-300 ${openIndex === index ? 'shadow-[0_0_15px_theme(colors.pink.500/0.3)]' : ''}`}>
                                <button onClick={() => toggleFaq(index)} className="w-full flex justify-between items-center p-5 text-left text-white font-semibold">
                                    <span>{faq.q}</span>
                                    <ChevronDown className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-pink-400' : ''}`} />
                                </button>
                                <div className={`transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="p-5 pt-0 text-gray-400">{faq.a}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </AnimatedSection>
        );
    }

    // --- Komponen Halaman Produk ---
    const ProductsPage: React.FC = () => (
        <div className="pt-24 bg-black min-h-screen"> {/* Sesuaikan padding-top dengan tinggi header */}
            <AnimatedSection className="py-20 bg-black">
                <div className="container mx-auto px-6">
                    <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">All Products</h1>
                    <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">Jelajahi koleksi lengkap perlengkapan gaming kami yang dirancang untuk keunggulan.</p>
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
            <CtaSection />
            <FaqSection />
        </div>
    );

    // --- Komponen Halaman Deals ---
    const DealsPage: React.FC = () => (
        <div className="pt-24 bg-black min-h-screen">
            <AnimatedSection className="py-20 bg-black">
                <div className="container mx-auto px-6">
                    <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-red-500">Exclusive Deals</h1>
                    <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">Jangan lewatkan penawaran terbatas untuk perlengkapan gaming premium!</p>
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

    // --- Komponen Halaman About ---
    const AboutPage: React.FC = () => (
        <div className="pt-24 bg-black min-h-screen">
            <AnimatedSection className="py-20 bg-black">
                <div className="container mx-auto px-6 text-center max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">About OneTapStore</h1>
                    <p className="text-gray-400 mb-12 text-lg">Misi kami adalah memberdayakan gamer di seluruh dunia dengan peralatan terbaik, menginspirasi presisi, performa, dan kemenangan.</p>

                    <div className="grid md:grid-cols-2 gap-12 text-left">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-4">Our Story</h3>
                            <p className="text-gray-300 leading-relaxed mb-4">Didirikan oleh para gamer, untuk para gamer. OneTapStore lahir dari semangat untuk keunggulan dalam dunia gaming kompetitif. Kami memahami bahwa setiap *millisecond* dan setiap *pixel* itu penting, dan itulah mengapa kami berdedikasi untuk menyediakan hanya perlengkapan yang paling canggih dan teruji di pasar.</p>
                            <p className="text-gray-300 leading-relaxed">Kami percaya bahwa dengan alat yang tepat, setiap pemain memiliki potensi untuk mencapai level permainan tertinggi mereka. Dari keyboard mekanik yang responsif hingga headset dengan audio imersif, setiap produk di OneTapStore dipilih dengan cermat untuk meningkatkan pengalaman bermain game Anda.</p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-4">Our Values</h3>
                            <ul className="space-y-3 text-gray-300">
                                <li className="flex items-center"><Award size={20} className="text-purple-400 mr-3 flex-shrink-0"/> <span>**Kualitas Tanpa Kompromi:** Kami hanya menawarkan produk yang memenuhi standar performa dan ketahanan tertinggi.</span></li>
                                <li className="flex items-center"><Zap size={20} className="text-pink-400 mr-3 flex-shrink-0"/> <span>**Inovasi:** Selalu mencari teknologi gaming terbaru untuk memberikan keunggulan kompetitif.</span></li>
                                <li className="flex items-center"><ShieldCheck size={20} className="text-green-400 mr-3 flex-shrink-0"/> <span>**Dukungan Pelanggan:** Menjamin pengalaman belanja yang mulus dengan dukungan yang cepat dan responsif.</span></li>
                                <li className="flex items-center"><Gamepad2 size={20} className="text-blue-400 mr-3 flex-shrink-0"/> <span>**Komunitas:** Membangun jembatan antar gamer, merayakan kemenangan bersama.</span></li>
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

    // --- Footer ---
    const Footer: React.FC = () => (
        <footer className="bg-black-t border-gray-800 text-gray-400">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
                    <div>
                        <h4 className="font-bold text-white mb-4">Shop</h4>
                        <ul className="space-y-2">
                            <li><a href="#" onClick={() => setCurrentPage('Products')} className="hover:text-white">Keyboards</a></li>
                            <li><a href="#" onClick={() => setCurrentPage('Products')} className="hover:text-white">Mice</a></li>
                            <li><a href="#" onClick={() => setCurrentPage('Products')} className="hover:text-white">Headsets</a></li>
                            <li><a href="#" onClick={() => setCurrentPage('Products')} className="hover:text-white">Controllers</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-white mb-4">Support</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-white">Contact Us</a></li>
                            <li><a href="#" onClick={() => setCurrentPage('About')} className="hover:text-white">FAQ</a></li>
                            <li><a href="#" className="hover:text-white">Shipping</a></li>
                            <li><a href="#" className="hover:text-white">Warranty</a></li>
                        </ul>
                    </div>
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
                <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} OneTapStore. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );

    // --- Render Halaman Berdasarkan currentPage ---
    const renderPage = (): JSX.Element | null => {
        switch (currentPage) {
            case 'Home':
                return (
                    <main>
                        <HeroSection />
                        <CategorySection />
                        <FeaturedProductsSection />
                        <WhyChooseUsSection />
                        <TestimonialsSection />
                        <NewArrivalsSection />
                        <CtaSection />
                        <FaqSection />
                    </main>
                );
            case 'Products':
                return <ProductsPage />;
            case 'Deals':
                return <DealsPage />;
            case 'About':
                return <AboutPage />;
            default:
                return null;
        }
    };

    return (
        <div className="bg-black font-sans">
            <CustomStyles />
            <GlowCursor />
            <Header />
            {renderPage()} {/* Render halaman yang sesuai */}
            <Footer />
        </div>
    );
}

export default App;