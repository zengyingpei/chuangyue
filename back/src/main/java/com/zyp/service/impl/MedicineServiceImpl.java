package com.zyp.service.impl;

import com.zyp.mapper.MedicineMapper;
import com.zyp.pojo.Medicine;
import com.zyp.service.MedicineService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MedicineServiceImpl implements MedicineService {
    @Autowired
    private MedicineMapper medicineMapper;
    /**
     * @ description 获取所有治疗药物
     *
     * @ return java.util.List<com.zyp.pojo.Medicine>
     * @ author DELL
     */
    public List<Medicine> selectAll1() {
        return medicineMapper.selectAll1();
    }

    /**
     * @ description 获取所有养生药物
     *
     * @ return java.util.List<com.zyp.pojo.Medicine>
     * @ author DELL
     */
    public List<Medicine> selectAll2() {
        return medicineMapper.selectAll2();
    }
}
