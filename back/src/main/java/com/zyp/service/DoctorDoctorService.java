package com.zyp.service;

import com.zyp.dto.DoctorLoginDto;
import com.zyp.pojo.Doctor;

public interface DoctorDoctorService {
    Doctor login(DoctorLoginDto doctorLoginDto);
}
