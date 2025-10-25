import React from "react";

interface SelectProps {
  name?: string;
  value?: string;
  options: { label: string; value: string }[];
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  placeholder?: string;
  variant?: "default" | "danger";
}

const SelectFunc: React.FC<SelectProps> = ({
  name,
  value,
  options,
  onChange,
  placeholder = "Select an option",
  variant = "default",
}) => {
  const borderColor =
    variant === "danger"
      ? "border-red-500 focus:ring-red-500"
      : "border-gray-300 focus:ring-lime-400 focus:border-lime-400";

  return (
    <div className="w-full">
      <select
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-2 rounded-lg text-sm outline-none font-poppins bg-white border ${borderColor} transition-all duration-200`}
      >
        <option value="" disabled hidden>
          {placeholder}
        </option>
        {options.map((opt, index) => (
          <option key={index} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectFunc;
