package com.zyp.mapper;

import com.github.pagehelper.Page;
import com.zyp.dto.DoctorPageQueryDto;
import com.zyp.pojo.Doctor;
import com.zyp.pojo.DoctorDetail;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.math.BigDecimal;
import java.util.List;

@Mapper
public interface DoctorMapper {

    /**
     * @description 根据疾病查询对应的医生（分页查询）
     * @param doctorPageQueryDto
     * @return com.github.pagehelper.Page<com.zyp.pojo.Doctor>
     * @author DELL
     * @date 2024/3/10 14:03
     */
    @Select("select d.* from doctor d left outer join doc_sick ds on ds.doc_id = d.id where ds.sickness_id = #{sicknessId}")
    Page<Doctor> selectBySicknessId(DoctorPageQueryDto doctorPageQueryDto);


    /**
     * @description 查询精选医生
     *
     * @return java.util.List<com.zyp.pojo.Doctor>
     * @author DELL
     * @date 2024/3/10 14:03
     */
    @Select("select d.* from select_doctor sd left outer join doctor d on sd.doc_id = d.id limit 10")
    List<Doctor> selectSelectedDoctor();


    /**
     * @description 根据医生id查询
     * @param id
     * @return com.zyp.pojo.Doctor
     * @author DELL
     * @date 2024/3/10 14:14
     */
    @Select("select * from doctor where id = #{id}")
    Doctor selectById(Long id);

    /**
     * @description 根据id查询医生的详细信息
     * @param id
     * @return com.zyp.pojo.DoctorDetail
     * @author DELL
     * @date 2024/3/10 14:15
     */
    @Select("select * from doctor_detail where doctor_id = #{id}")
    DoctorDetail selectDetailById(Long id);


    /**
     * @description 根据id查询医生的平均评分
     * @param
     * @return
     * @author DELL
     * @date 2024/3/10 14:27
     */
    @Select("select avg(score) from doctor_review where doctor_id = #{id}")
    BigDecimal countScore(Long id);


    /**
     * @description 根据id查询这个医生都属于哪些科室
     * @param id
     * @return java.util.List<java.lang.String>
     * @author DELL
     * @date 2024/3/10 16:41
     */
    @Select("select d.name from department d left outer join sickness s on d.id = s.dept_id where s.id in (select ds.sickness_id from doc_sick ds left outer join doctor d on ds.doc_id = d.id where d.id = #{id})")
    List<String> selectDeptOfDoctor(Long id);
}
