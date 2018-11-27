package com.shanqibei.vic.blog.web.api.executors.config;

import com.google.common.collect.Lists;
import com.shanqibei.vic.blog.service.api.api.config.ConfigService;
import com.shanqibei.vic.blog.service.api.dto.config.ImageConfigDTO;
import com.shanqibei.vic.blog.service.api.enums.ImageConfigBizTypeEnum;
import com.shanqibei.vic.blog.web.annotations.ExecutorApi;
import com.shanqibei.vic.blog.web.api.base.BaseExecutor;
import com.shanqibei.vic.blog.web.api.base.context.RequestContext;
import com.shanqibei.vic.blog.web.api.beans.ApiResponse;
import com.shanqibei.vic.blog.web.api.beans.config.BannerListInfo;
import com.shanqibei.vic.blog.web.api.params.EmptyParam;
import com.shanqibei.vic.blog.web.config.OssConfig;
import com.shanqibei.vic.blog.web.enmus.ResponseCodeEnum;
import org.apache.commons.collections.CollectionUtils;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Objects;

/**
 * @Author: vic
 * @CreateTime : 2018/11/26 14:33
 */
@ExecutorApi(value = "/banner/list", login = false)
public class BannerListExecutor extends BaseExecutor<EmptyParam> {

    @Autowired
    private ConfigService configService;
    @Autowired
    private OssConfig ossConfig;

    @Override
    public ApiResponse execute(RequestContext context, EmptyParam param) {
        List<ImageConfigDTO> imageConfigDTOS = configService.findBannerList();
        return ApiResponse.build(ResponseCodeEnum.Success, consume(imageConfigDTOS));
    }

    private BannerListInfo consume(List<ImageConfigDTO> imageConfigDTOS) {
        BannerListInfo bannerListInfo = new BannerListInfo();
        List<BannerListInfo.BannerInfo> bannerList = Lists.newArrayList();
        List<BannerListInfo.BannerInfo> imageText = Lists.newArrayList();
        if (CollectionUtils.isEmpty(imageConfigDTOS)) {
            bannerListInfo.setBannerList(bannerList);
            bannerListInfo.setImageText(imageText);
            return bannerListInfo;
        }
        imageConfigDTOS.stream().forEach(imageConfigDTO -> {
            BannerListInfo.BannerInfo bannerInfo = new BannerListInfo.BannerInfo();
            ImageConfigBizTypeEnum typeEnum = ImageConfigBizTypeEnum.getByCode(imageConfigDTO.getBizType());
            if (Objects.nonNull(typeEnum)) {
                switch (typeEnum) {
                    case Banner:
                        bannerInfo.setImage(ossConfig.toBlogImage(imageConfigDTO.getImage()));
                        bannerInfo.setLink(StringUtils.trimToNull(imageConfigDTO.getLink()));
                        bannerList.add(bannerInfo);
                        break;
                    case ImageText:
                        bannerInfo.setImage(ossConfig.toBlogImage(imageConfigDTO.getImage()));
                        bannerInfo.setLink(StringUtils.trimToNull(imageConfigDTO.getLink()));
                        bannerInfo.setText(imageConfigDTO.getText());
                        imageText.add(bannerInfo);
                        break;
                }
            }
        });
        bannerListInfo.setBannerList(bannerList);
        bannerListInfo.setImageText(imageText);
        return bannerListInfo;
    }
}
