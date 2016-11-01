import React from 'react'
import ReactDOM from 'react-dom'
import Nav from './components/test.js'

class App extends React.Component {
    render() {
        return (
            <p>hello wor</p>
        )
    }
}

ReactDOM.render(<Nav />, document.getElementById('app'))