import React from 'react';
import './banner.css'

const Banner = ({title, subtitle, children}) => {
    return (
        <div className="banner-wrapper">
            <h1 className="title">{title}</h1>
            <h1 className="subtitle">{subtitle}</h1>
            {children}
        </div>
    );
};

Banner.defaultProps = {
    title: 'default title',
    subtitle: ' default subtitle'
}

export default Banner;