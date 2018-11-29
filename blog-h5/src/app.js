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
