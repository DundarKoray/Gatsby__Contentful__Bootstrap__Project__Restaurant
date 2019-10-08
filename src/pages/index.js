import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import img from '../images/bcg/homeBcg.jpeg'
import {HomeHeader} from "../components/globals/header/Header";
import Banner from "../components/globals/banner/Banner"
import { BannerButton } from "../components/globals/button/Button";
import QuickInfo from "../components/HomePageComponents/QuickInfo";
import Gallery from "../components/HomePageComponents/Gallery"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeHeader img={img}>
      <Banner title="eatery" subtitle="55 Alexanderinkatu, Helsinki. ">
        <BannerButton>
          menu
        </BannerButton>
      </Banner>
    </HomeHeader>
    <QuickInfo />
    <Gallery />
  </Layout>
)

export default IndexPage
