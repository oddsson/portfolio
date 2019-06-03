import React from "react"
import styled from "styled-components"
import * as variables from "../../styles/variables"

export const Section = styled.section`
  display: flex;
  align-items: center;
  height: 90vh;
  background-color: #f2f1ef;

  h1 {
    max-width: 1000px;
  }

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
  color: #d63031;
`

const HeroSection = () => {
  return (
    <Section>
      <div>
        <h1>
          Hi there{" "}
          <Emoji>
            <span role="img" aria-label="Waving hand emoji">
              👋
            </span>
          </Emoji>
          <br />
          My name is <ColorSpan>Ívar Oddsson</ColorSpan> and I create pretty
          things on the web
          <ColorPeriod>.</ColorPeriod>
        </h1>
      </div>
    </Section>
  )
}

export default HeroSection
