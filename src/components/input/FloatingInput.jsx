/** @format */

import React from "react";

const FloatingInput = ({
  label,
  register,
  required,
  name,
  minLength,
  maxLength,
  errors,
  valueAsNumber,
  type = "text",
  className,
  isNumber,
  readOnly,
}) => {
  const [pattern, setPattern] = React.useState(false);

  React.useEffect(() => {
    if (isNumber) {
      setPattern(new RegExp(/^[0-9]+$/));
    }
  }, [isNumber]);

  return (
    <div className={`${type} ${className}`}>
      <label
        htmlFor={label}
        className="relative block overflow-hidden border-white/[0.5] pt-4  focus-within:border-white/[0.8]"
      >
        <input
          type={type}
          id={label}
          readOnly={readOnly}
          placeholder={label}
          {...register(name, {
            required,
            minLength,
            maxLength,
            valueAsNumber,
            pattern,
          })}
          className="peer h-10 w-full rounded-lg border bg-transparent px-2 placeholder-transparent focus:border focus:outline-none focus:ring-0"
        />

        <span className="absolute left-2 -top-2 translate-y-1 text-body-text transition-all peer-placeholder-shown:top-1/3 peer-focus:-top-2 peer-focus:text-black">
          {label}
        </span>
      </label>
      {errors?.type === "required" && (
        <p className="text-red-500 font-inter italic text-sm">
          {label} tidak boleh kosong
        </p>
      )}
      {errors?.type === "minLength" && (
        <p className="text-red-500 font-inter italic text-sm">
          {label} tidak boleh kurang dari {minLength} karakter
        </p>
      )}
      {errors?.type === "maxLength" && (
        <p className="text-red-500 font-inter italic text-sm">
          {label} tidak boleh lebih dari {maxLength} karakter
        </p>
      )}
      {errors?.type === "pattern" && (
        <p className="text-red-500 font-inter italic text-sm">
          {label} hanya boleh angka.
        </p>
      )}
    </div>
  );
};

export default FloatingInput;
