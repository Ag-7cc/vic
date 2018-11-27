package com.shanqibei.vic.blog.service.biz.config;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Component;

/**
 * @Author: vic
 * @CreateTime : 2018/11/26 17:53
 */
@Component
@PropertySource(value = "file:/data/www/config/blog.properties", encoding = "UTF-8")
@ConfigurationProperties(prefix = "mysql.blog.jdbc")
@Data
public class DbConfig {
    private String url;
    private String username;
    private String password;
}
