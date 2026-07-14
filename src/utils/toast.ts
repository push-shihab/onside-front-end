import { toast as nativeToast } from "react-hot-toast";
import React from "react";
import { HiInformationCircle } from "react-icons/hi";

export const toast = {
  success: (message: string) => nativeToast.success(message),
  error: (message: string) => nativeToast.error(message),
  loading: (message: string) => nativeToast.loading(message),
  dismiss: (toastId?: string) => nativeToast.dismiss(toastId),

  info: (message: string) =>
    nativeToast(
      (t) =>
        React.createElement(
          "div",
          { className: "flex items-center gap-2.5 text-[#E8ECE9]" },
          React.createElement(HiInformationCircle, {
            size: 18,
            className: "text-[#6BE4E8] shrink-0",
          }),
          React.createElement("span", null, message),
        ),
      {
        id: "info-toast",
        style: {
          borderColor: "#22353A",
        },
      },
    ),
};
