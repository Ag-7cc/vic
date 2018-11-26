package com.shanqibei.vic.utils;

import com.google.common.collect.Maps;
import lombok.Data;

import java.util.Map;

/**
 * Created by vic
 * Create time : 2017/7/27 上午10:22
 */
@Data
public class MapBuilder {

    private Map<String, Object> map = Maps.newHashMap();

    public static MapBuilder newBuilder(){
        return new MapBuilder();
    }

    public MapBuilder addData(String k, Object v){
        map.put(k, v);
        return this;
    }

    public Map<String, Object> build(){
        return map;
    }
}
