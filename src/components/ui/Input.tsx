import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = ({ label, error, ...props }: InputProps) => {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <input
        {...props}
        className={`rounded-xl border px-4 py-3 outline-none transition
        ${
          error
            ? "border-red-500 focus:border-red-500"
            : "border-gray-300 focus:border-black"
        }`}
      />

      {error && (
        <span className="text-sm text-red-500">{error}</span>
      )}
    </div>
  );
};

export default Input;