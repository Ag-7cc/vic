package com.shanqibei.vic.blog.service.biz.biz.user;

import com.shanqibei.vic.blog.service.api.api.user.UserService;
import com.shanqibei.vic.blog.service.api.dto.user.UserDTO;
import com.shanqibei.vic.blog.service.biz.dao.user.UserDao;
import com.shanqibei.vic.blog.service.biz.entity.user.User;
import com.shanqibei.vic.utils.VicBeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

/**
 * @Author: vic
 * @CreateTime : 2018/11/28 16:19
 */
@RestController
public class UserServiceImpl implements UserService {

    @Autowired
    private UserDao userDao;

    private static final int adminId = 1;

    @Override
    public UserDTO findAdminUser() {
        User user = userDao.selectById(adminId);
        return VicBeanUtils.copyProperties(user, UserDTO.class);
    }
}
