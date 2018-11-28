package com.shanqibei.vic.blog.service.api.api.user;

import com.shanqibei.vic.blog.service.api.dto.user.UserDTO;
import org.springframework.cloud.netflix.feign.FeignClient;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * @Author: vic
 * @CreateTime : 2018/11/28 16:13
 */
@FeignClient("blog-service")
public interface UserService {

    @RequestMapping(method = RequestMethod.POST, value = "/user/findAdminUser", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    UserDTO findAdminUser();
}
