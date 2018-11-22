package com.shanqibei.vic.blog.web.enmus;

/**
 * @Author: vic
 * @CreateTime : 2018/11/22 14:33
 */
public enum ResponseCodeEnum {
    Success(200, "成功！"),

    Error(110, "系统服务维护中，请稍后再试！"),

    ApiNotFound(111, "API未找到"),

    NotLogin(112, "请先登录"),

    IllegalParameterError(113, "非法的请求参数");

    public int code;

    public String message;

    ResponseCodeEnum(int code, String message) {
        this.code = code;
        this.message = message;
    }
}
