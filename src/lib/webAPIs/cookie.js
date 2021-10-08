

/**
 * Ref https://www.w3schools.com/js/js_cookies.asp
 * key=value;expires 형태의 쿠키를 저장합니다
 * @param {String} cookieName 브라우저에 저장할 쿠키 key
 * @param {String} cookieValue 쿠키 value
 * @param {Number} expireDays 쿠키 유지기간(일)
 */
export function setCookie(cookieName, cookieValue, expireDays) {
  const d = new Date();
  d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
}

/**
 * Ref https://www.w3schools.com/js/js_cookies.asp
 * cookieName에 해당하는 value를 반환합니다.
 * @param {String} cookieName cookie value를 return 받기위한 key
 * @returns cookieValue cookieName에 해당하는 value
 */
export function getCookie(cookieName) {
  let name = cookieName + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
