import React from "react";

const CustomInput = ({
  type = "text",
  value,
  onChange,
  placeholder = "",
  className = "",
  extraclasses = "",
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`${extraclasses} ${className}  p-2 w-full rounded-xl bg-white/40 outline-none hover:translate-y-[-4px] duration-1000`}
    />
  );
};

export default CustomInput;
