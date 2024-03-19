package com.zyp.service;

import com.zyp.vo.AppointmentOfDoctorVo;

import java.util.List;

public interface AppointmentService {
    List<AppointmentOfDoctorVo> getAppointmentByDocId(Long docId);
}
