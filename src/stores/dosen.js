/** @format */

import create from "zustand";
import { devtools } from "zustand/middleware";
import useUrl from "../services/base_url";

// eslint-disable-next-line react-hooks/rules-of-hooks
const { api_edom } = useUrl();

const useDosen = create(
  devtools((set, get) => ({
    dataDosen: [],
    dataDosenProdi: [],
    setDosen: async () => {
      try {
        const res = await api_edom({
          method: "get",
          url: `/dosen`,
        });
        set((state) => ({ ...state, dataDosen: res.data }));
        return {
          status: "berhasil",
          data: res.data,
        };
      } catch (error) {
        return {
          status: "error",
          error: error.response.data,
        };
      }
    },
    setDosenProdi: async (prodi) => {
      try {
        const res = await api_edom({
          method: "get",
          url: `/dosen?prodi_id=${prodi}`,
        });
        set((state) => ({ ...state, dataDosenProdi: res.data.data.data }));
        return {
          status: "berhasil",
          data: res.data,
        };
      } catch (error) {
        return {
          status: "error",
          error: error.response.data,
        };
      }
    },
  }))
);

export default useDosen;
