'use strict';

import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, Link, IndexRoute, hashHistory, IndexRedirect} from "react-router";
import "./Common.less";
import Home from "./modules/Home/Home";
import {createHashHistory} from "history";

var routerHistory = require('react-router').useRouterHistory;
const appHistory = routerHistory(createHashHistory)({queryKey: false});

ReactDOM.render((
                <Router history={appHistory}>
                    <Route path="/" component={Home}/>
                </Router>),
        document.getElementById('App')
);
