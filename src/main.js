import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/header/index.js'
import route from './route/route'
import { Router, browserHistory } from 'react-router'


class App extends React.Component {
    render() {
        return (
            <Nav />
        )
    }
}

ReactDom.render((
        <Router history={history}>
            {route}
        </Router>
), document.getElementById('app'))

