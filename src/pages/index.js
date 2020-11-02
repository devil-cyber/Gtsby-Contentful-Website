import React from 'react';
import { Link } from 'gatsby';
import Layout from "../components/layout";


const IndexPage = () => {
  return (
    <Layout >
      <h1>Hello</h1>
      <h2>This is manikant</h2>
      <p>Need a developer ? <Link to="/contact">Contact</Link></p>

    </Layout>
  )
}

export default IndexPage;