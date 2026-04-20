"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Target, Shield, 
  Dna, Brain, Activity, CheckCircle2 
} from "lucide-react";
import Navbar from "@/components/Navbar";

const questions = [
  {
    id: 1,
    category: "Aptitude",
    icon: Brain,
    question: "Which environment do you excel in most?",
    options: [
      { label: "High-tech control rooms and digital landscapes", value: "airforce" },
      { label: "Dynamic field operations and tactical environments", value: "army" },
      { label: "Vast maritime operations and technical maintenance", value: "navy" },
      { label: "Strategic planning and intelligence analysis", value: "intel" },
    ],
  },
  {
    id: 2,
    category: "Physical",
    icon: Activity,
    question: "What is your preferred operational pace?",
    options: [
      { label: "Steady endurance and long-term deployments", value: "navy" },
      { label: "Rapid response and high-intensity strikes", value: "army" },
      { label: "Precision maneuvers and technical execution", value: "airforce" },
      { label: "Deep-focus analytical work and surveillance", value: "intel" },
    ],
  },
  {
    id: 3,
    category: "Interest",
    icon: Target,
    question: "Which specialized tool piques your interest?",
    options: [
      { label: "Advanced Avionics & Flight Systems", value: "airforce" },
      { label: "Heavy Armored Vehicles & Weaponry", value: "army" },
      { label: "Submarines & Naval Engineering", value: "navy" },
      { label: "Encrypted Networks & Signal Intelligence", value: "intel" },
    ],
  },
];

export default function FitQuiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [isFinished, setIsFinished] = useState(false);

  const handleOptionSelect = (value: string) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentStep] = value;
    setAnswers(updatedAnswers);

    if (currentStep < questions.length - 1) {
      setTimeout(() => setCurrentStep(currentStep + 1), 300);
    } else {
      setTimeout(() => setIsFinished(true), 500);
    }
  };

  if (isFinished) {
    return (
      <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center p-6 text-center">
        <Navbar />
        <div className="h-20 w-20 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6 animate-bounce">
          <CheckCircle2 size={40} />
        </div>
        <h1 className="text-3xl font-black uppercase tracking-tight text-white mb-4">Assessment Complete</h1>
        <p className="text-zinc-400 max-w-md mb-8 font-medium">
          Our command algorithm has analyzed your profile. Sign up to view your specialized career recommendations.
        </p>
        <Link 
          href="/signup" 
          className="h-14 px-10 rounded-2xl bg-white text-black font-black uppercase tracking-widest hover:bg-emerald-400 transition-all flex items-center justify-center hover:scale-105 active:scale-95"
        >
          View My Results
        </Link>
      </div>
    );
  }

  const activeQ = questions[currentStep];

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-emerald-500/30">
      
      {/* GLOBAL NAVIGATION */}
      <Navbar />

      {/* PROGRESS BAR SECTION */}
      <div className="fixed top-28 w-full px-6 z-40">
        <div className="mx-auto max-w-2xl flex justify-center gap-2 bg-black/40 backdrop-blur-md p-3 rounded-full border border-white/5">
          {questions.map((_, idx) => (
            <div 
              key={idx} 
              className={`h-1.5 flex-1 max-w-[100px] rounded-full transition-all duration-700 ease-out ${
                idx <= currentStep ? "bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" : "bg-white/10"
              }`} 
            />
          ))}
        </div>
      </div>

      <main className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-32">
        
        {/* BACKGROUND DECOR */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] bg-emerald-500/5 blur-[120px] rounded-full" />
        </div>

        <div className="relative z-10 w-full max-w-2xl mt-12">
          
          {/* CATEGORY ICON */}
          <div className="flex flex-col items-center text-center mb-10">
            <div className="h-16 w-16 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center text-emerald-400 mb-6 shadow-2xl">
              <activeQ.icon size={32} />
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-500 mb-2">
              Step {currentStep + 1} // {activeQ.category}
            </span>
            <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight leading-tight">
              {activeQ.question}
            </h2>
          </div>

          {/* OPTIONS GRID */}
          <div className="grid grid-cols-1 gap-4 mb-20">
            {activeQ.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleOptionSelect(option.value)}
                className={`group relative flex items-center justify-between p-6 rounded-2xl border text-left transition-all duration-300 active:scale-95 ${
                  answers[currentStep] === option.value 
                  ? "bg-white border-white" 
                  : "bg-zinc-900 border-white/10 hover:border-emerald-500/50 hover:bg-zinc-800"
                }`}
              >
                <span className={`text-sm font-bold uppercase tracking-wide transition-colors ${
                  answers[currentStep] === option.value ? "text-black" : "text-zinc-300"
                }`}>
                  {option.label}
                </span>
                <div className={`h-6 w-6 rounded-full border flex items-center justify-center transition-all ${
                  answers[currentStep] === option.value 
                  ? "bg-black border-black" 
                  : "border-white/20 group-hover:border-emerald-500/50"
                }`}>
                  {answers[currentStep] === option.value && <div className="h-2 w-2 rounded-full bg-white" />}
                </div>
              </button>
            ))}
          </div>

        </div>
      </main>

      {/* FOOTER INFO */}
      <footer className="fixed bottom-0 w-full p-8 text-center pointer-events-none hidden md:block">
        <div className="flex justify-center gap-12 opacity-30 grayscale">
          <div className="flex items-center gap-2">
            <Shield size={14} />
            <span className="text-[9px] font-bold uppercase tracking-widest text-white">Secure Data</span>
          </div>
          <div className="flex items-center gap-2">
            <Dna size={14} />
            <span className="text-[9px] font-bold uppercase tracking-widest text-white">A.I. Analysis</span>
          </div>
        </div>
      </footer>
    </div>
  );
}