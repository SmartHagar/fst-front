/** @format */

import create from "zustand";
import { devtools } from "zustand/middleware";
import useUrl from "../services/base_url";

// eslint-disable-next-line react-hooks/rules-of-hooks
const { api } = useUrl();

const useDosen = create(
  devtools((set, get) => ({
    dataDosen: [],
    dataDosenProdi: [],
    setDosen: async () => {
      try {
        const res = await api({
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
        const res = await api({
          method: "get",
          url: `/dosen/prodi/${prodi}`,
        });
        set((state) => ({ ...state, dataDosenProdi: res.data.data }));
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
