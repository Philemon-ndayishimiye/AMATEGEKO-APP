import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

interface ButtonProps {
  label: string;
  type?: "submit" | "reset" | "button";
  onClick?: () => void;
  variant?: "default" | "danger";
  isLoading?: boolean; // 🔹 New prop
  loadingLabel?: string; // 🔹 Optional custom label
}

const Button: React.FC<ButtonProps> = ({
  label,
  type = "submit",
  onClick,
  variant = "default",
  isLoading = false,
  loadingLabel = "Loading...",
}) => {
  const baseStyles =
    "w-full py-2 px-4 rounded-lg text-white font-semibold transition-colors duration-200 hover:opacity-90 cursor-pointer flex justify-center items-center gap-2";

  const variantStyles = {
    default: "bg-gradient-to-r from-lime-400 to-green-500",
    danger: "bg-gradient-to-r from-red-400 to-red-600",
  };

  return (
    <button
      type={type}
      className={`${baseStyles} ${variantStyles[variant]} ${
        isLoading ? "opacity-80 cursor-not-allowed" : ""
      }`}
      onClick={onClick}
      disabled={isLoading}
    >
      {isLoading && (
        <AiOutlineLoading3Quarters className="animate-spin text-white text-lg" />
      )}
      {isLoading ? loadingLabel : label}
    </button>
  );
};

export default Button;
