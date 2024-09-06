import React from 'react'
import { Link } from 'react-router-dom';

import './Main.scss';

const Main: React.FC = () => {
    return (
        <>
            <section className="main-page__wrapper">
                <h1 className="main-page__title">Welcome to the main page!</h1>
                <p className="main-page__description">This is a test task to demonstrate working with React, Redux and React Router.</p>
            </section>
            <section className="main-page__wrapper">
                <h2 className="main-page__title main-page__title_secondary">Navigation</h2>
                <ul className="main-page__nav">
                    <li> <Link to="/about-me" className="main-page__link">About me</Link></li>
                    <li><Link to="/users" className="main-page__link main-page__link_primary">TEST TASK HERE</Link></li>
                </ul>
            </section>
            <section className="main-page__wrapper">
                <h2 className="main-page__title main-page__title_secondary">What I Created</h2>
                <p>
                    In this project, I used <strong>React</strong> for building the user interface,
                    <strong> Redux Toolkit</strong> for state management, and <strong>React Router</strong> for routing.
                </p>
                <p>
                    Key dependencies include:
                    <ul>
                        <li><strong>@reduxjs/toolkit</strong> - for simplified state management</li>
                        <li><strong>react</strong> and <strong>react-dom</strong> - for building components and rendering</li>
                        <li><strong>react-redux</strong> - for integrating Redux with React</li>
                        <li><strong>react-router-dom</strong> - for routing</li>
                    </ul>
                </p>
            </section>
            <section className="main-page__wrapper">
                <h2 className="main-page__title main-page__title_secondary">Development Tools</h2>
                <p>
                    The following tools and libraries were used for development:
                    <ul>
                        <li><strong>Vite</strong> - for fast bundling and development</li>
                        <li><strong>TypeScript</strong> - for static typing</li>
                        <li><strong>ESLint</strong> and React plugins - for code quality</li>
                        <li><strong>Sass</strong> - for styling</li>
                    </ul>
                </p>
            </section>
        </>
    )
}
export default Main;
