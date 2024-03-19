package com.zyp.mapper;

import com.zyp.pojo.TimeSlot;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface TimeSlotMapper {
    @Select("select * from time_slot where doctor_id = #{docId}")
    List<TimeSlot> selectByDocId(Long docId);
}
