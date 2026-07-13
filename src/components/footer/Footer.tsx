"use client";
import { Button } from "@heroui/react";
import Link from "next/link";
import {
  FaSquareXTwitter,
  FaInstagram,
  FaYoutube,
  FaRss,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="border-t border-[#1F2823]  bg-[#0A0F0D] pt-16 pb-8">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr] mb-10">
          <div>
            <Link
              href="#"
              className="flex items-center gap-2.5 font-['Space_Grotesk'] text-[22px] font-bold tracking-wide text-[#E8ECE9]"
            >
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-[#3FEA7A] to-[#1fb862] text-sm font-bold text-[#062012]">
                O
              </span>
              ONSIDE
            </Link>
            <p className="mt-3.5 mb-[18px] max-w-[320px] text-sm text-[#8A948E] leading-relaxed">
              The football intelligence hub. Player profiles, match reports, and
              transfer news from 42 leagues worldwide.
            </p>
            <div className="flex gap-2.5">
              {[
                { icon: <FaSquareXTwitter size={16} />, title: "Twitter" },
                { icon: <FaInstagram size={16} />, title: "Instagram" },
                { icon: <FaYoutube size={16} />, title: "YouTube" },
                { icon: <FaRss size={14} />, title: "RSS" },
              ].map((s, i) => (
                <Button
                  key={i}
                  isIconOnly
                  as={Link}
                  href="#"
                  title={s.title}
                  variant="border"
                  className="w-9 h-9 min-w-9 rounded-lg border-[#1F2823] bg-[#111714] text-[#8A948E] hover:border-[#3FEA7A] hover:text-[#3FEA7A]"
                >
                  {s.icon}
                </Button>
              ))}
            </div>
          </div>

          <div>
            <h5 className="font-['Space_Grotesk'] text-sm font-semibold text-[#E8ECE9] mb-4">
              Product
            </h5>
            <ul className="flex flex-col gap-2.5 text-sm text-[#8A948E]">
              <li>
                <Link
                  href="#"
                  className="hover:text-[#3FEA7A] transition-colors"
                >
                  Players
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#3FEA7A] transition-colors"
                >
                  News
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#3FEA7A] transition-colors"
                >
                  Leagues
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#3FEA7A] transition-colors"
                >
                  Shortlists
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-['Space_Grotesk'] text-sm font-semibold text-[#E8ECE9] mb-4">
              Company
            </h5>
            <ul className="flex flex-col gap-2.5 text-sm text-[#8A948E]">
              <li>
                <Link
                  href="#"
                  className="hover:text-[#3FEA7A] transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#3FEA7A] transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#3FEA7A] transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#3FEA7A] transition-colors"
                >
                  Press
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-['Space_Grotesk'] text-sm font-semibold text-[#E8ECE9] mb-4">
              Resources
            </h5>
            <ul className="flex flex-col gap-2.5 text-sm text-[#8A948E]">
              <li>
                <Link
                  href="#"
                  className="hover:text-[#3FEA7A] transition-colors"
                >
                  API docs
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#3FEA7A] transition-colors"
                >
                  Methodology
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#3FEA7A] transition-colors"
                >
                  Data partners
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#3FEA7A] transition-colors"
                >
                  Changelog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-['Space_Grotesk'] text-sm font-semibold text-[#E8ECE9] mb-4">
              Contact
            </h5>
            <ul className="flex flex-col gap-2.5 text-sm text-[#8A948E]">
              <li>
                <Link
                  href="mailto:hello@onside.io"
                  className="hover:text-[#3FEA7A] transition-colors"
                >
                  hello@onside.io
                </Link>
              </li>
              <li>
                <span className="cursor-default">+44 20 7946 0018</span>
              </li>
              <li>
                <span className="cursor-default">14 Harrowgate Ln, London</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center border-t border-[#1F2823] pt-6 gap-3 font-['IBM_Plex_Mono'] text-[13px] text-[#5C665F]">
          <span>© 2026 ONSIDE Labs Ltd.</span>
          <span>v3.4.1 · Built in London</span>
        </div>
      </div>
    </footer>
  );
}
