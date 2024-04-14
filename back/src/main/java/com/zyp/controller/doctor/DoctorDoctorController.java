package com.zyp.controller.doctor;

import com.zyp.dto.DoctorLoginDto;
import com.zyp.pojo.Doctor;
import com.zyp.pojo.Result;
import com.zyp.properties.JwtProperties;
import com.zyp.service.DoctorDoctorService;
import com.zyp.utils.JwtUtil;
import com.zyp.vo.DoctorLoginVo;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@Slf4j
@RequestMapping("/api/doctor/doctor")
public class DoctorDoctorController {
    @Autowired
    DoctorDoctorService doctorDoctorService;
    @Autowired
    JwtProperties jwtProperties;

    /**
     * @ description 医生端口登录
     * @param doctorLoginDto
     * @ return com.zyp.pojo.Result<com.zyp.vo.DoctorLoginVo>
     * @ author DELL
     */
    @PostMapping("/login")
    public Result<DoctorLoginVo> Login(@RequestBody DoctorLoginDto doctorLoginDto){

        Doctor doctor = doctorDoctorService.login(doctorLoginDto);
        log.info("登录成功{}",doctor);

        // 生成token的载荷
        Map<String,Object> claims =  new HashMap<>();
        claims.put("doctorId", doctor.getId());

        // 生成token
        String token = JwtUtil.createJWT(
                jwtProperties.getDoctorSecretKey(),
                jwtProperties.getDoctorTtl(),
                claims
        );

        // 封装前端数据
        DoctorLoginVo doctorLoginVo = DoctorLoginVo.builder()
                .id(doctor.getId())
                .phone(doctor.getPhone())
                .name(doctor.getName())
                .avatar(doctor.getAvatar())
                .token(token)
                .build();

        return Result.success(doctorLoginVo);
    }
}
