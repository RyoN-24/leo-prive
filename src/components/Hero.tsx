"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function Hero() {
    const whatsappUrl = "https://wa.me/51916401098?text=Hola, quiero explorar la colección de LEO PRIVÉ.";
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const scrollToCollection = () => {
        document.getElementById("coleccion")?.scrollIntoView({ behavior: "smooth" });
    };

    const yContent = useTransform(scrollYProgress, [0, 1], [0, 50]);
    const opacityContent = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

    return (
        <section ref={containerRef} className="relative min-h-screen bg-black overflow-hidden">
            {/* Full-screen Product Image Background */}
            <div className="absolute inset-0">
                <Image
                    src="/images/products/khamrah.jpg"
                    alt="LEO PRIVÉ"
                    fill
                    className="object-cover object-center opacity-60"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80" />
            </div>

            {/* Content - By Kilian editorial style */}
            <motion.div
                style={{ y: yContent, opacity: opacityContent }}
                className="relative z-10 min-h-screen flex flex-col justify-end pb-24 md:pb-32 px-8 md:px-16 lg:px-24"
            >
                <div className="max-w-3xl">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="block text-accent text-xs tracking-[0.4em] uppercase mb-6"
                    >
                        Signature Collection
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[0.95] mb-8"
                    >
                        Perfumes de <br />
                        <span className="italic text-accent">alta gama</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="text-white/70 text-lg md:text-xl font-light leading-relaxed max-w-xl mb-12"
                    >
                        Para quienes buscan distinción. Decants y frascos completos.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="flex flex-col sm:flex-row items-start gap-4"
                    >
                        <button
                            onClick={scrollToCollection}
                            className="group px-10 py-4 bg-white text-black font-medium text-sm tracking-wider uppercase transition-all duration-500 hover:bg-accent hover:text-black"
                        >
                            Descubrir
                        </button>

                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-10 py-4 border border-white/30 text-white font-medium text-sm tracking-wider uppercase transition-all duration-500 hover:border-accent hover:text-accent"
                        >
                            WhatsApp
                        </a>
                    </motion.div>
                </div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-[1px] h-16 bg-gradient-to-b from-white/50 to-transparent"
                />
            </motion.div>
        </section>
    );
}
