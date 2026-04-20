"use client";

import React from "react";
import Link from "next/link";
import { 
  ChevronLeft, Shield, Anchor, Wind, 
  Map, HardHat, Zap 
} from "lucide-react";
import Navbar from "@/components/Navbar";

const branches = [
  {
    name: "Army",
    icon: Shield,
    theme: "text-emerald-500",
    bg: "bg-emerald-500/10",
    mission: "Land Dominance",
    environment: "Terrestrial / Urban",
    training: "Intense Physical / Tactical",
    commitment: "High Mobility"
  },
  {
    name: "Navy",
    icon: Anchor,
    theme: "text-blue-500",
    bg: "bg-blue-500/10",
    mission: "Maritime Security",
    environment: "Open Sea / Littoral",
    training: "Technical / Seamanship",
    commitment: "Sea Deployment"
  },
  {
    name: "Air Force",
    icon: Wind,
    theme: "text-cyan-500",
    bg: "bg-cyan-500/10",
    mission: "Aerial Superiority",
    environment: "Atmospheric / Space",
    training: "Precision / Engineering",
    commitment: "High-Tech Ops"
  }
];

export default function ComparePage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-emerald-500/30 pb-20">
      
      {/* GLOBAL NAVIGATION */}
      <Navbar />

      {/* HEADER - Adjusted padding-top to account for fixed Navbar */}
      <header className="relative pt-40 pb-16 px-6">
        <div className="mx-auto max-w-7xl">
          <Link href="/" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-500 hover:text-white mb-8 transition-colors group">
            <ChevronLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> 
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
            Branch <span className="text-emerald-500">Comparison</span>
          </h1>
          <p className="mt-4 max-w-2xl text-zinc-400 font-medium">
            Every branch offers unique challenges and rewards. Analyze the core differences to find where you belong in the unified command structure.
          </p>
        </div>
      </header>

      {/* QUICK COMPARISON CARDS */}
      <main className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {branches.map((branch) => (
            <div key={branch.name} className="relative overflow-hidden p-8 rounded-[2.5rem] bg-zinc-900 border border-white/5 hover:border-white/10 transition-colors">
              <div className={`h-14 w-14 rounded-2xl ${branch.bg} flex items-center justify-center ${branch.theme} mb-6`}>
                <branch.icon size={28} />
              </div>
              <h3 className="text-2xl font-bold uppercase mb-4">{branch.name}</h3>
              
              <ul className="space-y-4">
                {[
                  { label: "Primary Mission", val: branch.mission, icon: Map },
                  { label: "Core Training", val: branch.training, icon: HardHat },
                  { label: "Domain", val: branch.environment, icon: Zap }
                ].map((stat, i) => (
                  <li key={i} className="flex flex-col">
                    <span className="text-[9px] font-black uppercase tracking-widest text-zinc-500">{stat.label}</span>
                    <span className="text-sm font-bold text-zinc-200 mt-0.5">{stat.val}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* COMPARISON TABLE */}
        <div className="rounded-[2.5rem] border border-white/5 bg-zinc-900/50 overflow-hidden">
          <div className="p-8 border-b border-white/5 bg-white/5">
            <h2 className="text-xl font-bold uppercase tracking-tight">Technical Matrix</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="p-6 text-[10px] font-black uppercase tracking-widest text-zinc-500">Feature</th>
                  <th className="p-6 text-[10px] font-black uppercase tracking-widest text-emerald-500">Army</th>
                  <th className="p-6 text-[10px] font-black uppercase tracking-widest text-blue-500">Navy</th>
                  <th className="p-6 text-[10px] font-black uppercase tracking-widest text-cyan-500">Air Force</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  { feature: "Enlistment Bonus", army: "Up to RM15k", navy: "Up to RM12k", air: "Up to RM10k" },
                  { feature: "Tech Focus", army: "Ground Systems", navy: "Naval Eng.", air: "Aerospace" },
                  { feature: "Travel Freq.", army: "High", navy: "Very High", air: "Moderate" },
                  { feature: "Base Locations", army: "Domestic/Global", navy: "Coastal/Sea", air: "Airfields" },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-6 text-sm font-bold text-zinc-400">{row.feature}</td>
                    <td className="p-6 text-sm text-zinc-200">{row.army}</td>
                    <td className="p-6 text-sm text-zinc-200">{row.navy}</td>
                    <td className="p-6 text-sm text-zinc-200">{row.air}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA SECTION */}
        <div className="mt-16 flex flex-col items-center text-center p-12 rounded-[2.5rem] border border-emerald-500/20 bg-emerald-500/5 backdrop-blur-sm">
          <h2 className="text-2xl font-bold uppercase mb-4">Still Undecided?</h2>
          <p className="text-zinc-400 max-w-lg mb-8 text-sm font-medium">
            Our eligibility checker takes your physical attributes and education background to rank which branch offers you the best career trajectory.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/quiz" 
              className="flex h-12 items-center px-8 rounded-xl bg-white text-black text-[10px] font-black uppercase tracking-widest hover:bg-zinc-200 transition-all hover:scale-105 active:scale-95"
            >
              Start Fit Quiz
            </Link>
            <Link 
              href="/signup" 
              className="flex h-12 items-center px-8 rounded-xl border border-white/10 text-white text-[10px] font-black uppercase tracking-widest hover:bg-white/5 transition-all"
            >
              Join Now
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}