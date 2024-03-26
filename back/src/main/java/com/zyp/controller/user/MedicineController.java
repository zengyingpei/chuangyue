package com.zyp.controller.user;

import com.zyp.pojo.Medicine;
import com.zyp.pojo.Result;
import com.zyp.service.MedicineService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@Slf4j
@RequestMapping("/api/user/medicine")
public class MedicineController {
    @Autowired
    private MedicineService medicineService;
    /**
     * @ description 获取所有治疗药物
     *
     * @ return com.zyp.pojo.Result<java.util.List<com.zyp.pojo.Medicine>>
     * @ author DELL
     */
    @GetMapping("/list1")
    public Result<List<Medicine>> selectAll1(){
        log.info("selectAll1");
        return Result.success(medicineService.selectAll1());
    }

    /**
     * @ description 获取所有养生药物
     *
     * @ return com.zyp.pojo.Result<java.util.List<com.zyp.pojo.Medicine>>
     * @ author DELL
     */
    @GetMapping("/list2")
    public Result<List<Medicine>> selectAll2(){
        log.info("selectAll2");
        return Result.success(medicineService.selectAll2());
    }
}
