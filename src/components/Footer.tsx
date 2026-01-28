"use client";

import Image from "next/image";
import { Instagram } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-black border-t border-white/10 py-16 md:py-20 px-8 md:px-16 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
                    <div className="md:col-span-2">
                        <Image src="/logo.png" alt="LEO PRIVÉ" width={140} height={50} className="h-10 w-auto mb-6" />
                        <p className="text-white/40 text-sm font-light leading-relaxed max-w-sm">
                            Fragancias de alta gama. Decants y frascos completos para quienes buscan distinción.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-white text-xs tracking-[0.2em] uppercase mb-6">Navegación</h4>
                        <ul className="space-y-4">
                            <li><a href="#coleccion" className="text-white/40 hover:text-white text-sm transition-colors">Colección</a></li>
                            <li><a href="#experiencia" className="text-white/40 hover:text-white text-sm transition-colors">Experiencia</a></li>
                            <li><a href="#garantia" className="text-white/40 hover:text-white text-sm transition-colors">Garantía</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white text-xs tracking-[0.2em] uppercase mb-6">Contacto</h4>
                        <ul className="space-y-4">
                            <li><a href="https://wa.me/51916401098" target="_blank" rel="noopener noreferrer"
                                className="text-accent hover:text-white text-sm transition-colors">+51 916 401 098</a></li>
                            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                                className="text-white/40 hover:text-white text-sm transition-colors flex items-center gap-2">
                                <Instagram className="w-4 h-4" />@leoprive</a></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-white/30 text-xs">© {new Date().getFullYear()} LEO PRIVÉ. Todos los derechos reservados.</p>
                    <div className="flex gap-8">
                        <a href="#" className="text-white/30 hover:text-white/60 text-xs transition-colors">Políticas</a>
                        <a href="#" className="text-white/30 hover:text-white/60 text-xs transition-colors">Términos</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
