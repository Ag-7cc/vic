package com.shanqibei.vic.blog.service.biz.dao.config;

import com.shanqibei.vic.blog.service.biz.entity.config.ImageConfig;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import java.util.List;
import java.util.Set;

/**
 * @Author: vic
 * @CreateTime : 2018/11/27 11:21
 */
@Mapper
public interface ImageConfigDao {
    String fields = " `ImageId`, `Image`, `LinkType`, `Link`, `Text`, `Priority`, `BizType`, `AddTime`, `UpdateTime` ";

    @Select("SELECT " + fields + " FROM `ImageConfig` WHERE `BizType` = #{bizType} ")
    List<ImageConfig> selectByBizType(@Param("bizType") int bizType);

    @Select({"<script>",
            "SELECT " + fields + " FROM `ImageConfig` WHERE `BizType` In <foreach collection=\"bizTypes\" item=\"item\" open=\"(\" close=\")\" separator=\",\">#{item}</foreach>",
            "</script>"})
    List<ImageConfig> selectByBizTypes(@Param("bizTypes") Set<Integer> bizTypes);
}
