"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { Button, Input } from "@heroui/react";
import { FaGoogle } from "react-icons/fa6";
import { HiCloudUpload, HiCheckCircle } from "react-icons/hi";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { redirect } from "next/navigation";

type RegisterFormInputs = {
  fullName: string;
  email: string;
  password: string;
  avatarUrl: string;
};

export default function RegisterCard() {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedUrl, setUploadedUrl] = useState("");
  const [uploadError, setUploadError] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormInputs>({
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    setUploadError("");
    setUploadedUrl("");

    const formData = new FormData();
    formData.append("image", file);

    try {
      const apiKey = process.env.NEXT_PUBLIC_IMGBB_API_KEY;
      const response = await fetch(
        `https://api.imgbb.com/1/upload?key=${apiKey}`,
        {
          method: "POST",
          body: formData,
        },
      );

      const result = await response.json();

      if (result.success) {
        const imageUrl = result.data.url;
        setUploadedUrl(imageUrl);
        setValue("avatarUrl", imageUrl, { shouldValidate: true });
      } else {
        setUploadError(result.error?.message || "Upload failed.");
      }
    } catch (err) {
      setUploadError("Network error occurred during image upload.");
    } finally {
      setIsUploading(false);
    }
  };

  const onSubmit = async (data: RegisterFormInputs): Promise<void> => {
    const { data: res, error } = await authClient.signUp.email({
      name: data.fullName,
      email: data.email,
      password: data.password,
      image: data.avatarUrl,
      callbackURL: "/",
    });
    if (res?.token) {
      toast.success("User registered successfully");
      redirect("/");
    }
    if (error) {
      toast.error(`${error?.message}`);
    }
  };

  return (
    <div className="mx-auto w-full max-w-[460px] rounded-[14px] border border-[#1F2823] bg-[#141B17] p-10 shadow-[0_1px_0_rgba(255,255,255,.03)_inset,0_20px_60px_rgba(0,0,0,.5)]">
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
        Create your account
      </h1>
      <p className="text-sm text-[#8A948E] text-center mb-7">
        Join 48,000 fans, scouts, and analysts on ONSIDE.
      </p>

      <div className="mb-5">
        <Button
          variant="bordered"
          className="rounded-[10px] h-11 w-full bg-[#111714] border-[#1F2823] hover:border-[#3FEA7A] text-sm font-medium text-[#E8ECE9]"
          startContent={<FaGoogle className="text-[#4285F4]" size={14} />}
        >
          Google
        </Button>
      </div>

      <div className="flex items-center gap-3 text-xs font-['IBM_Plex_Mono'] uppercase tracking-widest text-[#5C665F] my-5">
        <span className="flex-1 h-px bg-transparent bg-[linear-gradient(to_right,#2A352E_6px,transparent_6px)] bg-[length:12px_1px] bg-repeat-x" />
        <span>or sign up with email</span>
        <span className="flex-1 h-px bg-transparent bg-[linear-gradient(to_right,#2A352E_6px,transparent_6px)] bg-[length:12px_1px] bg-repeat-x" />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <Input
          type="text"
          label="Full name"
          labelPlacement="outside"
          placeholder="John Doe"
          variant="bordered"
          validationBehavior="aria"
          isInvalid={!!errors.fullName}
          errorMessage={errors.fullName?.message}
          {...register("fullName", { required: "Full name is required" })}
          classNames={{
            label: "text-xs font-medium text-[#8A948E] pb-1",
            inputWrapper:
              "h-11 bg-[#0A0F0D] border-[#2A352E] hover:border-[#3FEA7A] data-[focus=true]:border-[#3FEA7A]! rounded-[10px] px-3.5",
            errorMessage: "text-xs text-[#E86B6B] mt-1",
          }}
        />

        <Input
          type="email"
          label="Email address"
          labelPlacement="outside"
          placeholder="you@example.com"
          variant="bordered"
          validationBehavior="aria"
          isInvalid={!!errors.email}
          errorMessage={errors.email?.message}
          {...register("email", {
            required: "Email address is required",
            pattern: { value: /^\S+@\S+$/i, message: "Invalid email format" },
          })}
          classNames={{
            label: "text-xs font-medium text-[#8A948E] pb-1",
            inputWrapper:
              "h-11 bg-[#0A0F0D] border-[#2A352E] hover:border-[#3FEA7A] data-[focus=true]:border-[#3FEA7A]! rounded-[10px] px-3.5",
            errorMessage: "text-xs text-[#E86B6B] mt-1",
          }}
        />

        <div className="flex flex-col gap-1">
          <Input
            type="password"
            label="Password"
            labelPlacement="outside"
            placeholder="••••••••"
            variant="bordered"
            validationBehavior="aria"
            isInvalid={!!errors.password}
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters long",
              },
              validate: {
                hasUppercase: (v) =>
                  /[A-Z]/.test(v || "") ||
                  "Must contain at least 1 uppercase letter",
                hasLowercase: (v) =>
                  /[a-z]/.test(v || "") ||
                  "Must contain at least 1 lowercase letter",
                hasNumber: (v) =>
                  /[0-9]/.test(v || "") ||
                  "Must contain at least 1 numerical digit",
                hasSpecial: (v) =>
                  /[^A-Za-z0-9]/.test(v || "") ||
                  "Must contain at least 1 special character",
              },
            })}
            classNames={{
              label: "text-xs font-medium text-[#8A948E] pb-1",
              inputWrapper:
                "h-11 bg-[#0A0F0D] border-[#2A352E] hover:border-[#3FEA7A] data-[focus=true]:border-[#3FEA7A]! rounded-[10px] px-3.5",
            }}
          />
          {errors.password && (
            <p className="text-xs text-[#E86B6B] mt-0.5">
              {errors.password.message}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs font-medium text-[#8A948E]">
            Profile Picture
          </label>
          <div className="relative flex items-center justify-center w-full min-h-[80px] rounded-[10px] border border-dashed border-[#2A352E] bg-[#0A0F0D] hover:border-[#3FEA7A] transition-colors p-4">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
            />
            <div className="flex flex-col items-center gap-1.5 text-center pointer-events-none">
              {isUploading ? (
                <span className="text-xs text-[#3FEA7A] animate-pulse">
                  Uploading to ImgBB...
                </span>
              ) : uploadedUrl ? (
                <div className="flex items-center gap-1.5 text-xs text-[#3FEA7A] font-medium">
                  <HiCheckCircle size={16} /> Image Linked Successfully
                </div>
              ) : (
                <>
                  <HiCloudUpload size={20} className="text-[#8A948E]" />
                  <span className="text-xs text-[#8A948E]">
                    Click or drag to upload avatar
                  </span>
                </>
              )}
            </div>
          </div>
          <input
            type="hidden"
            {...register("avatarUrl", {
              required: "A profile image is required",
            })}
          />
          {(errors.avatarUrl || uploadError) && (
            <p className="text-xs text-[#E86B6B] mt-0.5">
              {errors.avatarUrl?.message || uploadError}
            </p>
          )}
        </div>

        <Button
          type="submit"
          isLoading={isUploading || isSubmitting}
          className="h-11 w-full rounded-[10px] bg-[#3FEA7A] hover:bg-[#5cf091] text-[#062012] font-semibold text-sm mt-2"
        >
          Create account
        </Button>
      </form>

      <div className="text-center mt-6 text-sm text-[#8A948E]">
        Already have an account?{" "}
        <Link href="#" className="text-[#3FEA7A] font-medium hover:underline">
          Sign in
        </Link>
      </div>
    </div>
  );
}
