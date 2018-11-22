package com.shanqibei.vic.blog.web.api.base.component;

import com.shanqibei.vic.blog.web.annotations.ExecutorApi;
import com.shanqibei.vic.blog.web.api.base.ApiRequestExecutor;
import com.shanqibei.vic.blog.web.api.base.ExecutorFactory;
import org.apache.commons.lang.StringUtils;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;

import java.lang.reflect.Method;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

/**
 * @Author: vic
 * @CreateTime : 2018/11/22 15:06
 */
@Configuration
@Component
public class ExecutorApiScanner {

    @Bean
    public ExecutorFactory apiExecutorFactory(ApplicationContext applicationContext) {
        ExecutorFactory factory = new ExecutorFactory();
        Map<String, ExecutorFactory.ExecutorExpand> executorMap = new HashMap<>();
        String[] beanNames = applicationContext.getBeanNamesForAnnotation(ExecutorApi.class);
        if (beanNames != null && beanNames.length > 0) {
            Arrays.asList(beanNames).forEach(name -> {
                Object bean = applicationContext.getBean(name, ApiRequestExecutor.class);
                ExecutorApi annotation = bean.getClass().getAnnotation(ExecutorApi.class);
                if (bean instanceof ApiRequestExecutor && StringUtils.isNotBlank(annotation.value())) {
                    ExecutorFactory.ExecutorExpand executorExpand = new ExecutorFactory.ExecutorExpand();
                    // 获取bean对象
                    ApiRequestExecutor executor = (ApiRequestExecutor) bean;
                    executorExpand.setExecutor(executor);
                    // 获取注解
                    executorExpand.setExecutorApi(annotation);
                    for (Method method : executor.getClass().getMethods()) {
                        if (Objects.nonNull(method) && method.getParameterTypes().length == 2) {
                            executorExpand.setParamClazz(method.getParameterTypes()[1]);
                            break;
                        }
                    }
                    if (executorExpand.getExecutor() != null && executorExpand.getExecutorApi() != null && executorExpand.getParamClazz() != null) {
                        executorMap.put(annotation.value(), executorExpand);
                    }
                }
            });
        }
        factory.setExecutorMap(executorMap);

        return factory;
    }
}
