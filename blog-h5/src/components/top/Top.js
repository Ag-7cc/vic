/**
 * Created by vic on 2018/11/23.
 */
import React from "react";
import "./Top.less";
/**
 * 回到页首小组件
 */
class Top extends React.Component {

    constructor() {
        super();
        this.goTop = this.goTop.bind(this);
    }

    goTop() {
        var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
        if (currentScroll > 0) {
            window.requestAnimationFrame(this.goTop);
            window.scrollTo(0, currentScroll - (currentScroll / 5));
        }
    }

    render() {
        return <div className="top-render">
            <a onClick={this.goTop}>
                <div className="top"></div>
            </a>
        </div>
    }
}
export default Top;