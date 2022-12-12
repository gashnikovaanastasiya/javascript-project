import React, { useState } from 'react';
import { Button } from './Button';
import {Outlet, Link} from 'react-router-dom';
import './Header.css';
import {CustomLink} from "../../components/CustomLink";


function Header() {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);


    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                        ILWTF
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                        <Link to="/">Home</Link>
                        </li>
                        <li className='nav-item'>
                        <Link to="/about">About</Link>
                        </li>
                        <li className='nav-item'>
                    <Link to="/posts">News</Link>
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


