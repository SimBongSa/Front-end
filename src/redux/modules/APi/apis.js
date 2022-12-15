import axios from "axios";
import { getCookieToken } from "../../../utils/cookie";
const BASE_URL = process.env.REACT_APP_SERVER;

const api = axios.create({
	baseURL: BASE_URL,
	headers: {
		"Content-Type": "application/json",
		accept: "*/*",
	},
});

api.interceptors.request.use(function (config) {
	const accessToken = getCookieToken("access-token");
	config.headers.Authorization = accessToken;
	return config;
});

export const apis = {
	// registerSlice
	memberLogin: payload => axios.post(`${BASE_URL}/members/login`, payload),

	memberSignup: payload => axios.post(`${BASE_URL}/members/signup/individual`, payload),
	managerSignup: payload =>
		axios.post(`${BASE_URL}/members/signup/admin`, payload, {
			headers: {
				"Content-Type": "multipart/form-data",
			},
		}),
	checkUsername: payload => axios.get(`${BASE_URL}/members/signup/check_username/${payload}`),

	//calendarSlice
	TotalcalendarList: dueDay => api.get(`${BASE_URL}/boards/date/${dueDay}`),
	calendarList: dueDay => api.get(`${BASE_URL}/boards/date/${dueDay}`),
	MonthList: payload =>
		api.get(`${BASE_URL}/boards/month/?year=${payload.year}&month=${payload.month}`),

	// boards
	getBoard: payload => axios.get(`${BASE_URL}/boards?page=${payload.page}&size=${payload.size}`),
	getBoardCnt: (() => axios.get(`${BASE_URL}/boards/count`)),
	getBoardId: boardId => axios.get(`${BASE_URL}/boards/${boardId}`),

	// registerActivity slice
	createBoard: payload =>
		axios.post(`${BASE_URL}/boards`, payload, {
			headers: {
				Authorization: getCookieToken("access-token"),
				"Content-Type": "multipart/form-data",
			},
		}),

	editBoard: payload =>
		axios.put(`${BASE_URL}/boards/${payload.id}`, payload.upDate, {
			headers: {
				Authorization: getCookieToken("access-token"),
				"Content-Type": "multipart/form-data",
			},
		}),

	delBoard: payload =>
		axios.delete(`${BASE_URL}/boards/${payload}`, {
			headers: {
				Authorization: getCookieToken("access-token"),
				"Content-Type": "multipart/form-data",
			},
		}),

	// 봉사 신청
	applyBoard: id =>
		axios.post(`${BASE_URL}/boards/${id}/apply`, id, {
			headers: {
				Authorization: getCookieToken("access-token"),
			},
		}),

	// MyPage (User)
	getUserPage: id =>
		api.get(`${BASE_URL}/mypage/${id}`, {
			headers: {
				Authorization: getCookieToken("access-token"),
			},
		}),
	getUserEnroll: id =>
		api.get(`${BASE_URL}/mypage/${id}/enroll`, {
			headers: {
				Authorization: getCookieToken("access-token"),
			},
		}),
	getUserWait: id =>
		api.get(`${BASE_URL}/mypage/${id}/enroll/wait`, {
			headers: {
				Authorization: getCookieToken("access-token"),
			},
		}),
	getUserPass: id =>
		api.get(`${BASE_URL}/mypage/${id}/enroll/pass`, {
			headers: {
				Authorization: getCookieToken("access-token"),
			},
		}),
	getUserReject: id =>
		api.get(`${BASE_URL}/mypage/${id}/enroll/fail`, {
			headers: {
				Authorization: getCookieToken("access-token"),
			},
		}),
	putUserPage: payload =>
		api.put(`${BASE_URL}/mypage`, payload, {
			headers: {
				Authorization: getCookieToken("access-token"),
				"Content-Type": "multipart/form-data",
			},
		}),

	getOtherUserInfo: id => api.get(`${BASE_URL}/mypage/${id}`),
	getOtherUserEnroll: id => api.get(`${BASE_URL}/mypage/${id}/enroll/pass`),

	// MyPage (Company)
	getCompanyPage: id =>
		api.get(`${BASE_URL}/companypage/${id}`, {
			headers: {
				Authorization: getCookieToken("access-token"),
			},
		}),
	getCompanyBoards: id =>
		api.get(`${BASE_URL}/companypage/${id}/boards`, {
			headers: {
				Authorization: getCookieToken("access-token"),
			},
		}),
	putCompanyPage: payload =>
		api.put(`${BASE_URL}/companypage`, payload, {
			headers: {
				Authorization: getCookieToken("access-token"),
				"Content-Type": "multipart/form-data",
			},
		}),
	getAppliList: id =>
		api.get(`${BASE_URL}/companypage/boards/${id}`, {
			headers: {
				Authorization: getCookieToken("access-token"),
			},
		}),
	getAllAppliList: payload =>
		api.get(`${BASE_URL}/companypage/applicants?page=${payload.page}&size=${payload.size}`, {
			headers: {
				Authorization: getCookieToken("access-token"),
			},
		}),
	putApprove: payload =>
		api.put(`${BASE_URL}/companypage/approve/${payload.id}`, payload, {
			headers: {
				Authorization: getCookieToken("access-token"),
			},
		}),
	putDisapprove: payload =>
		api.put(`${BASE_URL}/companypage/disapprove/${payload.id}`, payload, {
			headers: {
				Authorization: getCookieToken("access-token"),
			},
		}),
	getOtherCompanyInfo: id => api.get(`${BASE_URL}/companypage/${id}`),
	getOtherCompanyBoards: id => api.get(`${BASE_URL}/companypage/${id}/boards`),

	//commentSlice
	getTotalComment: payload =>
		axios.get(`${BASE_URL}/boards/${payload}`, {
			headers: {
				Authorization: getCookieToken("access-token"),
			},
		}),
	getComment: payload =>
		axios.get(`${BASE_URL}/boards/${payload}`, {
			headers: {
				Authorization: getCookieToken("access-token"),
			},
		}),
	postComment: payload =>
		axios.post(`${BASE_URL}/comments/${payload.id}`, payload, {
			headers: { Authorization: getCookieToken("access-token") },
		}),
	putComment: payload =>
		axios.put(`${BASE_URL}/comments/${payload.commentId}`, payload, {
			headers: {
				Authorization: getCookieToken("access-token"),
			},
		}),
	deleteComment: commentId =>
		axios.delete(`${BASE_URL}/comments/${commentId}`, {
			headers: {
				Authorization: getCookieToken("access-token"),
			},
		}),

	// Search
	getSearchBoards: payload =>
		axios.get(
			`${BASE_URL}/boards/search?tag=${payload.category}&startDate=${payload.startDate}&endDate=${payload.endDate}&area=${payload.location}`,
			{
				headers: {
					contentType: "application/json;",
				},
			}
		),

	// Chat Apis
	getChatList: () =>
		axios.get(`${BASE_URL}/chatroom`, {
			headers: {
				Authorization: getCookieToken("access-token"),
			},
		}),

	createChatRoom: payload =>
		axios.post(`${BASE_URL}/chatroom`, payload, {
			headers: {
				Authorization: getCookieToken("access-token"),
			},
		}),

	getChatHistory: id =>
		axios.get(`${BASE_URL}/chatroom/${id}/history`, {
			headers: {
				Authorization: getCookieToken("access-token"),
			},
		}),
};
