/** @format */

import React from "react";

const CheckBox = ({ label, register, required, name, errors, className }) => {
  return (
    <div className={`${className} flex items-center gap-2`}>
      <input
        type="checkbox"
        id={name}
        placeholder={label}
        {...register(name, {
          required,
        })}
        className="rounded-full border bg-transparent"
      />
      <label htmlFor={name}>{label}</label>
      {errors?.type === "required" && (
        <p className="text-red-500 font-inter italic text-sm">
          {label} tidak boleh kosong
        </p>
      )}
    </div>
  );
};

export default CheckBox;
