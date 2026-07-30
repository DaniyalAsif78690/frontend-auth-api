import React from "react";

interface FileInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const FileInput = ({ label, ...props }: FileInputProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-700">
        {label}
      </label>

      <input
        type="file"
        {...props}
        className="
          block w-full cursor-pointer rounded-xl
          border border-gray-300
          bg-white
          file:mr-4
          file:border-0
          file:bg-black
          file:px-4
          file:py-3
          file:text-white
          file:cursor-pointer
          hover:file:bg-gray-800
        "
      />
    </div>
  );
};

export default FileInput;