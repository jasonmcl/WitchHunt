import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import App from './App';
import GameRoom from './GameRoom';

function Routes(props) {
    return(
        <Router>
            <div>
                <Route exact path='/' component={App} />
                <Route path="/play" component={GameRoom} />
            </div>
        </Router>
    );
}

export default Routes;