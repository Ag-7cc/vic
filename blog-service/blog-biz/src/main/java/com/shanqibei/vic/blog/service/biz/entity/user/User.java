package com.shanqibei.vic.blog.service.biz.entity.user;

import lombok.Data;

import java.util.Date;

/**
 * @Author: vic
 * @CreateTime : 2018/11/28 16:14
 */
@Data
public class User {
    private Integer id;
    private String name;
    private String nickName;
    private String email;
    private String address;
    private String work;
    private Date addTime;
    private Date updateTime;
}
