import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
const Footer = () => {
    const data = useStaticQuery(graphql`
    query{
        site{
            siteMetadata{
                author
            }
        }
    }`)
    return (
        <div>
            <footer>
                <p>Created By  {data.site.siteMetadata.author} &#169; 2020 </p>
            </footer>
        </div>)
}

export default Footer;