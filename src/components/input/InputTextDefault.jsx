/** @format */

import React, { useState } from "react";
import { BsEyeSlash, BsEye } from "react-icons/bs";

const InputTextDefault = ({
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
  readOnly,
  placeholder,
  autoComplete = "on",
}) => {
  const [isTypePassword, setIsTypePassword] = useState(false);
  const tooglePassword = () => {
    setIsTypePassword(!isTypePassword);
  };
  return (
    <div>
      <label className="text-sm font-medium text-gray-700 tracking-wide">
        {label}
      </label>
      <div className="relative">
        <input
          className="w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
          type={
            type === "password" ? (isTypePassword ? "text" : "password") : type
          }
          id={label}
          readOnly={readOnly}
          placeholder={placeholder}
          autoComplete={autoComplete}
          {...register(name, {
            required,
            minLength,
            maxLength,
            valueAsNumber,
          })}
        />
        {type === "password" && (
          <div
            className="absolute right-2 top-0 flex items-center h-full cursor-pointer text-blue-600"
            onClick={tooglePassword}
          >
            {isTypePassword ? <BsEye size={20} /> : <BsEyeSlash size={20} />}
          </div>
        )}
      </div>
      {/* jika type password */}
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

export default InputTextDefault;
