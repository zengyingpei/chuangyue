package com.zyp.service.impl;

import com.zyp.mapper.AppointmentMapper;
import com.zyp.mapper.TimeSlotMapper;
import com.zyp.pojo.TimeSlot;
import com.zyp.service.AppointmentService;
import com.zyp.vo.AppointmentOfDoctorVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AppointmentServiceImpl implements AppointmentService {
    @Autowired
    private AppointmentMapper appointmentMapper;
    @Autowired
    private TimeSlotMapper timeSlotMapper;

    /**
     * @ description 获取医生一周内的预约情况
     * @param docId
     * @ return java.util.List<com.zyp.vo.AppointmentOfDoctorVo>
     * @ author DELL
     */

    public List<AppointmentOfDoctorVo> getAppointmentByDocId(Long docId) {
        List<AppointmentOfDoctorVo> ans = new ArrayList<>();
        // 1、查询时间段表，查看该医生的所有预约情况
        List<TimeSlot> list = timeSlotMapper.selectByDocId(docId);
        for (TimeSlot timeSlot : list) {
            AppointmentOfDoctorVo appointmentOfDoctorVo = AppointmentOfDoctorVo.builder()
                    .id(timeSlot.getId())
                    .date(timeSlot.getDate())
                    .slot(timeSlot.getSlot())
                    .available(timeSlot.getAvailable())
                    .total(timeSlot.getTotal())
                    .build();
            ans.add(appointmentOfDoctorVo);
        }
        return ans;
    }
}
