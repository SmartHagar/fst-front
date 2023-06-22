/** @format */

import create from "zustand";
import { devtools } from "zustand/middleware";
import useUrl from "../services/base_url";

// eslint-disable-next-line react-hooks/rules-of-hooks
const { api } = useUrl();

const useBerita = create(
  devtools((set, get) => ({
    dataBerita: [],
    dataRandomBerita: [],
    dtShowBerita: [],
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
    setShowBerita: async ({ id, tag }) => {
      try {
        const res = await api({
          method: "get",
          url: `/berita/detail/${id}/${tag}`,
        });
        set((state) => ({ ...state, dtShowBerita: res.data }));
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
    setRandomBerita: async () => {
      try {
        const res = await api({
          method: "get",
          url: `/berita/random`,
        });
        set((state) => ({ ...state, dataRandomBerita: res.data }));
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
