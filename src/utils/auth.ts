import { isBrowserReady } from "./browser";
import { LOCAL_STORAGE_ITEM_KEYS } from "../constants";
import { deleteCookie, getCookie, setCookie } from "./cookie";

/**
 * Sets token in the header
 * @param {string} token then token which needs to be saved
 */
export const setToken = (token: string) => {
  if (isBrowserReady()) {
    setCookie("token", token, 365);
  }
};

export const getToken = () => {
  return getCookie("token");
};

export const deleteToken = () => {
  if (isBrowserReady()) {
    deleteCookie("token");
  }
};

export const deleteUserInfo = () => {
  if (isBrowserReady()) {
    localStorage.removeItem(LOCAL_STORAGE_ITEM_KEYS.USER_DETAILS);
    localStorage.removeItem(LOCAL_STORAGE_ITEM_KEYS.CART_PRODUCTS);
  }
};

export const isUserAuthenticated = () => {
  return getCookie("token") ? true : false;
};
