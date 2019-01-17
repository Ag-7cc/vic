package com.shanqibei.vic.blog.service.biz.dao.user;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.shanqibei.vic.blog.service.biz.entity.user.User;
import org.apache.ibatis.annotations.Mapper;

/**
 * @Author: vic
 * @CreateTime : 2018/11/28 16:13
 */
@Mapper
public interface UserDao extends BaseMapper<User> {
}
