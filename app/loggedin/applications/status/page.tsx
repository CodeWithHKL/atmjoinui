"use client";

import React from "react";
import Link from "next/link";
import { 
  ChevronLeft, 
  MapPin, 
  Calendar, 
  ShieldCheck, 
  Search,
  Activity,
  ArrowUpRight,
  Info
} from "lucide-react";

const trackingStages = [
  { id: 1, name: "Submission", date: "14 Feb 2026", status: "completed", desc: "Digital file received and indexed." },
  { id: 2, name: "Document Vetting", date: "16 Feb 2026", status: "completed", desc: "IC and academic transcripts verified." },
  { id: 3, name: "System Screening", date: "20 Feb 2026", status: "active", desc: "A.I. eligibility and background check in progress." },
  { id: 4, name: "Medical Call-up", date: "TBD", status: "pending", desc: "Pending invitation to nearest medical center." },
  { id: 5, name: "Board Interview", date: "TBD", status: "pending", desc: "Final evaluation by selection officers." },
];

export default function ApplicationStatus() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
      
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <Link 
            href="/loggedin/applications/mine" 
            className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-zinc-500 hover:text-white mb-6 transition-colors"
          >
            <ChevronLeft size={14} /> Back to Records
          </Link>
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-500 block">
            Application Tracker // APP-99201
          </span>
          <h1 className="mt-2 text-3xl font-black uppercase tracking-tight text-white">
            Current <span className="text-zinc-500">Processing Status</span>
          </h1>
        </div>

        <div className="flex gap-3">
            <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 flex flex-col">
                <span className="text-[9px] font-black text-zinc-500 uppercase tracking-widest">Global Rank</span>
                <span className="text-sm font-bold text-white uppercase">Tier 1 Candidate</span>
            </div>
            <div className="px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex flex-col">
                <span className="text-[9px] font-black text-emerald-400 uppercase tracking-widest">Phase</span>
                <span className="text-sm font-bold text-emerald-400 uppercase">Verification</span>
            </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* LEFT: PROGRESS TIMELINE */}
        <div className="lg:col-span-2 space-y-6">
          <div className="p-8 rounded-[2.5rem] bg-zinc-900 border border-white/5">
            <h2 className="text-sm font-black uppercase tracking-[0.2em] mb-10 text-zinc-400">Milestone Progress</h2>
            
            <div className="space-y-0">
              {trackingStages.map((stage, idx) => (
                <div key={stage.id} className="relative flex gap-6 pb-10 last:pb-0 group">
                  {/* Vertical Line */}
                  {idx !== trackingStages.length - 1 && (
                    <div className={`absolute left-[19px] top-10 w-[2px] h-full ${
                      stage.status === 'completed' ? 'bg-emerald-500' : 'bg-white/5'
                    }`} />
                  )}

                  {/* Node */}
                  <div className={`relative z-10 h-10 w-10 shrink-0 rounded-full border-4 border-zinc-900 flex items-center justify-center transition-all duration-500 ${
                    stage.status === 'completed' ? 'bg-emerald-500 text-black' : 
                    stage.status === 'active' ? 'bg-zinc-800 text-emerald-400 border-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.3)]' : 
                    'bg-zinc-900 text-zinc-700 border-white/5'
                  }`}>
                    {stage.status === 'completed' ? <ShieldCheck size={18} /> : <Activity size={18} className={stage.status === 'active' ? 'animate-pulse' : ''} />}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <div className="flex justify-between items-center mb-1">
                      <h3 className={`text-sm font-bold uppercase tracking-wider ${stage.status === 'pending' ? 'text-zinc-600' : 'text-white'}`}>
                        {stage.name}
                      </h3>
                      <span className="text-[10px] font-bold text-zinc-500 uppercase">{stage.date}</span>
                    </div>
                    <p className="text-xs text-zinc-500 leading-relaxed max-w-md">
                      {stage.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT: DETAILS & ACTIONS */}
        <div className="space-y-6">
          {/* ASSIGNED OFFICE */}
          <div className="p-6 rounded-[2rem] bg-zinc-900 border border-white/5">
            <h3 className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-4 flex items-center gap-2">
              <MapPin size={12} /> Reporting Center
            </h3>
            <p className="text-sm font-bold uppercase text-white">Mindef Headquarters</p>
            <p className="text-[11px] text-zinc-500 mt-1">Jalan Padang Tembak, Kuala Lumpur</p>
            <button className="mt-4 w-full h-10 rounded-xl bg-white/5 border border-white/5 text-[10px] font-black uppercase tracking-widest text-zinc-300 hover:text-white hover:bg-white/10 transition-all flex items-center justify-center gap-2">
              Get Directions <ArrowUpRight size={14} />
            </button>
          </div>

          {/* ADVISORY CARD */}
          <div className="p-6 rounded-[2rem] bg-emerald-500/5 border border-emerald-500/10">
             <div className="flex gap-4">
                <div className="h-10 w-10 shrink-0 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <Info size={20} />
                </div>
                <div>
                    <h3 className="text-xs font-bold uppercase text-white">Recruit Tip</h3>
                    <p className="text-[11px] text-zinc-400 mt-1 leading-relaxed">
                        Ensure your notification alerts are active. You will receive an SMS and email precisely 7 days before your Medical Call-up.
                    </p>
                </div>
             </div>
          </div>

          {/* HELP CTA */}
          <div className="p-6 rounded-[2rem] border border-white/5 text-center">
            <p className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest mb-4">Inaccurate information?</p>
            <Link href="/loggedin/help" className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 hover:text-emerald-400 transition-colors">
              Contact Support Branch
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}