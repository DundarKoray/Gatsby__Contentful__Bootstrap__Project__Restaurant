import React, { Component } from 'react';
import { Link } from 'gatsby';

import './navbar.css'

class NavbarLinks extends Component {
    state= {
        links: [
            {
                id: 0,
                path: '/',
                name: 'home'
            },
            {
                id: 1,
                path: '/about',
                name: 'about'
            },
            {
                id: 2,
                path: '/menu',
                name: 'menu'
            },
            {
                id: 3,
                path: '/contact',
                name: 'contact'
            }
        ]
    }
    render() {
        console.log(this.props.navbarOpen)
        let status;

        if(this.props.navbarOpen){
            status = 'link-wrapper-open'
        } else {
            status = 'link-wrapper-close'
        }
        
        
        
        return (
            <ul className={`link-wrapper ${status}`}>
            
                {this.state.links.map(link => {
                    return (
                        <li key={link.id}>
                            <Link to={link.path} className="nav-link">{link.name}</Link>
                        </li>
                    )     
                })}
            </ul>
        )
    }
}

export default NavbarLinks;