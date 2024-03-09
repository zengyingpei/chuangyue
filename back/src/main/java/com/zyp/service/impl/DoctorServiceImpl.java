package com.zyp.service.impl;

import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.zyp.dto.DoctorPageQueryDto;
import com.zyp.mapper.DoctorMapper;
import com.zyp.pojo.Doctor;
import com.zyp.pojo.PageBean;
import com.zyp.service.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.print.Doc;
import java.util.List;

@Service
public class DoctorServiceImpl implements DoctorService {
    @Autowired
    private DoctorMapper doctorMapper;
    @Override
    public PageBean<Doctor> selectBySicknessId(DoctorPageQueryDto doctorPageQueryDto) {
        PageHelper.startPage(doctorPageQueryDto.getPage(), doctorPageQueryDto.getPageSize());   //开启分页查询
        Page<Doctor> page=doctorMapper.selectBySicknessId(doctorPageQueryDto);
        return new PageBean<Doctor>(page.getTotal(),page.getResult());
    }

    @Override
    public List<Doctor> selectSelectedDoctor() {
        List<Doctor> list=doctorMapper.selectSelectedDoctor();
        return list;
    }
}
