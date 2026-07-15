"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0A0F0D] text-[#E8ECE9] font-sans antialiased flex flex-col justify-center items-center px-8 relative overflow-hidden selection:bg-[#3FEA7A]/30">
      <style jsx global>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes pulseSlow {
          0%,
          100% {
            opacity: 0.35;
          }
          50% {
            opacity: 0.15;
          }
        }
        .animate-fade-up {
          animation: fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-pulse-slow {
          animation: pulseSlow 4s ease-in-out infinite;
        }
        .animation-delay-100 {
          animation-delay: 100ms;
        }
        .animation-delay-200 {
          animation-delay: 200ms;
        }
      `}</style>

      <div className="absolute inset-0 bg-[repeating-linear-gradient(135deg,rgba(63,234,122,0.02)_0_2px,transparent_2px_16px)] pointer-events-none" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#3FEA7A]/5 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />

      <div className="relative z-10 max-w-md w-full text-center opacity-0 animate-fade-up">
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-[#2A352E] rounded-full text-xs text-[#8A948E] font-['IBM_Plex_Mono'] uppercase tracking-widest mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#3FEA7A] shadow-[0_0_10px_#3FEA7A] animate-ping" />
          VAR decision: Offside
        </span>

        <h1 className="font-['Space_Grotesk'] font-bold text-8xl tracking-tight text-[#3FEA7A] leading-none mb-4">
          404
        </h1>

        <h2 className="font-['Space_Grotesk'] font-semibold text-2xl md:text-3xl tracking-tight mb-4">
          Page ruled out of play.
        </h2>

        <p className="text-[#8A948E] text-base leading-relaxed mb-8 max-w-sm mx-auto opacity-0 animate-fade-up animation-delay-100">
          The link you followed might be broken, or the page has been
          transferred to another league. Let&apos;s get you back onside.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-3 opacity-0 animate-fade-up animation-delay-200">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-[10px] font-semibold text-sm bg-[#3FEA7A] text-[#062012] hover:brightness-95 hover:scale-[0.98] active:scale-[0.96] transition-all"
          >
            ← Return to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-[10px] font-semibold text-sm bg-transparent text-[#E8ECE9] border border-[#2A352E] hover:bg-[#111714] hover:border-[#8A948E]/40 transition-all cursor-pointer"
          >
            Go back
          </button>
        </div>
      </div>
    </div>
  );
}
