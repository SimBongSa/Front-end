import axios from "axios";
import { getCookieToken } from "../../../utils/cookie";

const BASE_URL = process.env.REACT_APP_SERVER
const Authorization = getCookieToken("access-token")

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    accept: "*/*",
  },
});

api.interceptors.request.use(function (config) {
  // const accessToken = document.cookie.split(";")[0].split["="][1];
  // .find((row) => row.startsWith("Authorization"))
  // .split("=")
  // .find((row) => row.startsWith("Bearer"));
  const accessToken = localStorage.getItem("Authorization");
  // console.log(accessToken);
  config.headers.Authorization = accessToken;
  return config;
});

export const apis = {
  // registerSlice
  memberLogin: (payload) => api.post(`${BASE_URL}/members/login`, payload),
  managerLogin: (payload) => api.post(`${BASE_URL}/managers/login`, payload),
  memberSignup: (payload) => axios.post(`${BASE_URL}/members/signup`, payload),
  managerSignup: (payload) => axios.post(`${BASE_URL}/managers/signup`, payload),

  //customerSlice
  customerlist: () => api.get(),

  // addCreateSlice
  addCreate: (payload) => axios.post(`${BASE_URL}/boards`, payload, {
    headers: {
      Authorization,
      "Content-Type": "multipart/form-data",
    }
  }),
  getCreate: () => axios.get(`${BASE_URL}/boards`),
  delCreate: (id) => axios.delete(`${BASE_URL}/boards/${id}/remove`, {
    headers: {
      Authorization,
    }
  }),
  editCreate: (payload) => axios.put(`${BASE_URL}/boards/${payload.id}`, payload.upData, {
    headers: {
      Authorization,
    }
  }),
};
