import React from 'react';
import { Router, Route, Redirect, hashHistory } from 'react-router'
import Todo from '../todo/Todo'

export default props => (
    <Router history={hashHistory}>
        <Route path="/todo" component={Todo} />
        <Redirect from="*" to="/todo" />
    </Router>
)