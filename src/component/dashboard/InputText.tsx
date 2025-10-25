import React, { useState } from "react";

interface InputProps {
  name?: string;
  value?: string;
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: "text" | "email" | "password";
  variant?: "default" | "danger";
}

const InputFunc: React.FC<InputProps> = ({
  name,
  value,
  placeholder,
  onChange,
  type,
  variant = "default",
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => setShowPassword((prev) => !prev);

  const borderColor = variant === "danger" ? "red" : "#ccc";

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        border: `1px solid ${borderColor}`,
        borderRadius: "8px",
        padding: "6px 10px",
        width: "100%",
        boxSizing: "border-box",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      {/* Input Field */}
      <input
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={type === "password" ? (showPassword ? "text" : "password") : type}
        style={{
          border: "none",
          outline: "none",
          flex: 1,
          fontSize: "14px",
        }}
      />

      {/* Simple toggle button for password visibility */}
      {type === "password" && (
        <button
          type="button"
          onClick={togglePassword}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: "12px",
            color: "#555",
          }}
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      )}
    </div>
  );
};

export default InputFunc;
