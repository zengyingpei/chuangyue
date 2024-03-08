package com.zyp.pojo;


//统一响应结果

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class Result<T> {
    private Integer code;//业务状态码  1-成功  0-失败
    private String message;//提示信息
    private T data;//响应数据

    //快速返回操作成功响应结果(带响应数据)
    public static <E> Result<E> success(E data) {
        return new Result<>(1, "操作成功", data);
    }

    //快速返回操作成功响应结果(重载的方法，不带data)
    public static Result success() {
        return new Result(1, "操作成功", null);
    }

    public static Result error(String message) {
        return new Result(0, message, null);
    }
}
