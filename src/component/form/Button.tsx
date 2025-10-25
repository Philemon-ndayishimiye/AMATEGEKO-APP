import React from "react";

interface ButtonProps {
  label: string;
  type?: "submit" | "reset" | "button"; 
  onClick?: () => void;
  variant?: "default" | "danger"; // extendable for future variants
}

const Button: React.FC<ButtonProps> = ({
  label,
  type = "submit",
  onClick,
  variant = "default",
}) => {
  // Determine styles based on variant
  const baseStyles =
    "w-full py-2 px-4 rounded-lg text-white font-semibold transition-colors duration-200 hover:opacity-90 cursor-pointer";

  const variantStyles = {
    default: "bg-gradient-to-r from-lime-400 to-green-500",
    danger: "bg-gradient-to-r from-red-400 to-red-600",
  };

  return (
    <button
      type={type}
      className={`${baseStyles} ${variantStyles[variant]}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
