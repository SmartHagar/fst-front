/** @format */

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Controller } from "react-hook-form";
import "./TimePick.css"; // import file css untuk styling

const DatePick = ({ control, required, name, errors, className, label }) => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className={`${className}`}>
      <label htmlFor={label} className="focus-within:border-white/[0.8]">
        {label}
      </label>
      <Controller
        name={name}
        control={control}
        rules={{ required }}
        defaultValue={startDate}
        render={({ field }) => (
          <>
            <input type="hidden" name={name} value={field.value} {...field} />
            <DatePicker
              selected={field.value}
              onChange={(value) => field.onChange(value)}
              dateFormat="dd-MMM-yyyy"
              className="timepick-datepicker"
            />
          </>
        )}
      />
      {errors?.type === "required" && (
        <p className="text-red-500 font-inter italic text-sm">
          {label} tidak boleh kosong
        </p>
      )}
    </div>
  );
};

export default DatePick;
