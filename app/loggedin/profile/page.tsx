"use client";

import React from "react";
import Link from "next/link";
import { 
  User, 
  MapPin, 
  Calendar, 
  Mail, 
  Phone, 
  Award, 
  Activity, 
  Edit3,
  Shield,
  FileBadge
} from "lucide-react";

export default function ViewProfile() {
  // Mock User Data for the Prototype
  const userData = {
    fullName: "John Doe Bin Abdullah",
    rank: "CIVILIAN / RECRUIT CANDIDATE",
    serviceId: "ATM-880214-14-5521",
    email: "j.doe@example.com",
    phone: "+60 12-345 6789",
    location: "Kuala Lumpur, Malaysia",
    dob: "14 FEB 1999",
    bloodType: "B+",
    height: "178 cm",
    weight: "72 kg",
    bmi: "22.7 (Normal)",
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
      
      {/* PROFILE HEADER / HERO */}
      <div className="relative p-8 rounded-[2.5rem] bg-zinc-900 border border-white/5 overflow-hidden mb-8">
        {/* Decorative Background ID Badge watermark */}
        <div className="absolute right-[-2%] top-[-10%] opacity-[0.03] pointer-events-none">
          <Shield size={300} />
        </div>

        <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center md:items-start">
          {/* AVATAR BLOCK */}
          <div className="relative group">
            <div className="h-32 w-32 rounded-3xl bg-zinc-800 border-2 border-white/10 flex items-center justify-center overflow-hidden">
              <User size={64} className="text-zinc-700" />
              {/* If image exists: <img src="/profile.jpg" className="object-cover h-full w-full" /> */}
            </div>
            <div className="absolute -bottom-2 -right-2 h-8 w-8 rounded-lg bg-emerald-500 flex items-center justify-center text-black shadow-lg">
              <Shield size={16} />
            </div>
          </div>

          {/* IDENTITY SUMMARY */}
          <div className="flex-1 text-center md:text-left">
            <div className="flex flex-col md:flex-row md:items-center gap-3 mb-2">
              <h1 className="text-3xl font-black uppercase tracking-tight text-white">{userData.fullName}</h1>
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[9px] font-black text-emerald-400 uppercase tracking-widest self-center">
                Verified Profile
              </span>
            </div>
            <p className="text-sm font-bold text-zinc-500 uppercase tracking-[0.2em]">{userData.rank}</p>
            <p className="text-xs font-mono text-zinc-600 mt-1 uppercase tracking-widest">ID: {userData.serviceId}</p>
            
            <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4">
              <Link 
                href="/loggedin/profile/edit" 
                className="flex items-center gap-2 h-10 px-6 rounded-xl bg-white text-black text-[10px] font-black uppercase tracking-widest hover:bg-emerald-400 transition-all"
              >
                <Edit3 size={14} /> Update Record
              </Link>
              <button className="flex items-center gap-2 h-10 px-6 rounded-xl border border-white/10 text-zinc-400 text-[10px] font-black uppercase tracking-widest hover:bg-white/5 transition-all">
                Download Personnel File
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* LEFT COLUMN: CONTACT & BIO */}
        <div className="lg:col-span-2 space-y-6">
          <div className="p-8 rounded-[2.5rem] bg-zinc-900/50 border border-white/5">
            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-zinc-500 mb-8 flex items-center gap-2">
              <FileBadge size={16} className="text-emerald-500" /> Dossier Details
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">
              {[
                { label: "Email Address", val: userData.email, icon: Mail },
                { label: "Phone Number", val: userData.phone, icon: Phone },
                { label: "Date of Birth", val: userData.dob, icon: Calendar },
                { label: "Primary Residence", val: userData.location, icon: MapPin },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center text-zinc-500 shrink-0">
                    <item.icon size={18} />
                  </div>
                  <div>
                    <p className="text-[9px] font-black text-zinc-600 uppercase tracking-widest mb-1">{item.label}</p>
                    <p className="text-sm font-bold text-zinc-200">{item.val}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 rounded-[2.5rem] bg-zinc-900/50 border border-white/5">
            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-zinc-500 mb-6 flex items-center gap-2">
              <Award size={16} className="text-emerald-500" /> Educational Qualifications
            </h2>
            <div className="space-y-4">
               <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex justify-between items-center">
                  <div>
                    <p className="text-sm font-bold text-white uppercase">Sijil Pelajaran Malaysia (SPM)</p>
                    <p className="text-[10px] text-zinc-500 font-bold uppercase mt-0.5">Grade: 5A, 3B, 1C</p>
                  </div>
                  <span className="text-[9px] font-black px-2 py-1 bg-emerald-500/10 text-emerald-400 rounded border border-emerald-500/20 uppercase tracking-tighter">Verified</span>
               </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: PHYSICAL STATS */}
        <div className="space-y-6">
          <div className="p-8 rounded-[2.5rem] bg-zinc-900 border border-white/5">
            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-zinc-500 mb-8 flex items-center gap-2">
              <Activity size={16} className="text-emerald-500" /> Physical Profile
            </h2>
            
            <div className="space-y-6">
              {[
                { label: "Height", val: userData.height },
                { label: "Weight", val: userData.weight },
                { label: "Blood Group", val: userData.bloodType },
                { label: "BMI Index", val: userData.bmi },
              ].map((stat, i) => (
                <div key={i} className="flex justify-between items-end border-b border-white/5 pb-4">
                  <span className="text-[10px] font-black text-zinc-600 uppercase tracking-widest">{stat.label}</span>
                  <span className="text-sm font-bold text-white uppercase">{stat.val}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/10 text-center">
              <p className="text-[9px] font-bold text-emerald-500/70 uppercase tracking-widest leading-relaxed">
                Physical stats must be updated within 48 hours of any medical examination.
              </p>
            </div>
          </div>

          {/* SECURITY STATUS */}
          <div className="p-8 rounded-[2.5rem] bg-zinc-900/50 border border-white/5 text-center">
             <Shield size={32} className="mx-auto text-zinc-700 mb-4" />
             <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1">Account Security</p>
             <p className="text-xs font-bold text-zinc-300 uppercase">Two-Factor Auth: Enabled</p>
          </div>
        </div>

      </div>
    </div>
  );
}