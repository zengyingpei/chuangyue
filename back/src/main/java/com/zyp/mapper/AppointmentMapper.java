package com.zyp.mapper;

import com.zyp.pojo.Appointment;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface AppointmentMapper {
    @Insert("insert into appointment (user_id, doctor_id, date, time_slot, status, create_time, update_time) " +
            "values (#{userId},#{doctorId},#{date},#{timeSlot},#{status},#{createTime},#{updateTime})")
    void addAppointment(Appointment appointment);
}
