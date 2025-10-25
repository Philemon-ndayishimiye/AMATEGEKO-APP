import React, { useState } from "react";
import type{ IconType } from "react-icons";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

interface InputProps {
  name?: string;
  value?: string;
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: "text" | "email" | "password";
  icon: IconType; // Icon component passed as prop
}

const Input: React.FC<InputProps> = ({ name, value, placeholder, onChange, type, icon: Icon }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div style={{ display: "flex", alignItems: "center", border: "1px solid #ccc", borderRadius: "4px", padding: "5px 10px", width: "250px" }}>
      {/* Left Icon */}
      <Icon style={{ marginRight: "8px" }} />

      {/* Input Field */}
      <input
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={type === "password" ? (showPassword ? "text" : "password") : type}
        style={{ border: "none", outline: "none", flex: 1 }}
      />

      {/* Eye Icon for password toggle */}
      {type === "password" && (
        <span onClick={togglePassword} style={{ cursor: "pointer", marginLeft: "8px" }}>
          {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
        </span>
      )}
    </div>
  );
};

export default Input;
