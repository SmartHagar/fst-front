/** @format */

import create from "zustand";
import { devtools } from "zustand/middleware";
import useUrl from "../services/base_url";

// eslint-disable-next-line react-hooks/rules-of-hooks
const { api } = useUrl();

const useGaleri = create(
  devtools((set, get) => ({
    dataGaleri: [],
    setGaleri: async (page) => {
      try {
        const res = await api({
          method: "get",
          url: `/galeri`,
          params: {
            page,
          },
        });
        set((state) => ({ ...state, dataGaleri: res.data }));
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

export default useGaleri;
