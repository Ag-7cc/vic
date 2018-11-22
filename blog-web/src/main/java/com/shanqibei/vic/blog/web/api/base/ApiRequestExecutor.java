package com.shanqibei.vic.blog.web.api.base;

import com.shanqibei.vic.blog.web.api.base.context.RequestContext;
import com.shanqibei.vic.blog.web.api.beans.ApiResponse;

/**
 * @Author: vic
 * @CreateTime : 2018/11/22 14:28
 */
public interface ApiRequestExecutor<P> {
    ApiResponse execute(RequestContext requestContext, P param);
}
