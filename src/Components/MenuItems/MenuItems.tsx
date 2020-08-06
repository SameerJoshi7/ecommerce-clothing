import React from 'react';
import './MenuItems.styles.scss';

const MenuItem = ({ title, imageUrl, size }: any): JSX.Element => (
    <div className={`${size} menu-item`}>
        <div className="bg-image" style={{ backgroundImage: `url(${imageUrl})` }} />
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
)
export default MenuItem;
