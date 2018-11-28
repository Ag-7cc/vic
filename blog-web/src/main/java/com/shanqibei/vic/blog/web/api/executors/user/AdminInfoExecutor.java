package com.shanqibei.vic.blog.web.api.executors.user;

import com.shanqibei.vic.blog.service.api.api.user.UserService;
import com.shanqibei.vic.blog.service.api.dto.user.UserDTO;
import com.shanqibei.vic.blog.web.annotations.ExecutorApi;
import com.shanqibei.vic.blog.web.api.base.BaseExecutor;
import com.shanqibei.vic.blog.web.api.base.context.RequestContext;
import com.shanqibei.vic.blog.web.api.beans.ApiResponse;
import com.shanqibei.vic.blog.web.api.beans.user.UserInfo;
import com.shanqibei.vic.blog.web.api.params.EmptyParam;
import com.shanqibei.vic.blog.web.enmus.ResponseCodeEnum;
import com.shanqibei.vic.utils.MapBuilder;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Objects;

/**
 * @Author: vic
 * @CreateTime : 2018/11/28 16:22
 */
@ExecutorApi(value = "/admin/info", login = false)
public class AdminInfoExecutor extends BaseExecutor<EmptyParam> {
    @Autowired
    private UserService userService;

    @Override
    public ApiResponse execute(RequestContext context, EmptyParam param) {
        UserDTO userDTO = userService.findAdminUser();
        return ApiResponse.build(ResponseCodeEnum.Success, MapBuilder.newBuilder().addData("userInfo", consume(userDTO)).build());
    }

    private UserInfo consume(UserDTO userDTO) {
        if (Objects.isNull(userDTO)) {
            return null;
        }
        UserInfo userInfo = new UserInfo();
        userInfo.setNickName(userDTO.getNickName());
        userInfo.setWork(userDTO.getWork());
        userInfo.setEmail(userDTO.getEmail());
        userInfo.setAddress(userDTO.getAddress());
        return userInfo;
    }
}
