import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class NavigationBar extends Component{
    render(){
        return(
            <nav className = "navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className = "navbar-brand" to = "/">Netflix</Link>
                <button className = "navbar-toggler"
                type = "button"
                data-toggle = "collapse"
                data-target = "#navbarNavDropdown"
                aria-controls = "navbarNavDropdown"
                aria-expanded = "false"
                aria-label = "Toggle Navigation">
                <span className = "navbar-toggler-icon"></span>
                </button>
                <div className = "collapse navbar-collapse" id = "navbarNavDropdown">
                <ul className = "navbar-nav">
                    <li><Link className = "nav-link" to="/login">Login</Link></li>
                    <li><Link className = "nav-link" to="/signup">Sign Up</Link></li>
                </ul>
                <Link className = "nav-link" to = "/">Home</Link>
                </div>
            </nav>
        )
    }
}

export default NavigationBar;