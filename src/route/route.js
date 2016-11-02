import React from 'react'
import ReactDOM from 'react-dom'
import Header from '../components/header/index.js'
import Index from '../views/index/index.js'
import App from '../views/App.js'
import { Route, IndexRoute } from 'react-router'

const route = (
        <Route path="/" component={ Header }>
        </Route>
    )
export default route
