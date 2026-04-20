"use client";

import React, { useState, useRef } from "react";
import { ShieldCheck, ArrowLeft, RefreshCcw } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function VerifyOTP() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  // Properly typed ref array to handle HTML elements or null
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const router = useRouter();

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return; // Only allow numbers
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    // Move to next input if value is entered
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 6);
    if (!/^\d+$/.test(pastedData)) return;

    const newOtp = [...otp];
    pastedData.split("").forEach((char, index) => {
      if (index < 6) {
        newOtp[index] = char;
        // Focus the next empty input or the last one
        const nextIndex = Math.min(index + 1, 5);
        inputRefs.current[nextIndex]?.focus();
      }
    });
    setOtp(newOtp);
  };

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    const finalOtp = otp.join("");
    if (finalOtp.length < 6) return;
    
    console.log("Verifying OTP:", finalOtp);
    // On success:
    router.push("/login?message=verified");
  };

  return (
    <div 
      className="relative flex min-h-screen flex-col items-center justify-center bg-zinc-900 font-sans text-zinc-900 dark:text-zinc-100 p-4 overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/military.png')" }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      <main className="relative z-10 flex w-full max-w-[420px] flex-col gap-8 rounded-[2.5rem] border border-white/20 bg-white/10 p-10 shadow-2xl backdrop-blur-2xl dark:border-white/10 dark:bg-black/60">
        
        {/* Header Section */}
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
            <ShieldCheck size={32} />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-white uppercase">
              Identity Verification
            </h1>
            <p className="mt-2 text-[10px] text-zinc-400 uppercase tracking-[0.2em] font-bold">
              An OTP has been sent to johndoe@gmail.com
            </p>
          </div>
        </div>

        {/* OTP Form */}
        <form onSubmit={handleVerify} className="flex flex-col gap-8">
          <div className="flex justify-between gap-2" onPaste={handlePaste}>
            {otp.map((digit, index) => (
              <input
                key={index}
                // FIXED: Wrapped the assignment in a function body to return void
                ref={(el) => {
                  inputRefs.current[index] = el;
                }}
                type="text"
                inputMode="numeric"
                autoComplete="one-time-code"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="h-14 w-12 rounded-xl border border-white/10 bg-white/5 text-center text-xl font-bold text-white outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all placeholder:text-zinc-700"
              />
            ))}
          </div>

          <button 
            type="submit"
            className="flex h-12 items-center justify-center rounded-xl bg-white text-xs font-black uppercase tracking-[0.2em] text-black shadow-xl transition-all hover:bg-emerald-50 hover:scale-[1.02] active:scale-[0.98]"
          >
            Authorize Access
          </button>
        </form>

        {/* Action Links */}
        <div className="flex flex-col items-center gap-4 border-t border-white/10 pt-6">
          <button 
            type="button"
            className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors"
          >
            <RefreshCcw size={14} />
            Resend Code (59s)
          </button>
          
          <Link href="/signup" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-500 hover:text-white transition-colors">
            <ArrowLeft size={14} />
            Back to Registration
          </Link>
        </div>
      </main>

      {/* Military Footer Branding */}
      <footer className="relative z-10 mt-8 opacity-40">
        <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-zinc-400 text-center block">
          ENCRYPTION LEVEL: AES-256 // VERIFICATION REQUIRED
        </span>
      </footer>
    </div>
  );
}