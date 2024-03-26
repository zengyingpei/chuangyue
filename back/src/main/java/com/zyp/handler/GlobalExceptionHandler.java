package com.zyp.handler;

import com.zyp.exception.BaseException;
import com.zyp.pojo.Result;
import lombok.extern.slf4j.Slf4j;

import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;


@ControllerAdvice
@RestController
@Slf4j
public class GlobalExceptionHandler {
    /**
     * @ description 捕获业务异常，给前端返回异常原因
     * @param e
     * @ return com.zyp.pojo.Result
     * @ author DELL
     */
    @ExceptionHandler
    public Result exceptionHandler(BaseException e){    //BaseException是自定义异常父类
        log.error("异常信息{}",e.getMessage());
        return Result.error(e.getMessage());
    }
}