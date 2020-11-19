import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import footerStyle from "../components/footer.module.css";
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
            <footer className={footerStyle.footer}>
                <p>Created By  {data.site.siteMetadata.author} &#169; 2020 </p>
            </footer>
        </div>)
}

export default Footer;