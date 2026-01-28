import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import ProductGrid from "@/components/ProductGrid";
import ScentQuiz from "@/components/ScentQuiz";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Manifesto />
                <section id="coleccion">
                    <ProductGrid />
                </section>
                <section id="experiencia">
                    <ScentQuiz />
                </section>
                <Testimonials />
                <section id="garantia">
                    <FAQ />
                </section>
            </main>
            <Footer />
            <WhatsAppButton />
        </>
    );
}
