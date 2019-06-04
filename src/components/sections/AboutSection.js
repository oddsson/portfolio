import React from "react"
import styled from "styled-components"
import * as variables from "../../styles/variables"
import { ColorPeriod } from "./HeroSection"
import Title from "../title"

const d = new Date()
const currentYear = d.getFullYear()
const myAge = currentYear - 1990

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 66vh;
  padding: 0 64px;

  h2 {
    margin-bottom: 32px;
  }

  @media (min-width: ${variables.mobileMin}) {
    padding: 0 32px;
  }

  @media (min-width: ${variables.tabletMin}) {
    padding: 0 64px;
  }
`

const DeviderWrapper = styled.div`
  width: 32px;
  display: flex;
  justify-content: space-between;
  margin: 20px 0px;
`

const AboutSection = () => {
  return (
    <Section>
      <Title>Who am I?</Title>
      <p>
        I am a {myAge} year old programmer who is currently focusing on web
        development. I build user friendly and accessible websites where the
        user always comes first.
      </p>
      <DeviderWrapper>
        <ColorPeriod />
        <ColorPeriod />
      </DeviderWrapper>
      <p>
        I currently live in Reykjavík, Iceland with my wife and newly born son.
        In my spare time I like to run and I'm currently training for an Iron
        Man in 2021.
      </p>
    </Section>
  )
}

export default AboutSection
