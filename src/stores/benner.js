/** @format */

import create from "zustand";
import { devtools } from "zustand/middleware";
import useUrl from "../services/base_url";

// eslint-disable-next-line react-hooks/rules-of-hooks
const { api } = useUrl();

const useBenner = create(
  devtools((set, get) => ({
    dataBenner: [],
    setBenner: async (page = 1) => {
      try {
        const res = await api({
          method: "get",
          url: `/benner`,
          params: {
            page,
          },
        });
        set((state) => ({ ...state, dataBenner: res.data.data }));
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

export default useBenner;
