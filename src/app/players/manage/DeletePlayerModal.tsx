"use client";

import React from "react";
import { Modal, Button } from "@heroui/react";
import { LuTrash2, LuX } from "react-icons/lu";
import { FiAlertTriangle } from "react-icons/fi";
import { ObjectId } from "mongodb";
import { deletePlayer } from "@/utils/deleteData";
import toast from "react-hot-toast";
import { redirect } from "next/navigation";

interface Player {
  _id: string;
  name?: string;
}

interface DeletePlayerModalProps {
  player: Player;
}

export default function DeletePlayerModal({ player }: DeletePlayerModalProps) {
  const handleDelete = async (id: ObjectId) => {
    const res = await deletePlayer(id);
    if (res.deletedCount) {
      toast.success("Player deleted successfully");
      redirect("/players/manage");
    }
  };

  return (
    <Modal>
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
          --red: #e86b6b;
          --red-soft: rgba(232, 107, 107, 0.1);
        }
      `}</style>

      <Modal.Trigger>
        <button
          className="w-8 h-8 rounded-lg bg-[#111714] border border-[#1F2823] grid place-items-center text-xs text-[#8A948E] cursor-pointer hover:border-[#E86B6B] hover:text-[#E86B6B] transition-all"
          title="Delete Player"
        >
          ✕
        </button>
      </Modal.Trigger>

      <Modal.Backdrop className="fixed inset-0 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <Modal.Container className="w-full max-w-[360px] transform overflow-hidden rounded-[14px] p-6 text-left align-middle shadow-xl transition-all">
          <Modal.Dialog>
            <Modal.CloseTrigger className="absolute right-4 top-4 rounded-md text-[#5C665F] hover:text-[#E8ECE9] transition-colors cursor-pointer">
              <LuX size={18} />
            </Modal.CloseTrigger>

            <Modal.Header className="flex flex-col items-center text-center mt-2">
              <Modal.Icon className="w-12 h-12 rounded-full bg-[rgba(232,107,107,0.1)] border border-[#E86B6B]/20 grid place-items-center text-[#E86B6B] mb-4">
                <FiAlertTriangle size={22} />
              </Modal.Icon>
              <Modal.Heading className="font-['Space_Grotesk'] font-semibold text-lg text-[#E8ECE9]">
                Delete player profile?
              </Modal.Heading>
            </Modal.Header>

            <Modal.Body className="mt-2 text-center">
              <p className="text-xs text-[#8A948E] leading-relaxed">
                Are you sure you want to delete{" "}
                <strong className="text-[#E8ECE9] font-medium">
                  {player.name || "this player"}
                </strong>
                ? This action is structural and cannot be undone.
              </p>
            </Modal.Body>

            <Modal.Footer className="mt-6 flex gap-3">
              <Button
                slot="close"
                className="flex-1 py-2.5 border border-[#2A352E] rounded-[10px] text-xs font-semibold text-[#E8ECE9] hover:bg-[#111714] transition-colors cursor-pointer bg-transparent"
              >
                Cancel
              </Button>
              <Button
                onClick={() => handleDelete(player._id)}
                className="flex-1 py-2.5 bg-[#E86B6B] text-[#0A0F0D] rounded-[10px] text-xs font-semibold hover:brightness-95 transition-all cursor-pointer flex items-center justify-center gap-1.5"
              >
                <LuTrash2 size={14} /> Delete
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
