"use client";

import { forwardRef } from "react";

interface SwitchProps {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  label?: string;
  className?: string;
  variant?: "default" | "bracket";
}

const Switch = forwardRef<HTMLButtonElement, SwitchProps>(
  (
    {
      checked = false,
      onCheckedChange,
      disabled = false,
      label,
      className = "",
      variant = "default",
    },
    ref
  ) => {
    const handleToggle = () => {
      if (!disabled && onCheckedChange) {
        onCheckedChange(!checked);
      }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        handleToggle();
      }
    };

    const renderSwitch = () => {
      if (variant === "bracket") {
        return (
          <span className="inline-flex items-center gap-1 text-sm">
            <span className="opacity-50">[</span>
            <span className="transition-colors duration-200">
              {checked ? "■" : "·"}
            </span>
            <span className="opacity-50">]</span>
          </span>
        );
      }

      return (
        <span
          className={`inline-flex items-center gap-1 px-2 py-0.5 border transition-all duration-200 ${
            checked
              ? "border-primary text-primary bg-primary/10"
              : "border-border text-muted-foreground"
          }`}
        >
          <span>{checked ? "■" : "·"}</span>
          <span className="text-xs">{checked ? "on" : "off"}</span>
        </span>
      );
    };

    const switchElement = (
      <button
        ref={ref}
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={label}
        disabled={disabled}
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        className={`cursor-pointer transition-opacity focus:outline-none focus:ring-1 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background ${
          disabled ? "opacity-40 cursor-not-allowed" : ""
        } ${className}`}
      >
        {renderSwitch()}
      </button>
    );

    if (label) {
      return (
        <div className="flex items-center gap-2">
          {switchElement}
          <span
            className={`text-sm select-none ${
              disabled ? "opacity-40" : "text-foreground"
            }`}
          >
            {label}
          </span>
        </div>
      );
    }

    return switchElement;
  }
);

Switch.displayName = "Switch";

export { Switch };
export default Switch;
