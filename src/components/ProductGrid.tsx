"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ProductModal, { Product, Presentation } from "./ProductModal";
import Image from "next/image";

type FilterCategory = "todos" | "citricos" | "gourmand" | "oud" | "florales";

// ============================================
// PRODUCT DATA - Edit presentations here
// ============================================
const PRODUCTS: Product[] = [
    {
        id: "odyssey",
        name: "Odyssey Mandarinsky",
        shortDesc: "Energía cítrica vibrante",
        category: "citricos",
        gender: "Unisex",
        sensoryDesc: "Una explosión de vitalidad que captura la esencia de los cítricos bañados por el sol.",
        notes: { top: "Mandarina, Naranja", heart: "Jengibre, Jazmín", base: "Almizcle, Cedro" },
        intensity: 3, projection: 4, occasions: ["Día", "Oficina"],
        presentations: ["5ml", "10ml", "frasco"]
    },
    {
        id: "khamrah",
        name: "Khamrah",
        shortDesc: "Dulce oriental, presencia cálida",
        category: "gourmand",
        gender: "Unisex",
        sensoryDesc: "Una fragancia embriagadora que evoca calidez y lujo con notas especiadas.",
        notes: { top: "Canela, Nuez moscada", heart: "Dátiles, Praliné", base: "Vainilla, Haba Tonka" },
        intensity: 5, projection: 5, occasions: ["Noche", "Eventos"],
        presentations: ["5ml", "10ml", "frasco"]
    },
    {
        id: "khamrah-qahwa",
        name: "Khamrah Qahwa",
        shortDesc: "Café, especias y ámbar",
        category: "gourmand",
        gender: "Unisex",
        sensoryDesc: "La evolución intensa del clásico, con la profundidad del café arábico tostado.",
        notes: { top: "Cardamomo, Jengibre", heart: "Café, Frutos secos", base: "Ámbar, Vainilla" },
        intensity: 5, projection: 4, occasions: ["Noche", "Eventos"],
        presentations: ["5ml", "10ml", "frasco"]
    },
    {
        id: "yara",
        name: "Yara",
        shortDesc: "Femenina, suave y luminosa",
        category: "florales",
        gender: "Mujer",
        sensoryDesc: "Un aura de suavidad y dulzura atalcada para una feminidad etérea.",
        notes: { top: "Orquídea, Heliotropo", heart: "Acorde Gourmand", base: "Vainilla, Almizcle" },
        intensity: 3, projection: 3, occasions: ["Día", "Noche"],
        presentations: ["5ml", "10ml", "frasco"]
    },
    {
        id: "eclaire",
        name: "Eclaire",
        shortDesc: "Dulzura cremosa y elegante",
        category: "gourmand",
        gender: "Mujer",
        sensoryDesc: "Una caricia olfativa con notas lactónicas y dulces.",
        notes: { top: "Leche, Caramelo", heart: "Flores Blancas", base: "Sándalo, Vainilla" },
        intensity: 4, projection: 3, occasions: ["Día", "Oficina"],
        presentations: ["5ml", "10ml", "frasco"]
    },
    {
        id: "badee",
        name: "Bade'e Al Oud Sublime",
        shortDesc: "Oud profundo y poderoso",
        category: "oud",
        gender: "Unisex",
        sensoryDesc: "El misterio del Oud interpretado de manera sublime, oscuro y rico.",
        notes: { top: "Manzana, Litchi", heart: "Rosa Damascena", base: "Oud, Pachulí" },
        intensity: 5, projection: 5, occasions: ["Noche", "Eventos"],
        presentations: ["5ml", "10ml", "frasco"]
    }
];

const formatPresentations = (p: Presentation[]): string =>
    p.filter(x => x !== "frasco").map(x => x.replace("ml", " ml")).join(" · ");

export default function ProductGrid() {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [activeFilter, setActiveFilter] = useState<FilterCategory>("todos");

    const filteredProducts = PRODUCTS.filter(p => activeFilter === "todos" || p.category === activeFilter);
    const filters: { id: FilterCategory; label: string }[] = [
        { id: "todos", label: "Todos" },
        { id: "citricos", label: "Cítricos" },
        { id: "gourmand", label: "Gourmand" },
        { id: "oud", label: "Oud" },
        { id: "florales", label: "Florales" },
    ];

    return (
        <section className="py-24 md:py-32 px-8 md:px-16 lg:px-24 bg-black">
            <div className="max-w-7xl mx-auto mb-16 md:mb-24">
                <motion.span initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    className="text-accent text-xs tracking-[0.4em] uppercase block mb-4">Colección</motion.span>
                <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                    className="font-serif text-4xl md:text-5xl lg:text-6xl text-white">Fragancias Signature</motion.h2>
            </div>

            <div className="max-w-7xl mx-auto mb-12">
                <div className="flex flex-wrap gap-8 border-b border-white/10 pb-4">
                    {filters.map((filter) => (
                        <button key={filter.id} onClick={() => setActiveFilter(filter.id)}
                            className={`text-sm tracking-wider uppercase transition-all duration-300 pb-4 -mb-4 border-b-2 ${activeFilter === filter.id ? "text-white border-accent" : "text-white/40 border-transparent hover:text-white/70"}`}>
                            {filter.label}
                        </button>
                    ))}
                </div>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
                {filteredProducts.map((product, index) => (
                    <motion.article key={product.id} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }} onClick={() => setSelectedProduct(product)}
                        className="group cursor-pointer bg-[#0a0a0a] relative">
                        <div className="aspect-[3/4] relative overflow-hidden">
                            <Image src={`/images/products/${product.id}.${product.id === 'yara' || product.id === 'eclaire' ? 'png' : 'jpg'}`}
                                alt={product.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />

                            {/* Decants chip */}
                            {product.presentations.filter(p => p !== "frasco").length > 0 && (
                                <div className="absolute top-4 left-4 z-10">
                                    <span className="px-3 py-1.5 bg-black/70 backdrop-blur-sm text-white/80 text-[10px] tracking-wider uppercase border border-white/10">
                                        Decants: {formatPresentations(product.presentations)}
                                    </span>
                                </div>
                            )}

                            <div className="absolute inset-x-0 bottom-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                <span className="text-white text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                    Ver detalles
                                </span>
                            </div>
                        </div>

                        <div className="p-6 bg-[#0a0a0a]">
                            <span className="text-accent text-[10px] tracking-[0.2em] uppercase block mb-2">{product.gender}</span>
                            <h3 className="font-serif text-xl text-white mb-1 group-hover:text-accent transition-colors duration-300">{product.name}</h3>
                            <p className="text-white/40 text-sm font-light">{product.shortDesc}</p>
                        </div>
                    </motion.article>
                ))}
            </div>

            <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
        </section>
    );
}
