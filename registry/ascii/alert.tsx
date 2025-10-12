"use client";

interface AlertProps {
  children: React.ReactNode;
  variant?: "default" | "info" | "success" | "warning" | "destructive";
  title?: string;
  icon?: string;
  dismissible?: boolean;
  onDismiss?: () => void;
  className?: string;
  border?: "single" | "double";
}

export default function Alert({
  children,
  variant = "default",
  title,
  icon,
  dismissible = false,
  onDismiss,
  className = "",
  border = "single",
}: AlertProps) {
  const borderStyles = {
    single: "border",
    double: "border-2",
  };

  const variantStyles = {
    default: {
      pattern: "░",
      border: "border-border",
      bg: "bg-card",
      fg: "text-card-foreground",
      iconDefault: "ℹ",
    },
    info: {
      pattern: "░",
      border: "border-primary/40",
      bg: "bg-primary/5",
      fg: "text-primary",
      iconDefault: "ℹ",
    },
    success: {
      pattern: "▓",
      border: "border-green-500/40",
      bg: "bg-green-500/5",
      fg: "text-green-600 dark:text-green-400",
      iconDefault: "✓",
    },
    warning: {
      pattern: "▒",
      border: "border-yellow-500/40",
      bg: "bg-yellow-500/5",
      fg: "text-yellow-600 dark:text-yellow-400",
      iconDefault: "⚠",
    },
    destructive: {
      pattern: "▒",
      border: "border-destructive/40",
      bg: "bg-destructive/5",
      fg: "text-destructive",
      iconDefault: "×",
    },
  };

  const style = variantStyles[variant];
  const displayIcon = icon || style.iconDefault;

  return (
    <div
      role="alert"
      className={`relative overflow-hidden ${borderStyles[border]} ${style.border} ${style.bg} ${style.fg} p-4 ${className}`}
    >
      <span
        className="absolute inset-0 opacity-10 pointer-events-none select-none leading-none overflow-hidden"
        aria-hidden="true"
        style={{
          fontSize: "0.5em",
          lineHeight: "1.2",
          wordBreak: "break-all",
        }}
      >
        {style.pattern.repeat(500)}
      </span>

      <div className="relative z-10 flex gap-3">
        <span className="text-base flex-shrink-0 leading-none pt-0.5">
          {displayIcon}
        </span>

        <div className="flex-1 space-y-1">
          {title && (
            <div className="font-semibold text-sm leading-none mb-1">
              {title}
            </div>
          )}
          <div className="text-sm leading-relaxed opacity-90">{children}</div>
        </div>

        {dismissible && (
          <button
            onClick={onDismiss}
            className="flex-shrink-0 opacity-50 hover:opacity-100 transition-opacity focus:outline-none focus:ring-1 focus:ring-ring"
            aria-label="dismiss"
          >
            <span className="text-sm">×</span>
          </button>
        )}
      </div>
    </div>
  );
}

export { Alert };
