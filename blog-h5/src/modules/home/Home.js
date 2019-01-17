/**
 * Created by vic on 2018/11/22.
 */
import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Banner from "../../components/banner/Banner";
import Top from "../../components/top/Top";
import Ajax from "../../components/ajax/Ajax";
import "./Home.less";
/**
 * 首页
 */
class Home extends React.Component {

  constructor() {
    super();
    this.state = {
      userInfo: {},
      news: 1
    };
    this.switchNews = this.switchNews.bind(this);
  }


  componentDidMount() {
    Ajax.post("admin/info", {}, (resp) => {
      if (resp.data.userInfo) {
        this.setState({
          userInfo: resp.data.userInfo
        })
      }
    })
  }

  switchNews(i) {
    this.setState({news: i})
  }

  render() {
    return <div className="home-render">
      <Header/>

      <article>
        {/* ---------- l-box ------------- */}
        <div className="l-box">
          <Banner/>

          <div className="clear-blank"></div>

          {/* news */}
          <div className="tab-box white-bg">
            <div className="tab-buttons">
              <ul>
                <li onClick={this.switchNews.bind(this, 1)} className={this.state.news == 1 ? 'news-current' : ''}>个人博客日记</li>
                <li onClick={this.switchNews.bind(this, 2)} className={this.state.news == 2 ? 'news-current' : ''}>心得</li>
              </ul>
            </div>
            <div>
              {this.state.news == 1 ?
                  <div className="news-item">
                    <div className="news-pic">
                      <ul>
                        <li><a href="/"><img src="/blog/images/1.jpg"/><span>个人网站做好了，百度不收录怎么办？来，看看他们怎么做的</span></a></li>
                        <li><a href="/"><img src="/blog/images/2.jpg"/><span>个人博客，属于我的小世界！</span></a></li>
                      </ul>
                    </div>
                    <ul className="news-list">
                      <li>
                        <i></i>
                        <a href="/" title="安静地做一个爱设计的女子">安静地做一个爱设计的女子</a>
                        <p>自从入了这行，很多人跟我说可以做网络教程，我也有考虑，但最终没有实现，因为我觉得在这个教程泛滥的时代，直接做一套免费的原创个人博客模板更为实在。每当看到自己喜欢的配色图片</p>
                      </li>
                      <li>
                        <i></i>
                        <a href="/" title="电话以外的宁静">电话以外的宁静</a>
                        <p>电话很久没有响过了，我的QQ也很久没有在线了，消失了很多天，刚刚结识的朋友因为我身上又起了红疹，每天都发来消息询问我的情况，我做到了这么多天来的沉默，我相信，没有网络，我还是可以继续我自己的生活</p>
                      </li>
                      <li>
                        <i></i>
                        <a href="/" title="遇见一个未知的你">遇见一个未知的你</a><p>听着那熟悉的歌曲看着那一张张可爱的图片.-读着我们共同欣赏的诗……也许我们曾经相遇,看着你远去的背影 ,沿着你来的方向
                        ,回忆时间穿梭于幸福的点点滴滴....</p></li>
                      <li>
                        <i></i>
                        <a href="/" title="个人网站做好了，百度不收录怎么办？来，看看他们怎么做的">个人网站做好了，百度不收录怎么办？来，看看他们怎么做的...</a>
                        <p>不管你是学前端的还是后端的，作为一个程序员，做一个自己的博客，那是必然的。咱们的圈子就这么大，想让更多的人了解你，看看你的技术多牛逼，扔一个博客地址就行了</p>
                      </li>
                      <li>
                        <i></i>
                        <a href="/" title="个人博客，属于我的小世界！">个人博客，属于我的小世界！</a>
                        <p>个人博客，用来做什么？我刚开始就把它当做一个我吐槽心情的地方，也就相当于一个网络记事本，写上一些关于自己生活工作中的小情小事，也会放上一些照片，音乐。每天工作回家后就能访问自己的网站，一边听着音乐，一边写写文章。</p>
                      </li>
                    </ul>
                  </div> : ''
              }

              {this.state.news == 2 ?
                  <div className="news-item">
                    <div className="news-pic">
                      <ul>
                        <li><a href="/"><img src="/blog/images/3.jpg"/><span>十条设计原则教你学会如何设计网页布局!</span></a></li>
                        <li><a href="/"><img src="/blog/images/4.jpg"/><span>别让这些闹心的套路，毁了你的网页设计</span></a></li>
                      </ul>
                    </div>
                    <ul className="news-list">
                      <li>
                        <i></i>
                        <a href="/" title="【分享】css3侧边栏导航不同方向划出效果">【分享】css3侧边栏导航不同方向划出效果</a>
                        <p>设定一组侧边栏导航菜单，然后可以从任何一边滑出。有两种实现方式，一种固定菜单，一种从左右两侧推出</p>
                      </li>
                      <li>
                        <i></i>
                        <a href="/" title="使用CSS3制作文字、图片倒影">使用CSS3制作文字、图片倒影</a>
                        <p>CSS3制作文字、图片倒影需要涉及到使用CSS3.0新属性之box-reflect。box-reflect属性目前仅在Chrome、Safari和Opera浏览器下支持，但这并不影响我们来学习这个属性的应用</p>
                      </li>
                      <li>
                        <i></i>
                        <a href="/" title="三步实现滚动条触动css动画效果">三步实现滚动条触动css动画效果</a>
                        <p>现在很多网站都有这种效果，我就整理了一下，分享出来。利用滚动条来实现动画效果，ScrollReveal.js用于创建和管理元素进入可视区域时的动画效果，帮助你的网站增加吸引力</p>
                      </li>
                      <li>
                        <i></i>
                        <a href="/" title="十条设计原则教你学会如何设计网页布局!">十条设计原则教你学会如何设计网页布局!</a>
                        <p>网页常见的布局有很多种,单列布局,多列布局.其中单列布局是国外很多网站比较常用的.咱们很多站长以及门户网站都使用的是是两列布局,很少用三列布局的.下面我来分享下我们常用的网页布局格式以及设计技巧</p>
                      </li>
                      <li>
                        <i></i>
                        <a href="/" title="别让这些闹心的套路，毁了你的网页设计">别让这些闹心的套路，毁了你的网页设计</a>
                        <p>网页设计和做人一样，需要少一些套路，多一些真诚。那么下面就为大家揭穿那些看似好用，但用户体验并不好的设计模式。另外再附上解决办法，避免网页设计中出现这些问题</p>
                      </li>
                    </ul>
                  </div>
                  : ''
              }
            </div>
          </div>

          {/* 专题 */}
          <div className="topic white-bg">
            <h2 className="h-title">
                            <span className="h-nav">
                                <a href="/" target="_blank">帝国cms</a> &nbsp;
                              <a href="/" target="_blank">个人博客</a> &nbsp;
                              <a href="/" target="_blank">网站制作</a> &nbsp;
                              <a href="/" target="_blank">设计</a>
                            </span>特别推荐</h2>
            <ul>
              <li>
                <i className="zt-pic">
                  <a href="/" target="_blank">
                    <img src="/blog/images/t1.png"/>
                  </a>
                </i>
                <b>【个人博客空间申请】金牛云服，免费领空间啦</b>
                <span>还在愁域名购买了，如何选择主机或者服务器吗？其实选择主机或者服务器有几个重要的选项，比如，线路，CPU，内存，带宽，网页空间，数据库，月流量等等。那什么是主机，什么是服务器，他们的区别</span>
                <a href="/" target="_blank" className="read-more">文章阅读</a>
              </li>
              <li>
                <i className="zt-pic">
                  <a href="/" target="_blank">
                    <img src="/blog/images/t2.jpg"/>
                  </a>
                </i>
                <b>为什么说10月24日是程序员的节日？</b>
                <span>创立“程序员节”最早是来自俄文《计算机世界》（《Компьютерра》）出版社的主编德米特里·门德列留科（Дмитрий Мендрелюк）在1996年7月15日的想法，当时计划将节日命名为“计算机用户节”，定在每年9月份的第一个星期五，称之为“纯净的星期五</span>
                <a href="/" target="_blank" className="read-more">文章阅读</a>
              </li>
              <li>
                <i className="zt-pic">
                  <a href="/" target="_blank">
                    <img src="/blog/images/t2.jpg"/>
                  </a>
                </i>
                <b>为什么说10月24日是程序员的节日？</b>
                <span>创立“程序员节”最早是来自俄文《计算机世界》（《Компьютерра》）出版社的主编德米特里·门德列留科（Дмитрий Мендрелюк）在1996年7月15日的想法，当时计划将节日命名为“计算机用户节”，定在每年9月份的第一个星期五，称之为“纯净的星期五</span>
                <a href="/" target="_blank" className="read-more">文章阅读</a>
              </li>
              <li>
                <i className="zt-pic">
                  <a href="/" target="_blank">
                    <img src="/blog/images/t2.jpg"/>
                  </a>
                </i>
                <b>为什么说10月24日是程序员的节日？</b>
                <span>创立“程序员节”最早是来自俄文《计算机世界》（《Компьютерра》）出版社的主编德米特里·门德列留科（Дмитрий Мендрелюк）在1996年7月15日的想法，当时计划将节日命名为“计算机用户节”，定在每年9月份的第一个星期五，称之为“纯净的星期五</span>
                <a href="/" target="_blank" className="read-more">文章阅读</a>
              </li>
            </ul>
          </div>

          {/* 广告 */}
          <div className="ad white-bg">
            <a href="https://www.vultr.com/?ref=7357003" target="_blank"><img src="https://www.vultr.com/media/banner_1.png"/></a>
          </div>

          {/* 最新博文 */}
          <div className="white-bg blog-list">
            <h2 className="h-title">最新博文</h2>
            <ul>
              <li>
                <h3 className="blog-title">
                  <b>【顶】</b>
                  <a href="/" target="_blank">作为一个设计师,如果遭到质疑你是否能恪守自己的原则?</a>
                </h3>
                <span className="blog-pic img-scale">
                                    <i>
                                        <a href="/" target="_blank">设计心得</a>
                                    </i>
                                    <a href="/" title="作为一个设计师,如果遭到质疑你是否能恪守自己的原则?">
                                        <img src="/blog/images/bl1.jpg" alt="作为一个设计师,如果遭到质疑你是否能恪守自己的原则?"/>
                                    </a>
                                </span>
                <p className="blog-text">就拿我自己来说吧，有时候会很矛盾，设计好的作品，不把它分享出来，会觉得待在自己电脑里面实在是没有意义。干脆就发布出去吧。我也害怕收到大家不好的评论，有些评论，可能说者无意，但是对于每一个用心的站长来说，都会受很深 </p>
                <p className="blog-info">
                  <i className="avatar">
                    <a href="/" target="_blank">
                      <img src="/blog/images/avatar.jpg" border="0" width="30" height="30" alt=""/>
                    </a>
                  </i>
                  <span></span>
                  <span>2018-11-08</span>
                  <span>【<a href="/" target="_blank">设计心得</a>】</span>
                </p>
                <a href="/" className="view-more">阅读更多</a>
              </li>
            </ul>
          </div>
        </div>

        {/* ---------- r-box ------------- */}
        <div className="r-box">
          {/*  个人信息 */}
          <div className="card">
            <h2>我的名片</h2>
            <p>网名：{this.state.userInfo.nickName}</p>
            <p>职业：{this.state.userInfo.work}</p>
            <p>现居：{this.state.userInfo.address}</p>
            <p>Email：{this.state.userInfo.email}</p>
            <ul className="link-more">
              <li>
                <a href="/" target="_blank" className="iconfont icon-zhuye" title="网站地址">
                  <i className="iconfont icon-home"/>
                </a>
              </li>
              <li>
                <a href="http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&amp;email=390002333@qq.com" target="_blank" className="iconfont icon-youxiang" title="我的邮箱">
                  <i className="iconfont icon-newemail"/>
                </a>
              </li>
              <li><a href="http://wpa.qq.com/msgrd?v=3&amp;uin=390002333&amp;site=qq&amp;menu=yes" target="_blank" className="iconfont icon---" title="QQ联系我">
                <i className="iconfont icon-qq"/>
              </a></li>
              <li id="weixin">
                <a href="/blog/images/qrcode-wx.jpg" target="_blank" className="iconfont icon-weixin" title="关注我的微信">
                  <i className="iconfont icon-weixin3"/>
                </a>
                <i className="img"><img src="/blog/images/qrcode-wx.jpg"/></i>
              </li>
            </ul>
          </div>

          {/* 公告 */}
          <div className="white-bg notice">
            <h2 className="h-title">网站公告</h2>
            <ul>
              <li><a href="/" title="【个人博客空间申请】金牛云服，免费领空间啦" target="_blank">【个人博客空间申请】金牛云服，免费领空间啦</a></li>
              <li><a href="/" title="双十一，阿里云特惠活动，快来领券啦" target="_blank">双十一，阿里云特惠活动，快来领券啦</a></li>
              <li><a href="/" title="第二届 优秀个人博客模板比赛参选活动" target="_blank">第二届 优秀个人博客模板比赛参选活动</a></li>
              <li><a href="/" title="为什么说10月24日是程序员的节日？" target="_blank">为什么说10月24日是程序员的节日？</a></li>
            </ul>
          </div>

          {/* 排行 */}
          <div className="white-bg ranking">
            <h2 className="h-title">点击排行</h2>
            <section className="top-news img-scale">
              <a href="/">
                <img src="/blog/images/b02.jpg"/>
                <span>安静地做一个爱设计的女子</span>
              </a>
            </section>
            <ul>
              <li><i></i><a href="/" title="作为一个设计师,如果遭到质疑你是否能恪守自己的原则?" target="_blank">作为一个设计师,如果遭到质疑你是否能恪守自己的原则?</a></li>
              <li><i></i><a href="/" title="为什么说10月24日是程序员的节日？" target="_blank">为什么说10月24日是程序员的节日？</a></li>
              <li><i></i><a href="/" title="【个人博客空间申请】金牛云服，免费领空间啦" target="_blank">【个人博客空间申请】金牛云服，免费领空间啦</a></li>
              <li><i></i><a href="/" title="十条设计原则教你学会如何设计网页布局!" target="_blank">十条设计原则教你学会如何设计网页布局!</a></li>
              <li><i></i><a href="/" title="个人网站做好了，百度不收录怎么办？来，看看他们怎么做的。" target="_blank">个人网站做好了，百度不收录怎么办？来，看看他们怎么做的。</a></li>
              <li><i></i><a href="/" title="如何快速建立自己的个人博客网站" target="_blank">如何快速建立自己的个人博客网站</a></li>
              <li><i></i><a href="/" title="即便是坑，我也想要拉你入伙！" target="_blank">即便是坑，我也想要拉你入伙！</a></li>
            </ul>
          </div>

          {/* 站长推荐 */}
          <div className="white-bg recommend">
            <h2 className="h-title">站长推荐</h2>
            <section className="top-news img-scale">
              <a href="/">
                <img src="/blog/images/4.jpg"/>
                <span>作为一个设计师,如果遭到质疑你是否能恪守自己的原则?</span>
              </a>
            </section>
            <ul>
              <li>
                <a href="/" title="如何快速建立自己的个人博客网站" target="_blank">
                  <i><img src="/blog/images/r1.png"/></i>
                  <p>如何快速建立自己的个人博客网站</p>
                </a>
              </li>
              <li>
                <a href="/" title="我的个人博客之——阿里云空间选择" target="_blank">
                  <i><img src="/blog/images/r2.png"/></i>
                  <p>我的个人博客之——阿里云空间选择</p>
                </a>
              </li>
              <li>
                <a href="/" title="十条设计原则教你学会如何设计网页布局!" target="_blank">
                  <i><img src="/blog/images/r3.jpg"/></i>
                  <p>十条设计原则教你学会如何设计网页布局!</p>
                </a>
              </li>
            </ul>
          </div>

          {/* 广告图片 */}
          <div className="ad white-bg img-scale">
            <ul>
              <li>
                <a href="/" target="_blank">
                  <img src="/blog/images/ad.jpg"/>
                </a>
              </li>
            </ul>
          </div>

          {/* 猜你喜欢 */}
          <div className="white-bg word">
            <h2 className="h-title">猜你喜欢</h2>
            <ul>
              <li><a target="_blank" href="/">如何快速建立自己的个人博客网站</a></li>
              <li><a target="_blank" href="/">【个人博客空间申请】金牛云服，免费领空间啦</a></li>
              <li><a target="_blank" href="/">CSS3 Maker 在线生成代码</a></li>
              <li><a target="_blank" href="/">【个人博客网站制作】自己不会个人博客网站制作，你会选择用什么博客程序源码？</a></li>
              <li><a target="_blank" href="/">我的个人博客之——阿里云空间选择</a></li>
              <li><a target="_blank" href="/">个人博客，属于我的小世界！</a></li>
              <li><a target="_blank" href="/">个人博客用帝国cms 自定义页面 灵动标签调用网站所有信息</a></li>
              <li><a target="_blank" href="/">网易博客关闭，何不从此开始潇洒行走江湖！</a></li>
              <li><a target="_blank" href="/">个人网站做好了，百度不收录怎么办？来，看看他们怎么做的</a></li>
              <li><a target="_blank" href="/">安静地做一个爱设计的女子</a></li>
            </ul>
          </div>

          {/* 广告图片 */}
          <div className="ad white-bg img-scale">
            <ul>
              <li>
                <a href="/" target="_blank">
                  <img src="/blog/images/ad02.jpg"/>
                </a>
              </li>
            </ul>
          </div>

          {/* 统计 */}
          <div className="white-bg statistic">
            <h2 className="h-title">站点信息</h2>
            <ul>
              <li><b>建站时间</b>：2018-10-24</li>
              <li><b>网站程序</b>：帝国CMS7.5</li>
              <li><b>主题模板</b>：<a href="http://jxhx.yangqq.com/" target="_blank">《今夕何夕》</a></li>
              <li><b>文章统计</b>：<a href="#/time" target="_blank">31</a>篇文章</li>
              <li><b>标签管理</b>：<a href="/" target="_blank">标签云</a></li>
              <li><b>统计数据</b>：<a href="/" target="_blank">百度统计</a></li>
              <li><b>微信公众号</b>：扫描二维码，关注我</li>
              <li className="statistic-gzh">
                <a href="/blog/images/qrcode-gzh.jpg" target="_blank">
                  <img src="/blog/images/qrcode-gzh.jpg"/>
                </a>
              </li>
            </ul>
          </div>

          {/* 友情链接 */}
          <div className="links white-bg">
            <h2 className="h-title">友情链接</h2>
            <ul>
              <li><a href="http://www.yangqq.com/" target="_blank">个人博客模板</a></li>
            </ul>
          </div>
        </div>
      </article>

      <Footer/>
      <Top/>
    </div>
  }
}
export default Home;