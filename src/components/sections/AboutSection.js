import React from "react"
import styled from "styled-components"
import * as variables from "../../styles/variables"
import Title from "../title"
import HeroImg from "../imageComponents/heroImg";

const d = new Date()
const currentYear = d.getFullYear()
const myAge = currentYear - 1990

const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: initial;

  h2 {
    margin-bottom: 32px;
  }

  @media (min-width: ${variables.tabletMin}) {
    height: 66vh;
  }
`

const AboutSectionWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  height: 100%;

  @media (min-width: ${variables.tabletMin}) {
    flex-direction: row;
  }
`;

const AboutSectionText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 120px 32px;

  @media (min-width: ${variables.mobileMin}) {
    padding: 136px 64px;
  }

  @media (min-width: ${variables.tabletMin}) {
    width: calc(50% - 64px);
    padding: 0 64px;
  }
`;

const AboutSectionImg = styled.div`
  .gatsby-image-wrapper {
    height: 100%;
  }

  @media (min-width: ${variables.tabletMin}) {
    width: 50%;
  }
`;

const DeviderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 20px 0;


  &::after {
    content: '';
    display: block;
    width: 10%;
    height: 2px;
    background-color: #d63031;
  }
`

const AboutSection = () => {
  return (
    <Section>
      <AboutSectionWrapper>
        <AboutSectionText>
          <Title>Who am I?</Title>
          <p>
            I am a {myAge} year old programmer who is currently focusing on web
            development. I build user friendly and accessible websites where the
            user always comes first.
          </p>
          <DeviderWrapper />
          <p>
            I currently live in Reykjavík, Iceland with my wife and newly born son.
            In my spare time I like to run and I'm currently training for an Iron
            Man in 2021.
          </p>
        </AboutSectionText>
        <AboutSectionImg>
          <HeroImg />
        </AboutSectionImg>
      </AboutSectionWrapper>
    </Section>
  )
}

export default AboutSection
