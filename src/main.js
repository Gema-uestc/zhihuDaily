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

ReactDOM.render((
        <Router history={browserHistory}>
            {route}
        </Router>
), document.getElementById('app'))

