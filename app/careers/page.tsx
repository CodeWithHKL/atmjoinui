"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar"; // Ensure your path is correct
import { Search, Shield, Anchor, Wind, Crosshair, ArrowRight, ChevronLeft } from "lucide-react";

const categories = ["All", "Combat", "Technical", "Medical", "Intelligence", "Logistics"];

const careers = [
  {
    id: 1,
    title: "Special Forces Operator",
    branch: "Army",
    category: "Combat",
    icon: Crosshair,
    color: "text-emerald-400",
    desc: "Elite tactical operations and unconventional warfare specialist.",
  },
  {
    id: 2,
    title: "Cyber Security Analyst",
    branch: "Intelligence",
    category: "Technical",
    icon: Shield,
    color: "text-blue-400",
    desc: "Defend national digital infrastructure from global threats.",
  },
  {
    id: 3,
    title: "Marine Engineer",
    branch: "Navy",
    category: "Technical",
    icon: Anchor,
    color: "text-cyan-400",
    desc: "Maintain and operate complex propulsion systems on naval vessels.",
  },
  {
    id: 4,
    title: "Flight Surgeon",
    branch: "Air Force",
    category: "Medical",
    icon: Wind,
    color: "text-purple-400",
    desc: "Specialized medical support for pilots and aircrew operations.",
  },
  {
    id: 5,
    title: "Avionics Technician",
    branch: "Air Force",
    category: "Technical",
    icon: Wind,
    color: "text-orange-400",
    desc: "Precision maintenance of advanced aircraft electronic systems.",
  },
  {
    id: 6,
    title: "Intelligence Officer",
    branch: "Intelligence",
    category: "Intelligence",
    icon: Shield,
    color: "text-yellow-400",
    desc: "Strategic data analysis and field reconnaissance management.",
  },
];

export default function CareersPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCareers = careers.filter((career) => {
    const matchesCategory = activeCategory === "All" || career.category === activeCategory;
    const matchesSearch = career.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          career.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-emerald-500/30 pb-20">
      <Navbar />
      
      {/* HEADER SECTION */}
      <header className="relative pt-48 pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 grayscale bg-[url('/military.png')] bg-cover bg-center" />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-zinc-950" />
        
        <div className="relative z-20 mx-auto max-w-7xl">
          <Link href="/" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-500 hover:text-white transition-colors mb-8">
            <ChevronLeft size={14} /> Back to Home
          </Link>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
            Career <span className="text-emerald-500">Specialties</span>
          </h1>
          <p className="mt-4 max-w-xl text-zinc-400">
            From frontline defense to high-tech cyber operations, discover where your skills are needed most. 
          </p>
        </div>
      </header>

      {/* SEARCH & FILTER BAR */}
      <section className="sticky top-[88px] z-40 px-6 py-4 bg-zinc-950/80 backdrop-blur-xl border-y border-white/5">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row gap-4 items-center">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
            <input 
              type="text" 
              placeholder="Search roles (e.g. Engineer)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-12 bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 text-sm outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all"
            />
          </div>
          
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap border ${
                  activeCategory === cat 
                  ? "bg-white text-black border-white" 
                  : "bg-white/5 text-zinc-400 border-white/10 hover:border-white/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CAREERS GRID */}
      <main className="mx-auto max-w-7xl px-6 mt-12">
        {filteredCareers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCareers.map((career) => (
              <div 
                key={career.id}
                className="group relative p-8 rounded-[2rem] bg-zinc-900 border border-white/5 hover:border-emerald-500/30 transition-all duration-500 hover:-translate-y-1 overflow-hidden"
              >
                <div className={`absolute -right-4 -top-4 h-24 w-24 rounded-full blur-[60px] opacity-0 group-hover:opacity-20 transition-opacity ${career.color.replace('text', 'bg')}`} />

                <div className="flex justify-between items-start mb-6">
                  <div className={`h-12 w-12 rounded-2xl bg-white/5 flex items-center justify-center ${career.color}`}>
                    <career.icon size={24} />
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-white/5 text-zinc-500 border border-white/5">
                    {career.branch}
                  </span>
                </div>

                <h3 className="text-xl font-bold uppercase tracking-tight mb-2 group-hover:text-emerald-400 transition-colors">
                  {career.title}
                </h3>
                
                <p className="text-zinc-500 text-sm leading-relaxed mb-8">
                  {career.desc}
                </p>

                <Link 
                  href={`/careers/${career.id}`}
                  className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-white group-hover:gap-4 transition-all"
                >
                  View Requirements <ArrowRight size={14} className="text-emerald-500" />
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-zinc-500 uppercase tracking-widest text-xs font-bold">No roles found matching your search.</p>
          </div>
        )}

        {/* CALL TO ACTION */}
        <div className="mt-20 p-12 rounded-[3rem] bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-white/10 text-center">
          <h2 className="text-2xl font-bold uppercase mb-4">Not sure which path to take?</h2>
          <p className="text-zinc-400 mb-8 max-w-lg mx-auto text-sm">
            Our career matching algorithm analyzes your education and physical profile to suggest the most suitable military roles.
          </p>
          <Link 
            href="/quiz"
            className="inline-flex h-12 items-center px-8 rounded-xl bg-white text-black text-[10px] font-black uppercase tracking-widest hover:bg-zinc-200 transition-all"
          >
            Take the Fit Quiz
          </Link>
        </div>
      </main>
    </div>
  );
}