"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
    { q: "¿Los perfumes son originales?", a: "Sí, 100% originales. Trabajamos con distribuidores autorizados y garantizamos la autenticidad de cada fragancia." },
    { q: "¿Qué son los decants?", a: "Son muestras en atomizadores de 5ml o 10ml, perfectas para probar una fragancia antes de comprometer con el frasco completo." },
    { q: "¿Hacen envíos a provincia?", a: "Sí, realizamos envíos a todo el Perú. Lima 24-48h, provincias 3-5 días hábiles." },
    { q: "¿Cómo compro?", a: "Simple: elige tu fragancia y presentación, contáctanos por WhatsApp y coordinamos el pago y envío." },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-24 md:py-32 px-8 md:px-16 lg:px-24 bg-[#0a0a0a]">
            <div className="max-w-3xl mx-auto">
                <motion.span initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    className="text-accent text-xs tracking-[0.4em] uppercase block mb-4 text-center">FAQ</motion.span>
                <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    className="font-serif text-4xl md:text-5xl text-white text-center mb-16">Preguntas Frecuentes</motion.h2>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                            className="border border-white/10">
                            <button onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex items-center justify-between p-6 text-left">
                                <span className="text-white font-medium">{faq.q}</span>
                                <ChevronDown className={`w-5 h-5 text-accent transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
                            </button>
                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}
                                        className="overflow-hidden">
                                        <p className="px-6 pb-6 text-white/60 font-light">{faq.a}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
