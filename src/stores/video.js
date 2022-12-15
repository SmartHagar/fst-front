/** @format */

import create from "zustand";
import { devtools } from "zustand/middleware";
import useUrl from "../services/base_url";

// eslint-disable-next-line react-hooks/rules-of-hooks
const { api } = useUrl();

const useVideo = create(
  devtools((set, get) => ({
    dataVideo: [],
    setVideo: async (page = 1) => {
      try {
        const res = await api({
          method: "get",
          url: `/video`,
          params: {
            page,
          },
        });
        set((state) => ({ ...state, dataVideo: res.data.data }));
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
    setVideoUtama: async () => {
      try {
        const res = await api({
          method: "get",
          url: `/video`,
        });
        const { data } = res.data;
        const utama = data.filter((el) => el.status === "Utama");
        set((state) => ({ ...state, dataVideo: utama }));
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

export default useVideo;
