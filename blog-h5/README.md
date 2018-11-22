## eshop - <small>团肉肉电商站</small>

***

### 1,快速启动

    npm install // 安装依赖
    
    npm run dev // 开启开发模式

    webpack // 打包js代码`


### 2,切换react.js开发和生产模式

`webpack.config.js`文件内：

    ...
    new webpack.DefinePlugin({
        'process.env':{
            'NODE_ENV': JSON.stringify('production')
        }
    }),
    ...

删除这段，就是开发模式，加上这段就是生产模式

### 3,文件结构解释

- Components - 通用组件  
- module - 页面组件 
- app.js - 入口文件
- Common.less - 全局样式
- config.less - 全局样式变量
- index.html - 主页面
- mock - Mock数据配置
- package-lock.json - 项目当前依赖版本
- package.json - 项目配置
- webpack.config.js - webpack打包配置

### 4,组件解释

Components:
* Ajax - 异步请求组件
* Category - 日历选择组件
* Citypick - 城市选择组件
* Cookie - 烹饪加工方式组件
* Filter - 列表筛选器
* Itemlist - 图文列表项
* Itempick - 详情页选择器
* Linkman - 联系人选择器
* Menubar - 底部导航栏
* Pop - 信息弹窗

    `Pop.show("text",(2000))`

    `Pop.hide()`

* Toast - 确认/取消弹窗
* Wx - 微信环境配置（无实际作用）

modules：
* Address - 填写地址页面
* Cart - 购物车页面
* Cashier - 结算页面
* Home - 首页
* Item - 商品列表页面
* Itemdetail - 商品详情页面
* Login - 登录/注册/填手机号/验证码页面
* Orderdetail - 订单详情页面
* Orderlist - 订单列表
* Ordersuccess - 下单成功页面
* Return - 退货页面
* User - 用户页面