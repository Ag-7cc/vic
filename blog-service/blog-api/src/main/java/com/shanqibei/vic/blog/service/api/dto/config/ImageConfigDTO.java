package com.shanqibei.vic.blog.service.api.dto.config;

import lombok.Data;

import java.util.Date;

/**
 * @Author: vic
 * @CreateTime : 2018/11/27 11:19
 */
@Data
public class ImageConfigDTO {
    private Integer imageId;
    private String image;
    private Integer linkType;
    private String link;
    private String text;
    private Integer priority;
    private Integer bizType;
    private Date addTime;
    private Date updateTime;
}


