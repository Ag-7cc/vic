## blog - <small>[单其贝的博客](https://shanqibei.com)</small>

***
> 本站H5源码静态页面来源[杨青青个人博客](http://jxhx.yangqq.com/)
> 并由自己改造成React项目

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
    }),````
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
- package-lock.json - 项目当前依赖版本
- package.json - 项目配置   
- webpack.config.js - webpack打包配置
