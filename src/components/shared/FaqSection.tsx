import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqs } from '../../data/dummyData.tsx';
import AnimatedSection from '../ui/AnimatedSection.tsx';
import { FAQ } from '../../types/index.ts';

/**
 * Section Frequently Asked Questions (FAQ) dengan fungsionalitas accordion.
 */
const FaqSection: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    
    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

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

export default FaqSection;
