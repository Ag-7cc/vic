package com.shanqibei.vic.blog.web.api.base.context;

import com.shanqibei.vic.blog.web.enmus.ClientTypeEnum;
import lombok.Data;

/**
 * 请求上下文
 *
 * @Author: vic
 * @CreateTime : 2018/11/22 14:29
 */
@Data
public class RequestContext {
    private int userId;
    private ClientTypeEnum clientTypeEnum;
    private String deviceId;
    private String ip;
}
