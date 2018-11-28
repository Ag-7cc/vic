/**
 * Created by vic on 2018/11/22.
 */
import React from "react";
import $ from "jquery";
import "./Header.less";
/**
 * 页头
 */
class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showSearch: false,
            menu: false,
        }
        this.showSearchForm = this.showSearchForm.bind(this);
        this.searchTextFocus = this.searchTextFocus.bind(this);
        this.showMenu = this.showMenu.bind(this);
    }

    componentDidMount() {

    }

    showSearchForm(open) {
        this.setState({
            showSearch: open
        });
    }

    searchTextFocus(e) {
        if (e.target.value == '请输入关键字词') {
            e.target.value = '';
        }
    }

    searchTextBlur(e) {
        if (e.target.value == '') {
            e.target.value = '请输入关键字词'
        }
    }

    showMenu() {
        this.setState({
            menu: !this.state.menu,
        }, () => {
            $("#star-list").toggleClass("show");
        });
    }

    render() {
        return <div className="header-render">
            <header>
                <div className="nav-box">
                    <h2 className={this.state.menu ? "mna-vh open" : "mna-vh"} onClick={this.showMenu}><span className="nav-icon"></span></h2>
                    <div className="logo"><a href="/">单其贝个人博客</a></div>
                    <nav>
                        <ul id="star-list">
                            <li><a href="#/" title="首页" className={!this.props.selected ? "selected" : ""}>网站首页</a></li>
                            <li><a href="#/article" className={this.props.selected == "article" ? "selected" : ""}>个人博客日记</a></li>
                            <li className="menu"><a href="/">网站制作</a>
                                <ul className="sub">
                                    <li><a href="#/">CSS3|Html5</a></li>
                                    <li><a href="#/">网站建设</a></li>
                                    <li><a href="#/">推荐工具</a></li>
                                </ul>
                                <span></span></li>
                            <li><a href="#/">设计心得</a></li>
                            <li><a href="#/about" className={this.props.selected == "about" ? "selected" : ""}>关于我</a></li>
                            <li><a href="#/time" className={this.props.selected == "time" ? "selected" : ""}>时间轴</a></li>
                            <li><a href="#/links" className={this.props.selected == "links" ? "selected" : ""}>博客导航</a></li>
                        </ul>
                    </nav>
                    <div className="search-ico" onClick={this.showSearchForm.bind(this, !this.state.showSearch)}></div>
                </div>
            </header>
            <div className="search-box">
                <div className={this.state.showSearch ? "search open" : "search"}>
                    <form action="" method="post" name="search-form">
                        <input name="keyboard" className="input-text" value="请输入关键字词" type="text"
                               onFocus={this.searchTextFocus}
                               onBlur={this.searchTextBlur}/>
                        <input name="submit" className="input-submit" value="搜索" type="submit"/>
                    </form>
                </div>
                <div className="search-close" onClick={this.showSearchForm.bind(this, false)}></div>
            </div>
        </div>
    }
}
export default Header;