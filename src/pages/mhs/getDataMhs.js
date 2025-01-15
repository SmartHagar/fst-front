/** @format */
import { url_api_edom } from "../../services/base_url";
// get data mhs by axios
import axios from "axios";
const url = `${url_api_edom}/mhs/byOrder`;

const fetchDataMhs = async ({ page, orderBy, sort, search }) => {
  try {
    const response = await axios.get(
      `${url}?page=${page}&orderBy=${orderBy}&sort=${sort}&search=${search}`
    );
    const data = response.data;
    // Do something with the data
    console.log({ data });
    return data;
  } catch (error) {
    // Handle the error
  }
};

export default fetchDataMhs;
