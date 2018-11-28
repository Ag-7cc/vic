package com.shanqibei.vic.blog.web.api.base;

import com.shanqibei.vic.blog.web.annotations.ExecutorApi;
import lombok.Data;
import lombok.Setter;
import lombok.ToString;

import java.lang.reflect.Type;
import java.util.Map;

/**
 * @Author: vic
 * @CreateTime : 2018/11/22 15:08
 */
public class ExecutorFactory {

    @Setter
    private Map<String, ExecutorExpand> executorMap;

    public ExecutorExpand getExecutor(String action) {
        return executorMap.get(action);
    }

    @Data
    @ToString
    public static class ExecutorExpand {
        private ApiRequestExecutor executor;
        private ExecutorApi executorApi;
        private Type paramType;
    }
}
