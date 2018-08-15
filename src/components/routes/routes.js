import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../Home/home';
import Login from '../login/login';
import Signup from '../signup/signup';
import NavBar from '../navigationBar/navigationBar';


class Routes extends Component{
    render(){
        return(
            <Router>
                <main>
                    <NavBar/>
                    <Route exact path = "/" component={Home}/>
                    <Route exact path = "/login" component={Login}/>
                    <Route exact path = "/signup" component={Signup}/>
                </main>
            </Router>
        )
    }
}

export default Routes;