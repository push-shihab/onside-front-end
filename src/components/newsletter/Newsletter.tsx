"use client";
import { Button, Input, Card } from "@heroui/react";

export default function Newsletter() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
        <Card className="relative overflow-hidden border border-[#1F2823] bg-[#141B17] rounded-[14px] before:absolute before:inset-0 before:bg-[repeating-linear-gradient(135deg,rgba(63,234,122,.04)_0_2px,transparent_2px_14px)] before:pointer-events-none">
          <Card.Description className="p-8 md:p-14 grid gap-10 lg:grid-cols-2 items-center">
            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#2A352E] px-3 py-1 font-['IBM_Plex_Mono'] text-xs uppercase tracking-widest text-[#8A948E]">
                Newsletter
              </span>
              <h2 className="mt-3 font-['Space_Grotesk'] text-3xl font-bold tracking-tight text-[#E8ECE9] md:text-[34px]">
                The Friday whistle.
              </h2>
              <p className="mt-2.5 text-sm md:text-base text-[#8A948E]">
                One email, every Friday. The week&apos;s best match report, one
                transfer deep-dive, and three players to watch. No spam, ever.
              </p>
            </div>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="relative z-10 flex flex-col sm:flex-row gap-2.5 items-center w-full"
            >
              <Input
                type="email"
                defaultValue="shihab@onside.io"
                placeholder="you@club.com"
                variant="border"
                className="w-full text-[#E8ECE9]"
                classNames={{
                  inputWrapper:
                    "h-12 bg-[#0A0F0D] border-[#2A352E] hover:border-[#3FEA7A] focus-within:border-[#3FEA7A]! rounded-[10px] px-4",
                }}
              />
              <Button
                type="submit"
                className="w-full sm:w-auto h-12 rounded-[10px] bg-[#3FEA7A] text-[#062012] font-bold px-8 shrink-0"
              >
                Subscribe
              </Button>
            </form>
          </Card.Description>
        </Card>
      </div>
    </section>
  );
}
