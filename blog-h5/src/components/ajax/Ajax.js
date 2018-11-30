var Ajax = {
    get: function (url, fn) {
        var obj = new XMLHttpRequest();  // XMLHttpRequest对象用于在后台与服务器交换数据
        obj.open('GET', url, true);
        obj.onreadystatechange = function () {
            if (obj.readyState == 4 && obj.status == 200 || obj.status == 304) { // readyState == 4说明请求已完成
                fn.call(this, JSON.parse(obj.responseText));  //从服务器获得数据
            }
        };
        obj.send();
    },
    post: function (url, data, fn) {         // datat应为'a=a1&b=b1'这种字符串格式，在jq里如果data为对象会自动将对象转成这种字符串格式
        var obj = new XMLHttpRequest();
        var pre = "/api/h5/";
        obj.open("POST", ($HOST ? $HOST : "") + pre + url, true);
        obj.setRequestHeader("Content-type", "application/json");  // 添加http头，发送信息至服务器时内容编码类型
        obj.onreadystatechange = function () {
            if (obj.readyState == 4 && obj.status == 200 || obj.status == 304) {
                fn.call(this, JSON.parse(obj.responseText));
            }
        };
        obj.send(JSON.stringify({"param": data}));
    }
}

export {Ajax as default} ;
