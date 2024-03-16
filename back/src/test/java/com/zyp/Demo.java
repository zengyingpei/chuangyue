package com.zyp;

import com.aliyun.oss.ClientException;
import com.aliyun.oss.OSS;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.OSSClientBuilder;
import com.aliyun.oss.OSSException;
import com.aliyun.oss.model.PutObjectRequest;
import com.aliyun.oss.model.PutObjectResult;
import com.zyp.utils.Md5Util;

import java.io.ByteArrayInputStream;
import java.io.FileInputStream;

public class Demo {

    public static void main(String[] args) throws Exception {
        String string = Md5Util.getMD5String("123456");
        System.out.println(string);
    }
}