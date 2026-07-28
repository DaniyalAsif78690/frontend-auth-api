import React from "react";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

const Button = ({
  children,
  loading,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      disabled={loading || props.disabled}
      className="w-full rounded-xl bg-black py-3 text-white font-semibold transition hover:bg-gray-800 disabled:opacity-60"
    >
      {loading ? "Loading..." : children}
    </button>
  );
};

export default Button;