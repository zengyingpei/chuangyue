package com.zyp.mapper;

import com.github.pagehelper.Page;
import com.zyp.dto.DoctorPageQueryDto;
import com.zyp.pojo.Doctor;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface DoctorMapper {

    @Select("select d.* from doctor d left outer join doc_sick ds on ds.doc_id = d.id where ds.sickness_id = #{sicknessId}")
    Page<Doctor> selectBySicknessId(DoctorPageQueryDto doctorPageQueryDto);

    @Select("select d.* from select_doctor sd left outer join doctor d on sd.doc_id = d.id limit 10")
    List<Doctor> selectSelectedDoctor();
}
