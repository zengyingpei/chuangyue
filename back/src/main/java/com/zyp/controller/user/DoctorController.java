package com.zyp.controller.user;

import com.zyp.dto.DoctorPageQueryDto;
import com.zyp.pojo.Doctor;
import com.zyp.pojo.PageBean;
import com.zyp.pojo.Result;
import com.zyp.service.DoctorService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Api(tags = "医生相关的接口")
@RequestMapping("/api/user/doctor")
public class DoctorController {
    @Autowired
    private DoctorService doctorService;
    @ApiOperation("根据疾病id查询可以治疗的所有医生(分页查询)")
    @PostMapping()
    public Result<PageBean> selectBySicknessId(@RequestBody DoctorPageQueryDto doctorPageQueryDto){
        PageBean<Doctor> pageResult=doctorService.selectBySicknessId(doctorPageQueryDto);
        return Result.success(pageResult);
    }

    @ApiOperation("获取精选医生的信息")
    @GetMapping("/select_doc")
    public Result<List<Doctor>> selectSelectedDoctor( ){
        List<Doctor> list=doctorService.selectSelectedDoctor();
        return Result.success(list);
    }
}
