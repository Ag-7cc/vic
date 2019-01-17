package com.shanqibei.vic.blog.service.api.dto.user;

import lombok.Data;

import java.util.Date;

/**
 * @Author: vic
 * @CreateTime : 2018/11/28 16:13
 */
@Data
public class UserDTO {
    private Integer id;
    private String name;
    private String nickName;
    private String email;
    private String address;
    private String work;
    private Date addTime;
    private Date updateTime;
}
