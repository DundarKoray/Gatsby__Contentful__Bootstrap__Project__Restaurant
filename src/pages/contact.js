import React from 'react';
import Layout from '../components/layout';
import SEO from "../components/seo"
import {SubPageHeader} from "../components/globals/header/Header"
import Banner from '../components/globals/banner/Banner'
import contactImg from '../images/bcg/contactBcg.jpeg'

const ContactPage = () => (
    <Layout>
        <SEO title="Contact" keywords={['gatsby', 'application', 'react']} />
        <SubPageHeader img={contactImg}>
            <Banner title="contact us" subtitle="let's get in touch"/>
        </SubPageHeader>
    </Layout>
);

export default ContactPage;