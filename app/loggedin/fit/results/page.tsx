"use client";

import React from "react";
import Link from "next/link";
import { 
  ChevronLeft, 
  TrendingUp, 
  Shield, 
  Anchor, 
  Wind, 
  Download,
  Share2,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

const branchResults = [
  {
    name: "Royal Malaysian Air Force",
    alias: "TUDM",
    compatibility: 94,
    icon: Wind,
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
    borderColor: "border-blue-400/20",
    traits: ["High Technical Aptitude", "Rapid Decision Making", "Avionics Interest"],
  },
  {
    name: "Royal Malaysian Navy",
    alias: "TLDM",
    compatibility: 78,
    icon: Anchor,
    color: "text-emerald-400",
    bgColor: "bg-emerald-400/10",
    borderColor: "border-emerald-400/20",
    traits: ["Endurance Capability", "Technical Engineering", "Maritime Focus"],
  },
  {
    name: "Malaysian Army",
    alias: "TDM",
    compatibility: 65,
    icon: Shield,
    color: "text-amber-400",
    bgColor: "bg-amber-400/10",
    borderColor: "border-amber-400/20",
    traits: ["Tactical Leadership", "Physical Resilience", "Field Ops Interest"],
  },
];

export default function QuizResults() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
      
      {/* HEADER SECTION */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <Link 
            href="/loggedin/fit/quiz" 
            className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-zinc-500 hover:text-white mb-6 transition-colors"
          >
            <ChevronLeft size={14} /> Re-take Assessment
          </Link>
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-500 block">
            Analysis Report // A.I. Compatibility
          </span>
          <h1 className="mt-2 text-3xl font-black uppercase tracking-tight text-white">
            Career <span className="text-zinc-500">Matching Results</span>
          </h1>
        </div>

        <div className="flex gap-3">
          <button className="h-11 px-6 rounded-xl bg-white/5 border border-white/10 text-zinc-400 text-[10px] font-black uppercase tracking-widest hover:text-white transition-all flex items-center gap-2">
            <Share2 size={14} /> Share
          </button>
          <button className="h-11 px-6 rounded-xl bg-white text-black text-[10px] font-black uppercase tracking-widest hover:bg-emerald-400 transition-all flex items-center gap-2">
            <Download size={14} /> Save Dossier
          </button>
        </div>
      </div>

      {/* TOP MATCH CARD */}
      <div className="mb-12 p-1 rounded-[3rem] bg-gradient-to-br from-blue-500/20 via-transparent to-transparent">
        <div className="bg-zinc-900 rounded-[2.9rem] p-8 md:p-12 border border-white/5 relative overflow-hidden">
          <div className="absolute right-[-5%] top-[-10%] opacity-5 pointer-events-none">
             <Wind size={400} />
          </div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[9px] font-black uppercase tracking-[0.2em] mb-6">
                <TrendingUp size={12} /> Primary Match Identified
              </div>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-4">
                Air Force <span className="text-blue-400 text-outline">Specialist</span>
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed mb-8 max-w-md">
                Based on your cognitive profile and technical interests, you align most strongly with the Royal Malaysian Air Force (TUDM) aviation and electronic warfare divisions.
              </p>
              <Link 
                href="/loggedin/applications/new?branch=airforce" 
                className="h-14 px-8 rounded-2xl bg-white text-black text-[10px] font-black uppercase tracking-widest hover:bg-emerald-400 transition-all inline-flex items-center gap-3"
              >
                Initialize Branch Application <ArrowRight size={16} />
              </Link>
            </div>
            
            <div className="flex flex-col items-center lg:items-end">
              <div className="relative h-48 w-48 flex items-center justify-center">
                <svg className="h-full w-full rotate-[-90deg]">
                  <circle cx="96" cy="96" r="88" fill="none" stroke="currentColor" strokeWidth="12" className="text-white/5" />
                  <circle 
                    cx="96" cy="96" r="88" fill="none" stroke="currentColor" strokeWidth="12" 
                    strokeDasharray={552.92}
                    strokeDashoffset={552.92 * (1 - 0.94)}
                    className="text-blue-400 transition-all duration-1000" 
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-5xl font-black text-white">94%</span>
                  <span className="text-[9px] font-black text-blue-400 uppercase tracking-widest">Match Score</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* OTHER BRANCHES GRID */}
      <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600 mb-8 ml-4">Full Compatibility Spectrum</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {branchResults.slice(1).map((branch) => (
          <div key={branch.alias} className={`p-8 rounded-[2.5rem] bg-zinc-900 border ${branch.borderColor} flex flex-col justify-between`}>
            <div>
              <div className="flex justify-between items-start mb-6">
                <div className={`h-12 w-12 rounded-xl ${branch.bgColor} ${branch.color} flex items-center justify-center`}>
                   <branch.icon size={24} />
                </div>
                <span className={`text-xl font-black ${branch.color}`}>{branch.compatibility}%</span>
              </div>
              <h4 className="text-lg font-bold uppercase tracking-tight text-white mb-2">{branch.name}</h4>
              <div className="flex flex-wrap gap-2 mb-8">
                {branch.traits.map(trait => (
                  <span key={trait} className="text-[8px] font-black uppercase tracking-tighter px-2 py-1 bg-white/5 rounded text-zinc-500 border border-white/5">
                    {trait}
                  </span>
                ))}
              </div>
            </div>
            <button className="w-full h-11 rounded-xl border border-white/10 text-zinc-400 text-[10px] font-black uppercase tracking-widest hover:text-white hover:bg-white/5 transition-all">
              View Specific Roles
            </button>
          </div>
        ))}
      </div>

      {/* ADVISORY FOOTER */}
      <div className="mt-12 p-8 rounded-[2rem] bg-white/5 border border-white/5 flex items-start gap-5">
         <CheckCircle2 size={24} className="text-emerald-500 shrink-0" />
         <div>
            <p className="text-[10px] font-black text-white uppercase tracking-widest mb-1">Recruitment Insight</p>
            <p className="text-xs text-zinc-500 leading-relaxed max-w-2xl">
              While your match scores provide a guideline, you are permitted to apply for any branch. High scores in a specific branch may prioritize your application for certain specialized technical roles.
            </p>
         </div>
      </div>
    </div>
  );
}