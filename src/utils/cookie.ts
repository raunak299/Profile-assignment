import { isBrowserReady } from "./browser";

/**
 * Sets a cookie with the provided name, value and expiry days.
 * @param name Name of cookie
 * @param value value of cookie
 * @param expiryDays number of days until the cookie expires
 */
export function setCookie(name: string, value: string, expiryDays: number) {
  const d = new Date();
  d.setTime(d.getTime() + expiryDays * 24 * 60 * 60 * 1000);
  const expires = `expires=${d.toUTCString()}`;
  document.cookie = `${name}=${value};${expires};path=/`;
}

/**
 * parse the raw cookies string as Record
 * @param rawCookies the raw cookie string in name1=value1; format
 * @returns Map of cookies parsed
 */
export const parseCookie = (rawCookies: string) => {
  const allCookieValue: Record<string, string> = {};
  const cookies: string[] = rawCookies.split(";");
  for (const cookie of cookies) {
    const [name, value] = cookie.split("=");
    const trimmedName = name.trim();
    const trimmedValue = value.trim();
    allCookieValue[trimmedName] = trimmedValue;
  }
  return allCookieValue;
};

/**
 * Parses cookie from browser
 * @param cookieName Name of cookie
 * @param fromCookie external cookie from which the cookie value to be parsed
 * @returns cookie as string
 */
export const getCookie = (cookieName: string, fromCookie?: string) => {
  let decodedCookie = fromCookie ?? "";

  if (isBrowserReady() && fromCookie === undefined) {
    decodedCookie = decodeURIComponent(document.cookie);
  }

  const cookies: string[] = decodedCookie.split(";");
  for (const cookie of cookies) {
    const [name, value] = cookie.split("=");
    const trimmedName = name.trim();
    if (trimmedName === cookieName) {
      return value.trim();
    }
  }

  return null;
};

/**
 * delete the cookie with [name]
 * @param name name of cookie
 */
export const deleteCookie = (name: string) => {
  const d = new Date();
  d.setTime(d.getTime() - 1);
  const expires = `expires=${d.toUTCString()}`;
  document.cookie = `${name}=;${expires};path=/`;
};
