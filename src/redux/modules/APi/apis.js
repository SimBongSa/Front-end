import axios from "axios";
import { getCookieToken } from "../../../utils/cookie";

const BASE_URL = process.env.REACT_APP_SERVER;
const token = getCookieToken("access-token");

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
  const accessToken = getCookieToken("access-token");
  config.headers.Authorization = accessToken;
  return config;
});

export const apis = {
  // registerSlice
  memberLogin: (payload) => axios.post(`${BASE_URL}/members/login`, payload),
  managerLogin: (payload) => axios.post(`${BASE_URL}/managers/login`, payload),
  memberSignup: (payload) => axios.post(`${BASE_URL}/members/signup/individual`, payload),
  managerSignup: (payload) => axios.post(`${BASE_URL}/members/signup/admin`, payload),

  //customerSlice
  customerlist: (dueDate) => api.get(`${BASE_URL}/boards/${dueDate}`),
  edit: (payload) =>
    api.post(`http://localhost:8080/mypage`, payload, {
      headers: {
        Authorization: token,
        "Content-Type": "multipart/form-data",
      },
    }),
  // boards
  getboards: () => api.get(`${BASE_URL}/boards`),

  // addCreateSlice
  addCreate: (payload) =>
    axios.post(`${BASE_URL}/boards`, payload, {
      headers: {
        Authorization: token,
        "Content-Type": "multipart/form-data",
      },
    }),
  getCreate: () => axios.get(`${BASE_URL}/boards`),
  editCreate: (payload) =>
  axios.put(`${BASE_URL}/boards/${payload.id}`, payload.upData, {
    headers: {
      Authorization: token,
    },
  }),
  delCreate: (id) =>
    axios.delete(`${BASE_URL}/boards/${id}/remove`, {
      headers: {
        Authorization: token,
      },
    }),

  // MyPage (Company)
  getCompanyPage: () => api.get(`${BASE_URL}/companypage`, {
    headers: {
      Authorization: token,
    }
  }),
  getCompanyBoards: () => api.get(`${BASE_URL}/companypage/boards`, {
    headers: {
      Authorization: token,
    }
  }),
};
