/**
 * Created by vic on 2018/11/23.
 */
import React from "react";
import "./ArticleFoot.less";

/**
 * 文章脚注
 */
class ArticleFoot extends React.Component {

    render() {
        return <div className="article-foot-render">
            <p className="tags">Tags：<a href="/" target="_blank">设计</a></p>

            <p className="share">
                <b>转载：</b>
                感谢您对单其贝个人博客网站平台的认可，以及对我们原创作品以及文章的青睐，非常欢迎各位朋友分享到个人站长或者朋友圈，但转载请说明文章出处“来源杨青个人博客”。
                <a href="/" target="_blank">http://shanqibei.com/xd/23.html</a>
            </p>

            <p>
                <a><span className="like"> 很赞哦！(<b>17</b>)</span></a>
            </p>

            <div className="next-info">
                <p>上一篇：<a href='/'>网易博客关闭，何不从此开始潇洒行走江湖！</a></p>
                <p>下一篇：<a href='/'>我是怎么评价自己的？</a></p>
            </div>
        </div>
    }
}

export default ArticleFoot;