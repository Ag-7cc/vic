package com.shanqibei.vic.blog.service.api.api.config;

import com.shanqibei.vic.blog.service.api.dto.config.ImageConfigDTO;
import org.springframework.cloud.netflix.feign.FeignClient;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

/**
 * @Author: vic
 * @CreateTime : 2018/11/26 15:52
 */
@FeignClient("blog-service")
public interface ConfigService {

    @RequestMapping(method = RequestMethod.POST, value = "/config/banner", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    List<ImageConfigDTO> findBannerList();
}
