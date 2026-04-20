"use client";

import React from "react";
import Link from "next/link";
import { 
  FileText, 
  ExternalLink, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  Search,
  ChevronRight
} from "lucide-react";

const applications = [
  {
    id: "APP-99201",
    branch: "Army",
    role: "General Enlistment",
    date: "14 Feb 2026",
    status: "In Review",
    statusColor: "text-amber-400 bg-amber-400/10",
    icon: Clock,
  },
  {
    id: "APP-88412",
    branch: "Air Force",
    role: "Pilot Cadet",
    date: "12 Dec 2025",
    status: "Completed",
    statusColor: "text-emerald-400 bg-emerald-400/10",
    icon: CheckCircle2,
  },
  {
    id: "APP-77231",
    branch: "Navy",
    role: "Marine Engineer",
    date: "01 Nov 2025",
    status: "Rejected",
    statusColor: "text-red-400 bg-red-400/10",
    icon: AlertCircle,
  },
];

export default function MyApplications() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* HEADER SECTION */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
        <div>
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-500">
            Records Division // Archives
          </span>
          <h1 className="mt-2 text-3xl font-black uppercase tracking-tight text-white">
            My <span className="text-zinc-500">Applications</span>
          </h1>
        </div>
        
        {/* QUICK SEARCH */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600" size={16} />
          <input 
            type="text" 
            placeholder="Search ID..." 
            className="h-11 w-full md:w-64 bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 text-xs font-bold outline-none focus:ring-2 focus:ring-emerald-500/40 transition-all uppercase"
          />
        </div>
      </div>

      {/* APPLICATIONS LIST */}
      <div className="space-y-4">
        {applications.map((app) => (
          <div 
            key={app.id} 
            className="group relative flex flex-col md:flex-row md:items-center justify-between p-6 rounded-[2rem] bg-zinc-900 border border-white/5 hover:border-white/10 hover:bg-white/[0.02] transition-all duration-300"
          >
            <div className="flex items-center gap-6">
              {/* ICON BLOCK */}
              <div className={`h-14 w-14 rounded-2xl flex items-center justify-center ${app.statusColor}`}>
                <app.icon size={24} />
              </div>

              {/* INFO BLOCK */}
              <div>
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">{app.id}</span>
                  <span className={`text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md ${app.statusColor}`}>
                    {app.status}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white uppercase tracking-tight mt-1">
                  {app.branch} — {app.role}
                </h3>
                <p className="text-xs text-zinc-500 font-bold uppercase tracking-widest mt-1">
                  Submitted: {app.date}
                </p>
              </div>
            </div>

            {/* ACTIONS */}
            <div className="flex items-center gap-3 mt-6 md:mt-0">
              <Link 
                href={`/loggedin/applications/status?id=${app.id}`}
                className="flex-1 md:flex-none h-11 px-6 rounded-xl border border-white/5 bg-white/5 flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-widest text-zinc-300 hover:bg-white/10 hover:text-white transition-all"
              >
                Track Status <ExternalLink size={14} />
              </Link>
              <button className="h-11 w-11 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-zinc-500 hover:text-white transition-all">
                <FileText size={16} />
              </button>
            </div>
            
            {/* HOVER GLOW EFFECT */}
            <div className="absolute inset-0 rounded-[2rem] border-2 border-emerald-500/0 group-hover:border-emerald-500/10 pointer-events-none transition-all duration-500" />
          </div>
        ))}
      </div>

      {/* EMPTY STATE TRIGGER (Placeholder) */}
      <div className="mt-12 p-8 rounded-[2.5rem] border border-dashed border-white/10 flex flex-col items-center text-center">
        <p className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.3em] mb-4">
          Need to apply for a different branch?
        </p>
        <Link 
          href="/loggedin/applications/new" 
          className="flex items-center gap-2 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-all uppercase tracking-widest"
        >
          Initialize new file <ChevronRight size={14} />
        </Link>
      </div>
    </div>
  );
}