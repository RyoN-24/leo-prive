"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { href: "#coleccion", label: "Colección" },
        { href: "#experiencia", label: "Experiencia" },
        { href: "#garantia", label: "Garantía" },
    ];

    const scrollToSection = (href: string) => {
        const id = href.replace("#", "");
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        setMobileMenuOpen(false);
    };

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-black/90 backdrop-blur-md" : "bg-transparent"
                    }`}
            >
                <div className="px-8 md:px-16 lg:px-24 h-20 flex items-center justify-between">
                    <a href="/" className="relative z-10">
                        <Image src="/logo.png" alt="LEO PRIVÉ" width={120} height={40} className="h-8 w-auto" />
                    </a>

                    <nav className="hidden md:flex items-center gap-12">
                        {navLinks.map((link) => (
                            <button
                                key={link.href}
                                onClick={() => scrollToSection(link.href)}
                                className="text-white/70 hover:text-white text-xs tracking-[0.2em] uppercase transition-colors duration-300"
                            >
                                {link.label}
                            </button>
                        ))}
                        <a
                            href="https://wa.me/51916401098"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-accent hover:text-white text-xs tracking-[0.2em] uppercase transition-colors duration-300"
                        >
                            WhatsApp
                        </a>
                    </nav>

                    <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white p-2">
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </motion.header>

            <motion.div
                initial={false}
                animate={{ opacity: mobileMenuOpen ? 1 : 0, x: mobileMenuOpen ? 0 : "100%" }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black z-40 md:hidden flex flex-col items-center justify-center gap-8"
                style={{ pointerEvents: mobileMenuOpen ? "auto" : "none" }}
            >
                {navLinks.map((link) => (
                    <button key={link.href} onClick={() => scrollToSection(link.href)} className="text-white text-2xl font-serif">
                        {link.label}
                    </button>
                ))}
                <a href="https://wa.me/51916401098" target="_blank" rel="noopener noreferrer" className="text-accent text-xl tracking-wider uppercase mt-8">
                    WhatsApp
                </a>
            </motion.div>
        </>
    );
}
