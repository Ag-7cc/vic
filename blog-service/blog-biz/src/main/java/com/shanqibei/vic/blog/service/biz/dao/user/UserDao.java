package com.shanqibei.vic.blog.service.biz.dao.user;

import com.shanqibei.vic.blog.service.biz.entity.user.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

/**
 * @Author: vic
 * @CreateTime : 2018/11/28 16:13
 */
@Mapper
public interface UserDao {
    String fields = " `Id`, `Name`, `NickName`, `Email`, `Address`, `Work`, `AddTime`, `UpdateTime` ";

    @Select("SELECT " + fields + " FROM `User` WHERE `Id` = #{id}")
    User selectById(@Param("id") int id);
}
