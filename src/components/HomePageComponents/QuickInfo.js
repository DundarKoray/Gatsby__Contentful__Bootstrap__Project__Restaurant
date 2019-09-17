import React, { Component } from 'react';
import Section from '../globals/section/section'
import Title from '../globals/title/title'
import { SectionButton } from '../globals/button/Button';

class QuickInfo extends Component {
    render() {
        return (
            <Section>
                <Title message="I am a message" title="I am a title" />
                <SectionButton>about</SectionButton>
            </Section>
        );
    }
}

export default QuickInfo;