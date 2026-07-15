"use client";

import { createPlayer } from "@/utils/createData";
import { redirect } from "next/navigation";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";

interface PlayerFormInput {
  name: string;
  age: number;
  position: string;
  clubName: string;
  country: string;
  height: number;
  weight: number;
  imageLink: string;
  currentSalaryGross: string;
  currentSalaryNet: string;
  overallRating: number;
  contractExpiryDate: string;
  strongFoot: string;
  description: string;
  totalAppearances: number;
  totalGoals: number;
  totalAssists: number;
  totalTrophyWin: number;
  currentMarketValue: string;
  attribute: {
    pace: number;
    shooting: number;
    passing: number;
    dribbling: number;
    defending: number;
    physical: number;
  };
  dateOfBirth: string;
}
interface AddPlayerFormProps {
  user: {
    id: string;
  };
}

export default function AddPlayerForm({ user }: AddPlayerFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<PlayerFormInput>({
    mode: "onTouched",
  });

  const onSubmit: SubmitHandler<PlayerFormInput> = async (data) => {
    const structuredPayload = {
      ...data,
      age: Number(data.age),
      height: Number(data.height),
      weight: Number(data.weight),
      overallRating: Number(data.overallRating),
      totalAppearances: Number(data.totalAppearances),
      totalGoals: Number(data.totalGoals),
      totalAssists: Number(data.totalAssists),
      totalTrophyWin: Number(data.totalTrophyWin),
      attribute: {
        pace: Number(data.attribute.pace),
        shooting: Number(data.attribute.shooting),
        passing: Number(data.attribute.passing),
        dribbling: Number(data.attribute.dribbling),
        defending: Number(data.attribute.defending),
        physical: Number(data.attribute.physical),
      },
      userId: user.id,
    };

    const res = await createPlayer(structuredPayload);
    if (res.insertedId) {
      toast.success("Successfully created a player");
      redirect("/players/manage");
    } else {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="pt-10 bg-[#0A0F0D] text-[#E8ECE9] font-sans antialiased">
      <style jsx global>{`
        :root {
          --bg: #0a0f0d;
          --bg-2: #111714;
          --card: #141b17;
          --line: #1f2823;
          --line-2: #2a352e;
          --text: #e8ece9;
          --muted: #8a948e;
          --dim: #5c665f;
          --green: #3fea7a;
          --green-soft: rgba(63, 234, 122, 0.12);
          --gold: #f5b942;
          --radius: 14px;
          --radius-sm: 10px;
          --radius-pill: 999px;
        }
      `}</style>

      <div className="max-w-[1320px] mx-auto px-8">
        <div className="py-12 flex justify-between items-end flex-wrap gap-4">
          <div>
            <h1 className="font-['Space_Grotesk'] font-semibold text-4xl text-[#E8ECE9]">
              Add a new player
            </h1>
            <p className="text-[#8A948E] mt-2 text-sm">
              Fill in the fields below. Every single field is mandatory.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-8 pb-20">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Basic Bio */}
            <div className="bg-[#141B17] border border-[#1F2823] rounded-[14px] p-8">
              <h3 className="font-['Space_Grotesk'] text-xl font-semibold mb-1">
                Basic Profile
              </h3>
              <p className="text-[#8A948E] text-xs mb-6">
                Essential identifiers and metadata.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-medium text-[#8A948E]">
                    Player Name <span className="text-[#3FEA7A]">*</span>
                  </label>
                  <input
                    type="text"
                    className={`w-full p-3.5 bg-[#0A0F0D] border rounded-[10px] text-sm text-[#E8ECE9] focus:outline-none ${errors.name ? "border-red-500" : "border-[#2A352E] focus:border-[#3FEA7A]"}`}
                    placeholder="e.g. Kylian Mbappé"
                    {...register("name", { required: "Name is required" })}
                  />
                  {errors.name && (
                    <span className="text-xs text-red-500 mt-1">
                      {errors.name.message}
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-medium text-[#8A948E]">
                    Position <span className="text-[#3FEA7A]">*</span>
                  </label>
                  <input
                    type="text"
                    className={`w-full p-3.5 bg-[#0A0F0D] border rounded-[10px] text-sm text-[#E8ECE9] focus:outline-none ${errors.position ? "border-red-500" : "border-[#2A352E] focus:border-[#3FEA7A]"}`}
                    placeholder="e.g. Striker"
                    {...register("position", {
                      required: "Position is required",
                    })}
                  />
                  {errors.position && (
                    <span className="text-xs text-red-500 mt-1">
                      {errors.position.message}
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-medium text-[#8A948E]">
                    Club Name <span className="text-[#3FEA7A]">*</span>
                  </label>
                  <input
                    type="text"
                    className={`w-full p-3.5 bg-[#0A0F0D] border rounded-[10px] text-sm text-[#E8ECE9] focus:outline-none ${errors.clubName ? "border-red-500" : "border-[#2A352E] focus:border-[#3FEA7A]"}`}
                    placeholder="e.g. Real Madrid"
                    {...register("clubName", { required: "Club is required" })}
                  />
                  {errors.clubName && (
                    <span className="text-xs text-red-500 mt-1">
                      {errors.clubName.message}
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-medium text-[#8A948E]">
                    Country <span className="text-[#3FEA7A]">*</span>
                  </label>
                  <input
                    type="text"
                    className={`w-full p-3.5 bg-[#0A0F0D] border rounded-[10px] text-sm text-[#E8ECE9] focus:outline-none ${errors.country ? "border-red-500" : "border-[#2A352E] focus:border-[#3FEA7A]"}`}
                    placeholder="e.g. France"
                    {...register("country", {
                      required: "Country is required",
                    })}
                  />
                  {errors.country && (
                    <span className="text-xs text-red-500 mt-1">
                      {errors.country.message}
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-medium text-[#8A948E]">
                    Age <span className="text-[#3FEA7A]">*</span>
                  </label>
                  <input
                    type="number"
                    className={`w-full p-3.5 bg-[#0A0F0D] border rounded-[10px] text-sm text-[#E8ECE9] focus:outline-none ${errors.age ? "border-red-500" : "border-[#2A352E] focus:border-[#3FEA7A]"}`}
                    placeholder="e.g. 27"
                    {...register("age", {
                      required: "Age is required",
                      min: { value: 15, message: "Minimum age is 15" },
                    })}
                  />
                  {errors.age && (
                    <span className="text-xs text-red-500 mt-1">
                      {errors.age.message}
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-medium text-[#8A948E]">
                    Date of Birth <span className="text-[#3FEA7A]">*</span>
                  </label>
                  <input
                    type="date"
                    className={`w-full p-3.5 bg-[#0A0F0D] border rounded-[10px] text-sm text-[#E8ECE9] focus:outline-none ${errors.dateOfBirth ? "border-red-500" : "border-[#2A352E] focus:border-[#3FEA7A]"}`}
                    {...register("dateOfBirth", {
                      required: "DOB is required",
                    })}
                  />
                  {errors.dateOfBirth && (
                    <span className="text-xs text-red-500 mt-1">
                      {errors.dateOfBirth.message}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Physical Attributes */}
            <div className="bg-[#141B17] border border-[#1F2823] rounded-[14px] p-8">
              <h3 className="font-['Space_Grotesk'] text-xl font-semibold mb-1">
                Physical Metrics
              </h3>
              <p className="text-[#8A948E] text-xs mb-6">
                Core physical capabilities.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-medium text-[#8A948E]">
                    Height (cm) <span className="text-[#3FEA7A]">*</span>
                  </label>
                  <input
                    type="number"
                    className={`w-full p-3.5 bg-[#0A0F0D] border rounded-[10px] text-sm text-[#E8ECE9] focus:outline-none ${errors.height ? "border-red-500" : "border-[#2A352E] focus:border-[#3FEA7A]"}`}
                    placeholder="e.g. 178"
                    {...register("height", { required: "Height is required" })}
                  />
                  {errors.height && (
                    <span className="text-xs text-red-500 mt-1">
                      {errors.height.message}
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-medium text-[#8A948E]">
                    Weight (kg) <span className="text-[#3FEA7A]">*</span>
                  </label>
                  <input
                    type="number"
                    className={`w-full p-3.5 bg-[#0A0F0D] border rounded-[10px] text-sm text-[#E8ECE9] focus:outline-none ${errors.weight ? "border-red-500" : "border-[#2A352E] focus:border-[#3FEA7A]"}`}
                    placeholder="e.g. 75"
                    {...register("weight", { required: "Weight is required" })}
                  />
                  {errors.weight && (
                    <span className="text-xs text-red-500 mt-1">
                      {errors.weight.message}
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-medium text-[#8A948E]">
                    Strong Foot <span className="text-[#3FEA7A]">*</span>
                  </label>
                  <select
                    className="w-full p-3.5 bg-[#0A0F0D] border border-[#2A352E] rounded-[10px] text-sm text-[#E8ECE9] focus:outline-none focus:border-[#3FEA7A]"
                    {...register("strongFoot", {
                      required: "Strong foot selection is required",
                    })}
                  >
                    <option value="Right">Right</option>
                    <option value="Left">Left</option>
                    <option value="Both">Both</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Financial Overview */}
            <div className="bg-[#141B17] border border-[#1F2823] rounded-[14px] p-8">
              <h3 className="font-['Space_Grotesk'] text-xl font-semibold mb-1">
                Contract & Finances
              </h3>
              <p className="text-[#8A948E] text-xs mb-6">
                Market value details and salary expectations.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-medium text-[#8A948E]">
                    Gross Salary (e.g. 31M){" "}
                    <span className="text-[#3FEA7A]">*</span>
                  </label>
                  <input
                    type="text"
                    className={`w-full p-3.5 bg-[#0A0F0D] border rounded-[10px] text-sm text-[#E8ECE9] focus:outline-none ${errors.currentSalaryGross ? "border-red-500" : "border-[#2A352E] focus:border-[#3FEA7A]"}`}
                    placeholder="e.g. 31M"
                    {...register("currentSalaryGross", {
                      required: "Gross salary is required",
                    })}
                  />
                  {errors.currentSalaryGross && (
                    <span className="text-xs text-red-500 mt-1">
                      {errors.currentSalaryGross.message}
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-medium text-[#8A948E]">
                    Net Salary (e.g. 18M){" "}
                    <span className="text-[#3FEA7A]">*</span>
                  </label>
                  <input
                    type="text"
                    className={`w-full p-3.5 bg-[#0A0F0D] border rounded-[10px] text-sm text-[#E8ECE9] focus:outline-none ${errors.currentSalaryNet ? "border-red-500" : "border-[#2A352E] focus:border-[#3FEA7A]"}`}
                    placeholder="e.g. 18M"
                    {...register("currentSalaryNet", {
                      required: "Net salary is required",
                    })}
                  />
                  {errors.currentSalaryNet && (
                    <span className="text-xs text-red-500 mt-1">
                      {errors.currentSalaryNet.message}
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-medium text-[#8A948E]">
                    Current Market Value (e.g. 110M){" "}
                    <span className="text-[#3FEA7A]">*</span>
                  </label>
                  <input
                    type="text"
                    className={`w-full p-3.5 bg-[#0A0F0D] border rounded-[10px] text-sm text-[#E8ECE9] focus:outline-none ${errors.currentMarketValue ? "border-red-500" : "border-[#2A352E] focus:border-[#3FEA7A]"}`}
                    placeholder="e.g. 110M"
                    {...register("currentMarketValue", {
                      required: "Market value is required",
                    })}
                  />
                  {errors.currentMarketValue && (
                    <span className="text-xs text-red-500 mt-1">
                      {errors.currentMarketValue.message}
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-medium text-[#8A948E]">
                    Contract Expiry Date{" "}
                    <span className="text-[#3FEA7A]">*</span>
                  </label>
                  <input
                    type="date"
                    className={`w-full p-3.5 bg-[#0A0F0D] border rounded-[10px] text-sm text-[#E8ECE9] focus:outline-none ${errors.contractExpiryDate ? "border-red-500" : "border-[#2A352E] focus:border-[#3FEA7A]"}`}
                    {...register("contractExpiryDate", {
                      required: "Expiry date is required",
                    })}
                  />
                  {errors.contractExpiryDate && (
                    <span className="text-xs text-red-500 mt-1">
                      {errors.contractExpiryDate.message}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Performance Ratings */}
            <div className="bg-[#141B17] border border-[#1F2823] rounded-[14px] p-8">
              <h3 className="font-['Space_Grotesk'] text-xl font-semibold mb-1">
                Career & Ratings
              </h3>
              <p className="text-[#8A948E] text-xs mb-6">
                Aggregated statistics and metrics.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-medium text-[#8A948E]">
                    Overall Rating <span className="text-[#3FEA7A]">*</span>
                  </label>
                  <input
                    type="number"
                    className={`w-full p-3.5 bg-[#0A0F0D] border rounded-[10px] text-sm text-[#E8ECE9] focus:outline-none ${errors.overallRating ? "border-red-500" : "border-[#2A352E] focus:border-[#3FEA7A]"}`}
                    placeholder="e.g. 91"
                    {...register("overallRating", {
                      required: "Rating is required",
                      min: 1,
                      max: 99,
                    })}
                  />
                  {errors.overallRating && (
                    <span className="text-xs text-red-500 mt-1">
                      {errors.overallRating.message}
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-medium text-[#8A948E]">
                    Total Appearances <span className="text-[#3FEA7A]">*</span>
                  </label>
                  <input
                    type="number"
                    className={`w-full p-3.5 bg-[#0A0F0D] border rounded-[10px] text-sm text-[#E8ECE9] focus:outline-none ${errors.totalAppearances ? "border-red-500" : "border-[#2A352E] focus:border-[#3FEA7A]"}`}
                    placeholder="e.g. 425"
                    {...register("totalAppearances", {
                      required: "Appearances are required",
                    })}
                  />
                  {errors.totalAppearances && (
                    <span className="text-xs text-red-500 mt-1">
                      {errors.totalAppearances.message}
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-medium text-[#8A948E]">
                    Total Goals <span className="text-[#3FEA7A]">*</span>
                  </label>
                  <input
                    type="number"
                    className={`w-full p-3.5 bg-[#0A0F0D] border rounded-[10px] text-sm text-[#E8ECE9] focus:outline-none ${errors.totalGoals ? "border-red-500" : "border-[#2A352E] focus:border-[#3FEA7A]"}`}
                    placeholder="e.g. 350"
                    {...register("totalGoals", {
                      required: "Goals are required",
                    })}
                  />
                  {errors.totalGoals && (
                    <span className="text-xs text-red-500 mt-1">
                      {errors.totalGoals.message}
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-medium text-[#8A948E]">
                    Total Assists <span className="text-[#3FEA7A]">*</span>
                  </label>
                  <input
                    type="number"
                    className={`w-full p-3.5 bg-[#0A0F0D] border rounded-[10px] text-sm text-[#E8ECE9] focus:outline-none ${errors.totalAssists ? "border-red-500" : "border-[#2A352E] focus:border-[#3FEA7A]"}`}
                    placeholder="e.g. 130"
                    {...register("totalAssists", {
                      required: "Assists are required",
                    })}
                  />
                  {errors.totalAssists && (
                    <span className="text-xs text-red-500 mt-1">
                      {errors.totalAssists.message}
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="text-xs font-medium text-[#8A948E]">
                    Total Trophies Won <span className="text-[#3FEA7A]">*</span>
                  </label>
                  <input
                    type="number"
                    className={`w-full p-3.5 bg-[#0A0F0D] border rounded-[10px] text-sm text-[#E8ECE9] focus:outline-none ${errors.totalTrophyWin ? "border-red-500" : "border-[#2A352E] focus:border-[#3FEA7A]"}`}
                    placeholder="e.g. 23"
                    {...register("totalTrophyWin", {
                      required: "Trophy count is required",
                    })}
                  />
                  {errors.totalTrophyWin && (
                    <span className="text-xs text-red-500 mt-1">
                      {errors.totalTrophyWin.message}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Specific Skill Attributes */}
            <div className="bg-[#141B17] border border-[#1F2823] rounded-[14px] p-8">
              <h3 className="font-['Space_Grotesk'] text-xl font-semibold mb-1">
                Ability Attributes
              </h3>
              <p className="text-[#8A948E] text-xs mb-6">
                Assign capability values (1 to 99).
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-medium text-[#8A948E]">
                    Pace <span className="text-[#3FEA7A]">*</span>
                  </label>
                  <input
                    type="number"
                    className={`w-full p-3.5 bg-[#0A0F0D] border rounded-[10px] text-sm text-[#E8ECE9] focus:outline-none ${errors.attribute?.pace ? "border-red-500" : "border-[#2A352E] focus:border-[#3FEA7A]"}`}
                    {...register("attribute.pace", {
                      required: true,
                      min: 1,
                      max: 99,
                    })}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-medium text-[#8A948E]">
                    Shooting <span className="text-[#3FEA7A]">*</span>
                  </label>
                  <input
                    type="number"
                    className={`w-full p-3.5 bg-[#0A0F0D] border rounded-[10px] text-sm text-[#E8ECE9] focus:outline-none ${errors.attribute?.shooting ? "border-red-500" : "border-[#2A352E] focus:border-[#3FEA7A]"}`}
                    {...register("attribute.shooting", {
                      required: true,
                      min: 1,
                      max: 99,
                    })}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-medium text-[#8A948E]">
                    Passing <span className="text-[#3FEA7A]">*</span>
                  </label>
                  <input
                    type="number"
                    className={`w-full p-3.5 bg-[#0A0F0D] border rounded-[10px] text-sm text-[#E8ECE9] focus:outline-none ${errors.attribute?.passing ? "border-red-500" : "border-[#2A352E] focus:border-[#3FEA7A]"}`}
                    {...register("attribute.passing", {
                      required: true,
                      min: 1,
                      max: 99,
                    })}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-medium text-[#8A948E]">
                    Dribbling <span className="text-[#3FEA7A]">*</span>
                  </label>
                  <input
                    type="number"
                    className={`w-full p-3.5 bg-[#0A0F0D] border rounded-[10px] text-sm text-[#E8ECE9] focus:outline-none ${errors.attribute?.dribbling ? "border-red-500" : "border-[#2A352E] focus:border-[#3FEA7A]"}`}
                    {...register("attribute.dribbling", {
                      required: true,
                      min: 1,
                      max: 99,
                    })}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-medium text-[#8A948E]">
                    Defending <span className="text-[#3FEA7A]">*</span>
                  </label>
                  <input
                    type="number"
                    className={`w-full p-3.5 bg-[#0A0F0D] border rounded-[10px] text-sm text-[#E8ECE9] focus:outline-none ${errors.attribute?.defending ? "border-red-500" : "border-[#2A352E] focus:border-[#3FEA7A]"}`}
                    {...register("attribute.defending", {
                      required: true,
                      min: 1,
                      max: 99,
                    })}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-medium text-[#8A948E]">
                    Physical <span className="text-[#3FEA7A]">*</span>
                  </label>
                  <input
                    type="number"
                    className={`w-full p-3.5 bg-[#0A0F0D] border rounded-[10px] text-sm text-[#E8ECE9] focus:outline-none ${errors.attribute?.physical ? "border-red-500" : "border-[#2A352E] focus:border-[#3FEA7A]"}`}
                    {...register("attribute.physical", {
                      required: true,
                      min: 1,
                      max: 99,
                    })}
                  />
                </div>
              </div>
            </div>

            {/* Bio Description & Images */}
            <div className="bg-[#141B17] border border-[#1F2823] rounded-[14px] p-8">
              <h3 className="font-['Space_Grotesk'] text-xl font-semibold mb-1">
                Media & Profile Bio
              </h3>
              <p className="text-[#8A948E] text-xs mb-6">
                Visual assets and descriptive copy.
              </p>

              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-medium text-[#8A948E]">
                    Profile Image URL <span className="text-[#3FEA7A]">*</span>
                  </label>
                  <input
                    type="url"
                    className={`w-full p-3.5 bg-[#0A0F0D] border rounded-[10px] text-sm text-[#E8ECE9] focus:outline-none ${errors.imageLink ? "border-red-500" : "border-[#2A352E] focus:border-[#3FEA7A]"}`}
                    placeholder="https://..."
                    {...register("imageLink", {
                      required: "A profile image URL link is required",
                    })}
                  />
                  {errors.imageLink && (
                    <span className="text-xs text-red-500 mt-1">
                      {errors.imageLink.message}
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-medium text-[#8A948E]">
                    Description <span className="text-[#3FEA7A]">*</span>
                  </label>
                  <textarea
                    className={`w-full p-3.5 bg-[#0A0F0D] border rounded-[10px] text-sm text-[#E8ECE9] min-h-[120px] resize-y focus:outline-none ${errors.description ? "border-red-500" : "border-[#2A352E] focus:border-[#3FEA7A]"}`}
                    placeholder="Write details about the player..."
                    {...register("description", {
                      required: "A short bio description is required",
                    })}
                  />
                  {errors.description && (
                    <span className="text-xs text-red-500 mt-1">
                      {errors.description.message}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Actions Block */}
            <div className="bg-[#141B17] border border-[#1F2823] rounded-[14px] p-6">
              <div className="w-full">
                <button
                  type="submit"
                  className="px-5 py-3 w-full cursor-pointer bg-[#3FEA7A] text-[#062012] rounded-[10px] font-semibold text-sm hover:brightness-95"
                >
                  Submit for review →
                </button>
              </div>
            </div>
          </form>

          {/* Sticky Sidebar Panel */}
          <aside className="self-start lg:sticky lg:top-24">
            <div className="bg-[#141B17] border border-[#1F2823] rounded-[14px] p-6 mb-5">
              <h4 className="font-['IBM_Plex_Mono'] text-xs font-semibold uppercase tracking-widest text-[#8A948E] mb-3.5">
                Form Submission Info
              </h4>
              <div className="flex justify-between py-2.5 border-b border-dashed border-[#2A352E] text-xs">
                <span className="text-[#8A948E]">Review Process</span>
                <span className="font-['IBM_Plex_Mono'] font-semibold text-[#F5B942]">
                  24 Hours
                </span>
              </div>
              <div className="flex justify-between py-2.5 border-b border-dashed border-[#2A352E] text-xs">
                <span className="text-[#8A948E]">Form Validation</span>
                <span
                  className={`font-['IBM_Plex_Mono'] font-semibold ${isValid ? "text-[#3FEA7A]" : "text-amber-500"}`}
                >
                  {isValid ? "Ready" : "Incomplete"}
                </span>
              </div>
            </div>

            <div className="bg-[#141B17] border border-[#1F2823] rounded-[14px] p-6">
              <h4 className="font-['IBM_Plex_Mono'] text-xs font-semibold uppercase tracking-widest text-[#8A948E] mb-3.5">
                Review Guidelines
              </h4>
              <ul className="text-xs text-[#8A948E] leading-relaxed space-y-2.5 list-disc list-inside">
                <li>Double check stats values to ensure data fidelity.</li>
                <li>Verify market and contract metrics are realistic.</li>
                <li>Make sure to open console before clicking submit!</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
