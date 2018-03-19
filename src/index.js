import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {BrowserRouter as Router} from 'react-router-dom'

import Home from './pages/Home'

const App = () => (
    <MuiThemeProvider>
        <Router>
            <Home/>
        </Router>
    </MuiThemeProvider>
)

ReactDOM.render(<App />, document.getElementById('root'));