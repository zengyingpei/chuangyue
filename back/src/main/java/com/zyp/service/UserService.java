package com.zyp.service;

import com.zyp.dto.WxUserLoginDto;
import com.zyp.pojo.User;

import java.util.Map;

public interface UserService {
    User login(WxUserLoginDto wxUserLoginDto);
}
