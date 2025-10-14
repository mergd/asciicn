"use client";

import { useEffect, useState, useRef } from "react";

interface ProgressProps {
  value: number;
  max?: number;
  className?: string;
  showValue?: boolean;
  variant?: "default" | "gradient" | "striped";
  animated?: boolean;
  size?: "sm" | "md" | "lg";
}

function Progress({
  value,
  max = 100,
  className = "",
  showValue = false,
  variant = "default",
  animated = false,
  size = "md",
}: ProgressProps) {
  const [animatedValue, setAnimatedValue] = useState(0);
  const barRef = useRef<HTMLDivElement>(null);
  const [blockCount, setBlockCount] = useState(40);

  useEffect(() => {
    if (!barRef.current) return;

    const updateBlockCount = () => {
      const width = barRef.current?.offsetWidth || 0;
      const charWidth = 9.6;
      const chars = Math.floor((width - 8) / charWidth);
      setBlockCount(Math.max(Math.min(chars, 100), 10));
    };

    const timer = setTimeout(updateBlockCount, 0);

    const resizeObserver = new ResizeObserver(updateBlockCount);
    resizeObserver.observe(barRef.current);

    return () => {
      clearTimeout(timer);
      resizeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    if (animated) {
      const timer = setTimeout(() => {
        setAnimatedValue(value);
      }, 50);
      return () => clearTimeout(timer);
    } else {
      setAnimatedValue(value);
    }
  }, [value, animated]);

  const percentage = Math.min((animatedValue / max) * 100, 100);
  const displayValue = Math.round(percentage);

  const blocks = {
    empty: "░",
    full: "█",
    gradient: ["░", "▒", "▓", "█"],
    striped: ["▓", "█"],
  };

  const sizeClasses = {
    sm: "h-3 text-[0.5em]",
    md: "h-4 text-[0.6em]",
    lg: "h-6 text-[0.7em]",
  };

  const renderBlocks = () => {
    const filledBlocks = Math.floor((percentage / 100) * blockCount);

    if (variant === "gradient") {
      return Array.from({ length: blockCount }, (_, i) => {
        if (i < filledBlocks) {
          const gradIndex = Math.min(
            Math.floor((i / filledBlocks) * blocks.gradient.length),
            blocks.gradient.length - 1
          );
          return blocks.gradient[gradIndex];
        }
        return blocks.empty;
      }).join("");
    }

    if (variant === "striped") {
      return Array.from({ length: blockCount }, (_, i) => {
        if (i < filledBlocks) {
          return blocks.striped[i % 2];
        }
        return blocks.empty;
      }).join("");
    }

    return Array.from({ length: blockCount }, (_, i) => {
      return i < filledBlocks ? blocks.full : blocks.empty;
    }).join("");
  };

  return (
    <div className={`w-full ${className}`}>
      <div className="flex items-center gap-2 w-full">
        <div
          ref={barRef}
          className={`flex-1 border border-border bg-muted/20 font-mono leading-none overflow-hidden ${
            sizeClasses[size]
          } ${animated ? "transition-all duration-500 ease-out" : ""}`}
        >
          <div className="h-full flex items-center px-1 select-none whitespace-nowrap overflow-hidden">
            {renderBlocks()}
          </div>
        </div>
        {showValue && (
          <span className="text-xs text-muted-foreground tabular-nums w-[3ch] text-right flex-shrink-0">
            {displayValue}%
          </span>
        )}
      </div>
    </div>
  );
}

interface ProgressBarProps {
  value: number;
  max?: number;
  className?: string;
  label?: string;
  showValue?: boolean;
}

function ProgressBar({
  value,
  max = 100,
  className = "",
  label,
  showValue = true,
}: ProgressBarProps) {
  const percentage = Math.min((value / max) * 100, 100);

  return (
    <div className={`w-full ${className}`}>
      {label && (
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs lowercase">{label}</span>
          {showValue && (
            <span className="text-xs text-muted-foreground tabular-nums">
              {Math.round(percentage)}%
            </span>
          )}
        </div>
      )}
      <Progress value={value} max={max} size="md" />
    </div>
  );
}
