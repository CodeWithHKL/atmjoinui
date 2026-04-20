"use client";

import React, { useState } from "react";
import { 
  Shield, 
  Bell, 
  Monitor, 
  Smartphone, 
  Lock, 
  Globe, 
  Trash2, 
  ShieldCheck,
  ChevronRight
} from "lucide-react";

export default function SettingsPage() {
  const [notifications, setNotifications] = useState(true);
  const [twoFactor, setTwoFactor] = useState(true);

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
      
      {/* HEADER */}
      <div className="mb-12">
        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-500 block">
          System Config // Core Settings
        </span>
        <h1 className="mt-2 text-3xl font-black uppercase tracking-tight text-white">
          Account <span className="text-zinc-500">Preferences</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* LEFT: SETTINGS NAVIGATION (VISUAL ONLY) */}
        <div className="lg:col-span-4 space-y-2">
          {[
            { label: "Security & Access", icon: Shield, active: true },
            { label: "Notifications", icon: Bell, active: false },
            { label: "Device Management", icon: Smartphone, active: false },
            { label: "Privacy", icon: Lock, active: false },
            { label: "Language & Region", icon: Globe, active: false },
          ].map((item, i) => (
            <button 
              key={i}
              className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all ${
                item.active 
                ? "bg-white text-black" 
                : "text-zinc-500 hover:bg-white/5 hover:text-white"
              }`}
            >
              <div className="flex items-center gap-3">
                <item.icon size={18} />
                <span className="text-[10px] font-black uppercase tracking-widest">{item.label}</span>
              </div>
              <ChevronRight size={14} className={item.active ? "opacity-100" : "opacity-0"} />
            </button>
          ))}
        </div>

        {/* RIGHT: SETTINGS CONTENT */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* SECTION: SECURITY */}
          <div className="p-8 rounded-[2.5rem] bg-zinc-900 border border-white/5">
            <h3 className="text-sm font-bold uppercase tracking-tight text-white mb-6 flex items-center gap-3">
              <ShieldCheck className="text-emerald-500" size={20} /> Authentication Security
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between py-4 border-b border-white/5">
                <div>
                  <p className="text-xs font-bold text-white uppercase">Two-Factor Authentication</p>
                  <p className="text-[10px] text-zinc-500 mt-1 uppercase font-bold tracking-wider">Secure your account with SMS/Email verification</p>
                </div>
                <button 
                  onClick={() => setTwoFactor(!twoFactor)}
                  className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${twoFactor ? 'bg-emerald-500' : 'bg-zinc-700'}`}
                >
                  <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 ${twoFactor ? 'translate-x-6' : ''}`} />
                </button>
              </div>

              <div className="flex items-center justify-between py-4">
                <div>
                  <p className="text-xs font-bold text-white uppercase">Change Access Password</p>
                  <p className="text-[10px] text-zinc-500 mt-1 uppercase font-bold tracking-wider">Last updated 32 days ago</p>
                </div>
                <button className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-zinc-300 hover:text-white transition-all">
                  Update
                </button>
              </div>
            </div>
          </div>

          {/* SECTION: COMMUNICATIONS */}
          <div className="p-8 rounded-[2.5rem] bg-zinc-900/50 border border-white/5">
            <h3 className="text-sm font-bold uppercase tracking-tight text-white mb-6 flex items-center gap-3">
              <Bell className="text-blue-400" size={20} /> Signal Notifications
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-white uppercase">Push Transmissions</p>
                  <p className="text-[10px] text-zinc-500 mt-1 uppercase font-bold tracking-wider">Receive real-time application updates</p>
                </div>
                <button 
                  onClick={() => setNotifications(!notifications)}
                  className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${notifications ? 'bg-blue-500' : 'bg-zinc-700'}`}
                >
                  <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 ${notifications ? 'translate-x-6' : ''}`} />
                </button>
              </div>
            </div>
          </div>

          {/* SECTION: SYSTEM ACCESS */}
          <div className="p-8 rounded-[2.5rem] bg-zinc-900/30 border border-white/5">
            <h3 className="text-sm font-bold uppercase tracking-tight text-white mb-6 flex items-center gap-3">
              <Monitor className="text-zinc-500" size={20} /> Active Sessions
            </h3>
            <div className="space-y-4">
               <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-xl bg-zinc-800 flex items-center justify-center text-emerald-500">
                      <Monitor size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-white uppercase tracking-widest">Chrome on MacOS</p>
                      <p className="text-[9px] text-zinc-600 font-bold uppercase">Kuala Lumpur • Current Session</p>
                    </div>
                  </div>
                  <span className="text-[8px] font-black uppercase text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20">Active</span>
               </div>
            </div>
          </div>

          {/* DANGER ZONE */}
          <div className="pt-8 border-t border-white/5">
             <button className="flex items-center gap-3 text-red-500/50 hover:text-red-500 transition-all group">
                <div className="h-10 w-10 rounded-xl bg-red-500/5 border border-red-500/10 flex items-center justify-center group-hover:bg-red-500/20">
                  <Trash2 size={18} />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-black uppercase tracking-widest">Deactivate Personnel File</p>
                  <p className="text-[9px] font-bold uppercase opacity-60">This will permanently delete your data</p>
                </div>
             </button>
          </div>

        </div>
      </div>
    </div>
  );
}