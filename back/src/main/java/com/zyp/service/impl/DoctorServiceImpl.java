package com.zyp.service.impl;

import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.zyp.dto.DoctorPageQueryDto;
import com.zyp.mapper.DoctorMapper;
import com.zyp.pojo.Doctor;
import com.zyp.pojo.DoctorDetail;
import com.zyp.pojo.PageBean;
import com.zyp.service.DoctorService;
import com.zyp.vo.DoctorDeatilVo;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
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

    @Override
    @Transactional
    public DoctorDeatilVo selectDoctorDeatil(Long id) {
        Doctor doctor=doctorMapper.selectById(id);
        DoctorDetail doctorDetail=doctorMapper.selectDetailById(id);
        BigDecimal score=doctorMapper.countScore(id);
        List<String> department=doctorMapper.selectDeptOfDoctor(id);
        return DoctorDeatilVo.builder()
                .id(doctor.getId())
                .name(doctor.getName())
                .age(doctor.getAge())
                .phone(doctor.getPhone())
                .avatar(doctor.getAvatar())
                .workplace(doctor.getWorkplace())
                .level(doctor.getLevel())
                .desc(doctor.getDesc())
                .card(doctor.getCard())
                .specialization(doctorDetail.getSpecialization())
                .score(score)
                .department(department)
                .consultCost(doctorDetail.getConsultCost())
                .bookingCost(doctorDetail.getBookingCost())
                .build();
    }
}
