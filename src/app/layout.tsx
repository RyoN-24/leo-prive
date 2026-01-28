import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
    variable: "--font-serif",
    subsets: ["latin"],
    display: "swap",
});

const inter = Inter({
    variable: "--font-sans",
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "LEO PRIVÉ | Perfumes de Alta Gama",
    description: "Fragancias premium para quienes buscan distinción. Decants y frascos completos.",
    openGraph: {
        title: "LEO PRIVÉ | Perfumes de Alta Gama",
        description: "Fragancias premium para quienes buscan distinción.",
        images: ["/logo.png"],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es" className={`${playfair.variable} ${inter.variable}`}>
            <body className="antialiased bg-black text-white">
                {children}
            </body>
        </html>
    );
}
