import React, {Component} from 'react';
import SignInForm from '../auth/SignInForm'
import SignUpForm from '../auth/SignUpForm'
import {Route, NavLink} from 'react-router-dom'

class AuthPage extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <h1>Auth Page</h1>
                <NavLink to="/auth/signin" activeStyle={{color: 'red'}}>Sign In</NavLink>
                <NavLink to="/auth/signup" activeStyle={{color: 'red'}}>Sign Up</NavLink>
                <Route path="/auth/signin" render={() => <SignInForm onSubmit={this.handleSignIn}/>}></Route>
                <Route path="/auth/signup" render={() => <SignUpForm onSubmit={this.handleSignUp}/>}></Route>
            </div>
        );
    }

    handleSignIn = values => console.log('___', values)
    handleSignUp = values => console.log('___', values)
}

export default AuthPage;