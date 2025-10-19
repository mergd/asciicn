"use client";

import { createContext, useContext, forwardRef } from "react";

interface RadioGroupContextValue {
  value?: string;
  onValueChange?: (value: string) => void;
  name?: string;
  disabled?: boolean;
}

const RadioGroupContext = createContext<RadioGroupContextValue | undefined>(
  undefined
);

interface RadioGroupProps {
  value?: string;
  onValueChange?: (value: string) => void;
  name?: string;
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function RadioGroup({
  value,
  onValueChange,
  name,
  disabled = false,
  children,
  className = "",
}: RadioGroupProps) {
  return (
    <RadioGroupContext.Provider
      value={{ value, onValueChange, name, disabled }}
    >
      <div className={`flex flex-col gap-2 ${className}`}>{children}</div>
    </RadioGroupContext.Provider>
  );
}

interface RadioItemProps {
  value: string;
  label?: string;
  disabled?: boolean;
  className?: string;
  variant?: "icon" | "text";
}

export const RadioItem = forwardRef<HTMLInputElement, RadioItemProps>(
  (
    {
      value,
      label,
      disabled: itemDisabled = false,
      className = "",
      variant = "text",
    },
    ref
  ) => {
    const context = useContext(RadioGroupContext);
    if (!context) {
      throw new Error("RadioItem must be used within RadioGroup");
    }

    const {
      value: groupValue,
      onValueChange,
      name,
      disabled: groupDisabled,
    } = context;
    const isDisabled = groupDisabled || itemDisabled;
    const isChecked = groupValue === value;

    const handleChange = () => {
      if (!isDisabled && onValueChange) {
        onValueChange(value);
      }
    };

    const icon =
      variant === "icon" ? (isChecked ? "●" : "○") : isChecked ? "(•)" : "( )";

    return (
      <label
        className={`flex items-center gap-2 cursor-pointer select-none text-sm transition-opacity ${
          isDisabled ? "opacity-40 cursor-not-allowed" : "hover:opacity-80"
        } ${className}`}
      >
        <input
          ref={ref}
          type="radio"
          name={name}
          value={value}
          checked={isChecked}
          onChange={handleChange}
          disabled={isDisabled}
          className="sr-only"
        />
        <span className="font-mono text-base">{icon}</span>
        {label && <span>{label}</span>}
      </label>
    );
  }
);

RadioItem.displayName = "RadioItem";

export default RadioGroup;
