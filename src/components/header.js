import React from 'react';
import { Link, graphql, useStaticQuery } from "gatsby";
import "./header.css";

const Header = () => {
    const query_data = graphql`
    query{
        site{
            siteMetadata{
                title
            }
        }
    }`;
    const data = useStaticQuery(query_data);

    return (
        <div>

            <nav className="navbar navbar-expand-md navbar-light fixed-top bg-light">
                <Link style={{ color: 'grey' }} className="navbar-brand" to="/">{`{` + data.site.siteMetadata.title + `}`}</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item"><Link activeClassName="active" className="nav-link" to="/">Home</Link></li>
                        <li className="nav-item "><Link activeClassName="active" className="nav-link" to="/about">About</Link></li>
                        <li className="nav-item"><Link activeClassName="active" className="nav-link" to="/contact">Contact</Link></li>
                        <li className="nav-item"><Link activeClassName="active" className="nav-link" to="/blog">Blog</Link></li>
                    </ul>
                </div>

            </nav>
        </div>)
}

export default Header;




























