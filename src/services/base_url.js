/** @format */

import axios from "axios";

const BASE_URL = "https://admin.fstuogp.com";
// const BASE_URL = "http://127.0.0.1:8000";
const URL_EDOM = "https://back.edom-lama.fstuogp.com";
const url_auth = `${BASE_URL}/auth`;
const url_api = `${BASE_URL}/json`;
const url_crud = `${BASE_URL}/crud`;
const url_storage = `${BASE_URL}/storage`;
// EDOM
const url_api_edom = `${URL_EDOM}/api`;

export default function useUrl() {
  const auth = axios.create({
    baseURL: url_auth,
  });
  const crud = axios.create({
    baseURL: url_crud,
  });
  const api = axios.create({
    baseURL: url_api,
  });
  const storage = axios.create({
    baseURL: url_storage,
  });
  const api_edom = axios.create({
    baseURL: url_api_edom,
  });
  return {
    auth,
    crud,
    api,
    storage,
    BASE_URL,
    URL_EDOM,
    url_storage,
    api_edom,
  };
}

export { url_api_edom };
