/**
 * Created by vic on 2018/11/23.
 */
import React from "react";
import "./ArticleRandom.less";

/**
 * 随机图文
 */
class ArticleRandom extends React.Component {

    render() {
        return <div className="article-random-render">
            <div className="white-bg">
                <h2 className="h-title">随机图文</h2>
                <ul className="article-rdm">
                    <li><a href="/" target="_blank"><i><img src="http://www.yangqq.com/d/file/blogs/2018-08-22/28e3bbca2ae0205f641a9072ecb7c100.jpg"/></i>
                        <p>网易博客关闭，何不从此开始潇洒行走江湖！</p>
                        <span>从网易博客平台的出现，到现在已经有12个年头了，很多人还坚持着，网易博客一宣布关闭，很多人都很惋惜，那么多的文字记忆，又该如何是好？虽然可以一键搬迁到lofter</span></a></li>
                    <li><a href="/" target="_blank"><i><img src="http://www.yangqq.com/d/file/blogs/2018-06-11/372b79556c82ac59a8c46eda53f177c4.jpg"/></i>
                        <p>Come on,行动起来吧!我们和时间来一场赛跑!</p>
                        <span>"时间过得那么飞快,使我的小心眼儿里不只是着急,还有悲伤.有一天,我放学回家,看到太阳快落山了,就下决心说:"我要比太阳更快地回家."我狂奔回去,站在庭院前喘气的时候,看到太阳还露着半边脸,我高兴地跳跃起来</span></a></li>
                    <li><a href="/" target="_blank"><i><img src="http://www.yangqq.com/d/file/news/life/2014-07-31/ae167e7d81612318949460aad1143e0d.jpg"/></i>
                        <p>即便是坑，我也想要拉你入伙！</p>
                        <span>对于刚毕业的学生来说，想学习建网站，掌握一技之长，最简单的入门无非就是学会html和css，先前发表过一篇文章《如果要学习web前端开发，需要学习什么？》，如果你还不知道如何着手，请仔细阅读....7天的时间，入门是没有问题的，当然，如果你用心的话！</span></a></li>
                    <li>
                        <a href="/" target="_blank"><i><img src="http://www.yangqq.com/d/file/news/s/2018-07-28/95d1b1577a8a7aa4fe3893f2502617e9.jpg"/></i>
                            <p>我是怎么评价自己的？</p>
                            <span>为了挨打轻一些，问我哪里来的，我瞎说了一个说那个谁家的，结果，打得更凶。最后事情还原了真相，我妈说，你要说说奶奶家的，都不会打你了。从此以后，我知道撒谎是会付出更惨痛的代价的，我不再撒谎，也不喜欢爱撒谎的人。</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    }
}

export default ArticleRandom;