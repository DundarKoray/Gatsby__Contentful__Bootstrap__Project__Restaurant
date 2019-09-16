import React from "react"
// import { FaBeer } from 'react-icons/fa'

import Layout from "../components/layout"
import SEO from "../components/seo"
import {HomeHeader} from "../components/globals/header/Header";
import Banner from "../components/globals/banner/Banner"
import img from '../images/bcg/homeBcg.jpeg'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeHeader img={img}>
      <Banner title="eatery" subtitle="55 Alexanderinkatu, Helsinki. "></Banner>
    </HomeHeader>
  </Layout>
)

export default IndexPage
