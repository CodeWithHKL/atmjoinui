"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ChevronLeft, 
  Target, 
  Brain, 
  Zap, 
  Shield, 
  Dna,
  Cpu,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

const assessmentQuestions = [
  {
    id: "APT-01",
    category: "Cognitive Profile",
    icon: Brain,
    question: "Under high-pressure tactical scenarios, what is your primary instinct?",
    options: [
      { label: "Analyze data patterns and technical variables", value: "airforce" },
      { label: "Coordinate team movement and physical positioning", value: "army" },
      { label: "Manage resource logistics and technical systems", value: "navy" },
    ],
  },
  {
    id: "APT-02",
    category: "Operational Environment",
    icon: Target,
    question: "Which theatre of operation aligns with your long-term career goals?",
    options: [
      { label: "Atmospheric & Deep Space Operations", value: "airforce" },
      { label: "Land-Based Combat & Urban Stabilization", value: "army" },
      { label: "Naval Supremacy & Maritime Engineering", value: "navy" },
    ],
  },
  {
    id: "APT-03",
    category: "Technical Specialty",
    icon: Cpu,
    question: "Which field of advanced technology interests you most?",
    options: [
      { label: "Avionics, Cyber-Warfare & Electronic Systems", value: "airforce" },
      { label: "Ballistics, Tactical Hardware & Ground Vehicles", value: "army" },
      { label: "Hydrodynamics, Sub-surface Ops & Fleet Tech", value: "navy" },
    ],
  },
];

export default function LoggedInFitQuiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [isSyncing, setIsSyncing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const handleSelect = (val: string) => {
    const newAnswers = [...answers];
    newAnswers[currentStep] = val;
    setAnswers(newAnswers);

    if (currentStep < assessmentQuestions.length - 1) {
      setTimeout(() => setCurrentStep(prev => prev + 1), 400);
    } else {
      finalizeAssessment();
    }
  };

  const finalizeAssessment = () => {
    setIsSyncing(true);
    // Simulate syncing results with the ATMJOIN database
    setTimeout(() => {
      setIsSyncing(false);
      setIsComplete(true);
    }, 2500);
  };

  if (isComplete) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-700">
        <div className="h-24 w-24 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center text-emerald-400 mb-8 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
          <CheckCircle2 size={48} />
        </div>
        <h1 className="text-4xl font-black uppercase tracking-tighter text-white mb-4">Assessment Synced</h1>
        <p className="text-zinc-500 max-w-sm mb-10 text-sm font-bold uppercase tracking-widest leading-relaxed">
          Your profile has been updated. The Command Algorithm has determined your primary branch compatibility.
        </p>
        <Link 
          href="/loggedin/fit/results" 
          className="h-14 px-10 rounded-2xl bg-white text-black font-black uppercase tracking-widest hover:bg-emerald-400 transition-all flex items-center justify-center gap-3"
        >
          View Compatibility Report <ArrowRight size={18} />
        </Link>
      </div>
    );
  }

  const activeQ = assessmentQuestions[currentStep];

  return (
    <div className="max-w-4xl mx-auto pt-10">
      {/* HEADER HUD */}
      <div className="flex justify-between items-center mb-16 px-4">
        <div className="flex items-center gap-4">
          <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-500">
             <Dna size={20} />
          </div>
          <div>
            <p className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.3em]">Candidate Evaluation</p>
            <p className="text-xs font-bold text-white uppercase">ID: ATM-880214-14-5521</p>
          </div>
        </div>

        <div className="flex gap-2">
          {assessmentQuestions.map((_, idx) => (
            <div 
              key={idx} 
              className={`h-1.5 w-16 rounded-full transition-all duration-700 ${
                idx <= currentStep ? "bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" : "bg-white/10"
              }`} 
            />
          ))}
        </div>
      </div>

      {isSyncing ? (
        <div className="flex flex-col items-center justify-center py-20 animate-pulse">
           <Zap size={48} className="text-emerald-500 mb-6" />
           <p className="text-sm font-black uppercase tracking-[0.5em] text-zinc-400">Processing Data Grid...</p>
        </div>
      ) : (
        <div className="px-4">
          {/* CATEGORY BANNER */}
          <div className="flex flex-col items-center text-center mb-12">
            <div className="h-20 w-20 rounded-3xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-8 animate-in slide-in-from-top-4">
              <activeQ.icon size={36} />
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-emerald-500/60 mb-3">
              Module {activeQ.id} // {activeQ.category}
            </span>
            <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-white max-w-2xl leading-tight">
              {activeQ.question}
            </h2>
          </div>

          {/* INTERACTIVE OPTIONS */}
          <div className="grid grid-cols-1 gap-4 max-w-2xl mx-auto">
            {activeQ.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleSelect(option.value)}
                className="group relative flex items-center justify-between p-6 rounded-3xl border border-white/5 bg-zinc-900 hover:bg-white/[0.03] hover:border-emerald-500/40 transition-all duration-300 active:scale-[0.98]"
              >
                <span className="text-sm font-bold uppercase tracking-wide text-zinc-300 group-hover:text-white">
                  {option.label}
                </span>
                <div className="h-6 w-6 rounded-lg border border-white/10 flex items-center justify-center group-hover:border-emerald-500/50 transition-all">
                  <div className="h-2 w-2 rounded-sm bg-emerald-500 scale-0 group-hover:scale-100 transition-transform" />
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* SYSTEM STATUS FOOTER */}
      <div className="mt-20 flex justify-center items-center gap-8 opacity-20">
         <div className="flex items-center gap-2">
            <Shield size={14} />
            <span className="text-[9px] font-bold uppercase tracking-widest">Secure Link</span>
         </div>
         <div className="flex items-center gap-2">
            <Cpu size={14} />
            <span className="text-[9px] font-bold uppercase tracking-widest">Neural Analysis</span>
         </div>
      </div>
    </div>
  );
}