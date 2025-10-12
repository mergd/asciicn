"use client";

import { useEffect } from "react";

interface DialogProps {
  children: React.ReactNode;
  onClose: () => void;
  title?: string;
  footer?: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export default function Dialog({
  children,
  onClose,
  title,
  footer,
  size = "md",
  className = "",
}: DialogProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  const sizeClasses = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-2xl",
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
      <div
        className={`relative w-full ${sizeClasses[size]} bg-card border border-border max-h-[85vh] flex flex-col ${className}`}
      >
        {title && (
          <div className="flex items-start justify-between px-4 py-3 border-b border-border">
            <h2 className="text-sm font-bold text-foreground">{title}</h2>
            <button
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-1 focus:ring-ring font-mono ml-4"
            >
              [x]
            </button>
          </div>
        )}

        <div className="px-4 py-4 overflow-y-auto flex-1">{children}</div>

        {footer && (
          <div className="px-4 py-3 border-t border-border flex items-center justify-end gap-2">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}

export { Dialog };
