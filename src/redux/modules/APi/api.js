import axios from "axios";
const BASE_URL = process.env.REACT_APP_SERVER;

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
  // 예시
  //login: (payload) => api.post(`/member/login`, payload.postLogin),
  //slice에서 await apis.signup(payload) 이렇게 쓰시면 됩니다.
  //delmenu: (payload) => api.delete(`/menu/${payload}`),

  // registerSlice
  login: (payload) => api.post(),
  signup: (payload) => api.post(),

  //customerSlice
  customerlist: () => api.get(),
  edit: (payload) => api.post(`http://localhost:8080/mypage`, payload),
};
