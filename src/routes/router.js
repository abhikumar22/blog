import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import Home from "../pages/App";
import BlogDetail from "../pages/BlogDetail";
import AddPost from "../pages/AddPost";
import NotFoundPage from "../pages/NotFoundPage";

import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/addpost" component={AddPost} />
                    <Route path="/blogDetail" component={BlogDetail} />
                    <Route path='*' exact={true} component={NotFoundPage} />
                </Switch>
            </Router>
        )
    }
}