package com.zyp.pojo;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Appointment implements Serializable {
    private Long id;
    private Long userId;
    private Long doctorId;
    private LocalDateTime date;
    private Integer startTime;
    private Integer endTime;
    private Integer status;
    private LocalDateTime createTime;
}
