package com.shanqibei.vic.utils;

import com.google.common.collect.Lists;
import org.springframework.beans.BeanUtils;

import java.util.List;

/**
 * Created by vic
 * Create time : 2017/7/27 上午11:38
 */
public class VicBeanUtils {

    public static void copyProperties(Object source, Object target, String... ignoreProperties) {
        BeanUtils.copyProperties(source, target, ignoreProperties);
    }

    public static <S, T> T copyProperties(S source, Class<T> clazz, String... ignoreProperties) {
        if (source == null) {
            return null;
        }
        try {
            T target = clazz.newInstance();
            copyProperties(source, target, ignoreProperties);
            return target;
        } catch (InstantiationException e) {
            e.printStackTrace();
        } catch (IllegalAccessException e) {
            e.printStackTrace();
        }
        return null;
    }

    public static <S, T> List<T> copyList(List<S> sourceList, Class<T> clazz, String... ignoreProperties) {
        List<T> targetList = Lists.newArrayList();
        if (sourceList == null) {
            return targetList;
        }
        sourceList.forEach(source -> {
            try {
                T target = clazz.newInstance();
                copyProperties(source, target, ignoreProperties);
                targetList.add(target);
            } catch (InstantiationException e) {
                e.printStackTrace();
            } catch (IllegalAccessException e) {
                e.printStackTrace();
            }
        });
        return targetList;
    }
}
