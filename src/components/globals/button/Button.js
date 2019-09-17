import React from 'react';
import './button.css'

const BannerButton = ({children}) => {
    return (
        <button className="banner-button" style={{margin: '2rem auto'}}>{children}</button>
    );
};

const SectionButton = ({children}) => {
    return (
        <button className="section-button" style={{margin: '2rem auto'}}>{children}</button>
    );
};

export {BannerButton, SectionButton};