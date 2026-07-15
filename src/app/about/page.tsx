"use client";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0A0F0D] text-[#E8ECE9] font-sans antialiased pb-20 selection:bg-[#3FEA7A]/30">
      {/* Tailwind Custom Keyframes Injection for Fade-Up entry */}
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
        .animate-fade-up {
          animation: fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animation-delay-100 {
          animation-delay: 100ms;
        }
        .animation-delay-200 {
          animation-delay: 200ms;
        }
      `}</style>

      <header className="relative pt-20 pb-16 overflow-hidden before:absolute before:inset-0 before:bg-[repeating-linear-gradient(135deg,rgba(63,234,122,0.03)_0_2px,transparent_2px_16px)] before:pointer-events-none">
        <div className="max-w-[1320px] mx-auto px-8 max-w-4xl opacity-0 animate-fade-up">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 border border-[#2A352E] rounded-full text-xs text-[#8A948E] font-['IBM_Plex_Mono'] uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3FEA7A] shadow-[0_0_10px_#3FEA7A]"></span>
            About ONSIDE
          </span>
          <h1 className="font-['Space_Grotesk'] font-semibold text-5xl md:text-6xl tracking-tight leading-[1.15] mt-5 mb-5">
            We&apos;re building the{" "}
            <span className="text-[#3FEA7A]">reference layer</span> for
            football.
          </h1>
          <p className="text-xl text-[#8A948E] leading-relaxed max-w-3xl">
            ONSIDE started in 2022 as a side project between three analysts
            frustrated by the same problem: football coverage was either too
            shallow or too paywalled. We set out to build the platform we wished
            existed, and it has grown into a hub used by scouts, journalists,
            and fans across 42 leagues.
          </p>
        </div>
      </header>

      <div className="h-[1px] bg-[repeating-linear-gradient(90deg,#3FEA7A_0_8px,transparent_8px_18px)] opacity-35"></div>

      <section className="py-20">
        <div className="max-w-[1320px] mx-auto px-8">
          <div className="mb-12 max-w-2xl opacity-0 animate-fade-up animation-delay-100">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 border border-[#2A352E] rounded-full text-xs text-[#8A948E] font-['IBM_Plex_Mono'] uppercase tracking-widest mb-3.5">
              By the numbers
            </span>
            <h2 className="font-['Space_Grotesk'] font-semibold text-4xl tracking-tight">
              A small team, a big dataset.
            </h2>
            <p className="text-[#8A948E] text-base mt-3.5 leading-relaxed">
              We are 14 people across London, Lisbon, and Lagos. We ship weekly,
              we publish daily, and we take accuracy seriously.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 opacity-0 animate-fade-up animation-delay-200">
            {[
              { num: "14,208", label: "Verified player profiles" },
              { num: "42", label: "Leagues covered" },
              { num: "48K", label: "Monthly readers" },
              { num: "14", label: "Team members" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="relative bg-[#141B17] border border-[#1F2823] rounded-[14px] p-8 text-center transition-all duration-300 hover:border-[#3FEA7A]/40 hover:-translate-y-1 group after:absolute after:bottom-0 after:left-1/5 after:right-1/5 after:h-[1px] after:bg-[repeating-linear-gradient(90deg,#3FEA7A_0_6px,transparent_6px_14px)] after:opacity-40"
              >
                <div className="font-['Space_Grotesk'] text-[52px] font-bold text-[#3FEA7A] line-none leading-none transition-transform duration-300 group-hover:scale-105">
                  {stat.num}
                </div>
                <div className="text-[#8A948E] text-sm mt-2.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-[1px] bg-[repeating-linear-gradient(90deg,#3FEA7A_0_8px,transparent_8px_18px)] opacity-35"></div>

      <section className="py-20">
        <div className="max-w-[1320px] mx-auto px-8">
          <div className="mb-12 max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 border border-[#2A352E] rounded-full text-xs text-[#8A948E] font-['IBM_Plex_Mono'] uppercase tracking-widest mb-3.5">
              Mission & vision
            </span>
            <h2 className="font-['Space_Grotesk'] font-semibold text-4xl tracking-tight">
              What we are here to do.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#141B17] border border-[#1F2823] rounded-[14px] p-9 transition-all duration-300 hover:border-[#1F2823]/80 hover:bg-[#18201b]">
              <div className="w-12 h-12 rounded-xl bg-[#3FEA7A]/10 text-[#3FEA7A] grid place-items-center mb-5 text-2xl font-bold transition-transform duration-300 hover:rotate-12">
                ◎
              </div>
              <h3 className="font-['Space_Grotesk'] font-semibold text-2xl mb-3">
                Our mission
              </h3>
              <p className="text-[#8A948E] text-[15px] leading-relaxed">
                To make football intelligence accessible, accurate, and
                genuinely useful. We believe fans, scouts, and analysts all
                deserve the same quality of data and writing, without the noise
                of clickbait or the friction of paywalls.
              </p>
            </div>

            <div className="bg-[#141B17] border border-[#1F2823] rounded-[14px] p-9 transition-all duration-300 hover:border-[#1F2823]/80 hover:bg-[#18201b]">
              <div className="w-12 h-12 rounded-xl bg-[#3FEA7A]/10 text-[#3FEA7A] grid place-items-center mb-5 text-2xl font-bold transition-transform duration-300 hover:rotate-12">
                ◈
              </div>
              <h3 className="font-['Space_Grotesk'] font-semibold text-2xl mb-3">
                Our vision
              </h3>
              <p className="text-[#8A948E] text-[15px] leading-relaxed">
                A world where every football decision, from the armchair to the
                boardroom, is informed by clear, verified, human-readable data.
                We want ONSIDE to be the first place anyone opens when they want
                to understand the game.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PITCH DIVIDER */}
      <div className="h-[1px] bg-[repeating-linear-gradient(90deg,#3FEA7A_0_8px,transparent_8px_18px)] opacity-35"></div>

      <section className="py-20">
        <div className="max-w-[1320px] mx-auto px-8">
          <div className="mb-12 max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 border border-[#2A352E] rounded-full text-xs text-[#8A948E] font-['IBM_Plex_Mono'] uppercase tracking-widest mb-3.5">
              Values
            </span>
            <h2 className="font-['Space_Grotesk'] font-semibold text-4xl tracking-tight">
              What we build by.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                num: "01 · Accuracy",
                title: "Data first, opinion second.",
                desc: "Every profile is cross-checked. Every rating is sourced. We would rather publish late than publish wrong.",
              },
              {
                num: "02 · Clarity",
                title: "Write for humans.",
                desc: "We avoid jargon, we avoid hype, and we avoid burying the point. If a 14-year-old cannot follow it, we rewrite it.",
              },
              {
                num: "03 · Independence",
                title: "No club money, no agent money.",
                desc: "Our revenue comes from readers and partners who do not have a stake in the outcomes we cover.",
              },
            ].map((value, idx) => (
              <div
                key={idx}
                className="bg-[#141B17] border border-[#1F2823] rounded-[14px] p-7 transition-all duration-300 hover:border-[#3FEA7A]/30"
              >
                <div className="font-['IBM_Plex_Mono'] text-[11px] text-[#3FEA7A] uppercase tracking-wider mb-3">
                  {value.num}
                </div>
                <h4 className="font-['Space_Grotesk'] font-semibold text-lg mb-2.5">
                  {value.title}
                </h4>
                <p className="text-[#8A948E] text-sm leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-[1px] bg-[repeating-linear-gradient(90deg,#3FEA7A_0_8px,transparent_8px_18px)] opacity-35"></div>

      <section className="py-20">
        <div className="max-w-[1320px] mx-auto px-8">
          <div className="relative overflow-hidden bg-[#141B17] border border-[#1F2823] rounded-[14px] py-14 px-8 text-center before:absolute before:inset-0 before:bg-[repeating-linear-gradient(135deg,rgba(63,234,122,0.04)_0_2px,transparent_2px_14px)] before:pointer-events-none">
            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 border border-[#2A352E] rounded-full text-xs text-[#8A948E] font-['IBM_Plex_Mono'] uppercase tracking-widest">
                Join us
              </span>
              <h2 className="font-['Space_Grotesk'] font-semibold text-3xl md:text-4xl tracking-tight mt-3.5 mb-3.5">
                Want to help build this?
              </h2>
              <p className="text-[#8A948E] text-base max-w-[540px] mx-auto mb-7 leading-relaxed">
                We are always looking for sharp writers, careful analysts, and
                thoughtful engineers. Remote-first, competitive pay, and
                unlimited access to the platform.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-[10px] font-semibold text-sm bg-[#3FEA7A] text-[#062012] transition-all duration-200 hover:brightness-95 hover:scale-[0.98] active:scale-[0.96]"
                >
                  See open roles →
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-[10px] font-semibold text-sm bg-transparent text-[#E8ECE9] border border-[#2A352E] transition-all duration-200 hover:bg-[#111714] hover:border-[#8A948E]/40"
                >
                  Get in touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
