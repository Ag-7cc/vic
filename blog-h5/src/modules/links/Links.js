/**
 * Created by vic on 2018/11/23.
 */
import React from "react";
import "./Links.less";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
/**
 * 友情链接
 */
class Links extends React.Component {
    render() {
        return <div className="links-render">
            <Header selected="links"/>

            <article>
                <div className="white-bg">
                    <h2 className="h-title"><span className="h-nav">可能，你觉得自己没有足够得优秀，但我始终相信你仍然在努力坚持着!</span>站长推荐</h2>
                    <ul className="site-tj">
                        <li><a href="http://www.xiaao.net.cn" target="_blank">夏同学的Blog</a></li>
                        <li><a href="https://www.fanchaoyang.com/" target="_blank">点点code</a></li>
                        <li><a href="http://emojime.cn/" target="_blank">emojime</a></li>
                    </ul>
                </div>
                <div className="white-bg">
                    <h2 className="h-title">优秀个人博客</h2>
                    <ul className="site-tj site-yx">
                        <li><a href="http://www.yangqq.com" target="_blank">青于蓝博客</a></li>
                    </ul>
                </div>
            </article>

            <Footer/>
        </div>
    }
}
export default Links;