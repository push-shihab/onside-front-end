"use client";

import { ClipLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="min-h-screen bg-[#0A0F0D] text-[#E8ECE9] font-sans antialiased flex flex-col justify-center items-center px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[repeating-linear-gradient(135deg,rgba(63,234,122,0.01)_0_2px,transparent_2px_16px)] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center max-w-xs w-full text-center">
        <div className="mb-6">
          <ClipLoader color="#3FEA7A" size={44} speedMultiplier={0.8} />
        </div>

        <span className="inline-flex items-center gap-2 px-3 py-1 border border-[#2A352E] rounded-full text-[10px] text-[#8A948E] font-['IBM_Plex_Mono'] uppercase tracking-widest mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#3FEA7A] shadow-[0_0_8px_#3FEA7A] animate-ping" />
          Retrieving
        </span>

        <h3 className="font-['Space_Grotesk'] font-medium text-sm text-[#8A948E] tracking-wide">
          Syncing match data...
        </h3>
      </div>
    </div>
  );
}
