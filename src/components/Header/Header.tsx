import React from 'react'
import { Link, NavLink, NavLinkRenderProps } from 'react-router-dom'

import './Header.scss';

const Header: React.FC = () => {
    const navLinks = ['users', 'posts', 'about-me'];
    const activeStyles = ({ isActive }: NavLinkRenderProps): React.CSSProperties => ({
        color: isActive ? 'coral' : 'inherit',
        textShadow: isActive ? '0 3px 5px rgba(0 0 0 / 0.2)' : '',
    });

    return (
        <header className="header">
            <div className="container">
                <Link to={`/`} className='header__logo'>
                    <img src="/logo.png" alt="Test Logo" />
                </Link>

                <nav>
                    <ul className="header__nav">
                        {navLinks.map(link => (
                            <li key={link} className='header__nav_item'>
                                <NavLink to={`/${link}`}
                                    style={activeStyles}
                                >
                                    {link.replace('-', ' ')}
                                </NavLink>
                            </li>))}
                    </ul>
                </nav>
            </div>

        </header>
    )
}
export default Header;