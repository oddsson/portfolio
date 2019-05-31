import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import styled from "styled-components"
import HeroSection from "../components/sections/HeroSection"
import AboutSection from "../components/sections/AboutSection"

const IndexPage = () => (
  <Layout>
    <HeroSection />
    <Image />
    <AboutSection />
    <section className="work-section">
      <h2>
        Projects I've helped creating.
        <ul>
          <li>
            <a href="https://marel.com/">
              <img src="https://via.placeholder.com/150" />
              <div>Marel.com</div>
              <div>Lead frontend developer</div>
              <div>React, C#, Umbraco</div>
            </a>
            <a href="https://discovered.is/">
              <img src="https://via.placeholder.com/150" />
              <div>discovered.is</div>
              <div>Hobby project</div>
              <div>NextJS, Now</div>
            </a>
            <div>
              <img src="https://via.placeholder.com/150" />
              <div>IcelandTravel booking flow</div>
              <div>Frontend developer</div>
              <div>React</div>
            </div>
          </li>
        </ul>
      </h2>
    </section>
  </Layout>
)

export default IndexPage
