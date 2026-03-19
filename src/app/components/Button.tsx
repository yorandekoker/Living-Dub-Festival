import { Link } from "react-router";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  href?: string;
  to?: string;
  external?: boolean;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

export default function Button({
  children,
  variant = "primary",
  href,
  to,
  external = false,
  onClick,
  className = "",
  style,
}: ButtonProps) {
  const baseStyles =
    "font-['Bangers'] text-lg px-6 py-3 rounded-full border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all inline-block text-center";

  const variantStyles = {
    primary: "bg-[#F7C600] text-black transform rotate-1 hover:rotate-0",
    secondary: "bg-[#E6392F] text-white transform -rotate-1 hover:rotate-0",
    outline:
      "bg-white text-[#138A5A] border-[#138A5A] transform rotate-0.5 hover:bg-[#FFF3D6]",
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={combinedClassName}
        style={style}
      >
        {children}
      </a>
    );
  }

  if (to) {
    return (
      <Link to={to} className={combinedClassName} style={style}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClassName} style={style}>
      {children}
    </button>
  );
}
