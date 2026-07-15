"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@heroui/react";
import { HiMenu, HiX } from "react-icons/hi";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { redirect, usePathname, useRouter } from "next/navigation";

export default function NavbarClient({ user }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const router = useRouter();
  const path = usePathname();

  const handleSignOut = async (): Promise<void> => {
    const { data, error } = await authClient.signOut();
    if (data?.success) {
      toast.success("Logged out successfully");
      router.refresh();
      redirect("/");
    }
    if (error) {
      toast.error(`${error.message}`);
    }
  };

  const menuItems = [
    { label: "Home", link: "/" },
    { label: "Players", link: "/players" },
    { label: "News", link: "/news" },
    { label: "Add Players", link: "/players/add" },
    { label: "Manage Players", link: "/players/manage" },
  ];

  const isLinkActive = (link: string) => {
    if (link === "/") {
      return path === "/";
    }
    return path === link || path.startsWith(`${link}/`);
  };

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-[#1F2823] bg-[#0A0F0D]/70 backdrop-blur-lg">
      <header className="mx-auto flex h-16 max-w-[1320px] items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="grid h-9 w-9 place-items-center rounded-md border border-[#2A352E] text-[#8A948E] md:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <HiX size={20} /> : <HiMenu size={20} />}
          </button>

          <Link
            href="/"
            className="flex items-center gap-2.5 font-['Space_Grotesk'] text-[22px] font-bold tracking-wide text-[#E8ECE9]"
          >
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-[#3FEA7A] to-[#1fb862] text-sm font-bold text-[#062012]">
              O
            </span>
            ONSIDE
          </Link>
        </div>

        <ul className="hidden items-center gap-1 md:flex">
          {menuItems.map((item, index) => {
            const isActive = isLinkActive(item.link);
            return (
              <li key={index}>
                <Link
                  href={item.link}
                  className={`rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-[#3FEA7A] bg-[#111714]"
                      : "text-[#8A948E] hover:bg-[#111714] hover:text-[#E8ECE9]"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div>
          {user ? (
            <div className="flex items-center gap-1.5">
              <Button
                onClick={handleSignOut}
                variant="bordered"
                size="sm"
                className="hidden py-2.5 px-4 rounded-[10px] border-[#2A352E] font-semibold text-[#E8ECE9] hover:border-[#3FEA7A] hover:text-[#ea3f3f] md:inline-flex"
              >
                Sign out
              </Button>
              <div className="w-11 h-11 overflow-hidden rounded-full">
                <Image
                  src={user?.image}
                  alt={user?.name}
                  width={200}
                  height={200}
                  className="w-11 h-11 object-cover"
                />
              </div>
            </div>
          ) : (
            <Link
              href="/signin"
              variant="bordered"
              size="sm"
              className="hidden py-2.5 px-4 rounded-[10px] border-[#2A352E] font-semibold text-[#E8ECE9] hover:border-[#3FEA7A] hover:text-[#3FEA7A] md:inline-flex"
            >
              Sign In
            </Link>
          )}
        </div>
      </header>

      {isMenuOpen && (
        <div className="border-t border-[#1F2823] bg-[#0A0F0D] px-6 py-4 md:hidden flex flex-col gap-2">
          {menuItems.map((item, index) => {
            const isActive = isLinkActive(item.link);
            return (
              <Link
                key={index}
                className={`w-full block rounded-lg px-3 py-2 text-sm font-medium ${
                  isActive ? "text-[#3FEA7A] bg-[#111714]" : "text-[#8A948E]"
                }`}
                href={item.link}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="h-px bg-[#1F2823] my-2" />
          <Button
            variant="bordered"
            className="w-full border-[#2A352E] text-[#E8ECE9] h-10 rounded-[10px]"
            onClick={handleSignOut}
          >
            Sign out
          </Button>
        </div>
      )}
    </nav>
  );
}
