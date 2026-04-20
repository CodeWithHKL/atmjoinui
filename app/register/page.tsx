import React from "react";

export default function Register() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-zinc-100 font-sans text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 p-4 overflow-hidden">
      
      {/* Dynamic Background Elements for Glassmorphism depth */}
      <div className="absolute top-[-10%] left-[-10%] h-[40%] w-[40%] rounded-full bg-blue-500/10 blur-[120px] dark:bg-blue-900/20" />
      <div className="absolute bottom-[-10%] right-[-10%] h-[40%] w-[40%] rounded-full bg-zinc-500/10 blur-[120px] dark:bg-zinc-100/10" />

      {/* Main Glass Container */}
      <main className="relative z-10 flex w-full max-w-[550px] flex-col gap-8 rounded-[2.5rem] border border-white/40 bg-white/60 p-10 shadow-2xl backdrop-blur-xl dark:border-zinc-700/30 dark:bg-zinc-900/40">
        
        {/* Header */}
        <div className="flex flex-col items-center gap-2 text-center">
          <div className="rounded-2xl bg-black px-4 py-1 dark:bg-white">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white dark:text-black">
              New Personnel
            </span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Enlistment Portal
          </h1>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Create your Unified Command profile to begin deployment.
          </p>
        </div>

        {/* Registration Form */}
        <form className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {/* Full Name */}
          <div className="flex flex-col gap-1.5">
            <label className="ml-1 text-[11px] font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
              Legal Full Name
            </label>
            <input 
              type="text" 
              placeholder="John S. Doe"
              className="h-12 w-full rounded-2xl border border-zinc-200/50 bg-white/50 px-4 text-sm outline-none focus:ring-2 focus:ring-black/5 dark:border-zinc-700/50 dark:bg-zinc-800/50 dark:focus:ring-white/5"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <label className="ml-1 text-[11px] font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
              Secure Email
            </label>
            <input 
              type="email" 
              placeholder="name@domain.gov"
              className="h-12 w-full rounded-2xl border border-zinc-200/50 bg-white/50 px-4 text-sm outline-none focus:ring-2 focus:ring-black/5 dark:border-zinc-700/50 dark:bg-zinc-800/50 dark:focus:ring-white/5"
            />
          </div>

          {/* Branch Selection */}
          <div className="flex flex-col gap-1.5 md:col-span-2">
            <label className="ml-1 text-[11px] font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
              Desired Branch of Service
            </label>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {['Army', 'Navy', 'Air Force', 'Space Force'].map((branch) => (
                <button 
                  key={branch} 
                  type="button"
                  className="rounded-xl border border-zinc-200/50 bg-white/30 py-2.5 text-[11px] font-bold hover:bg-black hover:text-white dark:border-zinc-700/50 dark:bg-zinc-800/30 dark:hover:bg-white dark:hover:text-black transition-all"
                >
                  {branch}
                </button>
              ))}
            </div>
          </div>

          {/* Passwords */}
          <div className="flex flex-col gap-1.5">
            <label className="ml-1 text-[11px] font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
              Access Code
            </label>
            <input 
              type="password" 
              className="h-12 w-full rounded-2xl border border-zinc-200/50 bg-white/50 px-4 text-sm outline-none focus:ring-2 focus:ring-black/5 dark:border-zinc-700/50 dark:bg-zinc-800/50 dark:focus:ring-white/5"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="ml-1 text-[11px] font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
              Confirm Code
            </label>
            <input 
              type="password" 
              className="h-12 w-full rounded-2xl border border-zinc-200/50 bg-white/50 px-4 text-sm outline-none focus:ring-2 focus:ring-black/5 dark:border-zinc-700/50 dark:bg-zinc-800/50 dark:focus:ring-white/5"
            />
          </div>

          {/* Submit */}
          <button className="group mt-4 flex h-14 items-center justify-center rounded-2xl bg-black text-sm font-bold uppercase tracking-[0.15em] text-white shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98] dark:bg-white dark:text-black md:col-span-2">
            Submit Application
          </button>
        </form>

        {/* Bottom Link */}
        <div className="text-center">
          <p className="text-xs text-zinc-500">
            Already have clearance?{" "}
            <a href="/" className="font-bold text-black underline-offset-4 hover:underline dark:text-white">
              Authorize Here
            </a>
          </p>
        </div>
      </main>

      {/* Footer Disclaimer */}
      <footer className="mt-8 max-w-[400px] text-center text-[9px] leading-loose uppercase tracking-[0.2em] text-zinc-400">
        All data provided is subject to federal background verification. 
        False statements are punishable under section 1001 of title 18.
      </footer>
    </div>
  );
}