package com.shanqibei.vic.blog.web.api.base.context;

import com.alibaba.fastjson.JSONObject;
import lombok.Data;

/**
 * @Author: vic
 * @CreateTime : 2018/11/22 15:01
 */
@Data
public class AppJsonRequest {
    private AppContext context;
    private JSONObject param;

    @Data
    public static class AppContext {
        private String userToken;
        private String deviceId;
    }
}
