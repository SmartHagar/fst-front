/** @format */

import create from "zustand";
import { devtools } from "zustand/middleware";
import useUrl from "../services/base_url";

// eslint-disable-next-line react-hooks/rules-of-hooks
const { api_edom } = useUrl();

const useJadwalApiEdom = create(
  devtools((set, get) => ({
    dtJadwal: [],
    setJadwal: async ({
      page = 1,
      limit = 10,
      search,
      tahun,
      semester,
      prodi_id,
    }) => {
      try {
        const response = await api_edom({
          method: "get",
          url: `/jadwal`,
          params: {
            limit,
            page,
            search,
            tahun,
            semester,
            prodi_id,
          },
        });
        set((state) => ({ ...state, dtJadwal: response.data.data }));
        return {
          status: "berhasil",
          data: response.data,
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

export default useJadwalApiEdom;
