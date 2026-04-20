"use client";
import React, { useState, useEffect } from "react";

export default function Dashboard() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Logic to handle auto-hide on scroll
  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        // If scrolling down, hide; if scrolling up, show.
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  return (
    <div className="relative min-h-[200vh] bg-zinc-50 font-sans text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 transition-colors duration-500">
      
      {/* Background HUD Accents */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-zinc-500/10 blur-[120px]" />
      </div>

      {/* MODERN FLOATING COMMAND BAR */}
      <nav 
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-[1100px] transition-all duration-500 ease-in-out ${
          isVisible ? "translate-y-0 opacity-100" : "-translate-y-24 opacity-0"
        }`}
      >
        <div className="flex items-center justify-between rounded-full border border-white/40 bg-white/70 p-2 shadow-[0_8px_32px_rgba(0,0,0,0.12)] backdrop-blur-2xl dark:border-zinc-700/30 dark:bg-zinc-900/60">
          
          {/* Logo & System ID */}
          <div className="flex items-center gap-3 pl-4">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-black dark:bg-white text-white dark:text-black font-black text-[10px] tracking-tighter">
              UM
            </div>
            <div className="hidden sm:block">
              <p className="text-[10px] font-bold uppercase tracking-widest leading-none">Command Center</p>
              <p className="font-mono text-[8px] text-zinc-500 uppercase">Secure Node: 12-B</p>
            </div>
          </div>

          {/* Navigation Items - Pill Style */}
          <div className="flex items-center gap-1">
            {['Overview', 'Ops', 'Intel', 'Fleet'].map((item) => (
              <a 
                key={item} 
                href="#" 
                className="px-5 py-2 rounded-full text-[11px] font-bold uppercase tracking-wider text-zinc-500 hover:text-black hover:bg-black/5 dark:hover:text-white dark:hover:bg-white/5 transition-all"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Profile & Quick Actions */}
          <div className="flex items-center gap-2 pr-1">
            <button className="hidden md:flex h-9 w-9 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
              <span className="text-lg">⊕</span>
            </button>
            <div className="flex items-center gap-3 rounded-full bg-black/5 dark:bg-white/5 pl-4 pr-1 py-1 border border-black/5 dark:border-white/5">
              <span className="hidden lg:block text-[10px] font-bold uppercase tracking-tight">Cdt. Henderson</span>
              <div className="h-7 w-7 rounded-full bg-gradient-to-tr from-zinc-400 to-zinc-200 dark:from-zinc-700 dark:to-zinc-500 shadow-inner" />
            </div>
          </div>
        </div>
      </nav>

      {/* Dashboard Content Container */}
      <main className="relative z-10 pt-32 pb-20 px-6 mx-auto max-w-7xl">
        
        {/* Header Hero Area */}
        <header className="mb-12">
          <h2 className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-blue-600 dark:text-blue-400 mb-2">
            System Dashboard // Deployment Status
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Welcome back, <span className="text-zinc-400 italic">Personnel.</span>
          </h1>
        </header>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Card */}
          <section className="lg:col-span-8 rounded-[2.5rem] border border-white/40 bg-white/60 p-10 backdrop-blur-xl dark:border-zinc-700/30 dark:bg-zinc-900/40 shadow-xl">
            <div className="flex justify-between items-start mb-10">
              <div>
                <h3 className="text-lg font-bold">Recruitment Progress</h3>
                <p className="text-sm text-zinc-500 font-medium">Stage 3: Advanced Tactical Evaluation</p>
              </div>
              <div className="h-12 w-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>
            </div>
            
            {/* Visual Progress Hud */}
            <div className="space-y-4">
              <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                <span>Verification</span>
                <span>88% Complete</span>
              </div>
              <div className="h-1.5 w-full bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                <div className="h-full w-[88%] bg-black dark:bg-white rounded-full" />
              </div>
            </div>
          </section>

          {/* Sidebar Card */}
          <section className="lg:col-span-4 rounded-[2.5rem] border border-white/40 bg-black p-10 shadow-2xl dark:bg-white text-white dark:text-black">
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60 mb-6">Quick Directives</h3>
            <ul className="space-y-6">
              {['Launch VR Sim', 'Review Dossier', 'Contact Command'].map((task) => (
                <li key={task} className="flex items-center justify-between group cursor-pointer">
                  <span className="text-sm font-bold tracking-tight">{task}</span>
                  <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>

      {/* Fixed HUD Corner (Bottom Right) */}
      <div className="fixed bottom-8 right-8 z-40 opacity-40 hover:opacity-100 transition-opacity">
        <div className="font-mono text-[10px] text-right uppercase tracking-tighter">
          <p>Local Time: 17:40:12</p>
          <p>Encrypted: AES-256</p>
          <p className="text-blue-500">Connection: Stable</p>
        </div>
      </div>
    </div>
  );
}