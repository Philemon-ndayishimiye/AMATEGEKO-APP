import React, { useState } from "react";
import { AiOutlineUser, AiOutlineMail, AiOutlineLock, AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

interface InputProps {
  name?: string;
  value?: string;
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: "text" | "email" | "password";
  variant?: "default" | "danger"; // new variant prop
}

const Input: React.FC<InputProps> = ({
  name,
  value,
  placeholder,
  onChange,
  type,
  variant = "default",
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => setShowPassword(prev => !prev);

  // Choose left icon based on type
  const renderLeftIcon = () => {
    switch (type) {
      case "email":
        return <AiOutlineMail style={{ marginRight: "8px" }} />;
      case "password":
        return <AiOutlineLock style={{ marginRight: "8px" }} />;
      default:
        return <AiOutlineUser style={{ marginRight: "8px" }} />;
    }
  };

  const borderColor = variant === "danger" ? "red" : "#ccc";

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        border: `1px solid ${borderColor}`,
        borderRadius: "8px",
        padding: "3px 9px",
        width: "100%", // full width
        boxSizing: "border-box",
        fontFamily:"Poppins"
      }}
    >
      {/* Left Icon */}
      {renderLeftIcon()}

      {/* Input Field */}
      <input
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={type === "password" ? (showPassword ? "text" : "password") : type}
        style={{ border: "none", outline: "none", flex: 1 }}
      />

      {/* Eye Icon for password */}
      {type === "password" && (
        <span onClick={togglePassword} style={{ cursor: "pointer", marginLeft: "1px" }}>
          {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
        </span>
      )}
    </div>
  );
};

export default Input;
