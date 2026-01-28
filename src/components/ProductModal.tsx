"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import Image from "next/image";

export type Presentation = "5ml" | "10ml" | "frasco";

export interface Product {
    id: string;
    name: string;
    shortDesc: string;
    category: string;
    gender: string;
    sensoryDesc: string;
    notes: { top: string; heart: string; base: string };
    intensity: number;
    projection: number;
    occasions: string[];
    presentations: Presentation[];
}

interface ProductModalProps {
    product: Product | null;
    onClose: () => void;
}

const presentationLabels: Record<Presentation, string> = {
    "5ml": "5 ml",
    "10ml": "10 ml",
    "frasco": "Frasco completo"
};

export default function ProductModal({ product, onClose }: ProductModalProps) {
    const getDefaultPresentation = (presentations: Presentation[]): Presentation => {
        if (presentations.includes("10ml")) return "10ml";
        return presentations[0];
    };

    const [selectedPresentation, setSelectedPresentation] = useState<Presentation>(
        product ? getDefaultPresentation(product.presentations) : "10ml"
    );

    if (!product) return null;

    const whatsappMessage = `Hola, quiero ${product.name} en ${presentationLabels[selectedPresentation]}. ¿Disponibilidad, precio y delivery?`;
    const whatsappUrl = `https://wa.me/51916401098?text=${encodeURIComponent(whatsappMessage)}`;

    return (
        <AnimatePresence>
            {product && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 md:p-8"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        onClick={(e) => e.stopPropagation()}
                        className="bg-[#0a0a0a] w-full max-w-6xl max-h-[90vh] overflow-y-auto relative grid grid-cols-1 md:grid-cols-2"
                    >
                        <button onClick={onClose} className="absolute top-6 right-6 p-2 text-white/60 hover:text-white z-20 transition-colors">
                            <X className="w-6 h-6" strokeWidth={1} />
                        </button>

                        <div className="relative aspect-[3/4] md:aspect-auto md:min-h-full bg-neutral-950">
                            <Image
                                src={`/images/products/${product.id}.${product.id === 'yara' || product.id === 'eclaire' ? 'png' : 'jpg'}`}
                                alt={product.name}
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                            <span className="text-accent text-xs tracking-[0.3em] uppercase mb-4">{product.gender}</span>
                            <h2 className="font-serif text-4xl md:text-5xl text-white mb-4 leading-tight">{product.name}</h2>
                            <p className="text-white/60 font-light leading-relaxed mb-8 text-lg">{product.sensoryDesc}</p>

                            {/* Presentation Selector */}
                            <div className="mb-8">
                                <span className="text-xs tracking-[0.2em] uppercase text-white/40 block mb-4">Presentación</span>
                                <div className="flex flex-wrap gap-2">
                                    {product.presentations.map((presentation) => (
                                        <button
                                            key={presentation}
                                            onClick={() => setSelectedPresentation(presentation)}
                                            className={`px-5 py-3 text-sm tracking-wider uppercase transition-all duration-300 border ${selectedPresentation === presentation
                                                    ? "bg-accent/10 border-accent text-accent"
                                                    : "bg-transparent border-white/20 text-white/60 hover:border-white/40 hover:text-white"
                                                }`}
                                        >
                                            {presentationLabels[presentation]}
                                        </button>
                                    ))}
                                </div>
                                <p className="text-white/30 text-xs mt-3 italic">Ideal para probar antes de decidir el frasco.</p>
                            </div>

                            {/* Notes */}
                            <div className="border-t border-white/10 py-8 mb-8">
                                <h4 className="text-xs tracking-[0.2em] uppercase text-white/40 mb-6">Notas Olfativas</h4>
                                <div className="space-y-4">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-white/40">Salida</span>
                                        <span className="text-white">{product.notes.top}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-white/40">Corazón</span>
                                        <span className="text-white">{product.notes.heart}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-white/40">Fondo</span>
                                        <span className="text-white">{product.notes.base}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Performance */}
                            <div className="flex gap-12 mb-10">
                                <div>
                                    <span className="text-xs tracking-[0.2em] uppercase text-white/40 block mb-3">Duración</span>
                                    <div className="flex gap-1">
                                        {[1, 2, 3, 4, 5].map((i) => (
                                            <div key={i} className={`w-2 h-2 rounded-full ${i <= product.intensity ? 'bg-accent' : 'bg-white/10'}`} />
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <span className="text-xs tracking-[0.2em] uppercase text-white/40 block mb-3">Proyección</span>
                                    <div className="flex gap-1">
                                        {[1, 2, 3, 4, 5].map((i) => (
                                            <div key={i} className={`w-2 h-2 rounded-full ${i <= product.projection ? 'bg-accent' : 'bg-white/10'}`} />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full bg-white text-black py-4 text-center font-medium text-sm tracking-wider uppercase transition-all duration-300 hover:bg-accent flex items-center justify-center gap-3"
                            >
                                <MessageCircle className="w-4 h-4" />
                                Comprar {presentationLabels[selectedPresentation]} por WhatsApp
                            </a>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
