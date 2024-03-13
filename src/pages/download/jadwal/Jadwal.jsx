/** @format */

import React, { useState } from "react";
import SemesterTahun from "../../../components/bar/SemesterTahun";
import { useForm } from "react-hook-form";
import ShowData from "./ShowData";

const Jadwal = () => {
  // hook form
  const { watch, setValue } = useForm();
  const tahunWatch = watch("tahun");
  const semesterWatch = watch("semester");

  return (
    <div>
      <SemesterTahun
        address="/download/jadwal"
        setValue={setValue}
        tahunWatch={tahunWatch}
        semesterWatch={semesterWatch}
      />
      <ShowData />
    </div>
  );
};

export default Jadwal;
