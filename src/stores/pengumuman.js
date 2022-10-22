/** @format */

import create from "zustand";
import { devtools } from "zustand/middleware";
import useUrl from "../services/base_url";

// eslint-disable-next-line react-hooks/rules-of-hooks
const { api } = useUrl();

const usePengumuman = create(
  devtools((set, get) => ({
    dataPengumuman: [],
    setPengumuman: async () => {
      try {
        const res = await api({
          method: "get",
          url: `/pengumuman`,
        });
        set((state) => ({ ...state, dataPengumuman: res.data }));
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

export default usePengumuman;
