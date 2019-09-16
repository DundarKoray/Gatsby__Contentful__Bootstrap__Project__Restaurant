import React from 'react';
import Layout from '../components/layout';
import SEO from "../components/seo"
import {SubPageHeader} from "../components/globals/header/Header"
import Banner from '../components/globals/banner/Banner'
import menuImg from '../images/bcg/menuBcg.jpeg'

const MenuPage = () => (
    <Layout>
        <SEO title="Menu" keywords={['gatsby', 'application', 'react']} />
        <SubPageHeader img={menuImg}>
            <Banner title="Menu" subtitle="let's dig in"/>
        </SubPageHeader>
    </Layout>
);

export default MenuPage;