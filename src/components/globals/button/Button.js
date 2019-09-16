import React from 'react';
import './button.css'

const BannerButton = ({children}) => {
    return (
        <button style={{margin: '2rem auto'}}>{children}</button>
    );
};

const SomeOtherButton = ({children}) => {
    return (
        <button>{children}</button>
    );
};

export {BannerButton, SomeOtherButton};