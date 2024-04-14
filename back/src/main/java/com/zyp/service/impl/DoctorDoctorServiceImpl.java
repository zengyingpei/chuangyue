package com.zyp.service.impl;

import com.zyp.dto.DoctorLoginDto;
import com.zyp.exception.AccountNotFoundException;
import com.zyp.exception.PasswordErrorException;
import com.zyp.mapper.DoctorMapper;
import com.zyp.pojo.Doctor;
import com.zyp.service.DoctorDoctorService;
import com.zyp.utils.Md5Util;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DoctorDoctorServiceImpl implements DoctorDoctorService {
    @Autowired
    DoctorMapper doctorMapper;

    /**
     * @ description 医生端口登录
     * @param doctorLoginDto
     * @ return com.zyp.pojo.Doctor
     * @ author DELL
     */
    public Doctor login(DoctorLoginDto doctorLoginDto) {
        String name = doctorLoginDto.getName();
        String password = doctorLoginDto.getPassword();

        Doctor doctor = doctorMapper.selectByName(name);

        // 账号是否存在
        if(doctor==null){
            throw  new AccountNotFoundException("账号不存在");
        }

        password = Md5Util.getMD5String(password);
        if(!password.equals(doctor.getPassword())){
            throw  new PasswordErrorException("密码错误");
        }

        return doctor;
    }
}
