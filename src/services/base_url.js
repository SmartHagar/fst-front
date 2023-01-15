/** @format */

import axios from "axios";

// const BASE_URL = "https://admin.fstuogp.com";
const BASE_URL = "http://127.0.0.1:8000";
const url_auth = `${BASE_URL}/auth`;
const url_api = `${BASE_URL}/json`;
const url_crud = `${BASE_URL}/crud`;
const url_storage = `${BASE_URL}/storage`;

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
  return { auth, crud, api, storage, BASE_URL };
}
