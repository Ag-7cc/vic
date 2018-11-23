/**
 * Created by vic on 2018/11/23.
 */
import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./About.less";
import "./Sohucs.less"
/**
 * 关于我
 */
class About extends React.Component {
    render() {
        return <div className="about-render">
            <Header selected="about"/>

            <article>
                <div className="white-bg about">
                    {/* 简介 */}
                    <div className="ab-box">
                        <i className="avatar-pic"><a href="http://shanqibei.com/about/" target="_blank"><img src="/blog/images/avatar.jpg"/></a></i>
                        <h3>单其贝</h3>
                        <p>一个90后Java攻城狮。</p>
                        <p>欢迎您，来到我的个人博客，你，我生命中一个重要的过客，我们之所以是过客，因为你未曾会为我停留。</p>
                    </div>

                    {/* 内心独白 */}
                    <h2 className="gd-title">内心独白</h2>
                    <p className="ab-dubai">
                        只为成功找机会，不为失败找借口！对技术充满渴望，与多家初创公司一起奋斗过，虽然最后的结果并不理想，但依然敢打敢拼，不怕失败，希望能与公司一同成长。我也希望有一天我能自豪的说出“这家公司，我们一起奋斗过”。
                        <br/>有强烈的责任感，工作踏实，性格开朗乐观，积极上进，吃苦耐劳。能在较大的压力下保持良好的工作状态，善于自我调节。非常热爱编程，喜欢钻研新的技术，喜欢接受各种不同的挑战。具有很强的自学能力和良好的学习方法。
                    </p>

                    {/* 网友留言 */}
                    <h2 className="gd-title">网友留言</h2>

                    <ul className="liuyan">
                        {/* PC版 */}
                        <div id="SOHUCS" sid="[!--id--]">
                            <div id="SOHU_MAIN">
                                <div node-type="cy-collection-btn" className="cy-collection-btn">
                                    <i></i>
                                    <span>收藏文章</span>
                                </div>
                                <div className="module-cmt-header">
                                    <div className="cy-hidden">
                                        <button id="jump-to-kz"></button>
                                    </div>
                                    <div className="clear-g section-title-w">
                                        <div className="title-user-w">
                                            <div node-type="user" className="clear-g user-wrap-w">
                                                <span node-type="user-name" className="wrap-name-w"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="section-cbox-w">
                                        <div className="cbox-block-w clear-g">
                                            <div node-type="block-head-w" className="block-head-w">
                                                <div node-type="avatar" className="head-img-w">
                                                    <a href="javascript:void(0);">
                                                        <img node-type="user-head" src="https://changyan.sohu.com/upload/asset/scs/images/pic/pic42_null.gif" width="42" height="42" alt=""/>
                                                        <div node-type="head-img-ie-mask" className="head-img-ie-mask"></div>
                                                    </a>
                                                    <div node-type="notice-node" style={{"display": "none"}} className="cy-avatar-notice-node"></div>
                                                </div>
                                                <div node-type="header-login" className="header-login">登录</div>
                                                <div className="cy-to-shequ-head">
                                                    <span>我的社区</span>
                                                </div>
                                            </div>
                                            <div node-type="login-select" className="block-post-w">
                                                {/* 放置cbox初始状态 */}
                                                <div className="module-cmt-box">
                                                    {/* 展开状态 */}
                                                    <div className="post-wrap-w">
                                                        <div className="post-wrap-border-l"></div>
                                                        <div className="post-wrap-border-r"></div>
                                                        <div node-type="post-wrap-main" className="post-wrap-main">
                                                            <div className="post-wrap-border-t">
                                                                <div node-type="post-wrap-border-t-l" className="post-wrap-border-t-l"></div>
                                                                <div node-type="post-wrap-border-t-r" className="post-wrap-border-t-r"></div>
                                                            </div>
                                                            <div className="wrap-area-w">
                                                                <div className="area-textarea-w">
                                                                    <textarea node-type="textarea" name="" className="textarea-fw textarea-bf">有事没事说两句...</textarea>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="clear-g wrap-action-w">
                                                            <div className="action-function-w">
                                                                <ul className="clear-g">
                                                                    <li node-type="function-face" className="function-face-w">
                                                                        <a className="effect-w" href="javascript:void(0)">
                                                                            <i className="face-b"></i>
                                                                        </a>
                                                                    </li>
                                                                    <li node-type="function-uploading" className="function-uploading-w">
                                                                        <a className="effect-w" href="javascript:void(0)" title="上传图片">
                                                                            <i className="uploading-b"></i>
                                                                        </a>
                                                                        <div className="uploading-file-w">
                                                                            <a href="javascript:void(0);" name="" className="file-fw"></a>
                                                                        </div>
                                                                        <form style={{"display": "none"}}><input name="file" type="file" accept="image/jpg,image/jpeg,image/png"/></form>
                                                                    </li>
                                                                </ul>
                                                                {/* 表情 */}
                                                                <div node-type="face-box" className="face-wrapper-dw">
                                                                    <div node-type="face-cont" className="wrapper-cont-dw">
                                                                        <ul className="clear-g">
                                                                            <li>
                                                                                <span title="流汗" data_path="base" data-ubb="/流汗" className="face-item face_01"></span>
                                                                            </li>
                                                                            <li>
                                                                                <span title="钱" data_path="base" data-ubb="/钱" className="face-item face_02"></span>
                                                                            </li>
                                                                            <li>
                                                                                <span title="发怒" data_path="base" data-ubb="/发怒" className="face-item face_03"></span>
                                                                            </li>
                                                                            <li>
                                                                                <span title="浮云" data_path="base" data-ubb="/浮云" className="face-item face_04"></span>
                                                                            </li>
                                                                            <li>
                                                                                <span title="给力" data_path="base" data-ubb="/给力" className="face-item face_05"></span>
                                                                            </li>
                                                                            <li>
                                                                                <span title="大哭" data_path="base" data-ubb="/大哭" className="face-item face_06"></span>
                                                                            </li>
                                                                            <li>
                                                                                <span title="憨笑" data_path="base" data-ubb="/憨笑" className="face-item face_07"></span>
                                                                            </li>
                                                                            <li>
                                                                                <span title="色" data_path="base" data-ubb="/色" className="face-item face_08"></span>
                                                                            </li>
                                                                        </ul>
                                                                        <ul className="clear-g">
                                                                            <li>
                                                                                <span title="奋斗" data_path="base" data-ubb="/奋斗" className="face-item face_09"></span>
                                                                            </li>
                                                                            <li>
                                                                                <span title="鼓掌" data_path="base" data-ubb="/鼓掌" className="face-item face_10"></span>
                                                                            </li>
                                                                            <li>
                                                                                <span title="鄙视" data_path="base" data-ubb="/鄙视" className="face-item face_11"></span>
                                                                            </li>
                                                                            <li>
                                                                                <span title="可爱" data_path="base" data-ubb="/可爱" className="face-item face_12"></span>
                                                                            </li>
                                                                            <li>
                                                                                <span title="闭嘴" data_path="base" data-ubb="/闭嘴" className="face-item face_13"></span>
                                                                            </li>
                                                                            <li>
                                                                                <span title="疑问" data_path="base" data-ubb="/疑问" className="face-item face_14"></span>
                                                                            </li>
                                                                            <li>
                                                                                <span title="抓狂" data_path="base" data-ubb="/抓狂" className="face-item face_15"></span>
                                                                            </li>
                                                                            <li>
                                                                                <span title="惊讶" data_path="base" data-ubb="/惊讶" className="face-item face_16"></span>
                                                                            </li>
                                                                        </ul>
                                                                        <ul className="clear-g">
                                                                            <li>
                                                                                <span title="可怜" data_path="base" data-ubb="/可怜" className="face-item face_17"></span>
                                                                            </li>
                                                                            <li>
                                                                                <span title="弱" data_path="base" data-ubb="/弱" className="face-item face_18"></span>
                                                                            </li>
                                                                            <li>
                                                                                <span title="强" data_path="base" data-ubb="/强" className="face-item face_19"></span>
                                                                            </li>
                                                                            <li>
                                                                                <span title="握手" data_path="base" data-ubb="/握手" className="face-item face_20"></span>
                                                                            </li>
                                                                            <li>
                                                                                <span title="拳头" data_path="base" data-ubb="/拳头" className="face-item face_21"></span>
                                                                            </li>
                                                                            <li>
                                                                                <span title="酒" data_path="base" data-ubb="/酒" className="face-item face_22"></span>
                                                                            </li>
                                                                            <li>
                                                                                <span title="玫瑰" data_path="base" data-ubb="/玫瑰" className="face-item face_23"></span>
                                                                            </li>
                                                                            <li>
                                                                                <span title="打酱油" data_path="base" data-ubb="/打酱油" className="face-item face_24"></span>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div node-type="user-face-cont" className="wrapper-user-face-dw nano">
                                                                        <div className="nano-content">
                                                                            <ul className="clear-g">
                                                                                <li className="upload-face-btn"></li>
                                                                                <li className="manage-face-btn"></li>
                                                                                <li className="cancel-face-btn"></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div node-type="face-tab" className="action-face-tab-dw">
                                                                        <ul className="clear-g">
                                                                            <li node-type="official-face" className="official-face-btn active"></li>
                                                                            <li node-type="user-face" className="user-face-btn" style={{"display": "none"}}></li>
                                                                        </ul>
                                                                    </div>
                                                                    <div node-type="confirm-box" className="cy-confirm-box">
                                                                        <div className="cy-confirm-text">
                                                                            <span>表情删除后不可恢复，是否删除</span>
                                                                        </div>
                                                                        <div className="cy-confirm-btn-row">
                                                                            <div className="cy-confirm-btn-cancel">取消</div>
                                                                            <div className="cy-confirm-btn-confirm">确定</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/* 上传图片 uploading-efw */}
                                                                <div node-type="uploading-wrapper" className="uploading-wrapper-dw uploading-efw ">
                                                                    <div className="uploading-wrapper-dw-t"></div>
                                                                    <div className="uploading-wrapper-dw-b"></div>
                                                                    <div node-type="image-uploading" className="wrapper-loading-dw">
                                                                        <div className="loading-word-dw"><span className="word-icon-dw"></span>图片正在上传，请稍后...</div>
                                                                        <div className="loading-btn-dw">
                                                                            <a href="javascript:void(0)">取消上传</a>
                                                                        </div>
                                                                    </div>
                                                                    <div node-type="image-uploaded" className="wrapper-image-dw">
                                                                        <div className="image-close-dw">
                                                                            <a href="javascript:void(0)"></a>
                                                                        </div>
                                                                        <div className="image-pic-dw">
                                                                            <img node-type="image-pic" alt="" src=""/>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="clear-g action-issue-w">
                                                                <div className="issue-btn-w">
                                                                    <a href="javascript:void(0)">
                                                                        <button node-type="issue" className="btn-fw"></button>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="cbox-prompt-w" node-type="error-tips">
                                                                <span node-type="prompt-empty" className="prompt-empty-w">评论内容为空！</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* 放置cbox发布状态 */}
                                                {/* 提示条 */}
                                                {/* 零评论提示条 */}
                                                <div className="list-comment-empty-w">

                                                </div>
                                                {/* 关闭评论 */}
                                                <div className="list-close-comment-w">

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* 评论列表  S */}
                                <div node-type="module-cmt-list" className="module-cmt-list section-list-w">

                                    <div className="cmt-list-type">
                                        <ul className="clear-g type-lists">
                                            <li className="type-list active">评论</li>
                                        </ul>
                                        <div className="cmt-list-border"></div>
                                        <div className="cmt-list-number">
                                            <span className="comment-number"><span className="number">5151</span>人参与,<span className="number">3922</span>条评论</span>
                                        </div>
                                    </div>

                                    {/* 热门评论 */}
                                    <div className="list-block-gw list-hot-w">
                                        <div className="block-title-gw">
                                            <ul className="clear-g">
                                                <li>
                                                    <div className="title-name-gw">
                                                        <div className="title-name-gw-tag"></div>
                                                        热门评论
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div node-type="hot-list">
                                            <div node-type="cmt-item" data-id="1548562388" data-user-id="958071667" data-platform-id="3" className="clear-g block-cont-gw">
                                                <div className="cont-head-gw">
                                                    <div className="head-img-gw">
                                                        <a node-type="photo" href="javascript:;" title="魏义齐">
                                                            <div className="img-corner"></div>
                                                            <img src="http://sucimg.itc.cn/avatarimg/958071667_1522753668148_c55" width="42" height="42" alt=""/>
                                                        </a>
                                                    </div>
                                                </div>
                                                {/*<div className="cont-msg-gw">*/}
                                                {/*<div node-type="prop-wrap" className="prop-wrap" style="height: 90px;">*/}
                                                {/*<div className="prop-wrap-hidden" style="height: 90px;">*/}
                                                {/*<span className="icon"*/}
                                                {/*style="left: 92px; top: 7px; background: url(&quot;http://0d077ef9e74d8.cdn.sohucs.com/pFSEdA7_png&quot;) no-repeat;"></span>*/}
                                                {/*<span className="icon"*/}
                                                {/*style="left: 128px; top: 22px; background: url(&quot;http://0d077ef9e74d8.cdn.sohucs.com/pKLlhvp_png&quot;) no-repeat;"></span>*/}
                                                {/*<span className="icon"*/}
                                                {/*style="left: 168px; top: 4px; background: url(&quot;http://0d077ef9e74d8.cdn.sohucs.com/pKLlexR_png&quot;) no-repeat;"></span>*/}
                                                {/*<span className="icon"*/}
                                                {/*style="left: 214.5px; top: 51px; background: url(&quot;http://0d077ef9e74d8.cdn.sohucs.com/pKLlVEd_png&quot;) no-repeat;"></span>*/}
                                                {/*<span className="icon"*/}
                                                {/*style="left: 291px; top: 34px; background: url(&quot;http://0d077ef9e74d8.cdn.sohucs.com/pFSEmA0_png&quot;) no-repeat;"></span>*/}
                                                {/*<span className="icon"*/}
                                                {/*style="left: 337px; top: 46px; background: url(&quot;http://0d077ef9e74d8.cdn.sohucs.com/pKLlEb3_png&quot;) no-repeat;"></span>*/}
                                                {/*<span className="icon"*/}
                                                {/*style="left: 396.5px; top: 22px; background: url(&quot;http://0d077ef9e74d8.cdn.sohucs.com/pKLlQW6_png&quot;) no-repeat;"></span>*/}
                                                {/*<span className="icon"*/}
                                                {/*style="left: 462px; top: 25px; background: url(&quot;http://0d077ef9e74d8.cdn.sohucs.com/pFSDZeW_png&quot;) no-repeat;"></span>*/}
                                                {/*<span className="icon"*/}
                                                {/*style="left: 502.5px; top: 11px; background: url(&quot;http://0d077ef9e74d8.cdn.sohucs.com/pKLlhvp_png&quot;) no-repeat;"></span>*/}
                                                {/*<span className="icon"*/}
                                                {/*style="left: 583.5px; top: 45px; background: url(&quot;http://0d077ef9e74d8.cdn.sohucs.com/pKLlhvp_png&quot;) no-repeat;"></span>*/}
                                                {/*<span className="icon"*/}
                                                {/*style="left: 661px; top: 12px; background: url(&quot;http://0d077ef9e74d8.cdn.sohucs.com/pFSEOOQ_png&quot;) no-repeat;"></span>*/}
                                                {/*<span className="icon"*/}
                                                {/*style="left: 707px; top: 45px; background: url(&quot;http://0d077ef9e74d8.cdn.sohucs.com/pFSEdA7_png&quot;) no-repeat;"></span>*/}
                                                {/*<span className="icon"*/}
                                                {/*style="left: 734px; top: 32px; background: url(&quot;http://0d077ef9e74d8.cdn.sohucs.com/pFSEOOQ_png&quot;) no-repeat;"></span>*/}
                                                {/*<span className="icon"*/}
                                                {/*style="left: 788.5px; top: 37px; background: url(&quot;http://0d077ef9e74d8.cdn.sohucs.com/pFSDZeW_png&quot;) no-repeat;"></span>*/}
                                                {/*<span className="icon"*/}
                                                {/*style="left: 864px; top: 13px; background: url(&quot;http://0d077ef9e74d8.cdn.sohucs.com/pFSEdA7_png&quot;) no-repeat;"></span>*/}
                                                {/*<span className="icon"*/}
                                                {/*style="left: 898px; top: 15px; background: url(&quot;http://0d077ef9e74d8.cdn.sohucs.com/pFSEmA0_png&quot;) no-repeat;"></span>*/}
                                                {/*<span className="icon"*/}
                                                {/*style="left: 956px; top: 12px; background: url(&quot;http://0d077ef9e74d8.cdn.sohucs.com/pFSDZeW_png&quot;) no-repeat;"></span>*/}
                                                {/*<span className="icon"*/}
                                                {/*style="left: 1006px; top: 39px; background: url(&quot;http://0d077ef9e74d8.cdn.sohucs.com/pFSDZeW_png&quot;) no-repeat;"></span>*/}
                                                {/*</div>*/}
                                                {/*</div>*/}
                                                {/*<div className="msg-wrap-gw" style="margin-top: -90px;">*/}
                                                {/*<div className="wrap-user-gw global-clear-spacing">*/}
                                                {/*<span className="user-time-gw">2018年4月22日 22:08</span>*/}
                                                {/*<span node-type="nickname" className="user-name-gw"><a href="javascript:void(0)">魏义齐</a></span>*/}

                                                {/*<span className="user-address-gw">[<i>陕西省西安市</i>网友]</span>*/}
                                                {/*</div>*/}


                                                {/*<div className="wrap-issue-gw">*/}
                                                {/*<p className="issue-wrap-gw"><span className="wrap-word-gw">又经历了一次小改版，解决首页模块参差不齐的问题，留言板、关于栏目主内容区两端对齐，改善了移动端导航太大的问题，欢迎访问，魏义齐个人博客。</span></p>*/}
                                                {/*<div className="cy-see-more">*/}
                                                {/*<span></span><i></i>*/}
                                                {/*</div>*/}
                                                {/*</div>*/}
                                                {/*/!* 图片展示 *!/*/}

                                                {/*<div node-type="btns-bar" className="clear-g wrap-action-gw">*/}
                                                {/*<div node-type="action-click-gw" className="action-click-gw global-clear-spacing">*/}
                                                {/*<i className="gap-gw"></i>*/}
                                                {/*<span node-type="report" className="click-report-gw">*/}
                                                {/*<a href="javascript:void(0)"><i className="icon-gw icon-flag"></i><em>举报</em></a>*/}
                                                {/*</span>*/}
                                                {/*<i className="gap-gw"></i>*/}
                                                {/*<span node-type="reply" className="click-reply-gw">*/}
                                                {/*<a href="javascript:void(0)">回复</a>*/}
                                                {/*</span>*/}
                                                {/*<i className="gap-gw"></i>*/}
                                                {/*<span node-type="support" className="click-ding-gw">*/}
                                                {/*<a href="javascript:;"><i className="icon-gw icon-ding-bg"></i><em className="icon-name-bg">21</em></a>*/}
                                                {/*</span>*/}

                                                {/*<i className="gap-gw"></i>*/}
                                                {/*<span node-type="prop" className="click-prop-gw">*/}
                                                {/*<span className="prop-span"><a href="javascript:void(0)"></a></span>*/}
                                                {/*</span>*/}
                                                {/*</div>*/}
                                                {/*</div>*/}
                                                {/*</div>*/}
                                                {/*</div>*/}
                                            </div>
                                            <div node-type="cmt-item" data-id="1546631838" data-user-id="48723862" data-platform-id="3" className="clear-g block-cont-gw">
                                                <div className="cont-head-gw">
                                                    <div className="head-img-gw">
                                                        <a node-type="photo" href="javascript:;" title="王杭博客">
                                                            <div className="img-corner"></div>
                                                            <img src="http://0d077ef9e74d8.cdn.sohucs.com/c_zoom,w_200/clip_picture_1465660407930" width="42" height="42" alt=""/>
                                                        </a>
                                                    </div>
                                                </div>
                                                {/*<div className="cont-msg-gw">*/}
                                                {/*<div node-type="prop-wrap" className="prop-wrap" style="height: 90px;">*/}
                                                {/*<div className="prop-wrap-hidden" style="height: 90px;">*/}
                                                {/*<span className="icon"*/}
                                                {/*style="left: 25px; top: 32px; background: url(&quot;http://0d077ef9e74d8.cdn.sohucs.com/pFSEOOQ_png&quot;) no-repeat;"></span>*/}
                                                {/*<span className="icon"*/}
                                                {/*style="left: 130.5px; top: 1px; background: url(&quot;http://0d077ef9e74d8.cdn.sohucs.com/pFSEmA0_png&quot;) no-repeat;"></span>*/}
                                                {/*<span className="icon"*/}
                                                {/*style="left: 265px; top: 18px; background: url(&quot;http://0d077ef9e74d8.cdn.sohucs.com/pKLlexR_png&quot;) no-repeat;"></span>*/}
                                                {/*<span className="icon"*/}
                                                {/*style="left: 335.5px; top: 22px; background: url(&quot;http://0d077ef9e74d8.cdn.sohucs.com/pKLlVEd_png&quot;) no-repeat;"></span>*/}
                                                {/*<span className="icon"*/}
                                                {/*style="left: 420.5px; top: 32px; background: url(&quot;http://0d077ef9e74d8.cdn.sohucs.com/pKLlEb3_png&quot;) no-repeat;"></span>*/}
                                                {/*<span className="icon"*/}
                                                {/*style="left: 545px; top: 12px; background: url(&quot;http://0d077ef9e74d8.cdn.sohucs.com/pKLlQW6_png&quot;) no-repeat;"></span>*/}
                                                {/*</div>*/}
                                                {/*</div>*/}
                                                {/*<div className="msg-wrap-gw" style="margin-top: -90px;">*/}
                                                {/*<div className="wrap-user-gw global-clear-spacing">*/}
                                                {/*<span className="user-time-gw">2018年4月12日 21:56</span>*/}
                                                {/*<span node-type="nickname" className="user-name-gw"><a href="javascript:void(0)">王杭博客</a></span>*/}
                                                {/*<span className="user-address-gw">[<i>河南省郑州市</i>网友]</span>*/}
                                                {/*</div>*/}

                                                {/*<div className="wrap-issue-gw">*/}
                                                {/*<p className="issue-wrap-gw"><span className="wrap-word-gw">青姐的博客改版了，漂亮</span></p>*/}
                                                {/*<div className="cy-see-more">*/}
                                                {/*<span></span><i></i>*/}
                                                {/*</div>*/}
                                                {/*</div>*/}
                                                {/*/!* 图片展示 *!/*/}

                                                {/*<div node-type="btns-bar" className="clear-g wrap-action-gw">*/}
                                                {/*<div node-type="action-click-gw" className="action-click-gw global-clear-spacing">*/}
                                                {/*<i className="gap-gw"></i>*/}
                                                {/*<span node-type="report" className="click-report-gw">*/}
                                                {/*<a href="javascript:void(0)"><i className="icon-gw icon-flag"></i><em>举报</em></a>*/}
                                                {/*</span>*/}
                                                {/*<i className="gap-gw"></i>*/}
                                                {/*<span node-type="reply" className="click-reply-gw">*/}
                                                {/*<a href="javascript:void(0)">回复</a>*/}
                                                {/*</span>*/}
                                                {/*<i className="gap-gw"></i>*/}
                                                {/*<span node-type="support" className="click-ding-gw">*/}
                                                {/*<a href="javascript:;"><i className="icon-gw icon-ding-bg"></i><em className="icon-name-bg">18</em></a>*/}
                                                {/*</span>*/}
                                                {/*<i className="gap-gw"></i>*/}
                                                {/*<span node-type="prop" className="click-prop-gw">*/}
                                                {/*<span className="prop-span"><a href="javascript:void(0)"></a></span>*/}
                                                {/*</span>*/}
                                                {/*</div>*/}
                                                {/*</div>*/}
                                                {/*</div>*/}
                                                {/*</div>*/}
                                            </div>
                                        </div>
                                    </div>

                                    {/* 最新评论 */}
                                    <div className="list-block-gw list-newest-w">
                                        <div node-type="cmt-list-title" className="block-title-gw">
                                            <ul className="clear-g">
                                                <li>
                                                    <div className="title-name-gw title-name-bg">
                                                        <div className="title-name-gw-tag"></div>
                                                        最新评论
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div node-type="cmt-list" id="cy-cmt-list">
                                            <div node-type="cmt-item" data-id="1581103279" data-user-id="25072073" data-platform-id="3" className="clear-g block-cont-gw">
                                                <div className="cont-head-gw">
                                                    <div className="head-img-gw">
                                                        <a node-type="photo" href="javascript:;" title="陌上寒">
                                                            <div className="img-corner"></div>
                                                            <img src="http://0d077ef9e74d8.cdn.sohucs.com/c_zoom,w_200/clip_picture_1496397728675" width="42" height="42" alt=""/>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="cont-msg-gw">
                                                    <div className="msg-wrap-gw">
                                                        <div className="wrap-user-gw global-clear-spacing">
                                                            <span className="user-time-gw">2018年11月10日 15:51</span>
                                                            <span node-type="nickname" className="user-name-gw"><a href="javascript:void(0)">陌上寒</a></span>
                                                        </div>

                                                        <div className="wrap-issue-gw">
                                                            <p className="issue-wrap-gw"><span className="wrap-word-gw">小清新</span></p>
                                                            <div className="cy-see-more">
                                                                <span></span><i></i>
                                                            </div>
                                                        </div>
                                                        {/* 图片展示 */}

                                                        <div node-type="btns-bar" className="clear-g wrap-action-gw">
                                                            <div node-type="action-click-gw" className="action-click-gw global-clear-spacing">
                                                                <i className="gap-gw"></i>
                                                                <span node-type="report" className="click-report-gw"><a href="javascript:void(0)"><i
                                                                        className="icon-gw icon-flag"></i><em>举报</em></a></span>
                                                                <i className="gap-gw"></i>
                                                                <span node-type="reply" className="click-reply-gw"><a href="javascript:void(0)">回复</a></span>
                                                                <i className="gap-gw"></i>
                                                                <span node-type="support" className="click-ding-gw"><a href="javascript:;"><i className="icon-gw icon-ding-bg"></i><em
                                                                        className="icon-name-bg"></em></a></span>
                                                                <i className="gap-gw"></i>
                                                                <span node-type="prop" className="click-prop-gw"><span className="prop-span"><a href="javascript:void(0)"></a></span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div node-type="cmt-item" data-id="1578775172" data-user-id="100000809467" data-platform-id="15" className="clear-g block-cont-gw">
                                                <div className="cont-head-gw">
                                                    <div className="head-img-gw">
                                                        <a node-type="photo" href="javascript:;" title="溯汐潮">
                                                            <div className="img-corner"></div>
                                                            <img src="http://0d077ef9e74d8.cdn.sohucs.com/c_zoom,w_200/fac494264beff70ed91fedf32783552b_default_1449556096993_jpg" width="42"
                                                                 height="42" alt=""/>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="cont-msg-gw">
                                                    <div className="msg-wrap-gw">
                                                        <div className="wrap-user-gw global-clear-spacing">
                                                            <span className="user-time-gw">2018年10月22日 0:00</span>
                                                            <span node-type="nickname" className="user-name-gw"><a href="javascript:void(0)">溯汐潮</a></span>

                                                            <span className="user-address-gw">[<i>四川省</i>网友]</span>
                                                        </div>


                                                        <div className="wrap-issue-gw">
                                                            <p className="issue-wrap-gw"><span className="wrap-word-gw">这个网站不错，不错</span></p>
                                                            <div className="cy-see-more">
                                                                <span></span><i></i>
                                                            </div>
                                                        </div>
                                                        {/* 图片展示 */}

                                                        <div node-type="btns-bar" className="clear-g wrap-action-gw">
                                                            <div node-type="action-click-gw" className="action-click-gw global-clear-spacing">
                                                                <i className="gap-gw"></i>
                                                                <span node-type="report" className="click-report-gw"><a href="javascript:void(0)"><i
                                                                        className="icon-gw icon-flag"></i><em>举报</em></a></span>
                                                                <i className="gap-gw"></i>
                                                                <span node-type="reply" className="click-reply-gw"><a href="javascript:void(0)">回复</a></span>
                                                                <i className="gap-gw"></i>
                                                                <span node-type="support" className="click-ding-gw"><a href="javascript:;"><i className="icon-gw icon-ding-bg"></i><em
                                                                        className="icon-name-bg"></em></a></span>
                                                                <i className="gap-gw"></i>
                                                                <span node-type="prop" className="click-prop-gw"><span className="prop-span"><a href="javascript:void(0)"></a></span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div node-type="cmt-item" data-id="1577888810" data-user-id="100000787668" data-platform-id="15" className="clear-g block-cont-gw">
                                                <div className="cont-head-gw">
                                                    <div className="head-img-gw">
                                                        <a node-type="photo" href="javascript:;" title="愚公移山">
                                                            <div className="img-corner"></div>
                                                            <img src="http://0d077ef9e74d8.cdn.sohucs.com/c_zoom,w_200/fac494264beff70ed91fedf32783552b_default_1449555766398_jpg" width="42"
                                                                 height="42" alt=""/>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="cont-msg-gw">
                                                    <div className="msg-wrap-gw">
                                                        <div className="wrap-user-gw global-clear-spacing">
                                                            <span className="user-time-gw">2018年10月9日 17:45</span>
                                                            <span node-type="nickname" className="user-name-gw"><a href="javascript:void(0)">愚公移山</a></span>
                                                            <span className="user-address-gw">[<i>陕西省西安市</i>网友]</span>
                                                        </div>


                                                        {/* 盖楼 Begin */}
                                                        <div className="wrap-build-gw">
                                                            <div node-type="cmt-item floor-item" data-id="1508217139" data-user-id="897741159" data-platform-id="3" className="build-floor-gw">
                                                                <div node-type="child-floor">
                                                                </div>
                                                                <div node-type="floor-content" className="build-msg-gw">
                                                                    <div className="wrap-user-gw">
                                                                        <span className="user-time-gw user-floor-gw">1</span>
                                                                        <span node-type="nickname" className="user-name-gw"><a href="javascript:void(0)">会灰的海洋</a></span>

                                                                        <span className="user-address-gw">[<i>江苏省苏州市</i>网友]</span>
                                                                    </div>

                                                                    <div>
                                                                        <div className="wrap-issue-gw">
                                                                            <p className="issue-wrap-gw"><span className="wrap-word-gw">年轻的我总是爱惹是非，在每个人眼中，我早已注定成了一个不正的学生。大四了，感觉什么都没做好，被身边的朋友说笑，女朋友也没有。好不容易想去报一个java软件培训，却在钱的问题上踌躇不前。不想让父母知道，因为知道自己上的是本三，本来学费就贵。向亲人借钱，却被告知必须要父母同意才借。感觉自己已经长大，可在别人眼里，依旧是个孩子。也许，每个人都要为自己的年轻负责。在青姐博客下留言，偷偷地许几个愿望，难过时就前来看看。1，我要去筹钱，不犯法，不违背道德就好；2，我要学号java；3，我要找一个女朋友；4，我想和青姐分享我的小想法。期待，未来，能够遇见更好的自己。告诉所有，我不是一个坏孩子。</span>
                                                                            </p>
                                                                            <div className="cy-see-more">
                                                                                <span></span><i></i>
                                                                            </div>
                                                                        </div>
                                                                        {/* 图片展示 */}

                                                                        <div node-type="action-bar btns-bar" className="clear-g wrap-action-gw">
                                                                            <div className="action-click-gw">
                                                                                <i className="gap-gw"></i>
                                                                                <span node-type="report" className="click-report-gw"><a href="javascript:void(0)"><i
                                                                                        className="icon-gw icon-flag"></i><em>举报</em></a></span>
                                                                                <i className="gap-gw"></i>
                                                                                <span node-type="reply" className="click-reply-gw"><a href="javascript:void(0)">回复</a></span>
                                                                                <i className="gap-gw"></i>
                                                                                <span node-type="support" className="click-ding-gw"><a href="javascript:;"><i className="icon-gw icon-ding-bg"></i><em
                                                                                        className="icon-name-bg">31</em></a></span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* 盖楼 End */}

                                                        <div className="wrap-issue-gw">
                                                            <p className="issue-wrap-gw"><span className="wrap-word-gw">可以</span></p>
                                                            <div className="cy-see-more">
                                                                <span></span><i></i>
                                                            </div>
                                                        </div>
                                                        {/* 图片展示 */}

                                                        <div node-type="btns-bar" className="clear-g wrap-action-gw">
                                                            <div node-type="action-click-gw" className="action-click-gw global-clear-spacing">
                                                                <i className="gap-gw"></i>
                                                                <span node-type="report" className="click-report-gw"><a href="javascript:void(0)"><i
                                                                        className="icon-gw icon-flag"></i><em>举报</em></a></span>
                                                                <i className="gap-gw"></i>
                                                                <span node-type="reply" className="click-reply-gw"><a href="javascript:void(0)">回复</a></span>
                                                                <i className="gap-gw"></i>
                                                                <span node-type="support" className="click-ding-gw"><a href="javascript:;"><i className="icon-gw icon-ding-bg"></i><em
                                                                        className="icon-name-bg"></em></a></span>
                                                                <i className="gap-gw"></i>
                                                                <span node-type="prop" className="click-prop-gw"><span className="prop-span"><a href="javascript:void(0)"></a></span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div node-type="cmt-item" data-id="1577888786" data-user-id="100000787668" data-platform-id="15" className="clear-g block-cont-gw">
                                                <div className="cont-head-gw">
                                                    <div className="head-img-gw">
                                                        <a node-type="photo" href="javascript:;" title="愚公移山">
                                                            <div className="img-corner"></div>
                                                            <img src="http://0d077ef9e74d8.cdn.sohucs.com/c_zoom,w_200/fac494264beff70ed91fedf32783552b_default_1449555766398_jpg" width="42"
                                                                 height="42" alt=""/>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="cont-msg-gw">
                                                    <div className="msg-wrap-gw">
                                                        <div className="wrap-user-gw global-clear-spacing">
                                                            <span className="user-time-gw">2018年10月9日 17:44</span>
                                                            <span node-type="nickname" className="user-name-gw"><a href="javascript:void(0)">愚公移山</a></span>

                                                            <span className="user-address-gw">[<i>陕西省西安市</i>网友]</span>
                                                        </div>


                                                        {/* 盖楼 Begin */}
                                                        <div className="wrap-build-gw">
                                                            <div node-type="cmt-item floor-item" data-id="1542271891" data-user-id="896038098" data-platform-id="3" className="build-floor-gw">
                                                                <div node-type="cmt-item floor-item" data-id="1508217139" data-user-id="897741159" data-platform-id="3" className="build-floor-gw">
                                                                    <div node-type="child-floor">
                                                                    </div>
                                                                    <div node-type="floor-content" className="build-msg-gw">
                                                                        <div className="wrap-user-gw">
                                                                            <span className="user-time-gw user-floor-gw">1</span>
                                                                            <span node-type="nickname" className="user-name-gw"><a href="javascript:void(0)">会灰的海洋</a></span>

                                                                            <span className="user-address-gw">[<i>江苏省苏州市</i>网友]</span>
                                                                        </div>

                                                                        <div>
                                                                            <div className="wrap-issue-gw">
                                                                                <p className="issue-wrap-gw"><span className="wrap-word-gw">年轻的我总是爱惹是非，在每个人眼中，我早已注定成了一个不正的学生。大四了，感觉什么都没做好，被身边的朋友说笑，女朋友也没有。好不容易想去报一个java软件培训，却在钱的问题上踌躇不前。不想让父母知道，因为知道自己上的是本三，本来学费就贵。向亲人借钱，却被告知必须要父母同意才借。感觉自己已经长大，可在别人眼里，依旧是个孩子。也许，每个人都要为自己的年轻负责。在青姐博客下留言，偷偷地许几个愿望，难过时就前来看看。1，我要去筹钱，不犯法，不违背道德就好；2，我要学号java；3，我要找一个女朋友；4，我想和青姐分享我的小想法。期待，未来，能够遇见更好的自己。告诉所有，我不是一个坏孩子。</span>
                                                                                </p>
                                                                                <div className="cy-see-more">
                                                                                    <span></span><i></i>
                                                                                </div>
                                                                            </div>
                                                                            {/* 图片展示 */}

                                                                            <div node-type="action-bar btns-bar" className="clear-g wrap-action-gw">
                                                                                <div className="action-click-gw">
                                                                                    <i className="gap-gw"></i>
                                                                                    <span node-type="report" className="click-report-gw"><a href="javascript:void(0)"><i
                                                                                            className="icon-gw icon-flag"></i><em>举报</em></a></span>
                                                                                    <i className="gap-gw"></i>
                                                                                    <span node-type="reply" className="click-reply-gw"><a href="javascript:void(0)">回复</a></span>
                                                                                    <i className="gap-gw"></i>
                                                                                    <span node-type="support" className="click-ding-gw"><a href="javascript:;"><i
                                                                                            className="icon-gw icon-ding-bg"></i><em
                                                                                            className="icon-name-bg">31</em></a></span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div node-type="floor-content" className="build-msg-gw">
                                                                    <div className="wrap-user-gw">
                                                                        <span className="user-time-gw user-floor-gw">2</span>
                                                                        <span node-type="nickname" className="user-name-gw"><a href="javascript:void(0)">痕夕</a></span>

                                                                        <span className="user-address-gw">[<i>重庆市</i>网友]</span>
                                                                    </div>

                                                                    <div>
                                                                        <div className="wrap-issue-gw">
                                                                            <p className="issue-wrap-gw"><span className="wrap-word-gw">赞</span></p>
                                                                            <div className="cy-see-more">
                                                                                <span></span><i></i>
                                                                            </div>
                                                                        </div>
                                                                        {/* 图片展示 */}

                                                                        <div node-type="action-bar btns-bar" className="clear-g wrap-action-gw">
                                                                            <div className="action-click-gw">
                                                                                <i className="gap-gw"></i>
                                                                                <span node-type="report" className="click-report-gw"><a href="javascript:void(0)"><i
                                                                                        className="icon-gw icon-flag"></i><em>举报</em></a></span>
                                                                                <i className="gap-gw"></i>
                                                                                <span node-type="reply" className="click-reply-gw"><a href="javascript:void(0)">回复</a></span>
                                                                                <i className="gap-gw"></i>
                                                                                <span node-type="support" className="click-ding-gw"><a href="javascript:;"><i className="icon-gw icon-ding-bg"></i><em
                                                                                        className="icon-name-bg">12</em></a></span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* 盖楼 End */}

                                                        <div className="wrap-issue-gw">
                                                            <p className="issue-wrap-gw"><span className="wrap-word-gw"><span title="强" className="face-item face_19"></span></span></p>
                                                            <div className="cy-see-more">
                                                                <span></span><i></i>
                                                            </div>
                                                        </div>
                                                        {/* 图片展示 */}

                                                        <div node-type="btns-bar" className="clear-g wrap-action-gw">
                                                            <div node-type="action-click-gw" className="action-click-gw global-clear-spacing">
                                                                <i className="gap-gw"></i>
                                                                <span node-type="report" className="click-report-gw"><a href="javascript:void(0)"><i
                                                                        className="icon-gw icon-flag"></i><em>举报</em></a></span>
                                                                <i className="gap-gw"></i><span node-type="reply" className="click-reply-gw"><a href="javascript:void(0)">回复</a></span>
                                                                <i className="gap-gw"></i>
                                                                <span node-type="support" className="click-ding-gw"><a href="javascript:;"><i className="icon-gw icon-ding-bg"></i><em
                                                                        className="icon-name-bg">1</em></a></span>
                                                                <i className="gap-gw"></i>
                                                                <span node-type="prop" className="click-prop-gw"><span className="prop-span"><a href="javascript:void(0)"></a></span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* 评论列表  E */}
                                <div className="module-cmt-footer">
                                    {/* 评论关闭 */}
                                    <div className="list-comment-close-w">
                                        <div className="close-wrap-w close-wrap-b">该评论已关闭!</div>
                                    </div>
                                    {/*  翻页 */}
                                    <div className="section-page-w">
                                        <div node-type="cmt-more" className="cmt-more-wrap-gw">查看更多<span className="more-arrow-ico"></span></div>
                                    </div>
                                    {/* 某站正在使用畅言 */}
                                    <div className="section-service-w">
                                        <div className="service-wrap-w">
                                            <a href="http://changyan.kuaizhan.com/" target="_blank">
                                                杨青博客正在使用畅言
                                            </a>
                                        </div>
                                    </div>
                                    <div node-type="cy-to-shequ" className="cy-redirect-btn">
                                        <span className="cy-redirect-text">去社区看看吧</span><i className="cy-right-arrow"></i>
                                    </div>
                                    <div node-type="cy-to-hots" className="cy-redirect-btn">
                                        <span className="cy-redirect-text">去热评看看吧</span><i className="cy-right-arrow"></i>
                                    </div>
                                    <div className="cy-to-shequ-float"></div>
                                </div>
                                <div className="module-cmt-notice">
                                    <ul className="nt-list">

                                        <li node-type="notice-message" data-alias="message" data-type="message" data-static="static" className="nt-item" style={{"display": "none"}}>
                                            <div className="nt-logo"></div>
                                            <a node-type="notice-content" className="nt-text" href="javascript:void(0);">你收到<i>0</i>条新通知</a>
                                            <a className="nt-close" href="javascript:void(0);"></a>
                                        </li>

                                        <li node-type="notice-support" data-alias="support" data-type="support" data-static="static" className="nt-item" style={{"display": "none"}}>
                                            <div className="nt-logo"></div>
                                            <a node-type="notice-content" className="nt-text" href="javascript:void(0);">你有<i>0</i>条评论收到赞同</a>
                                            <a className="nt-close" href="javascript:void(0);"></a>
                                        </li>

                                        <li node-type="notice-reply" data-alias="reply" data-type="reply" data-static="static" className="nt-item" style={{"display": "none"}}>
                                            <div className="nt-logo"></div>
                                            <a node-type="notice-content" className="nt-text" href="javascript:void(0);">你有<i>0</i>条新回复</a>
                                            <a className="nt-close" href="javascript:void(0);"></a>
                                        </li>

                                        <li node-type="notice-hots" data-alias="hots" data-type="hots" data-static="static" className="nt-item" style={{"display": "none"}}>
                                            <div className="nt-logo"></div>
                                            <a node-type="notice-content" className="nt-text" href="javascript:void(0);">本日畅言热评新鲜出炉啦！</a>
                                            <a className="nt-close" href="javascript:void(0);"></a>
                                        </li>

                                        <li node-type="notice-task" data-alias="task" data-type="task" data-static="static" className="nt-item" style={{"display": "none"}}>
                                            <div className="nt-logo"></div>
                                            <a node-type="notice-content" className="nt-text" href="javascript:void(0);">你有<i>0</i>个任务已完成</a>
                                            <a className="nt-close" href="javascript:void(0);"></a>
                                        </li>

                                        <li node-type="notice-history" data-alias="history" data-type="history" data-static="static" className="nt-item" style={{"display": "none"}}>
                                            <div className="nt-logo"></div>
                                            <a node-type="notice-content" className="nt-text" href="javascript:void(0);">你收获<i>0</i>个畅言足迹</a>
                                            <a className="nt-close" href="javascript:void(0);"></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </ul>
                </div>
            </article>

            <Footer/>
        </div>
    }
}
export default About;