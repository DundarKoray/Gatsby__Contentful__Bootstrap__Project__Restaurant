import React from 'react';

import Layout from '../components/layout';
import SEO from "../components/seo"
import {SubPageHeader} from "../components/globals/header/Header"
import Banner from '../components/globals/banner/Banner'
import aboutImg from '../images/bcg/aboutBcg.jpeg'

const AboutPage = () => (
    <Layout>
        <SEO title="About" keywords={['gatsby', 'application', 'react']} />
        <SubPageHeader img={aboutImg}>
            <Banner title="about-us" subtitle="a little about us"/>
        </SubPageHeader>
    </Layout>
);

export default AboutPage;