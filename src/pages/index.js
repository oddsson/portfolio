import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import styled from "styled-components"
import HeroSection from "../components/sections/HeroSection"

const d = new Date()
const currentYear = d.getFullYear()
const myAge = currentYear - 1990

const IndexPage = () => (
  <Layout>
    <HeroSection />
    <section className="about-section">
      <p>
        I am a {myAge} years old programmer who is currently focusing on web
        development. I build user friendly and accessible websites where the
        user always comes first.
      </p>
      <p>
        I currently live in Reykjavík, Iceland with my wife and newly born son.
        In my spare time I like to run and I'm currently training for an Iron
        Man in 2021.
      </p>
    </section>
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
