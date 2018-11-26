package com.shanqibei.vic.blog.service.biz;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.system.ApplicationPidFileWriter;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.cloud.netflix.feign.EnableFeignClients;


/**
 * @Author: vic
 * @CreateTime : 2018/11/26 16:02
 */
@SpringBootApplication
@EnableEurekaClient
@EnableFeignClients(basePackages = "com.shanqibei.vic")
@MapperScan("com.shanqibei.vic.blog.service.dao")
public class BootApplication {
    public static void main(String[] args) {
        SpringApplication springApplication = new SpringApplication(BootApplication.class);
        ApplicationPidFileWriter applicationPidFileWriter = new ApplicationPidFileWriter();
        springApplication.addListeners(applicationPidFileWriter);
        springApplication.run(args);
    }
}
