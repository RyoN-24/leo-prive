"use client";

import { motion } from "framer-motion";

export default function Manifesto() {
    return (
        <section className="py-32 md:py-40 px-8 md:px-16 lg:px-24 bg-[#0a0a0a]">
            <div className="max-w-4xl mx-auto text-center">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-accent text-xs tracking-[0.4em] uppercase block mb-8"
                >
                    Nuestra Filosofía
                </motion.span>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-10"
                >
                    El lujo es <span className="italic text-accent">personal</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-white/60 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto"
                >
                    En LEO PRIVÉ seleccionamos fragancias de alta gama para quienes valoran la elegancia.
                    Decants disponibles para probar antes de decidir el frasco completo.
                </motion.p>

                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="w-24 h-[1px] bg-accent/50 mx-auto mt-16"
                />
            </div>
        </section>
    );
}
