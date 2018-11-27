package com.shanqibei.vic.blog.service.api.enums;

import java.util.Objects;

/**
 * @Author: vic
 * @CreateTime : 2018/11/27 11:26
 */
public enum ImageConfigBizTypeEnum {

    Banner(1, "轮播广告"),
    ImageText(2, "图文"),
    ADBig(3, "左侧大广告位"),
    ADSmall(4, "右侧小广告位");

    public int code;
    public String text;

    ImageConfigBizTypeEnum(int code, String text) {
        this.code = code;
        this.text = text;
    }

    public static ImageConfigBizTypeEnum getByCode(Integer bizType) {
        if (Objects.isNull(bizType)) {
            return null;
        }
        for (ImageConfigBizTypeEnum anEnum : ImageConfigBizTypeEnum.values()) {
            if (anEnum.code == bizType) {
                return anEnum;
            }
        }
        return null;
    }
}
