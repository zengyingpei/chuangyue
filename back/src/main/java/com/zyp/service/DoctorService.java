package com.zyp.service;

import com.zyp.dto.DoctorPageQueryDto;
import com.zyp.pojo.Doctor;
import com.zyp.pojo.PageBean;

import java.util.List;

public interface DoctorService {
    PageBean<Doctor> selectBySicknessId(DoctorPageQueryDto doctorPageQueryDto);

    List<Doctor> selectSelectedDoctor();
}
