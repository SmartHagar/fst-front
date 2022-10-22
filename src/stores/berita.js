/** @format */

import create from "zustand";
import { devtools } from "zustand/middleware";
import useUrl from "../services/base_url";

// eslint-disable-next-line react-hooks/rules-of-hooks
const { api } = useUrl();

const useBerita = create(
  devtools((set, get) => ({
    dataBerita: [],
    setBerita: async () => {
      try {
        const res = await api({
          method: "get",
          url: `/berita`,
        });
        set((state) => ({ ...state, dataBerita: res.data }));
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

export default useBerita;
