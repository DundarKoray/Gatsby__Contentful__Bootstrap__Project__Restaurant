import React, { Component } from 'react';
import Section from '../globals/section/section'
import Title from '../globals/title/title'
import { SectionButton } from '../globals/button/Button';
import { Link } from 'gatsby'
import './quickInfo.css'

class QuickInfo extends Component {
    render() {
        return (
            <Section>
                <Title message="I am a message" title="I am a title" />
                <div className="quick-info-wrapper">
                    <p className="text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <Link to="/about/" style={{ textDecoration: 'none' }}>
                        <SectionButton style={{ margin: '2rem auto' }}>about</SectionButton>
                    </Link>
                </div>
            </Section>
        );
    }
}

export default QuickInfo;