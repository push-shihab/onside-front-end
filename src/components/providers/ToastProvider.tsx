"use client";

import { Toaster } from "react-hot-toast";

export default function ToastProvider() {
  return (
    <Toaster
      position="top-right"
      reverseOrder={false}
      toastOptions={{
        className: "font-sans text-sm border",
        duration: 4000,
        style: {
          background: "#141B17",
          color: "#E8ECE9",
          border: "1px solid #1F2823",
          borderRadius: "10px",
          padding: "12px 16px",
          maxWidth: "420px",
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)",
        },
        success: {
          duration: 3000,
          iconTheme: {
            primary: "#3FEA7A",
            secondary: "#062012",
          },
          style: {
            borderColor: "#2A352E",
          },
        },
        error: {
          duration: 5000,
          iconTheme: {
            primary: "#E86B6B",
            secondary: "#141B17",
          },
          style: {
            borderColor: "#3A2222",
          },
        },
        loading: {
          iconTheme: {
            primary: "#3FEA7A",
            secondary: "#1F2823",
          },
        },
      }}
    />
  );
}
