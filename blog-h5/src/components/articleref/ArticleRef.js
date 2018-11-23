/**
 * Created by vic on 2018/11/23.
 */
import React from "react";
import "./ArticleRef.less";

/**
 * 相关文章
 */
class ArticleRef extends React.Component {

    render() {
        return <div className="article-ref-render">
            <div className="white-bg">
                <h2 className="h-title">相关文章</h2>
                <ul className="other-link">
                    <li><a href="/" title="十条设计原则教你学会如何设计网页布局!">十条设计原则教你学会如何设计网页布局!</a></li>
                    <li><a href="/" title="别让这些闹心的套路，毁了你的网页设计">别让这些闹心的套路，毁了你的网页设计</a></li>
                    <li><a href="/" title="Ui Parade免费的UI在线设计工具">Ui Parade免费的UI在线设计工具</a></li>
                    <li><a href="/" title="安静地做一个爱设计的女子">安静地做一个爱设计的女子</a></li>
                </ul>
            </div>
        </div>
    }
}
export default ArticleRef;