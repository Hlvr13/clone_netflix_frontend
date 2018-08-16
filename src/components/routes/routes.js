import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Home from '../Home/home';
import Login from '../login/login';
import Signup from '../signup/signup';
import NavBar from '../navigationBar/navigationBar';
import Logout from '../logout/logout';
import checkToken from '../../resolvers/checkToken';


class Routes extends Component{
    render(){

        const PrivateRoute = ({component: Component, ...rest}) => (
            <Route {...rest} render = {(props) => (
                checkToken() === true ? <Component {...props}/> : <Redirect to = '/login'/>)}
            />
        )



        return(
            <Router>
                <main>
                    <NavBar/>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/signup" component={Signup}/>
                    <PrivateRoute exact path="/logout" component={Logout}/>

                </main>
            </Router>
        )
    }
}

export default Routes;