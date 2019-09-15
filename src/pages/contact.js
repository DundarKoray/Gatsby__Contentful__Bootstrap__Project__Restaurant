import React from 'react';
import Layout from '../components/layout';
import SEO from "../components/seo"

const ContactPage = () => (
    <Layout>
        <SEO title="About Page" keywords={['gatsby', 'application', 'react']} />
        <h3>This is contact page</h3>
    </Layout>
);

export default ContactPage;