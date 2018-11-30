'use strict';

import React from "react";
import ReactDOM from "react-dom";
import {Router, Route} from "react-router";
import Home from "./modules/Home/Home";
import About from "./modules/about/About";
import Time from "./modules/time/Time";
import Links from "./modules/links/Links";
import Article from "./modules/article/Article";
import {createHashHistory} from "history";
import "./base.less";
import "./m.less";

var routerHistory = require('react-router').useRouterHistory;
const appHistory = routerHistory(createHashHistory)({queryKey: false});

ReactDOM.render((
                <Router history={appHistory}>
                    <Route path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/time" component={Time}/>
                    <Route path="/links" component={Links}/>
                    <Route path="/article" component={Article}/>
                </Router>),
        document.getElementById('App')
);

let style = "color: #fff;font-size:14px;background: #000 linear-gradient(to left, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55)";
console.log("\n");
console.log("\n");
console.log("%c  欢迎您来到我的个人博客。你，我生命中一个重要的过客。我们之所以是过客，只因为你未曾会为我停留。", "color:red;font-size:14px;font-family:cursive;")
console.log("\n");
console.log("%c" +
        "                              __                                               \n" +
        "                             |  \\                                              \n" +
        "      __   __   __   ______  | $$  _______   ______   ______ ____    ______    \n" +
        "     |  \\ |  \\ |  \\ /      \\ | $$ /       \\ /      \\ |      \\    \\  /      \\   \n" +
        "     | $$ | $$ | $$|  $$$$$$\\| $$|  $$$$$$$|  $$$$$$\\| $$$$$$\\$$$$\\|  $$$$$$\\  \n" +
        "     | $$ | $$ | $$| $$    $$| $$| $$      | $$  | $$| $$ | $$ | $$| $$    $$  \n" +
        "     | $$_/ $$_/ $$| $$$$$$$$| $$| $$_____ | $$__/ $$| $$ | $$ | $$| $$$$$$$$  \n" +
        "      \\$$   $$   $$ \\$$     \\| $$ \\$$     \\ \\$$    $$| $$ | $$ | $$ \\$$    \\   \n" +
        "       \\$$$$$\\$$$$   \\$$$$$$$ \\$$  \\$$$$$$$  \\$$$$$$  \\$$  \\$$  \\$$  \\$$$$$$$  \n" +
        "                                                                               \n" +
        "                                                                               \n", style);
console.log("\n");