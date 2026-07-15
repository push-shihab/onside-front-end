"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { Button, Input } from "@heroui/react";
import { FaGoogle } from "react-icons/fa6";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { redirect, useRouter } from "next/navigation";

type LoginFormInputs = {
  email: string;
  password: string;
};

export default function LoginCard() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();
  const router = useRouter();
  const onSubmit = async (data: LoginFormInputs) => {
    const { data: res, error } = await authClient.signIn.email({
      email: data.email,
      password: data.password,
    });
    if (res?.token) {
      toast.success("Successfully logged in");
      router.refresh();
      redirect("/");
    }
    if (error) {
      toast.error(`${error.message}`);
    }
  };

  return (
    <div className="mx-auto w-full max-w-[440px] rounded-[14px] border border-[#1F2823] bg-[#141B17] p-10 shadow-[0_1px_0_rgba(255,255,255,.03)_inset,0_20px_60px_rgba(0,0,0,.5)]">
      <Link
        href="#"
        className="flex items-center justify-center gap-2.5 font-['Space_Grotesk'] text-[22px] font-bold tracking-wide text-[#E8ECE9] mb-6"
      >
        <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-[#3FEA7A] to-[#1fb862] text-sm font-bold text-[#062012]">
          O
        </span>
        ONSIDE
      </Link>

      <h1 className="font-['Space_Grotesk'] text-2xl font-bold text-center tracking-tight text-[#E8ECE9] mb-2">
        Welcome back
      </h1>
      <p className="text-sm text-[#8A948E] text-center mb-7">
        Sign in to your ONSIDE account to continue.
      </p>

      <div className="mb-5">
        <Button
          variant="bordered"
          className="h-11 w-full rounded-[10px] bg-[#111714] border-[#1F2823] hover:border-[#3FEA7A] text-sm font-medium text-[#E8ECE9]"
          startContent={<FaGoogle className="text-[#4285F4]" size={14} />}
        >
          Google
        </Button>
      </div>

      <div className="flex items-center gap-3 text-xs font-['IBM_Plex_Mono'] uppercase tracking-widest text-[#5C665F] my-5">
        <span className="flex-1 h-px bg-transparent bg-[linear-gradient(to_right,#2A352E_6px,transparent_6px)] bg-[length:12px_1px] bg-repeat-x" />
        <span>or continue with email</span>
        <span className="flex-1 h-px bg-transparent bg-[linear-gradient(to_right,#2A352E_6px,transparent_6px)] bg-[length:12px_1px] bg-repeat-x" />
      </div>

      {/* Form Submission */}
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-xs font-medium text-[#8A948E]">
            Email address
          </label>
          <Input
            type="email"
            placeholder="you@example.com"
            variant="bordered"
            isInvalid={!!errors.email}
            errorMessage={errors.email?.message}
            {...register("email", {
              required: "Email address is required",
              pattern: { value: /^\S+@\S+$/i, message: "Invalid email format" },
            })}
            className={{
              inputWrapper:
                "h-11 bg-[#0A0F0D] border-[#2A352E] hover:border-[#3FEA7A] focus-within:border-[#3FEA7A]! rounded-[10px] px-3.5",
            }}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs font-medium text-[#8A948E]">Password</label>
          <Input
            type="password"
            placeholder="••••••••"
            variant="bordered"
            isInvalid={!!errors.password}
            errorMessage={errors.password?.message}
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            })}
            className={{
              inputWrapper:
                "h-11 bg-[#0A0F0D] border-[#2A352E] hover:border-[#3FEA7A] focus-within:border-[#3FEA7A]! rounded-[10px] px-3.5",
            }}
          />
        </div>

        <Button
          type="submit"
          className="h-11 w-full rounded-[10px] bg-[#3FEA7A] hover:bg-[#5cf091] text-[#062012] font-semibold text-sm mt-2"
        >
          Sign in
        </Button>
      </form>

      <div className="text-center mt-6 text-sm text-[#8A948E]">
        New to ONSIDE?{" "}
        <Link
          href="/register"
          className="text-[#3FEA7A] font-medium hover:underline"
        >
          Create an account
        </Link>
      </div>
    </div>
  );
}
