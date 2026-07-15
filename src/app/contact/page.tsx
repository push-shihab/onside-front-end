"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";

interface ContactFormData {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const [showToast, setShowToast] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 4000);

    reset({
      fullName: "",
      email: "",
      subject: "General enquiry",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-[#0A0F0D] text-[#E8ECE9] font-sans antialiased pb-20 selection:bg-[#3FEA7A]/30">
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
        @keyframes toastSlideIn {
          from {
            opacity: 0;
            transform: translateY(24px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-fade-up {
          animation: fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-toast {
          animation: toastSlideIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animation-delay-100 {
          animation-delay: 100ms;
        }
      `}</style>

      {showToast && (
        <div className="fixed bottom-6 right-6 z-50 animate-toast">
          <div className="bg-[#141B17] border border-[#3FEA7A] rounded-[10px] p-4 shadow-[0_20px_40px_rgba(0,0,0,0.5)] flex items-center gap-3.5 max-w-sm">
            <div className="w-6 h-6 rounded-full bg-[#3FEA7A]/10 text-[#3FEA7A] flex items-center justify-center text-xs font-bold">
              ✓
            </div>
            <div>
              <div className="font-['Space_Grotesk'] font-medium text-sm text-[#E8ECE9]">
                Message transmitted
              </div>
              <div className="text-xs text-[#8A948E] mt-0.5">
                We will get in touch soon!
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-[1320px] mx-auto px-8">
        <div className="pt-20 pb-10 max-w-2xl opacity-0 animate-fade-up">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 border border-[#2A352E] rounded-full text-xs text-[#8A948E] font-['IBM_Plex_Mono'] uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3FEA7A] shadow-[0_0_10px_#3FEA7A]"></span>
            Contact
          </span>
          <h1 className="font-['Space_Grotesk'] font-semibold text-5xl tracking-tight mt-4 mb-4">
            Let&apos;s talk football.
          </h1>
          <p className="text-[#8A948E] text-lg leading-relaxed">
            Whether you are a scout with a question, a journalist with a lead,
            or a fan with feedback, we read every message. Typical response time
            is under 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-8 opacity-0 animate-fade-up animation-delay-100">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-[#141B17] border border-[#1F2823] rounded-[14px] p-9 shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
          >
            <h3 className="font-['Space_Grotesk'] font-semibold text-2xl mb-1">
              Send us a message
            </h3>
            <p className="text-sm text-[#8A948E] mb-7">
              Fill out the form and we will get back to you at the email you
              provide.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4.5">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-medium text-[#8A948E]">
                  Full name <span className="text-[#3FEA7A]">*</span>
                </label>
                <input
                  type="text"
                  className={`w-full px-3.5 py-3 bg-[#0A0F0D] border ${errors.fullName ? "border-[#E86B6B]" : "border-[#2A352E]"} focus:border-[#3FEA7A] rounded-[10px] text-sm text-[#E8ECE9] outline-none transition-colors`}
                  {...register("fullName", { required: true })}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-medium text-[#8A948E]">
                  Email address <span className="text-[#3FEA7A]">*</span>
                </label>
                <input
                  type="email"
                  className={`w-full px-3.5 py-3 bg-[#0A0F0D] border ${errors.email ? "border-[#E86B6B]" : "border-[#2A352E]"} focus:border-[#3FEA7A] rounded-[10px] text-sm text-[#E8ECE9] outline-none transition-colors`}
                  {...register("email", { required: true })}
                />
              </div>
            </div>

            <div className="flex flex-col gap-2 mb-4.5">
              <label className="text-xs font-medium text-[#8A948E]">
                Subject <span className="text-[#3FEA7A]">*</span>
              </label>
              <select
                className={`w-full px-3.5 py-3 bg-[#0A0F0D] border ${errors.subject ? "border-[#E86B6B]" : "border-[#2A352E]"} focus:border-[#3FEA7A] rounded-[10px] text-sm text-[#E8ECE9] outline-none transition-colors`}
                {...register("subject", { required: true })}
              >
                <option value="General enquiry">General enquiry</option>
                <option value="Partnership or sponsorship">
                  Partnership or sponsorship
                </option>
                <option value="Press or media">Press or media</option>
                <option value="Player profile correction">
                  Player profile correction
                </option>
                <option value="Bug report or technical issue">
                  Bug report or technical issue
                </option>
                <option value="Careers">Careers</option>
              </select>
            </div>

            <div className="flex flex-col gap-2 mb-4.5">
              <label className="text-xs font-medium text-[#8A948E]">
                Message <span className="text-[#3FEA7A]">*</span>
              </label>
              <textarea
                placeholder="Tell us what's on your mind..."
                maxLength={2000}
                className={`w-full min-h-[140px] px-3.5 py-3 bg-[#0A0F0D] border ${errors.message ? "border-[#E86B6B]" : "border-[#2A352E]"} focus:border-[#3FEA7A] rounded-[10px] text-sm text-[#E8ECE9] outline-none transition-colors resize-y leading-relaxed`}
                {...register("message", { required: true })}
              />
              <div className="text-[11px] text-[#5C665F] font-['IBM_Plex_Mono'] mt-1.5">
                Max 2,000 characters. Do not include sensitive personal data.
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-5 mt-2 border-t border-dashed border-[#2A352E]">
              <div className="text-xs text-[#8A948E]">
                We typically reply within 24 hours.
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-[10px] font-semibold text-sm bg-[#3FEA7A] text-[#062012] hover:brightness-95 transition-all cursor-pointer"
              >
                Send message →
              </button>
            </div>
          </form>

          <aside className="flex flex-col gap-5">
            <div className="relative overflow-hidden bg-[#141B17] border border-[#1F2823] rounded-[14px] p-7 transition-all hover:border-[#3FEA7A] before:absolute before:top-0 before:left-0 before:w-[3px] before:h-full before:bg-[#3FEA7A]">
              <div className="w-11 h-11 rounded-[10px] bg-[#3FEA7A]/10 text-[#3FEA7A] grid place-items-center mb-4 text-xl">
                ✉
              </div>
              <h4 className="text-xs font-['IBM_Plex_Mono'] uppercase tracking-widest text-[#8A948E] mb-2.5">
                Email
              </h4>
              <div className="text-lg font-semibold mb-1">
                <a
                  href="mailto:hello@onside.io"
                  className="text-[#3FEA7A] hover:underline"
                >
                  hello@onside.io
                </a>
              </div>
              <div className="text-xs text-[#8A948E]">
                For press, use{" "}
                <a
                  href="mailto:press@onside.io"
                  className="text-[#3FEA7A] hover:underline"
                >
                  press@onside.io
                </a>
              </div>
            </div>

            <div className="relative overflow-hidden bg-[#141B17] border border-[#1F2823] rounded-[14px] p-7 transition-all hover:border-[#3FEA7A] before:absolute before:top-0 before:left-0 before:w-[3px] before:h-full before:bg-[#3FEA7A]">
              <div className="w-11 h-11 rounded-[10px] bg-[#3FEA7A]/10 text-[#3FEA7A] grid place-items-center mb-4 text-xl">
                ☎
              </div>
              <h4 className="text-xs font-['IBM_Plex_Mono'] uppercase tracking-widest text-[#8A948E] mb-2.5">
                Phone
              </h4>
              <div className="text-lg font-semibold mb-1">+44 20 7946 0018</div>
              <div className="text-xs text-[#8A948E]">
                Monday to Friday, 09:00 to 18:00 GMT
              </div>
            </div>

            <div className="relative overflow-hidden bg-[#141B17] border border-[#1F2823] rounded-[14px] p-7 transition-all hover:border-[#3FEA7A] before:absolute before:top-0 before:left-0 before:w-[3px] before:h-full before:bg-[#3FEA7A]">
              <div className="w-11 h-11 rounded-[10px] bg-[#3FEA7A]/10 text-[#3FEA7A] grid place-items-center mb-4 text-xl">
                ⌂
              </div>
              <h4 className="text-xs font-['IBM_Plex_Mono'] uppercase tracking-widest text-[#8A948E] mb-2.5">
                Office
              </h4>
              <div className="text-lg font-semibold mb-1">
                14 Harrowgate Lane
              </div>
              <div className="text-xs text-[#8A948E] leading-relaxed">
                London, EC2A 4NE, United Kingdom
                <br />
                Visits by appointment only.
              </div>
            </div>

            <div className="bg-[#141B17] border border-[#1F2823] rounded-[14px] p-7">
              <h4 className="text-xs font-['IBM_Plex_Mono'] uppercase tracking-widest text-[#8A948E] mb-4">
                Response hours
              </h4>
              <div className="flex justify-between py-2.5 border-b border-dashed border-[#2A352E] text-sm">
                <span className="text-[#8A948E]">Monday to Friday</span>
                <span className="font-['IBM_Plex_Mono'] font-medium text-[#3FEA7A]">
                  09:00 to 18:00
                </span>
              </div>
              <div className="flex justify-between py-2.5 border-b border-dashed border-[#2A352E] text-sm">
                <span className="text-[#8A948E]">Saturday</span>
                <span className="font-['IBM_Plex_Mono'] font-medium text-[#E8ECE9]">
                  10:00 to 14:00
                </span>
              </div>
              <div className="flex justify-between py-2.5 text-sm">
                <span className="text-[#8A948E]">Sunday</span>
                <span className="font-['IBM_Plex_Mono'] font-medium text-[#5C665F]">
                  Closed
                </span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
