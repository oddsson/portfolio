import React from "react"
import styled from "styled-components"

const Section = styled.section`
  display: flex;
  align-items: center;
  height: 100vh;
  background-color: #f2f1ef;
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
          My name is <ColorSpan>Ívar Oddsson</ColorSpan> and <br /> I create
          pretty things on the web.
        </h1>
      </div>
    </Section>
  )
}

export default HeroSection
