/**
 * Created by vic on 2018/11/23.
 */
import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ArticleFoot from "../../components/articlefoot/ArticleFoot";
import ArticleRef from "../../components/articleref/ArticleRef";
import ArticleRandom from "../../components/articlerandom/ArticleRandom";
import Top from "../../components/top/Top";
import "./Article.less";
/**
 * 文章
 */
class Article extends React.Component {

    render() {
        return <div className="article-render">
            <Header selected="article"/>
            <article>
                <div className="l-box">
                    <div className="content-box white-bg">
                        <h2 className="h-title"><span className="con-nav">您现在的位置是：<a href="/">首页</a>&nbsp;>&nbsp;<a href="/xd/">设计心得</a></span>设计心得</h2>
                        <h1 className="con-title">作为一个设计师,如果遭到质疑你是否能恪守自己的原则?</h1>
                        <p className="blog-info"><i className="avatar"><img src="/blog/images/avatar.jpg"/></i><span></span><span>2018-11-08</span><span>【设计心得】</span>10<span>人已围观</span></p>
                        <p className="con-info">
                            <b>简介</b>
                            就拿我自己来说吧，有时候会很矛盾，设计好的作品，不把它分享出来，会觉得待在自己电脑里面实在是没有意义。干脆就发布出去吧。我也害怕收到大家不好的评论，有些评论，可能说者无意，但是对于每一个用心的站长来说，都会受很深
                        </p>
                        <div className="con-text">
                            曾经有站长找我求助，他说他不知道该怎么办，自己做出来的网站，不仅没有得到大家的认可，反而让大家给他开了一个评判大会。他自己认为已经是做的最好的，却遭受大家无情的指责是&ldquo;垃圾&rdquo;作品。<br /><br />有的给他提出了意见，有的没有提意见，直接扔了两个字，&ldquo;垃圾&rdquo;
                            。这没有谁对谁错，每个人的审美观点都不一样，我们能做的就是尊重别人。我相信他是认真对待网站的，我仔细看了他的设计，布局，颜色搭配都是他精心的设计。美和丑是没有一个评判标准的。我给他讲了一个关于建筑设计师的故事。<br /><br />300多年前，建筑设计师克里斯托&middot;
                            莱伊恩受命设计了英国温泽市政府大厅，他运用工程力学的知识，依据自己多年的实践经验，巧妙地设计了只用一根柱子支撑的大厅天花板。但是一年以后，在进行工程验收时，市政府权威人士却对此提出了质疑，并要求莱伊恩一定要再多加几根柱子。莱伊恩对自己的设计很自信，因此他非常苦恼：坚持自己的主张吧，他们肯定会另找人修改设计；不坚持吧，又有悖自己为人的准则。<br/><br /><img
                                alt="" src="http://www.yangqq.com/d/file/news/life/2018-03-13/f66c3f82660caa444183b310a13c2f22.jpg"/><br /><br />矛盾了很长时间，莱伊恩终于想到了一条妙计，他在大厅里加了四根柱子，但它们并未与天花板连接，只不过是装装样子，糊弄那些刚愎自用的家伙。这个秘密始终没有被发现。直到300多年后市政府准备修缮大厅天花板时，才发现莱伊恩的&ldquo;
                            弄虚作假&rdquo;。我们每个人都想得到别人的尊敬，尤其有了一定的社会地位的人，更想得到别人尊重。建筑设计师克里斯托&middot;
                            莱伊恩很明白这一点，当市政府权威人士对他的建筑设计提出疑问时，他并不坚持己见，而是让市政府权威人士感到他对他们很尊重。所以，一个聪明的人，不仅能维护自己的尊严，还能够顾及他人的尊严。<br /><br />
                            <img alt="" src="http://www.yangqq.com/d/file/news/life/2018-03-13/49962501843114c70121ad142e60a056.jpg"/><br /><br />莱伊恩的故事，向我们讲述了一个深刻的哲理&ldquo;
                            恪守着自己的原则，哪怕遭遇到最大的阻力，也要想办法抵达胜利。&rdquo;
                            <br /><br />就拿我自己来说吧，有时候会很矛盾，设计好的作品，不把它分享出来，会觉得待在自己电脑里面实在是没有意义。干脆就发布出去吧。我也害怕收到大家不好的评论，有些评论，可能说者无意，但是对于每一个用心的站长来说，都会受很深的影响，愤怒，恼羞。<br /><br />心态很重要，再来看莱伊恩，他当时顶着多大的压力呀。同样作为一个前端设计师，哪怕遭到质疑，我们也要像莱伊恩一样恪守自己的原则。<br /><br /><img
                                alt="" src="http://www.yangqq.com/d/file/news/life/2018-03-13/89a5cb1d573b094ae3cc8afd7c11fffb.jpg"/><p></p>
                        </div>
                        <ArticleFoot/>
                    </div>

                    {/* 相关文章 */}
                    <ArticleRef/>

                    {/* 随机图文 */}
                    <ArticleRandom/>

                </div>
            </article>

            <Footer/>
            <Top/>
        </div>
    }
}
export default  Article;