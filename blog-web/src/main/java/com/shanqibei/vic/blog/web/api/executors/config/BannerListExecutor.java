package com.shanqibei.vic.blog.web.api.executors.config;

import com.shanqibei.vic.blog.service.api.api.config.ConfigService;
import com.shanqibei.vic.blog.web.annotations.ExecutorApi;
import com.shanqibei.vic.blog.web.api.base.BaseExecutor;
import com.shanqibei.vic.blog.web.api.base.context.RequestContext;
import com.shanqibei.vic.blog.web.api.beans.ApiResponse;
import com.shanqibei.vic.blog.web.api.params.EmptyParam;
import org.springframework.beans.factory.annotation.Autowired;

/**
 * @Author: vic
 * @CreateTime : 2018/11/26 14:33
 */
@ExecutorApi("/banner/list")
public class BannerListExecutor extends BaseExecutor<EmptyParam> {

    @Autowired
    private ConfigService configService;

    @Override
    public ApiResponse execute(RequestContext context, EmptyParam param) {
        return null;
    }
}
