import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "outline";
  href?: string;
  onClick?: () => void;
  className?: string;
  target?: string;
  rel?: string;
}

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
  target,
  rel,
}: ButtonProps) {
  const base =
    "relative inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm tracking-wide transition-all duration-300 overflow-hidden shimmer-btn";

  const styles = {
    primary:
      "bg-[#6C63FF] text-white shadow-[0_0_24px_rgba(108,99,255,0.35)] hover:shadow-[0_0_40px_rgba(108,99,255,0.55)] hover:bg-[#7a73ff]",
    outline:
      "border border-[rgba(108,99,255,0.5)] text-[#F0F0F5] hover:border-[#6C63FF] hover:shadow-[0_0_20px_rgba(108,99,255,0.2)] hover:text-white",
  };

  const classes = `${base} ${styles[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} target={target} rel={rel}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
