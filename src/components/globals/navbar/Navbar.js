import React, { Component } from 'react';
import NavbarHeader from './NavbarHeader'
import NavbarLinks from './NavbarLinks'
import NavbarIcons from './NavbarIcons'
import './navbar.css'

class Navbar extends Component {
    state={
        navbarOpen: false
    }
    handleNavbar = () =>{
        this.setState(()=>{
            return {navbarOpen:!this.state.navbarOpen}
        })
    }
    render() {
        return (
            <nav className="navbar-wrapper">
                <NavbarHeader handleNavbar={this.handleNavbar} />
                <NavbarLinks navbarOpen={this.navbarOpen}/>
                <NavbarIcons />
            </nav>
        );
    }
}

export default Navbar;