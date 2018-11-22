package com.shanqibei.vic.blog.web.enmus;

/**
 * @Author: vic
 * @CreateTime : 2018/11/22 14:54
 */
public enum CookieDefineEnum {

    BlogUser("blog_user", 30 * 24 * 3600);

    public String cookieName;

    public long expireSecond;

    CookieDefineEnum(String cookieName, long expireSecond) {
        this.cookieName = cookieName;
        this.expireSecond = expireSecond;
    }
}
