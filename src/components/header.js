import React from 'react';
import { Link } from "gatsby";
import headerStyle from "./header.module.css";

const Header = () => {
    return (
        <div>
            <header className={headerStyle.header}>
                <h1>
                    <Link to="/" className={headerStyle.title}>
                        Manikant Kumar
                    </Link>
                </h1>
                <nav>
                    <ul className={headerStyle.navList}>
                        <li><Link className={headerStyle.navItem} activeClassName={headerStyle.activeNavItem} to="/">Home</Link></li>
                        <li><Link className={headerStyle.navItem} activeClassName={headerStyle.activeNavItem} to="/blog">Blog</Link></li>
                        <li><Link className={headerStyle.navItem} activeClassName={headerStyle.activeNavItem} to="/about">About</Link></li>
                        <li><Link className={headerStyle.navItem} activeClassName={headerStyle.activeNavItem} to="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </header>
        </div>)
}

export default Header;