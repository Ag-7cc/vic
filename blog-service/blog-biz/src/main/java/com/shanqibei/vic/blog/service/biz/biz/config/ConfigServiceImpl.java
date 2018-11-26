package com.shanqibei.vic.blog.service.biz.biz.config;


import com.shanqibei.vic.blog.service.api.api.config.ConfigService;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * @Author: vic
 * @CreateTime : 2018/11/26 15:55
 */
@RestController
public class ConfigServiceImpl implements ConfigService {

    @Override
    public List<Object> findBannerList() {
        return null;
    }
}
