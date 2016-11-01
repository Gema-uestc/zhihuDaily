import React from 'react'
import ReactDOM from 'react-dom'
import Header from '../components/header/index.js'
import { Route, IndexRoute } from 'react-router'

const route = (
    <Router history={hashHistory}>
        <Route path="/" component={Header}/>
    </Router>
    )
export default route
