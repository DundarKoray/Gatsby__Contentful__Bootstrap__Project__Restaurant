import React, { Component } from 'react';
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa'
import './footer.css'

class Footer extends Component {

    state = {
        icons: [
            {
                id: 1,
                icon: <FaFacebook className="icon facebook-icon" />,
                path: `https://www.facebook.com`
            },
            {
                id: 2,
                icon: <FaInstagram className="icon instagram-icon" />,
                path: 'https://www.instagram.com'
            },
            {
                id: 3,
                icon: <FaTwitter className="icon twitter-icon" />,
                path: 'https://www.twitter.com'
            }
        ]
    }

    render() {
        return (
            <footer>
                <div className="title">eatery</div>
                <div className="icons">
                    {this.state.icons.map(item => (<a href={item.path} key={item.id}>{item.icon}</a>))}
                </div>
                <p className="copyright">copyright &copy; 2019 eatery</p>
            </footer>
        );
    }
}

export default Footer;