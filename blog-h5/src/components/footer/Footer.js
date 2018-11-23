/**
 * Created by vic on 2018/11/22.
 */
import React from "react";
import "./Footer.less";
/**
 * 页尾
 */
class Footer extends React.Component {

    render() {
        return <div className="footer-render">
            <footer>
                <div className="box">
                    <div className="wx-box">
                        <ul>
                            <li>
                                <a href="/blog/images/qrcode-qq.jpg" target="_blank"><img src="/blog/images/qrcode-qq.jpg"/></a>
                                <span>我的QQ</span>
                            </li>
                            <li>
                                <a href="/blog/images/qrcode-wx.jpg" target="_blank"><img src="/blog/images/qrcode-wx.jpg"/></a>
                                <span>我的微信</span>
                            </li>
                        </ul>
                    </div>
                    <div className="end-nav">
                        <p><b>站点声明：</b></p>
                        <p>1.本站所有文章未经授权禁止从事商业用途，如有违反，追究法律责任。举报邮箱：
                            <a href="http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&amp;email=390002333@qq.com" target="_blank">390002333@qq.com</a>
                        </p>
                        <p>2.个人转载请注明出处，谢谢</p>
                        <p>
                            Copyright ©
                            <a href="/" target="_blank"> www.shanqibei.com</a> All Rights Reserved. 备案号：
                            <a href="http://www.miitbeian.gov.cn/publish/query/indexFirst.action" target="_blank">沪ICP备17033309号-1</a>
                        </p>
                        <p className="footer-social">
                            <ul>
                                <li>
                                    <a href="http://v.t.sina.com.cn/share/share.php?url=https://shanqibei.com" target="_blank">分享到微博</a>
                                </li>
                                <li>
                                    <a href="http://connect.qq.com/widget/shareqq/index.html?url=https://shanqibei.com" target="_blank">分享到QQ</a>
                                </li>
                                <li>
                                    <a href="http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=https://shanqibei.com" target="_blank">分享到QQ空间</a>
                                </li>
                                <li>
                                    <a href="http://share.renren.com/share/buttonshare.do?link=https://shanqibei.com" target="_blank">分享到人人</a>
                                </li>
                            </ul>
                        </p>
                    </div>
                </div>
                <a href="/">
                    <div className="top"></div>
                </a>
            </footer>
        </div>
    }
}
export default Footer;