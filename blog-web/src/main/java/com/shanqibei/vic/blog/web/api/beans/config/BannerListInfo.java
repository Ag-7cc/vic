package com.shanqibei.vic.blog.web.api.beans.config;

import lombok.Data;

import java.util.List;

/**
 * @Author: vic
 * @CreateTime : 2018/11/26 14:36
 */
@Data
public class BannerListInfo {
    private List<BannerInfo> bannerList;
    private List<BannerInfo> imageText;

    @Data
    public static class BannerInfo {
        private String image;
        private String link;
        private String text;
    }
}
