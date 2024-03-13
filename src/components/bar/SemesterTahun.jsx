/** @format */

import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const SemesterTahun = ({ address, semesterWatch, tahunWatch, setValue }) => {
  const navigate = useNavigate();
  // get tahun semester from url
  const [searchParams] = useSearchParams();
  const tahun = searchParams.get("tahun");
  const semester = searchParams.get("semester");
  useEffect(() => {
    if (!tahun && !semester) {
      const year = new Date().getFullYear();
      const month = new Date().getMonth();
      const semester = month > 6 ? "Ganjil" : "Genap";
      setValue("tahun", year);
      setValue("semester", semester);
      // add parameter to url
      navigate(address + "?tahun=" + year + "&semester=" + semester);
    } else {
      setValue("tahun", parseInt(tahun || ""));
      setValue("semester", semester);
    }

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (tahunWatch && semesterWatch) {
      navigate(address + "?tahun=" + tahunWatch + "&semester=" + semesterWatch);
    }

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tahunWatch, semesterWatch]);

  return <></>;
};

export default SemesterTahun;
