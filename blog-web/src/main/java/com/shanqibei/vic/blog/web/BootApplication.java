package com.shanqibei.vic.blog.web;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.system.ApplicationPidFileWriter;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.cloud.netflix.feign.EnableFeignClients;

/**
 * 启动类
 *
 * @Author: vic
 * @CreateTime : 2018/11/22 14:10
 */
@SpringBootApplication
@EnableEurekaClient
@EnableFeignClients(basePackages = "com.shanqibei.vic")
public class BootApplication {

    public static void main(String[] args) {
        SpringApplication springApplication = new SpringApplication(BootApplication.class);
        ApplicationPidFileWriter applicationPidFileWriter = new ApplicationPidFileWriter();
        springApplication.addListeners(applicationPidFileWriter);
        springApplication.run(args);
    }
}
