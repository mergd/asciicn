"use client";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  icon?: string;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  onClick,
  disabled = false,
  variant = "primary",
  className = "",
  icon,
  type = "button",
}: ButtonProps) {
  const baseClasses =
    "px-3 py-1.5 transition-all duration-200 cursor-pointer select-none text-sm focus:outline-none focus:ring-1 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background";

  const variantClasses = {
    primary:
      "text-primary hover:bg-primary hover:text-primary-foreground disabled:hover:bg-transparent disabled:hover:text-primary",
    secondary:
      "text-secondary-foreground border border-border hover:bg-accent hover:border-border disabled:hover:bg-transparent",
    ghost: "hover:text-primary hover:bg-accent/50 disabled:no-underline",
  };

  const content = (
    <>
      {icon && <span className="mr-1">{icon}</span>}
      {children}
    </>
  );

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${
        disabled ? "opacity-40 cursor-not-allowed" : ""
      } ${className}`}
    >
      {variant === "secondary" ? <>[ {content} ]</> : content}
    </button>
  );
}

export { Button };
