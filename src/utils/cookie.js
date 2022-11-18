import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const setCookie = (name, value, exp = 5, option) => {
  // const today = new Date();
  // today.setTime(today.getTime() + exp * 24 * 60 * 60 *1000);
  // document.cookie = `${name}=${value}; expires=${today.toUTCString()}`;
  return cookies.set(name, value, {...option})
};

export const getCookieToken = (name) => {
  return cookies.get(name)
};

export const removeCookie = (name) => {
  const date = new Date('1996-12-23').toUTCString();
  document.cookie = name + '=; expires=' + date;
  return cookies.remove(name)
}