import React from 'react';
import './Homepage.styles.scss'

const HomePage = (): JSX.Element => (
    <div className="homepage">
        <div className="directory-menu">
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">Title</h1>
                    <span className="subtitle">SubTitle</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">Title1</h1>
                    <span className="subtitle">SubTitle1</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">Title2</h1>
                    <span className="subtitle">SubTitle2</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">Title3</h1>
                    <span className="subtitle">SubTitle3</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">Title4</h1>
                    <span className="subtitle">SubTitle4</span>
                </div>
            </div>
        </div>
    </div>
)
export default HomePage;