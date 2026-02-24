import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  className = "",
  icon,
  ...props
}) => {
  const baseStyles =
    "relative cursor-pointer inline-flex items-center justify-center font-manrope font-semibold transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed group";

  const variants = {
    // Assuming you have these colors in tailwind.config.js or using arbitrary values
    primary:
      "bg-[#5D2E17] text-[#FDF6E3] hover:bg-[#4A2512] hover:text-[#FDF6E3]",
    secondary: "bg-[#FDF6E3] text-[#5D2E17] hover:bg-white",
    outline:
      "border border-[#5D2E17] text-[#5D2E17] hover:bg-[#5D2E17] hover:text-[#FDF6E3]",
    ghost: "text-[#5D2E17] hover:bg-[#5D2E17]/10",
  };

  const sizes = {
    sm: "px-2 py-2 text-sm",
    md: "px-4 py-3 text-base",
    lg: "px-10 py-4 text-lg",
  };

  /** * This mask creates the inverted rounded corners.
   * 12px is the radius of the "cut".
   */
  const invertedCornerStyle: React.CSSProperties = {
    WebkitMaskImage: `
      radial-gradient(circle 12px at 0 0, transparent 98%, black 100%),
      radial-gradient(circle 12px at 100% 0, transparent 98%, black 100%),
      radial-gradient(circle 12px at 0 100%, transparent 98%, black 100%),
      radial-gradient(circle 12px at 100% 100%, transparent 98%, black 100%)
    `,
    WebkitMaskComposite: "destination-in",
    maskComposite: "intersect",
    maskImage: `
      radial-gradient(circle 6px at 0 0, transparent 98%, black 100%),
      radial-gradient(circle 6px at 100% 0, transparent 98%, black 100%),
      radial-gradient(circle 6px at 0 100%, transparent 98%, black 100%),
      radial-gradient(circle 6px at 100% 100%, transparent 98%, black 100%)
    `,
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      style={invertedCornerStyle}
      {...props}
    >
      <span className="flex items-center justify-center relative w-full h-full z-10">
        {/* Original Content */}
        <span className="transition-opacity duration-300 group-hover:opacity-0 flex items-center gap-2">
          {children}
          {icon && (
            <span className="transition-transform group-hover:translate-x-1">
              {icon}
            </span>
          )}
        </span>
        {/* Coming Soon Text */}
        <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
          Coming Soon
        </span>
      </span>
    </button>
  );
};

export default Button;
