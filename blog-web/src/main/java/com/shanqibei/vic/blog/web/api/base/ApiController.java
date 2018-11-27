package com.shanqibei.vic.blog.web.api.base;

import com.alibaba.fastjson.JSONObject;
import com.shanqibei.vic.blog.web.api.base.context.AppJsonRequest;
import com.shanqibei.vic.blog.web.api.base.context.H5JsonRequest;
import com.shanqibei.vic.blog.web.api.base.context.RequestContext;
import com.shanqibei.vic.blog.web.api.beans.ApiResponse;
import com.shanqibei.vic.blog.web.enmus.ClientTypeEnum;
import com.shanqibei.vic.blog.web.enmus.CookieDefineEnum;
import com.shanqibei.vic.blog.web.enmus.ResponseCodeEnum;
import com.shanqibei.vic.blog.web.utils.CookieUtil;
import lombok.extern.log4j.Log4j;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import java.util.Objects;

/**
 * 所有api请求入口
 *
 * @Author: vic
 * @CreateTime : 2018/11/22 14:57
 */
@CrossOrigin(
        origins = {"http://localhost:8080", "https://shanqibei.com", "https://www.shanqibei.com"},
        methods = {RequestMethod.POST, RequestMethod.GET},
        maxAge = 3600)
@RestController
@RequestMapping("/api")
@Log4j
public class ApiController {

    @Autowired
    private ExecutorFactory executorFactory;

    @RequestMapping(value = "/app/**", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public ApiResponse appJsonRequestExecute(@RequestBody AppJsonRequest appJsonRequest, HttpServletRequest request) {
        try {
            String requestURI = request.getRequestURI();
            String action = requestURI.substring("/api/app".length());
            ExecutorFactory.ExecutorExpand executorExpand = executorFactory.getExecutor(action);
            if (Objects.isNull(executorExpand)) {
                return apiNotFound();
            }
            AppJsonRequest.AppContext appContext = appJsonRequest.getContext();
            RequestContext requestContext = parseAppContext(appContext, request);
            if (executorExpand.getExecutorApi().login() && requestContext.getUserId() <= 0) {
                return needLogin();
            }
            JSONObject jsonParam = appJsonRequest.getParam();
            Object param = null;
            if (jsonParam != null) {
                param = jsonParam.toJavaObject(executorExpand.getParamClazz());
            }
            ApiResponse response = executorExpand.getExecutor().execute(requestContext, param);
            return response;
        } catch (Exception e) {
            log.error("error", e);
            return ApiResponse.build(ResponseCodeEnum.Error);
        } finally {
            log.info("api:" + request.getRequestURI());
        }
    }

    @RequestMapping(value = "/h5/**", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public ApiResponse h5JsonRequestExecute(@RequestBody H5JsonRequest h5JsonRequest, HttpServletRequest request) {
        try {
            String requestURI = request.getRequestURI();
            String action = requestURI.substring("/api/h5".length());
            ExecutorFactory.ExecutorExpand executorExpand = executorFactory.getExecutor(action);
            if (Objects.isNull(executorExpand)) {
                return apiNotFound();
            }
            RequestContext requestContext = parseH5Context(request);
            if (executorExpand.getExecutorApi().login() && requestContext.getUserId() <= 0) {
                return needLogin();
            }
            JSONObject jsonParam = h5JsonRequest.getParam();
            Object param = null;
            if (jsonParam != null) {
                param = jsonParam.toJavaObject(executorExpand.getParamClazz());
            }
            ApiResponse response = executorExpand.getExecutor().execute(requestContext, param);
            return response;
        } catch (Exception e) {
            log.error("error", e);
            return ApiResponse.build(ResponseCodeEnum.Error);
        } finally {
            log.info("api:" + request.getRequestURI());
        }
    }


    private RequestContext parseAppContext(AppJsonRequest.AppContext appContext, HttpServletRequest request) {
        RequestContext requestContext = new RequestContext();
        if (appContext == null) {
            return requestContext;
        }
        String userToken = appContext.getUserToken();
        if (userToken != null) {
            requestContext.setUserId(parseUser(userToken));
        }
        // FIXME VIC 根据ua获取客户端类型
        request.getHeader("user-agent");
        requestContext.setClientTypeEnum(ClientTypeEnum.UNKNOW);
        requestContext.setDeviceId(appContext.getDeviceId());
        requestContext.setIp(getIp(request));
        return requestContext;
    }

    private RequestContext parseH5Context(HttpServletRequest request) {
        RequestContext requestContext = new RequestContext();
        Cookie userCookie = CookieUtil.getCookie(CookieDefineEnum.BlogUser.cookieName, request);
        if (userCookie != null && StringUtils.isNotBlank(userCookie.getValue())) {
            requestContext.setUserId(parseUser(userCookie.getValue()));
        }
        requestContext.setClientTypeEnum(ClientTypeEnum.H5);
        requestContext.setIp(getIp(request));
        return requestContext;
    }

    private int parseUser(String session) {
        return 0;
    }

    private String getIp(HttpServletRequest request) {
        return "";
    }

    private ApiResponse apiNotFound() {
        return ApiResponse.build(ResponseCodeEnum.ApiNotFound);
    }

    private ApiResponse needLogin() {
        return ApiResponse.build(ResponseCodeEnum.NotLogin);
    }

}
