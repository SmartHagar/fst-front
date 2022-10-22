/** @format */

import create from "zustand";
import { devtools } from "zustand/middleware";
import useUrl from "../services/base_url";

// eslint-disable-next-line react-hooks/rules-of-hooks
const { api } = useUrl();

const useSlide = create(
  devtools((set, get) => ({
    dataSlide: [],
    setSlide: async () => {
      try {
        const res = await api({
          method: "get",
          url: `/slide`,
        });
        set((state) => ({ ...state, dataSlide: res.data.data }));
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

export default useSlide;
