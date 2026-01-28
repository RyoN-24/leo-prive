"use client";

import { motion } from "framer-motion";

const testimonials = [
    { name: "María G.", text: "Khamrah es simplemente adictivo. Recibo cumplidos cada vez que lo uso.", rating: 5 },
    { name: "Carlos R.", text: "El servicio de decants es genial para probar antes de comprar el frasco completo.", rating: 5 },
    { name: "Lucía M.", text: "Yara se convirtió en mi firma personal. Elegante y femenino.", rating: 5 },
];

export default function Testimonials() {
    return (
        <section className="py-24 md:py-32 px-8 md:px-16 lg:px-24 bg-black">
            <div className="max-w-7xl mx-auto">
                <motion.span initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    className="text-accent text-xs tracking-[0.4em] uppercase block mb-4 text-center">Testimonios</motion.span>
                <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    className="font-serif text-4xl md:text-5xl text-white text-center mb-16">Lo que dicen nuestros clientes</motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                            className="p-8 border border-white/10 bg-[#0a0a0a]">
                            <div className="flex gap-1 mb-4">
                                {[...Array(t.rating)].map((_, j) => (
                                    <span key={j} className="text-accent text-sm">★</span>
                                ))}
                            </div>
                            <p className="text-white/70 font-light leading-relaxed mb-6">"{t.text}"</p>
                            <p className="text-accent text-sm tracking-wider">{t.name}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
