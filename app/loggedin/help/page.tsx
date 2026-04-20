"use client";

import React from "react";
import Link from "next/link";
import { 
  BookOpen, 
  HelpCircle, 
  MessageSquare, 
  LifeBuoy, 
  ChevronRight, 
  ExternalLink,
  ShieldQuestion,
  FileText
} from "lucide-react";

const supportCategories = [
  {
    title: "Knowledge Base",
    desc: "Detailed answers to common recruitment and technical questions.",
    icon: HelpCircle,
    href: "/loggedin/help/faq",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    linkText: "View FAQ"
  },
  {
    title: "Application Guide",
    desc: "Step-by-step walkthrough of the enlistment process and docs.",
    icon: BookOpen,
    href: "/loggedin/help/guide",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    linkText: "Read Guide"
  },
  {
    title: "Contact Command",
    desc: "Open a direct line of communication with our support officers.",
    icon: MessageSquare,
    href: "/loggedin/help/contact",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    linkText: "Open Ticket"
  }
];

export default function HelpSupportPage() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
      
      {/* HEADER */}
      <div className="mb-12">
        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-500 block">
          Support Command // Resource Center
        </span>
        <h1 className="mt-2 text-3xl font-black uppercase tracking-tight text-white">
          How can we <span className="text-zinc-500">assist you?</span>
        </h1>
        <p className="text-sm text-zinc-500 mt-2 uppercase tracking-widest font-bold">
          Technical and Procedural Assistance for Recruit Candidates
        </p>
      </div>

      {/* CATEGORY GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {supportCategories.map((cat, i) => (
          <Link 
            key={i} 
            href={cat.href}
            className="group p-8 rounded-[2.5rem] bg-zinc-900 border border-white/5 hover:border-white/10 hover:bg-white/[0.02] transition-all flex flex-col justify-between"
          >
            <div>
              <div className={`h-12 w-12 rounded-2xl flex items-center justify-center mb-6 ${cat.bg} ${cat.color}`}>
                <cat.icon size={24} />
              </div>
              <h3 className="text-lg font-bold uppercase text-white mb-2">{cat.title}</h3>
              <p className="text-xs text-zinc-500 leading-relaxed mb-8">
                {cat.desc}
              </p>
            </div>
            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-zinc-400 group-hover:text-emerald-400 transition-colors">
              {cat.linkText} <ChevronRight size={14} />
            </div>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* RECENT TICKETS / STATUS */}
        <div className="p-8 rounded-[2.5rem] bg-zinc-900/50 border border-white/5">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-[10px] font-black uppercase tracking-widest text-zinc-500 flex items-center gap-2">
              <LifeBuoy size={14} className="text-emerald-500" /> Active Support Tickets
            </h2>
            <span className="text-[9px] font-black uppercase tracking-widest text-zinc-600">Total: 1</span>
          </div>

          <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-between group cursor-pointer hover:bg-white/10 transition-all">
              <div className="flex items-center gap-4">
                <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <div>
                  <p className="text-xs font-bold text-white uppercase">OTP Not Received</p>
                  <p className="text-[9px] text-zinc-500 font-bold uppercase mt-0.5">Ticket #88214 • Open</p>
                </div>
              </div>
              <ChevronRight size={16} className="text-zinc-700 group-hover:text-white" />
            </div>
          </div>
        </div>

        {/* QUICK DOWNLOADS */}
        <div className="p-8 rounded-[2.5rem] bg-zinc-900/50 border border-white/5">
          <h2 className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-8 flex items-center gap-2">
            <ShieldQuestion size={14} className="text-blue-400" /> Essential Documents
          </h2>
          
          <div className="space-y-3">
            {[
              "Enlistment_Protocols_2026.pdf",
              "Medical_Requirement_Checklist.pdf",
              "Physical_Fitness_Standards.pdf"
            ].map((file, idx) => (
              <button key={idx} className="w-full p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-blue-500/30 flex items-center justify-between group transition-all">
                <div className="flex items-center gap-3 text-zinc-400 group-hover:text-white">
                  <FileText size={18} />
                  <span className="text-[10px] font-black uppercase tracking-widest">{file}</span>
                </div>
                <ExternalLink size={14} className="text-zinc-600 group-hover:text-blue-400" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}