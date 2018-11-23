/**
 * Created by vic on 2018/11/23.
 */
import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./Time.less";
/**
 * 时间轴
 */
class Time extends React.Component {
    render() {

        return <div className="time-render">
            <Header selected="time"/>

            <article>
                <div className="white-bg time-box">
                    <h2 className="h-title">往期文章</h2>
                    <ul>
                        <li><span>2018-11-08</span><i><a href="/" target="_blank">遇见一个未知的你</a></i></li>
                        <li><span>2018-11-08</span><i><a href="/" target="_blank">【个人博客空间申请】金牛云服，免费领空间啦</a></i></li>
                        <li><span>2018-11-08</span><i><a href="/" target="_blank">双十一，阿里云特惠活动，快来领券啦</a></i></li>
                        <li><span>2018-11-08</span><i><a href="/" target="_blank">第二届 优秀个人博客模板比赛参选活动</a></i></li>
                        <li><span>2018-11-08</span><i><a href="/" target="_blank">为什么说10月24日是程序员的节日？</a></i></li>
                        <li><span>2018-11-08</span><i><a href="/" target="_blank">个人网站做好了，百度不收录怎么办？来，看看他们怎么做的。</a></i></li>
                        <li><span>2018-11-08</span><i><a href="/" target="_blank">即便是坑，我也想要拉你入伙！</a></i></li>
                        <li><span>2018-11-08</span><i><a href="/" target="_blank">我是怎么评价自己的？</a></i></li>
                        <li><span>2018-11-08</span><i><a href="/" target="_blank">作为一个设计师,如果遭到质疑你是否能恪守自己的原则?</a></i></li>
                        <li><span>2018-11-08</span><i><a href="/" target="_blank">【个人博客网站制作】自己不会个人博客网站制作，你会选择用什么博客程序源码？</a></i></li>
                        <li><span>2018-11-08</span><i><a href="/" target="_blank">如何快速建立自己的个人博客网站</a></i></li>
                        <li><span>2018-11-08</span><i><a href="/" target="_blank">个人博客用帝国cms 自定义页面 灵动标签调用网站所有信息</a></i></li>
                        <li><span>2018-11-08</span><i><a href="/" target="_blank">我的个人博客之——阿里云空间选择</a></i></li>
                        <li><span>2018-11-08</span><i><a href="/" target="_blank">建站流程篇——教你如何快速学会做网站</a></i></li>
                        <li><span>2018-11-08</span><i><a href="/" target="_blank">【分享】css3侧边栏导航不同方向划出效果</a></i></li>
                        <li><span>2018-11-08</span><i><a href="/" target="_blank">使用CSS3制作文字、图片倒影</a></i></li>
                        <li><span>2018-11-08</span><i><a href="/" target="_blank">三步实现滚动条触动css动画效果</a></i></li>
                        <li><span>2018-11-08</span><i><a href="/" target="_blank">十条设计原则教你学会如何设计网页布局!</a></i></li>
                        <li><span>2018-11-08</span><i><a href="/" target="_blank">别让这些闹心的套路，毁了你的网页设计</a></i></li>
                        <li><span>2018-11-08</span><i><a href="/" target="_blank">Color Scheme Designer 取色</a></i></li>
                        <li><span>2018-11-08</span><i><a href="/" target="_blank">按钮在线生成工具Button Maker</a></i></li>
                        <li><span>2018-11-08</span><i><a href="/" target="_blank">CSS3 Maker 在线生成代码</a></i></li>
                        <li><span>2018-11-08</span><i><a href="/" target="_blank">Ui Parade免费的UI在线设计工具</a></i></li>
                        <li><span>2018-11-08</span><i><a href="/" target="_blank">分享一个在线用css3生成气泡的工具CSS ARROW PLEASE!</a></i></li>
                        <li><span>2018-11-08</span><i><a href="/" target="_blank">安静地做一个爱设计的女子</a></i></li>

                        <div className="page-list mt20">
                            <a href="/" onclick="page(2)">上一页</a>
                            &nbsp;&nbsp;
                            <a href="/" className="curPage">1</a>
                            &nbsp;&nbsp;
                            <a href="/" onclick="page(2)">2</a>
                            &nbsp;...&nbsp;
                            <a href="/" onclick="page(31)">31</a>
                            &nbsp;&nbsp;
                            <a href="/" onclick="page(2)">下一页</a>
                        </div>
                    </ul>
                    <div className="clear"></div>
                </div>
            </article>
            <Footer/>
        </div>
    }
}
export default Time;