/**
 * Created by vic on 2018/11/23.
 */
import React from "react";
import Ajax from "../ajax/Ajax";
import "./Banner.less";
/**
 * 首页banner组件
 */
class Banner extends React.Component {

    constructor() {
        super();
        this.state = {
            bannerList: [],
            imageText: [],
            active: 0,
            interval: 0
        };
        this.initInterval = this.initInterval.bind(this);
        this.nextBanner = this.nextBanner.bind(this);
        this.prevBanner = this.prevBanner.bind(this);
        this.curBanner = this.curBanner.bind(this);
    }

    componentWillMount() {

    }

    componentDidMount() {
        Ajax.post("banner/list", {}, (resp) => {
            if (resp.data.bannerList) {
                this.setState({
                    bannerList: resp.data.bannerList,
                    imageText: resp.data.imageText
                });
            }
        });
        this.initInterval();
    }

    initInterval() {
        if (this.state.interval) {
            clearInterval(this.state.interval);
        }
        this.setState({
            interval: setInterval(() => {
                this.setState({
                    active: (this.state.active + 1) % this.state.bannerList.length
                })
            }, 5000)
        })
    }

    curBanner(inx) {
        if (inx >= 0 && inx < this.state.bannerList.length) {
            this.setState({
                active: inx
            }, () => {
                this.initInterval();
            });
        }
    }

    nextBanner() {
        this.setState({
            active: (this.state.active + 1) % this.state.bannerList.length
        }, () => {
            this.initInterval();
        });
    }

    prevBanner() {
        this.setState({
            active: (this.state.bannerList.length + this.state.active - 1) % this.state.bannerList.length
        }, () => {
            this.initInterval();
        });
    }

    render() {
        return <div className="banner-render">
            <div className="ban-box">
                <div className="banner">
                    <div className="banner-image">
                        <ul>
                            {
                                this.state.bannerList.map((item, i) => {
                                    return <li className={i == this.state.active ? "slide active" : "slide"}>
                                        <a href={item.link ? item.link : null} target="_blank">
                                            <img src={item.image}/>
                                        </a>
                                    </li>
                                })
                            }
                        </ul>
                        <div className="controls">
                            <div className="page prev" onClick={this.prevBanner}></div>
                            <div className="page next" onClick={this.nextBanner}></div>
                            <ul className="pager-list">
                                {
                                    this.state.bannerList.map((item, i) => {
                                        return <li className={i == this.state.active ? "page active" : "page"} onClick={this.curBanner.bind(this, i)}>0</li>
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* headline */}
            <div className="headline">
                <ul>
                    {
                        this.state.imageText.map((item) => {
                            return <li>
                                <a href={item.link ? item.link : null} title={item.text} target="_blank">
                                    <img src={item.image} alt={item.text}/>
                                    <span>{item.text}</span>
                                </a>
                            </li>
                        })
                    }
                </ul>
            </div>
        </div>
    }
}

export  default  Banner;