"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const questions = [
    { id: 1, question: "¿Cuándo usarás más tu fragancia?", options: ["Día a día", "Ocasiones especiales", "Noche / Citas"] },
    { id: 2, question: "¿Qué sensación buscas?", options: ["Frescura y energía", "Calidez y confort", "Misterio y seducción"] },
    { id: 3, question: "¿Qué familia olfativa te atrae?", options: ["Cítricos y frescos", "Dulces y gourmand", "Amaderados y oud"] },
];

export default function ScentQuiz() {
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState<string[]>([]);
    const [showResult, setShowResult] = useState(false);

    const handleAnswer = (answer: string) => {
        const newAnswers = [...answers, answer];
        setAnswers(newAnswers);
        if (step < questions.length - 1) {
            setStep(step + 1);
        } else {
            setShowResult(true);
        }
    };

    const getRecommendation = () => {
        if (answers[2]?.includes("Oud")) return "Bade'e Al Oud Sublime";
        if (answers[1]?.includes("Calidez") || answers[2]?.includes("gourmand")) return "Khamrah";
        if (answers[0]?.includes("Día") || answers[2]?.includes("Cítricos")) return "Odyssey Mandarinsky";
        return "Yara";
    };

    const reset = () => { setStep(0); setAnswers([]); setShowResult(false); };

    const whatsappUrl = `https://wa.me/51916401098?text=${encodeURIComponent(`Hola, hice el quiz y me recomendaron ${getRecommendation()}. ¿Me cuentas más?`)}`;

    return (
        <section className="py-24 md:py-32 px-8 md:px-16 lg:px-24 bg-[#0a0a0a]">
            <div className="max-w-3xl mx-auto text-center">
                <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                    className="text-accent text-xs tracking-[0.4em] uppercase block mb-6">Descubre tu fragancia</motion.span>
                <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    className="font-serif text-4xl md:text-5xl text-white mb-12">¿Cuál es tu <span className="italic text-accent">aroma ideal</span>?</motion.h2>

                {!showResult ? (
                    <motion.div key={step} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                        className="space-y-8">
                        <p className="text-white/70 text-xl mb-8">{questions[step].question}</p>
                        <div className="flex flex-col gap-4">
                            {questions[step].options.map((option) => (
                                <button key={option} onClick={() => handleAnswer(option)}
                                    className="w-full py-4 px-6 border border-white/20 text-white hover:border-accent hover:text-accent transition-all duration-300 text-left">
                                    {option}
                                </button>
                            ))}
                        </div>
                        <div className="flex gap-2 justify-center mt-8">
                            {questions.map((_, i) => (
                                <div key={i} className={`w-2 h-2 rounded-full ${i <= step ? 'bg-accent' : 'bg-white/20'}`} />
                            ))}
                        </div>
                    </motion.div>
                ) : (
                    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="space-y-8">
                        <p className="text-white/60">Tu fragancia ideal es:</p>
                        <h3 className="font-serif text-5xl text-accent">{getRecommendation()}</h3>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
                                className="px-8 py-4 bg-white text-black font-medium text-sm tracking-wider uppercase hover:bg-accent transition-all flex items-center justify-center gap-2">
                                <MessageCircle className="w-4 h-4" /> Consultar por WhatsApp
                            </a>
                            <button onClick={reset} className="px-8 py-4 border border-white/30 text-white text-sm tracking-wider uppercase hover:border-accent hover:text-accent transition-all">
                                Repetir Quiz
                            </button>
                        </div>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
