import React, { Component } from 'react';
import { Link } from 'gatsby';
import logo from '../../../images/logo.svg'
import {FaAlignRight} from 'react-icons/fa'
import './navbar.css'

class NavbarHeader extends Component {
    render() {
        const { handleNavbar } = this.props
        return (
            <div className="header-wrapper">
                <Link to="/">
                    <img src={logo} alt="company name" />
                </Link>
                <FaAlignRight 
                    className="toggle-icon" 
                    onClick={() => {
                        handleNavbar()
                    }}/>
            </div>
        );
    }
}

export default NavbarHeader;