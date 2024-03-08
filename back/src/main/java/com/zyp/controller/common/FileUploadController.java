package com.zyp.controller.common;

import com.zyp.pojo.Result;
import com.zyp.utils.AliOssUtil;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.UUID;

@RestController
public class FileUploadController {
    @PostMapping("/upload")
    public Result<String> upload(MultipartFile file) throws Exception {
        //获取上传的文件原始名称
        String originalFilename= file.getOriginalFilename();
        //需要保证文件名不一样，防止文件覆盖
        //文件名称是UUID，类型从originalFilename中获取(.png或.jpg等等)
        String filename= UUID.randomUUID().toString()+originalFilename.substring(originalFilename.lastIndexOf('.'));
        String url=AliOssUtil.upload(filename,file.getInputStream());
        return Result.success(url);
    }
}
