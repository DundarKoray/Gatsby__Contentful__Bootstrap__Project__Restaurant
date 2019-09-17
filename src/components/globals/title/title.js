import React from 'react';
import './title.css'

const Title = ({title, message}) => {
    return (
        <div className="title-wrapper">
            <h3 className="title-message">{message}</h3>
            <h1 className="title">{title}</h1>
            <div className="title-underline"></div>
        </div>
    );
};

Title.defaultProps = {
    message: 'default message',
    title: 'default title',
}

export default Title;