package com.shanqibei.vic.blog.web.utils;

import com.shanqibei.vic.blog.web.enmus.CookieDefineEnum;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * @Author: vic
 * @CreateTime : 2018/11/22 15:57
 */
public class CookieUtil {

    public static Cookie getCookie(String name, HttpServletRequest httpServletRequest) {
        Cookie[] cookies = httpServletRequest.getCookies();
        if (cookies != null) {
            for (Cookie cookie : cookies) {
                if (name.equals(cookie.getName())) {
                    return cookie;
                }
            }
        }
        return null;
    }

    public static String getCookie(CookieDefineEnum cookieDefineEnum, HttpServletRequest httpServletRequest) {
        Cookie cookie = getCookie(cookieDefineEnum.cookieName, httpServletRequest);
        if (cookie == null) {
            return "";
        }
        return cookie.getValue();
    }

    public static void setCookie(CookieDefineEnum cookieDefineEnum, String value, HttpServletResponse httpServletResponse) {
        Cookie cookie = new Cookie(cookieDefineEnum.cookieName, value);
        cookie.setMaxAge(Math.toIntExact(cookieDefineEnum.expireSecond));
        cookie.setPath("/");
        httpServletResponse.addCookie(cookie);
    }
}
