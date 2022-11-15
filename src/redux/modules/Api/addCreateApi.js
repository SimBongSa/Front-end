import axios from "axios";
<<<<<<< HEAD
// import Cookies from "universal-cookie";
const BASE_URL = process.env.REACT_APP_SERVER;
const authorization = localStorage.getItem("Authorization");

// export const setCookie = (name, value, option) => {
//   return Cookies.set(name, value, { ...option });
// };

// export const getCookie = (name) => {
//   return Cookies.get(name);
// };

=======

const BASE_URL = process.env.REACT_APP_SERVER;
const authorization = localStorage.getItem("Authorization");

>>>>>>> 0a7ac19ef2f07fc0c07631e03853eaf99e7814c9
export const addCreateApi = async (payload) => {
  console.log("BASE_URL => ", BASE_URL);
  const response = await axios.post(`${BASE_URL}/boards`, payload, {
    headers: {
      authorization,
      "Content-Type": "multipart/form-data",
    },
  });
};

export const getCreateApi = async () => {
  const response = await axios.get(`${BASE_URL}/boards`);
  return response.data;
};

export const delCreateApi = async (id) => {
  await axios.delete(`${BASE_URL}/boards/${id}/remove`, {
    headers: {
      authorization,
    },
  });
};

export const editCreateApi = async (payload) => {
  await axios.put(`${BASE_URL}/boards/${payload.id}`, payload.upData, {
    headers: {
      authorization,
    },
  });
};
