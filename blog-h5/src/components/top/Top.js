/**
 * Created by vic on 2018/11/23.
 */
import React from "react";
import "./Top.less";
/**
 * 回到页首小组件
 */
class Top extends React.Component {

    render() {
        return <div className="top-render">
            <a href="/#">
                <div className="top"></div>
            </a>
        </div>
    }
}
export default Top;