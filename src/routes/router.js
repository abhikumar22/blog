import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import Home from "../pages/App";
import AddPost from "../pages/AddPost";
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/addpost" component={AddPost} />
                </Switch>
            </Router>
        )
    }
}