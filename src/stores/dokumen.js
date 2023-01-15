/** @format */

import create from "zustand";
import { devtools } from "zustand/middleware";
import useUrl from "../services/base_url";

// eslint-disable-next-line react-hooks/rules-of-hooks
const { api } = useUrl();

const useDokumen = create(
  devtools((set, get) => ({
    dtDokumen: [],
    setDokumen: async () => {
      try {
        const res = await api({
          method: "get",
          url: `/dokumen`,
        });
        set((state) => ({ ...state, dtDokumen: res.data }));
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
    setJenisDokumen: async () => {
      try {
        const res = await api({
          method: "get",
          url: `/jenis-dokumen`,
        });
        set((state) => ({ ...state, dtDokumen: res.data }));
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

export default useDokumen;
