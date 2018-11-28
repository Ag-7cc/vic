package com.shanqibei.vic.blog.web.api.base.component;

import com.shanqibei.vic.blog.web.annotations.ExecutorApi;
import com.shanqibei.vic.blog.web.api.base.ApiRequestExecutor;
import com.shanqibei.vic.blog.web.api.base.ExecutorFactory;
import org.apache.commons.lang.StringUtils;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;

import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

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
                    // 获取父类泛型参数类型
                    Type superclass = bean.getClass().getGenericSuperclass();
                    if (superclass instanceof ParameterizedType) {
                        executorExpand.setParamType(((ParameterizedType) superclass).getActualTypeArguments()[0]);
                    }
                    if (executorExpand.getExecutor() != null && executorExpand.getExecutorApi() != null && executorExpand.getParamType() != null) {
                        executorMap.put(annotation.value(), executorExpand);
                    }
                }
            });
        }
        factory.setExecutorMap(executorMap);

        return factory;
    }
}
