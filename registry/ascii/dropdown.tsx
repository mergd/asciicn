"use client";

import { useState, useRef, useEffect } from "react";

interface DropdownOption {
  value: string;
  label: string;
  icon?: string;
  disabled?: boolean;
}

interface DropdownProps {
  options: DropdownOption[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  variant?: "single" | "double";
  className?: string;
}

export default function Dropdown({
  options,
  value,
  onChange,
  placeholder = "select option",
  disabled = false,
  variant = "single",
  className = "",
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
        setFocusedIndex(-1);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      const enabledOptions = options.filter((opt) => !opt.disabled);

      switch (e.key) {
        case "Escape":
          e.preventDefault();
          setIsOpen(false);
          setFocusedIndex(-1);
          triggerRef.current?.focus();
          break;

        case "ArrowDown":
          e.preventDefault();
          setFocusedIndex((prev) => {
            const nextIndex = prev + 1;
            return nextIndex >= enabledOptions.length ? 0 : nextIndex;
          });
          break;

        case "ArrowUp":
          e.preventDefault();
          setFocusedIndex((prev) => {
            const prevIndex = prev - 1;
            return prevIndex < 0 ? enabledOptions.length - 1 : prevIndex;
          });
          break;

        case "Enter":
        case " ":
          e.preventDefault();
          if (focusedIndex >= 0 && focusedIndex < enabledOptions.length) {
            const selectedOpt = enabledOptions[focusedIndex];
            onChange?.(selectedOpt.value);
            setIsOpen(false);
            setFocusedIndex(-1);
            triggerRef.current?.focus();
          }
          break;
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, focusedIndex, options, onChange]);

  const handleToggle = () => {
    if (disabled) return;
    setIsOpen(!isOpen);
    if (!isOpen) {
      setFocusedIndex(selectedOption ? options.indexOf(selectedOption) : 0);
    }
  };

  const handleSelect = (option: DropdownOption) => {
    if (option.disabled) return;
    onChange?.(option.value);
    setIsOpen(false);
    setFocusedIndex(-1);
    triggerRef.current?.focus();
  };

  const enabledOptions = options.filter((opt) => !opt.disabled);

  return (
    <div ref={dropdownRef} className={`relative inline-block ${className}`}>
      <button
        ref={triggerRef}
        onClick={handleToggle}
        disabled={disabled}
        className={`
          w-full text-left px-2 py-1 text-sm font-mono
          transition-all duration-200
          focus:outline-none focus:ring-1 focus:ring-ring
          ${
            disabled
              ? "opacity-40 cursor-not-allowed"
              : "cursor-pointer hover:text-primary"
          }
        `}
      >
        [
        {selectedOption ? (
          <>
            {selectedOption.icon && (
              <span className="mr-1">{selectedOption.icon}</span>
            )}
            {selectedOption.label}
          </>
        ) : (
          <span className="text-muted-foreground">{placeholder}</span>
        )}{" "}
        {isOpen ? "▲" : "▼"}]
      </button>

      {isOpen && (
        <div
          className={`absolute z-50 mt-1 w-full min-w-[200px] bg-background shadow-lg ${
            variant === "double"
              ? "border-2 border-border"
              : "border border-border"
          }`}
        >
          <div className="max-h-[200px] overflow-y-auto">
            {options.map((option) => {
              const enabledIndex = enabledOptions.indexOf(option);
              const isFocused = enabledIndex === focusedIndex;
              const isSelected = option.value === value;

              return (
                <button
                  key={option.value}
                  onClick={() => handleSelect(option)}
                  disabled={option.disabled}
                  className={`
                    w-full text-left px-3 py-1.5 text-sm border-l-2
                    transition-all duration-150
                    focus:outline-none
                    ${
                      option.disabled
                        ? "opacity-40 cursor-not-allowed border-transparent"
                        : "cursor-pointer"
                    }
                    ${
                      isFocused && !option.disabled
                        ? "bg-accent/50 text-foreground border-primary"
                        : "border-transparent"
                    }
                    ${
                      !isFocused && !option.disabled
                        ? "hover:bg-accent/30 hover:text-foreground hover:border-border"
                        : ""
                    }
                    ${isSelected ? "text-primary" : "text-muted-foreground"}
                  `}
                >
                  {option.icon && <span className="mr-2">{option.icon}</span>}
                  {option.label}
                  {isSelected && <span className="ml-2 text-xs">◄</span>}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export { Dropdown };
