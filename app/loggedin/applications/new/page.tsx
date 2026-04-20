"use client";

import React, { useState } from "react";
import { 
  User, 
  MapPin, 
  GraduationCap, 
  ShieldCheck, 
  ChevronRight, 
  ChevronLeft,
  UploadCloud
} from "lucide-react";

const steps = [
  { id: 1, title: "Personal Info", icon: User },
  { id: 2, title: "Address & Contact", icon: MapPin },
  { id: 3, title: "Academic Record", icon: GraduationCap },
  { id: 4, title: "Review & Submit", icon: ShieldCheck },
];

export default function NewApplication() {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, steps.length));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* HEADER */}
      <div className="mb-10">
        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-500">
          Enlistment Portal // Form 104-A
        </span>
        <h1 className="mt-2 text-3xl font-black uppercase tracking-tight text-white">
          Initialize <span className="text-zinc-500">New Application</span>
        </h1>
      </div>

      {/* PROGRESS TRACKER */}
      <div className="mb-12 flex items-center justify-between max-w-3xl mx-auto relative">
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/5 -translate-y-1/2 z-0" />
        {steps.map((step) => (
          <div key={step.id} className="relative z-10 flex flex-col items-center">
            <div 
              className={`h-10 w-10 rounded-xl border flex items-center justify-center transition-all duration-500 ${
                currentStep >= step.id 
                ? "bg-emerald-500 border-emerald-400 text-black shadow-[0_0_15px_rgba(16,185,129,0.4)]" 
                : "bg-zinc-900 border-white/10 text-zinc-500"
              }`}
            >
              <step.icon size={18} />
            </div>
            <span className={`mt-3 text-[9px] font-black uppercase tracking-widest ${
              currentStep >= step.id ? "text-white" : "text-zinc-600"
            }`}>
              {step.title}
            </span>
          </div>
        ))}
      </div>

      {/* FORM CONTAINER */}
      <div className="max-w-3xl mx-auto rounded-[2.5rem] border border-white/10 bg-zinc-900/50 p-8 md:p-12 backdrop-blur-sm">
        
        {/* STEP 1: PERSONAL INFO */}
        {currentStep === 1 && (
          <div className="space-y-6 animate-in fade-in duration-500">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-1">Date of Birth</label>
                <input type="date" className="h-12 w-full rounded-xl border border-white/5 bg-white/5 px-4 text-sm text-white outline-none focus:ring-2 focus:ring-emerald-500/40 transition-all" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-1">Gender</label>
                <select className="h-12 w-full rounded-xl border border-white/5 bg-white/5 px-4 text-sm text-white outline-none focus:ring-2 focus:ring-emerald-500/40 transition-all appearance-none">
                  <option>Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-1">Race</label>
              <input type="text" placeholder="e.g. MALAY" className="h-12 w-full rounded-xl border border-white/5 bg-white/5 px-4 text-sm text-white outline-none focus:ring-2 focus:ring-emerald-500/40 transition-all uppercase placeholder:text-zinc-700" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-1">Height (cm)</label>
                <input type="number" placeholder="170" className="h-12 w-full rounded-xl border border-white/5 bg-white/5 px-4 text-sm text-white outline-none focus:ring-2 focus:ring-emerald-500/40 transition-all" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-1">Weight (kg)</label>
                <input type="number" placeholder="65" className="h-12 w-full rounded-xl border border-white/5 bg-white/5 px-4 text-sm text-white outline-none focus:ring-2 focus:ring-emerald-500/40 transition-all" />
              </div>
            </div>
          </div>
        )}

        {/* STEP 2: PLACEHOLDER FOR OTHER STEPS */}
        {currentStep > 1 && (
          <div className="flex flex-col items-center justify-center py-12 text-center animate-in fade-in zoom-in-95 duration-500">
            <div className="h-20 w-20 rounded-3xl bg-white/5 flex items-center justify-center text-zinc-600 mb-6">
              <UploadCloud size={40} />
            </div>
            <h2 className="text-xl font-bold uppercase tracking-tight">Processing Module {currentStep}</h2>
            <p className="text-zinc-500 text-sm mt-2 max-w-xs">Further details required for digital vetting. Continue to next phase.</p>
          </div>
        )}

        {/* NAVIGATION BUTTONS */}
        <div className="mt-12 flex justify-between items-center pt-8 border-t border-white/5">
          <button 
            onClick={prevStep}
            disabled={currentStep === 1}
            className={`flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] transition-all ${
              currentStep === 1 ? "opacity-0 pointer-events-none" : "text-zinc-500 hover:text-white"
            }`}
          >
            <ChevronLeft size={16} /> Back
          </button>

          <button 
            onClick={nextStep}
            className="flex items-center gap-3 h-12 px-8 rounded-xl bg-white text-black text-[10px] font-black uppercase tracking-widest hover:bg-emerald-400 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            {currentStep === steps.length ? "Confirm Submission" : "Next Phase"}
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* FOOTER ADVISORY */}
      <div className="mt-8 text-center">
        <p className="text-[9px] font-bold text-zinc-600 uppercase tracking-[0.3em]">
          All data is encrypted via military-grade protocols. Falsifying information is a punishable offense.
        </p>
      </div>
    </div>
  );
}