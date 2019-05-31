import React from "react"
import styled from "styled-components"
import * as variables from "../../styles/variables"

const Section = styled.section`
  display: flex;
  align-items: center;
  height: 90vh;
  background-color: #f2f1ef;
  padding: 0 16px;

  /* 
  Might be too out there. Ask Orri
  background-image: linear-gradient(
    to top,
    rgba(255, 255, 255, 0),
    #f47983 162%
  ); */

  @media (min-width: ${variables.mobileMin}) {
    padding: 0 32px;
  }

  @media (min-width: ${variables.tabletMin}) {
    padding: 0 64px;
  }
`

const ColorSpan = styled.span`
  color: #d63031;
  font-weight: 600;
`

const Emoji = styled.span`
  animation: wave;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%;
  display: inline-block;
  margin-bottom: 16px;

  @keyframes wave {
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(-10deg);
    }
    20% {
      transform: rotate(12deg);
    }
    30% {
      transform: rotate(-10deg);
    }
    40% {
      transform: rotate(9deg);
    }
    50% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`

export const ColorPeriod = styled.span`
  display: inline-block;
  width: 4px;
  height: 4px;
  margin-left: 2px;
  border-radius: 50%;
  background-color: #d63031;

  @media (min-width: ${variables.tabletMin}) {
    width: 6px;
    height: 6px;
  }
`

const HeroSection = () => {
  return (
    <Section>
      <div>
        <h1>
          Hi there{" "}
          <Emoji role="img" aria-label="Wave emoji">
            👋
          </Emoji>
          <br />
          My name is <ColorSpan>Ívar Oddsson</ColorSpan> and I create pretty
          things on the web
          <ColorPeriod />
        </h1>
      </div>
    </Section>
  )
}

export default HeroSection
