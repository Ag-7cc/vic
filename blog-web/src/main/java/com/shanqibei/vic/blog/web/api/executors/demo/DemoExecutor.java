package com.shanqibei.vic.blog.web.api.executors.demo;

import com.shanqibei.vic.blog.web.annotations.ExecutorApi;
import com.shanqibei.vic.blog.web.api.base.BaseExecutor;
import com.shanqibei.vic.blog.web.api.base.context.RequestContext;
import com.shanqibei.vic.blog.web.api.beans.ApiResponse;
import com.shanqibei.vic.blog.web.api.params.EmptyParam;
import com.shanqibei.vic.blog.web.enmus.ResponseCodeEnum;

/**
 * @Author: vic
 * @CreateTime : 2018/11/22 14:44
 */
@ExecutorApi("/aa")
public class DemoExecutor extends BaseExecutor<EmptyParam> {

    @Override
    public ApiResponse execute(RequestContext context, EmptyParam param) {
        return ApiResponse.build(ResponseCodeEnum.Success);
    }
}
