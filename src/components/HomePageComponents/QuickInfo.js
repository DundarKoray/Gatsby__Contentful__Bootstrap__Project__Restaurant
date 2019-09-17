import React, { Component } from 'react';
import Section from '../globals/section/section'
import Title from '../globals/title/title'

class QuickInfo extends Component {
    render() {
        return (
            <Section>
                <Title message="I am a message" title="I am a title" />
            </Section>
        );
    }
}

export default QuickInfo;