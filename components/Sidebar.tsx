"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, FileText, User, Target, 
  Bell, LifeBuoy, Settings, LogOut, ChevronDown 
} from "lucide-react";

const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard, href: "/loggedin/dashboard" },
  { 
    name: "Applications", 
    icon: FileText,
    subItems: [
      { name: "New Application", href: "/loggedin/applications/new" },
      { name: "My Application", href: "/loggedin/applications/mine" },
      { name: "Application Status", href: "/loggedin/applications/status" },
      { name: "Application Guide", href: "/loggedin/applications/guide" },
    ]
  },
  { 
    name: "Profile", 
    icon: User,
    subItems: [
      { name: "View Profile", href: "/loggedin/profile" },
      { name: "Edit Profile", href: "/loggedin/profile/edit" },
      { name: "Documents Upload", href: "/loggedin/profile/documents" },
    ]
  },
  { 
    name: "Fit & Eligibility", 
    icon: Target,
    subItems: [
      { name: "Fit Quiz", href: "/loggedin/fit/quiz" },
      { name: "Quiz Result", href: "/loggedin/fit/results" },
      { name: "Eligibility Checker", href: "/loggedin/fit/eligibility" },
    ]
  },
  { name: "Notifications", icon: Bell, href: "/loggedin/notifications" },
  { 
    name: "Help & Support", 
    icon: LifeBuoy,
    subItems: [
      { name: "FAQ", href: "/loggedin/help/faq" },
      { name: "Contact", href: "/loggedin/help/contact" },
    ]
  },
  { name: "Settings", icon: Settings, href: "/loggedin/settings" },
];

export default function Sidebar() {
  const [openMenus, setOpenMenus] = useState<string[]>([]);
  const pathname = usePathname();

  const toggleMenu = (name: string) => {
    setOpenMenus(prev => 
      prev.includes(name) ? prev.filter(i => i !== name) : [...prev, name]
    );
  };

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 border-r border-white/5 bg-zinc-950 p-6 flex flex-col z-40">
      {/* Brand */}
      <div className="flex items-center gap-3 px-2 mb-10">
        <img src="/atmjoin-logo.png" alt="Logo" className="h-8 w-auto" />
        <span className="font-black text-white uppercase tracking-tighter text-lg">ATMJOIN</span>
      </div>

      {/* Nav Items */}
      <nav className="flex-1 space-y-1 overflow-y-auto custom-scrollbar">
        {menuItems.map((item) => (
          <div key={item.name} className="mb-1">
            {item.subItems ? (
              <div>
                <button 
                  onClick={() => toggleMenu(item.name)}
                  className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-zinc-400 hover:bg-white/5 hover:text-white transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <item.icon size={20} className="group-hover:text-emerald-400" />
                    <span className="text-xs font-bold uppercase tracking-widest">{item.name}</span>
                  </div>
                  <ChevronDown size={14} className={`transition-transform duration-300 ${openMenus.includes(item.name) ? "rotate-180" : ""}`} />
                </button>
                
                {openMenus.includes(item.name) && (
                  <div className="mt-1 ml-4 flex flex-col gap-1 border-l border-white/10 pl-4 animate-in slide-in-from-left-2 duration-200">
                    {item.subItems.map(sub => (
                      <Link 
                        key={sub.name} 
                        href={sub.href}
                        className={`py-2 text-[10px] font-bold uppercase tracking-widest transition-colors ${
                          pathname === sub.href ? "text-emerald-400" : "text-zinc-500 hover:text-zinc-200"
                        }`}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link 
                href={item.href}
                className={`flex items-center gap-3 rounded-xl px-3 py-2.5 transition-all group ${
                  pathname === item.href ? "bg-emerald-500/10 text-emerald-400" : "text-zinc-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                <item.icon size={20} />
                <span className="text-xs font-bold uppercase tracking-widest">{item.name}</span>
              </Link>
            )}
          </div>
        ))}
      </nav>

      {/* Logout */}
      <Link 
        href="/login"
        className="mt-auto flex items-center gap-3 rounded-xl px-3 py-2.5 text-zinc-500 hover:bg-red-500/10 hover:text-red-400 transition-all border border-transparent"
      >
        <LogOut size={20} />
        <span className="text-xs font-bold uppercase tracking-widest">Log Out</span>
      </Link>
    </aside>
  );
}