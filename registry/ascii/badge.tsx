"use client";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "primary" | "secondary" | "destructive" | "outline";
  size?: "sm" | "md" | "lg";
  icon?: string;
  className?: string;
}

export default function Badge({
  children,
  variant = "default",
  size = "md",
  icon,
  className = "",
}: BadgeProps) {
  const baseClasses =
    "inline-flex items-center gap-1 font-medium transition-colors tabular-nums select-none relative overflow-hidden";

  const sizeClasses = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-2.5 py-1 text-xs",
    lg: "px-3 py-1.5 text-sm",
  };

  const variantStyles = {
    default: {
      pattern: "░",
      fg: "text-muted-foreground",
      border: "border border-border",
      bg: "bg-muted/30",
    },
    primary: {
      pattern: "▓",
      fg: "text-primary-foreground",
      border: "border border-primary",
      bg: "bg-primary",
    },
    secondary: {
      pattern: "░",
      fg: "text-secondary-foreground",
      border: "border border-border",
      bg: "bg-secondary/30",
    },
    destructive: {
      pattern: "▒",
      fg: "text-destructive",
      border: "border border-destructive/40",
      bg: "bg-destructive/10",
    },
    outline: {
      pattern: "·",
      fg: "text-foreground",
      border: "border border-border",
      bg: "bg-transparent",
    },
  };

  const style = variantStyles[variant];

  return (
    <span
      className={`${baseClasses} ${sizeClasses[size]} ${style.border} ${style.bg} ${style.fg} ${className}`}
    >
      <span
        className="absolute inset-0 opacity-20 pointer-events-none select-none leading-none overflow-hidden"
        aria-hidden="true"
        style={{
          fontSize: "0.5em",
          lineHeight: "1.2",
          wordBreak: "break-all",
        }}
      >
        {style.pattern.repeat(200)}
      </span>
      {icon && <span className="relative z-10">{icon}</span>}
      <span className="relative z-10">{children}</span>
    </span>
  );
}

export { Badge };
