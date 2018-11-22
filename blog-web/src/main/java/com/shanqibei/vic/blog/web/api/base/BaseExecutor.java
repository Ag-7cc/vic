package com.shanqibei.vic.blog.web.api.base;

import com.shanqibei.vic.blog.web.api.base.context.RequestContext;
import com.shanqibei.vic.blog.web.api.beans.ApiResponse;
import lombok.extern.log4j.Log4j;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * @Author: vic
 * @CreateTime : 2018/11/22 14:27
 */
@Log4j
public abstract class BaseExecutor<P> implements ApiRequestExecutor<P> {
    protected HttpServletRequest getRequest() {
        return ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getRequest();
    }

    protected HttpServletResponse getResponse() {
        return ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getResponse();
    }

    public abstract ApiResponse execute(RequestContext context, P param);
}
