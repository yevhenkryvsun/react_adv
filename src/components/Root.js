import React, {Component} from 'react';
import {Route} from 'react-router-dom'
import AdminPage from './routes/AdminPage'
import AuthPage from './routes/AuthPage'
import ProtectedRoute from './common/ProtectedRoute'
import Gists from './Gists'

class Root extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <ProtectedRoute path="/admin" component={AdminPage}/>
                <Route path="/auth" component={AuthPage}/>
                <Route path="/gists" component={Gists}/>
            </div>
        );
    }
}

export default Root;