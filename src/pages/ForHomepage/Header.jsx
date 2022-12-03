import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import {Link, Outlet} from 'react-router-dom';
import './Header.css';
import {CustomLink} from "../../components/CustomLink";


function Header() {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };
       useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        ILWTF
                        <i class='fab fa-typo3' />
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                        <CustomLink to="/">Home</CustomLink>
                        </li>
                        <li className='nav-item'>
                        <CustomLink to="/about">About</CustomLink>
                        </li>
                        <li>
                    <CustomLink to="/posts">Blog</CustomLink>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'><CustomLink to="/login">Sign in</CustomLink></Button>}
                </div>
            </nav>
            <main className="container">
                <Outlet />
            </main>

        </>
    );
}

export default Header;


