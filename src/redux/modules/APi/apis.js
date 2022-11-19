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
  managerSignup: (payload) => api.post(`${BASE_URL}/members/signup/admin`, payload, {
    headers: {
      "Content-Type": "multipart/form-data",
    }
  }),
  checkUsername: (payload) => axios.get(`${BASE_URL}/members/check_username/${payload}`),
  checkNickname: (payload) => axios.get(`${BASE_URL}/members/check_nickname/${payload}`),

  //callendarSlice
  mainlist: (boardId) => api.get(`${BASE_URL}/boards/${boardId}`),
  calendarList: (dueDay) => api.get(`${BASE_URL}/boards/date/${dueDay}`),
  edit: (payload) =>
    api.put(`${BASE_URL}/mypage`, payload, {
      // headers: {
      //   "Content-Type": "multipart/form-data",
      // },
    }),

  // boards
  getboards: () => api.get(`${BASE_URL}/boards`),
  getboardId: (boardId) => api.get(`${BASE_URL}/boards/${boardId}`),

  // registerActivity slice
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

  // 봉사 신청
  applyBoard: (id) => 
    api.post(`${BASE_URL}/boards/${id}/apply`, {
      headers: {
        Authorization: token,
      }
    }),

  // MyPage (User)
  getUserPage: () =>
    api.get(`${BASE_URL}/mypage`, {
      headers: {
        Authorization: token,
      }
    }),
  getUserEnroll: () => 
    api.get(`${BASE_URL}/mypage/enroll`, {
      headers: {
        Authorization: token,
      }
    }),
  getUserWait: () =>
    api.get(`${BASE_URL}/mypage/enroll/wait`, {
      headers: {
        Authorization: token,
      }
    }),
  getUserPass: () =>
    api.get(`${BASE_URL}/enroll/pass`, {
      headers: {
        Authorization: token,
      }
    }),

  // MyPage (Company)
  getCompanyPage: () =>
    api.get(`${BASE_URL}/companypage`, {
      headers: {
        Authorization: token,
      },
    }),
  getCompanyBoards: () =>
    api.get(`${BASE_URL}/companypage/boards`, {
      headers: {
        Authorization: token,
      },
    }),

  //commentSlice
  getComment: (payload) =>
    axios.get(`${BASE_URL}/boards/${payload}`, {
      headers: {
        Authorization: token,
      },
    }),
  postComment: (payload) =>
    axios.post(`${BASE_URL}/comments/${payload.id}`, payload, {
      headers: {
        Authorization: token,
      },
    }),
  putComment: (payload) =>
    axios.put(
      `${BASE_URL}/comments/${payload.commentId}`,
      { content: payload.content },
      {
        headers: {
          Authorization: token,
        },
      }
    ),
  deleteComment: (commentId) =>
    axios.delete(`${BASE_URL}/comments/${commentId}`, {
      headers: {
        Authorization: token,
      },
    }),
};
