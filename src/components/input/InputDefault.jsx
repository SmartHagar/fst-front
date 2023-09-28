/** @format */

import React from "react";

const InputDefault = ({
  label,
  register,
  required,
  name,
  readOnly,
  placeholder,
  errors,
  type = "text",
  addClass,
  value,
}) => {
  return (
    <div className={`${addClass}`}>
      {label && (
        <label className="text-sm font-medium text-gray-700 tracking-wide">
          {label}
        </label>
      )}
      <div className={`relative`}>
        <input
          type={type}
          className="w-full rounded-lg"
          id={label}
          readOnly={readOnly}
          placeholder={placeholder}
          {...register(name, {
            required,
          })}
          value={value}
        />
      </div>
      {/* jika type password */}
      {errors?.type === "required" && (
        <p className="text-red-500 font-inter italic text-sm">
          {label} tidak boleh kosong
        </p>
      )}
    </div>
  );
};

export default InputDefault;
