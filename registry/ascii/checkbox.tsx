"use client";

import { forwardRef } from "react";

interface CheckboxProps {
  value?: string;
  label?: string;
  disabled?: boolean;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  className?: string;
  variant?: "icon" | "text";
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      value,
      label,
      disabled = false,
      checked = false,
      onCheckedChange,
      className = "",
      variant = "text",
    },
    ref
  ) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!disabled && onCheckedChange) {
        onCheckedChange(e.target.checked);
      }
    };

    const icon =
      variant === "icon" ? (checked ? "✓" : "□") : checked ? "[x]" : "[ ]";

    return (
      <label
        className={`flex items-center gap-2 cursor-pointer select-none text-sm transition-opacity ${
          disabled ? "opacity-40 cursor-not-allowed" : "hover:opacity-80"
        } ${className}`}
      >
        <input
          ref={ref}
          type="checkbox"
          value={value}
          checked={checked}
          onChange={handleChange}
          disabled={disabled}
          className="sr-only"
        />
        <span
          className={`font-mono ${
            variant === "icon" ? "text-lg" : "text-base"
          }`}
        >
          {icon}
        </span>
        {label && <span>{label}</span>}
      </label>
    );
  }
);

Checkbox.displayName = "Checkbox";

export default Checkbox;
