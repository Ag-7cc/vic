package com.shanqibei.vic.blog.service.biz.entity.config;

import lombok.Data;

import java.util.Date;

/**
 * @Author: vic
 * @CreateTime : 2018/11/27 11:19
 */
@Data
public class ImageConfig {
    private Integer id;
    private String image;
    private Integer linkType;
    private String link;
    private String text;
    private Integer priority;
    private Integer bizType;
    private Date addTime;
    private Date updateTime;
}


