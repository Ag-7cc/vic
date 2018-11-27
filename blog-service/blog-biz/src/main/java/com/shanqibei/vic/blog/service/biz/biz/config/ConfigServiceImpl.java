package com.shanqibei.vic.blog.service.biz.biz.config;


import com.github.pagehelper.PageHelper;
import com.google.common.collect.Sets;
import com.shanqibei.vic.blog.service.api.api.config.ConfigService;
import com.shanqibei.vic.blog.service.api.dto.config.ImageConfigDTO;
import com.shanqibei.vic.blog.service.api.enums.ImageConfigBizTypeEnum;
import com.shanqibei.vic.blog.service.biz.dao.config.ImageConfigDao;
import com.shanqibei.vic.blog.service.biz.entity.config.ImageConfig;
import com.shanqibei.vic.utils.VicBeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * @Author: vic
 * @CreateTime : 2018/11/26 15:55
 */
@RestController
public class ConfigServiceImpl implements ConfigService {

    @Autowired
    private ImageConfigDao imageConfigDao;

    @Override
    public List<ImageConfigDTO> findBannerList() {
        PageHelper.orderBy("BizType, Priority DESC");
        List<ImageConfig> imageConfigs = imageConfigDao.selectByBizTypes(Sets.newHashSet(ImageConfigBizTypeEnum.Banner.code, ImageConfigBizTypeEnum.ImageText.code));
        return VicBeanUtils.copyList(imageConfigs, ImageConfigDTO.class);
    }
}
