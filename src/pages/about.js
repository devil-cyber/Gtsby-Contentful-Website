import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const AboutPage = () => {
    return (
        <Layout>
            <h1>About Me</h1>
            <p>Software Developer</p>
            <p>
                Want's to work with me conatct ? <Link to="/contact">Contact</Link>
            </p>
        </Layout>
    )
}

export default AboutPage
