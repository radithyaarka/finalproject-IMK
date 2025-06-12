// src/data/dummyData.ts
import React from 'react';

import { Product, Category, Testimonial, FAQ, Deal } from '../types';
import { Keyboard, Mouse, Headset, Gamepad2 } from 'lucide-react';

// --- Data Dummy ---
export const allProducts: Product[] = [
    { id: 1, name: 'Keyboard "Aura Glow"', price: 'Rp 1.250.000', rating: 5, image: 'https://placehold.co/600x400/1a1a1a/f0f?text=Keyboard', category: 'Keyboard' },
    { id: 2, name: 'Mouse "Cyberion X"', price: 'Rp 850.000', rating: 4, image: 'https://placehold.co/600x400/1a1a1a/f0f?text=Mouse', category: 'Mouse' },
    { id: 3, name: 'Headset "Sonic Rift"', price: 'Rp 1.500.000', rating: 5, image: 'https://placehold.co/600x400/1a1a1a/f0f?text=Headset', category: 'Headset' },
    { id: 4, name: 'Mousepad "Nexus Glide"', price: 'Rp 450.000', rating: 4, image: 'https://placehold.co/600x400/1a1a1a/f0f?text=Mousepad', category: 'Mousepad' },
    { id: 5, name: 'Webcam "Streamer Pro"', price: 'Rp 1.800.000', rating: 5, image: 'https://placehold.co/600x400/111/fff?text=Webcam', category: 'Webcam' },
    { id: 6, name: 'Gaming Chair "ThroneX"', price: 'Rp 3.500.000', rating: 5, image: 'https://placehold.co/600x400/111/fff?text=Gaming+Chair', category: 'Gaming Chair' },
    { id: 7, name: 'Monitor "VividSight"', price: 'Rp 4.200.000', rating: 5, image: 'https://placehold.co/600x400/1a1a1a/f0f?text=Monitor', category: 'Monitor' },
    { id: 8, name: 'Controller "Apex Tact"', price: 'Rp 990.000', rating: 4, image: 'https://placehold.co/600x400/111/fff?text=Controller', category: 'Controller' },
];

export const featuredProducts: Product[] = allProducts.slice(0, 4);
export const newArrivals: Product[] = allProducts.slice(4, 6);

export const categories: Category[] = [
    { name: 'Keyboards', icon: <Keyboard size={40} /> },
    { name: 'Mice', icon: <Mouse size={40} /> },
    { name: 'Headsets', icon: <Headset size={40} /> },
    { name: 'Controllers', icon: <Gamepad2 size={40} /> },
];

export const testimonials: Testimonial[] = [
    { name: 'ZuxxyGaming', quote: '"Gear dari sini bikin aim auto-nempel! Kualitasnya juara, desainnya keren abis."', rating: 5 },
    { name: 'ScarletFTW', quote: '"Keyboard mekanikalnya responsif banget, cocok buat game kompetitif. Highly recommended!"', rating: 5 },
];

export const faqs: FAQ[] = [
    { q: 'Berapa lama waktu pengiriman?', a: 'Untuk Jabodetabek, pengiriman biasanya memakan waktu 1-2 hari kerja. Untuk kota lain, estimasi 2-5 hari kerja tergantung lokasi.' },
    { q: 'Apakah ada garansi untuk produk?', a: 'Ya, semua produk kami memiliki garansi resmi dari produsen selama 1 tahun. Kerusakan akibat kesalahan pengguna tidak termasuk dalam garansi.' },
    { q: 'Bagaimana cara melakukan klaim garansi?', a: 'Anda bisa menghubungi tim support kami melalui email atau WhatsApp dengan menyertakan bukti pembelian dan video unboxing produk.' },
    { q: 'Apakah saya bisa mengembalikan produk?', a: 'Produk dapat dikembalikan dalam waktu 7 hari setelah diterima jika terdapat cacat produksi, dengan syarat kondisi produk masih seperti baru dan kemasan lengkap.' },
];

export const deals: Deal[] = [
    { id: 1, name: 'Bundle Keyboard & Mouse', discount: '20% OFF', description: 'Dapatkan kombo sempurna untuk dominasi gaming Anda!', image: 'https://placehold.co/600x400/1a1a1a/f0f?text=Bundle', endDate: '30 Juni 2025' },
    { id: 2, name: 'Diskon Headset Premium', discount: '15% OFF', description: 'Rasakan suara yang jernih dengan headset gaming terbaik.', image: 'https://placehold.co/600x400/111/fff?text=Headset+Promo', endDate: '15 Juli 2025' },
    { id: 3, name: 'Mousepad Edisi Terbatas', discount: 'Beli 1 Gratis 1', description: 'Tingkatkan presisi dengan mousepad edisi terbatas kami.', image: 'https://placehold.co/600x400/1a1a1a/f0f?text=Mousepad+Deal', endDate: '20 Juli 2025' },
];