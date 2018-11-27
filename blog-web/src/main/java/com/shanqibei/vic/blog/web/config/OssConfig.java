package com.shanqibei.vic.blog.web.config;

import com.aliyun.oss.OSSClient;
import com.aliyun.oss.model.PutObjectResult;
import com.shanqibei.vic.blog.web.enmus.OssStyleNameEnum;
import lombok.Data;
import org.apache.commons.lang.StringUtils;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Component;

import java.io.ByteArrayInputStream;
import java.util.Objects;

/**
 * @Author: vic
 * @CreateTime : 2018/11/26 17:53
 */
@Component
@PropertySource(value = "file:/data/www/config/blog.properties", encoding = "UTF-8")
@ConfigurationProperties(prefix = "aliyun.oss")
@Data
public class OssConfig {
    private String endpoint;
    private String accessKeyId;
    private String accessKeySecret;
    private String bucketName;

    public String toBlogImage(String imageName) {
        return toBlogImage(imageName, OssStyleNameEnum.original);
    }

    public String toBlogImage(String imageName, OssStyleNameEnum styleNameEnum) {
        if (StringUtils.isBlank(imageName)) {
            return "";
        }
        StringBuffer url = new StringBuffer("https://");
        if (StringUtils.isNotBlank(this.endpoint)) {
            url.append(this.endpoint);
            url.append("/blog");
        }
        url.append(imageName.startsWith("/") ? imageName : ("/" + imageName));
        if (Objects.nonNull(styleNameEnum)) {
            url.append("!").append(styleNameEnum.name());
        }
        return url.toString();
    }

    public String uploadFile(String filePath, byte[] fileContent) {
        if (StringUtils.isNotBlank(filePath) && Objects.nonNull(fileContent) && fileContent.length > 0) {
            OSSClient ossClient = null;
            try {
                ossClient = new OSSClient(endpoint, accessKeyId, accessKeySecret);
                PutObjectResult result = ossClient.putObject(bucketName, filePath, new ByteArrayInputStream(fileContent));
                if (Objects.nonNull(result) && StringUtils.isNotBlank(result.getETag())) {
                    return result.getETag().toLowerCase();
                }
            } catch (Exception e) {
                e.printStackTrace();
            } finally {
                if (Objects.nonNull(ossClient)) {
                    ossClient.shutdown();
                }
            }
        }
        return new String();
    }
}
