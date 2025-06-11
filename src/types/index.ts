// src/types/index.ts

import { JSX } from "react";

// --- Tipe Data (Interfaces) ---
export interface Product {
    id: number;
    name: string;
    price: string;
    rating: number;
    image: string;
    category?: string;
}

export interface Category {
    name: string;
    icon: JSX.Element;
}

export interface Testimonial {
    name: string;
    quote: string;
    rating: number;
}

export interface FAQ {
    q: string;
    a: string;
}

export interface Deal {
    id: number;
    name: string;
    discount: string;
    description: string;
    image: string;
    endDate: string;
}

export type PageName = 'Home' | 'Products' | 'Deals' | 'About';