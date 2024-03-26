package com.zyp.service;

import com.zyp.pojo.Medicine;
import com.zyp.vo.KeepHeathyAndCategoryVo;

import java.util.List;

public interface MedicineService {
    List<Medicine> selectAll1();

    KeepHeathyAndCategoryVo selectAll2(Long categoryId);
}
