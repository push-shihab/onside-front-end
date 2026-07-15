"use client";

import { editPlayer } from "@/utils/updateData";
import { redirect } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import {
  LuShield,
  LuCalendar,
  LuDollarSign,
  LuTrendingUp,
  LuUser,
  LuAward,
  LuFlame,
  LuArrowLeft,
} from "react-icons/lu";

interface PlayerAttributes {
  pace: number;
  shooting: number;
  passing: number;
  dribbling: number;
  defending: number;
  physical: number;
}

interface PlayerFormData {
  clubName: string;
  age: number;
  height: number;
  weight: number;
  currentSalaryGross: string;
  currentSalaryNet: string;
  currentMarketValue: string;
  contractExpiryDate: string;
  overallRating: number;
  totalAppearances: number;
  totalGoals: number;
  totalAssists: number;
  totalTrophyWin: number;
  attribute: PlayerAttributes;
}

interface Player extends PlayerFormData {
  _id: string;
}

interface PlayerEditFormProps {
  player: Player;
}
export default function PlayerEditForm({ player }: PlayerEditFormProps) {
  const initialPlayerData: PlayerFormData = {
    clubName: player.clubName,
    age: player.age,
    height: player.height,
    weight: player.weight,
    currentSalaryGross: player.currentSalaryGross,
    currentSalaryNet: player.currentSalaryNet,
    currentMarketValue: player.currentMarketValue,
    contractExpiryDate: player.contractExpiryDate,
    overallRating: player.overallRating,
    totalAppearances: player.totalAppearances,
    totalGoals: player.totalGoals,
    totalAssists: player.totalAssists,
    totalTrophyWin: player.totalTrophyWin,
    attribute: {
      pace: player.attribute.pace,
      shooting: player.attribute.shooting,
      passing: player.attribute.passing,
      dribbling: player.attribute.dribbling,
      defending: player.attribute.defending,
      physical: player.attribute.physical,
    },
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PlayerFormData>({
    defaultValues: initialPlayerData,
  });

  const onSubmit = async (data: PlayerFormData) => {
    // Ensuring numbers remain typed as float/int
    const formattedData = {
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
      playerId: player._id,
    };

    const res = await editPlayer(formattedData);
    if (res.modifiedCount) {
      toast.success("Data changes successfully");
      redirect("/players/manage");
    } else {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0F0D] text-[#E8ECE9] font-sans antialiased pb-20">
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
          --red: #e86b6b;
          --radius: 14px;
          --radius-sm: 10px;
          --radius-pill: 999px;
        }
      `}</style>

      <div className="max-w-[900px] mx-auto px-6 pt-10">
        {/* Navigation */}
        <button
          type="button"
          onClick={() => window.history.back()}
          className="inline-flex items-center gap-2 text-xs font-['IBM_Plex_Mono'] text-[#8A948E] hover:text-[#3FEA7A] transition-colors mb-8 cursor-pointer"
        >
          <LuArrowLeft size={14} /> Back to roster
        </button>

        {/* Page Header Area */}
        <div className="mb-10 flex items-center gap-5">
          <div className="w-16 h-16 rounded-[14px] grid place-items-center font-['Space_Grotesk'] font-bold text-xl text-[#062012] shrink-0 bg-gradient-to-br from-[#3FEA7A] to-[#1fb862]">
            {initialPlayerData.overallRating}
          </div>
          <div>
            <div className="font-['IBM_Plex_Mono'] text-xs text-[#5C665F] uppercase tracking-widest mb-1">
              Configuration /{" "}
              <b className="text-[#3FEA7A]">{initialPlayerData.clubName}</b>
            </div>
            <h1 className="font-['Space_Grotesk'] font-semibold text-3xl text-[#E8ECE9]">
              Edit Player Properties
            </h1>
          </div>
        </div>

        {/* React Hook Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          {/* SECTION 1: CLUB & FINANCIALS */}
          <div className="bg-[#141B17] border border-[#1F2823] rounded-[14px] p-8 space-y-6">
            <h3 className="font-['Space_Grotesk'] font-semibold text-lg text-[#E8ECE9] border-b border-[#1F2823] pb-3 flex items-center gap-2">
              <LuShield className="text-[#3FEA7A]" size={18} /> Club & Financial
              Details
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Club Name */}
              <div className="space-y-2">
                <label className="block text-xs font-['IBM_Plex_Mono'] text-[#8A948E] uppercase tracking-wider font-semibold">
                  Club Name
                </label>
                <div
                  className={`flex items-center gap-2.5 bg-[#111714] border ${errors.clubName ? "border-[#E86B6B]" : "border-[#1F2823]"} focus-within:border-[#3FEA7A] rounded-[10px] px-4 h-[48px] transition-colors`}
                >
                  <LuShield className="text-[#5C665F]" size={16} />
                  <input
                    type="text"
                    className="flex-1 bg-transparent border-none outline-none text-sm text-[#E8ECE9]"
                    {...register("clubName", { required: "Required" })}
                  />
                </div>
              </div>

              {/* Contract Expiry */}
              <div className="space-y-2">
                <label className="block text-xs font-['IBM_Plex_Mono'] text-[#8A948E] uppercase tracking-wider font-semibold">
                  Contract Expiry
                </label>
                <div
                  className={`flex items-center gap-2.5 bg-[#111714] border ${errors.contractExpiryDate ? "border-[#E86B6B]" : "border-[#1F2823]"} focus-within:border-[#3FEA7A] rounded-[10px] px-4 h-[48px] transition-colors`}
                >
                  <LuCalendar className="text-[#5C665F]" size={16} />
                  <input
                    type="date"
                    className="flex-1 bg-transparent border-none outline-none text-sm text-[#E8ECE9] scheme-dark"
                    {...register("contractExpiryDate", {
                      required: "Required",
                    })}
                  />
                </div>
              </div>

              {/* Gross Salary */}
              <div className="space-y-2">
                <label className="block text-xs font-['IBM_Plex_Mono'] text-[#8A948E] uppercase tracking-wider font-semibold">
                  Gross Salary
                </label>
                <div
                  className={`flex items-center gap-2.5 bg-[#111714] border ${errors.currentSalaryGross ? "border-[#E86B6B]" : "border-[#1F2823]"} focus-within:border-[#3FEA7A] rounded-[10px] px-4 h-[48px] transition-colors`}
                >
                  <LuDollarSign className="text-[#5C665F]" size={16} />
                  <input
                    type="text"
                    className="flex-1 bg-transparent border-none outline-none text-sm text-[#E8ECE9]"
                    {...register("currentSalaryGross", {
                      required: "Required",
                    })}
                  />
                </div>
              </div>

              {/* Net Salary */}
              <div className="space-y-2">
                <label className="block text-xs font-['IBM_Plex_Mono'] text-[#8A948E] uppercase tracking-wider font-semibold">
                  Net Salary
                </label>
                <div
                  className={`flex items-center gap-2.5 bg-[#111714] border ${errors.currentSalaryNet ? "border-[#E86B6B]" : "border-[#1F2823]"} focus-within:border-[#3FEA7A] rounded-[10px] px-4 h-[48px] transition-colors`}
                >
                  <LuDollarSign className="text-[#5C665F]" size={16} />
                  <input
                    type="text"
                    className="flex-1 bg-transparent border-none outline-none text-sm text-[#E8ECE9]"
                    {...register("currentSalaryNet", { required: "Required" })}
                  />
                </div>
              </div>

              {/* Market Value */}
              <div className="space-y-2 md:col-span-2">
                <label className="block text-xs font-['IBM_Plex_Mono'] text-[#8A948E] uppercase tracking-wider font-semibold">
                  Current Market Value
                </label>
                <div
                  className={`flex items-center gap-2.5 bg-[#111714] border ${errors.currentMarketValue ? "border-[#E86B6B]" : "border-[#1F2823]"} focus-within:border-[#3FEA7A] rounded-[10px] px-4 h-[48px] transition-colors`}
                >
                  <LuTrendingUp className="text-[#5C665F]" size={16} />
                  <input
                    type="text"
                    className="flex-1 bg-transparent border-none outline-none text-sm text-[#E8ECE9]"
                    {...register("currentMarketValue", {
                      required: "Required",
                    })}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 2: PHYSICALS & BIO */}
          <div className="bg-[#141B17] border border-[#1F2823] rounded-[14px] p-8 space-y-6">
            <h3 className="font-['Space_Grotesk'] font-semibold text-lg text-[#E8ECE9] border-b border-[#1F2823] pb-3 flex items-center gap-2">
              <LuUser className="text-[#3FEA7A]" size={18} /> Physicals &
              Demographics
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Age */}
              <div className="space-y-2">
                <label className="block text-xs font-['IBM_Plex_Mono'] text-[#8A948E] uppercase tracking-wider font-semibold">
                  Age
                </label>
                <div className="flex items-center bg-[#111714] border border-[#1F2823] focus-within:border-[#3FEA7A] rounded-[10px] px-4 h-[48px] transition-colors">
                  <input
                    type="number"
                    className="w-full bg-transparent border-none outline-none text-sm text-[#E8ECE9]"
                    {...register("age", { required: true, min: 15, max: 50 })}
                  />
                </div>
              </div>

              {/* Height */}
              <div className="space-y-2">
                <label className="block text-xs font-['IBM_Plex_Mono'] text-[#8A948E] uppercase tracking-wider font-semibold">
                  Height (cm)
                </label>
                <div className="flex items-center bg-[#111714] border border-[#1F2823] focus-within:border-[#3FEA7A] rounded-[10px] px-4 h-[48px] transition-colors">
                  <input
                    type="number"
                    className="w-full bg-transparent border-none outline-none text-sm text-[#E8ECE9]"
                    {...register("height", { required: true })}
                  />
                </div>
              </div>

              {/* Weight */}
              <div className="space-y-2">
                <label className="block text-xs font-['IBM_Plex_Mono'] text-[#8A948E] uppercase tracking-wider font-semibold">
                  Weight (kg)
                </label>
                <div className="flex items-center bg-[#111714] border border-[#1F2823] focus-within:border-[#3FEA7A] rounded-[10px] px-4 h-[48px] transition-colors">
                  <input
                    type="number"
                    className="w-full bg-transparent border-none outline-none text-sm text-[#E8ECE9]"
                    {...register("weight", { required: true })}
                  />
                </div>
              </div>

              {/* Rating */}
              <div className="space-y-2">
                <label className="block text-xs font-['IBM_Plex_Mono'] text-[#8A948E] uppercase tracking-wider font-semibold">
                  Rating
                </label>
                <div className="flex items-center bg-[#111714] border border-[#1F2823] focus-within:border-[#3FEA7A] rounded-[10px] px-4 h-[48px] transition-colors">
                  <input
                    type="number"
                    className="w-full bg-transparent border-none outline-none text-sm text-[#E8ECE9]"
                    {...register("overallRating", {
                      required: true,
                      min: 1,
                      max: 99,
                    })}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 3: CAREER STATS */}
          <div className="bg-[#141B17] border border-[#1F2823] rounded-[14px] p-8 space-y-6">
            <h3 className="font-['Space_Grotesk'] font-semibold text-lg text-[#E8ECE9] border-b border-[#1F2823] pb-3 flex items-center gap-2">
              <LuAward className="text-[#3FEA7A]" size={18} /> Career Statistics
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {/* Appearances */}
              <div className="space-y-2">
                <label className="block text-xs font-['IBM_Plex_Mono'] text-[#8A948E] uppercase tracking-wider font-semibold">
                  Appearances
                </label>
                <input
                  type="number"
                  className="w-full bg-[#111714] border border-[#1F2823] focus-within:border-[#3FEA7A] rounded-[10px] px-4 h-[48px] text-sm text-[#E8ECE9] outline-none"
                  {...register("totalAppearances")}
                />
              </div>

              {/* Goals */}
              <div className="space-y-2">
                <label className="block text-xs font-['IBM_Plex_Mono'] text-[#8A948E] uppercase tracking-wider font-semibold">
                  Goals
                </label>
                <input
                  type="number"
                  className="w-full bg-[#111714] border border-[#1F2823] focus-within:border-[#3FEA7A] rounded-[10px] px-4 h-[48px] text-sm text-[#E8ECE9] outline-none"
                  {...register("totalGoals")}
                />
              </div>

              {/* Assists */}
              <div className="space-y-2">
                <label className="block text-xs font-['IBM_Plex_Mono'] text-[#8A948E] uppercase tracking-wider font-semibold">
                  Assists
                </label>
                <input
                  type="number"
                  className="w-full bg-[#111714] border border-[#1F2823] focus-within:border-[#3FEA7A] rounded-[10px] px-4 h-[48px] text-sm text-[#E8ECE9] outline-none"
                  {...register("totalAssists")}
                />
              </div>

              {/* Trophy Win */}
              <div className="space-y-2">
                <label className="block text-xs font-['IBM_Plex_Mono'] text-[#8A948E] uppercase tracking-wider font-semibold">
                  Trophies Won
                </label>
                <input
                  type="number"
                  className="w-full bg-[#111714] border border-[#1F2823] focus-within:border-[#3FEA7A] rounded-[10px] px-4 h-[48px] text-sm text-[#E8ECE9] outline-none"
                  {...register("totalTrophyWin")}
                />
              </div>
            </div>
          </div>

          {/* SECTION 4: KEY ATTRIBUTES */}
          <div className="bg-[#141B17] border border-[#1F2823] rounded-[14px] p-8 space-y-6">
            <h3 className="font-['Space_Grotesk'] font-semibold text-lg text-[#E8ECE9] border-b border-[#1F2823] pb-3 flex items-center gap-2">
              <LuFlame className="text-[#3FEA7A]" size={18} /> Performance
              Attributes
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
              {/* Pace */}
              <div className="space-y-2">
                <label className="block text-xs font-['IBM_Plex_Mono'] text-[#8A948E] uppercase tracking-wider font-semibold">
                  Pace
                </label>
                <input
                  type="number"
                  className="w-full text-center bg-[#111714] border border-[#1F2823] focus-within:border-[#3FEA7A] rounded-[10px] h-[48px] text-sm text-[#E8ECE9] outline-none"
                  {...register("attribute.pace", { min: 1, max: 99 })}
                />
              </div>

              {/* Shooting */}
              <div className="space-y-2">
                <label className="block text-xs font-['IBM_Plex_Mono'] text-[#8A948E] uppercase tracking-wider font-semibold">
                  Shooting
                </label>
                <input
                  type="number"
                  className="w-full text-center bg-[#111714] border border-[#1F2823] focus-within:border-[#3FEA7A] rounded-[10px] h-[48px] text-sm text-[#E8ECE9] outline-none"
                  {...register("attribute.shooting", { min: 1, max: 99 })}
                />
              </div>

              {/* Passing */}
              <div className="space-y-2">
                <label className="block text-xs font-['IBM_Plex_Mono'] text-[#8A948E] uppercase tracking-wider font-semibold">
                  Passing
                </label>
                <input
                  type="number"
                  className="w-full text-center bg-[#111714] border border-[#1F2823] focus-within:border-[#3FEA7A] rounded-[10px] h-[48px] text-sm text-[#E8ECE9] outline-none"
                  {...register("attribute.passing", { min: 1, max: 99 })}
                />
              </div>

              {/* Dribbling */}
              <div className="space-y-2">
                <label className="block text-xs font-['IBM_Plex_Mono'] text-[#8A948E] uppercase tracking-wider font-semibold">
                  Dribbling
                </label>
                <input
                  type="number"
                  className="w-full text-center bg-[#111714] border border-[#1F2823] focus-within:border-[#3FEA7A] rounded-[10px] h-[48px] text-sm text-[#E8ECE9] outline-none"
                  {...register("attribute.dribbling", { min: 1, max: 99 })}
                />
              </div>

              {/* Defending */}
              <div className="space-y-2">
                <label className="block text-xs font-['IBM_Plex_Mono'] text-[#8A948E] uppercase tracking-wider font-semibold">
                  Defending
                </label>
                <input
                  type="number"
                  className="w-full text-center bg-[#111714] border border-[#1F2823] focus-within:border-[#3FEA7A] rounded-[10px] h-[48px] text-sm text-[#E8ECE9] outline-none"
                  {...register("attribute.defending", { min: 1, max: 99 })}
                />
              </div>

              {/* Physical */}
              <div className="space-y-2">
                <label className="block text-xs font-['IBM_Plex_Mono'] text-[#8A948E] uppercase tracking-wider font-semibold">
                  Physical
                </label>
                <input
                  type="number"
                  className="w-full text-center bg-[#111714] border border-[#1F2823] focus-within:border-[#3FEA7A] rounded-[10px] h-[48px] text-sm text-[#E8ECE9] outline-none"
                  {...register("attribute.physical", { min: 1, max: 99 })}
                />
              </div>
            </div>
          </div>

          {/* CONTROL BAR */}
          <div className="pt-4 border-t border-[#1F2823] flex justify-end gap-3.5">
            <button
              type="submit"
              className="px-5 py-3 bg-[#3FEA7A] text-[#062012] rounded-[10px] font-semibold text-xs hover:brightness-95 transition-all cursor-pointer"
            >
              Update data
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
