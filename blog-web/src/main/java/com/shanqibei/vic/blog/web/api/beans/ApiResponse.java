package com.shanqibei.vic.blog.web.api.beans;

import com.shanqibei.vic.blog.web.enmus.ResponseCodeEnum;
import lombok.Data;

/**
 * @Author: vic
 * @CreateTime : 2018/11/22 14:28
 */
@Data
public class ApiResponse {
    private int code;
    private String message;
    private Object data;

    public static ApiResponse build(ResponseCodeEnum responseCodeEnum) {
        ApiResponse apiResponse = new ApiResponse();
        apiResponse.setCode(responseCodeEnum.code);
        apiResponse.setMessage(responseCodeEnum.message);
        return apiResponse;
    }

    public static ApiResponse build(ResponseCodeEnum responseCodeEnum, Object data) {
        ApiResponse apiResponse = new ApiResponse();
        apiResponse.setCode(responseCodeEnum.code);
        apiResponse.setMessage(responseCodeEnum.message);
        apiResponse.setData(data);
        return apiResponse;
    }
}
