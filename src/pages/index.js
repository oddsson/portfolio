import React from "react"
import Layout from "../components/layout"
import HeroSection from "../components/sections/HeroSection"
import AboutSection from "../components/sections/AboutSection"
import WorkSection from "../components/sections/WorkSection"
import FooterSection from "../components/sections/FooterSection"

const IndexPage = () => (
  <Layout>
    <HeroSection />
    <AboutSection />
    <WorkSection />
    <FooterSection />
  </Layout>
)

export default IndexPage
