import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import Arrow from "../components/arrow"

const Curtain = styled.div`
  position: fixed;
  top: 0;
  background-color: white;
  width: 100%;
  animation: 1.4s animate-curtain cubic-bezier(0.25, 0.1, .9, 0.1);

  @keyframes animate-curtain {
    0% {
      height: 0vh;
      clip-path: inset(0 0 0 0);
    }
    50% {
      height: 100vh;
      clip-path: inset(0 0 0 0);
    }
    60% {
      height: 100vh;
      clip-path: inset(0 0 0 0);
    }
    100% {
      height: 100vh;
      clip-path: inset(100% 0 0 0);
    }
  }
`

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70%;
  height: 100vh;
  margin: 0 auto;
`
const TitleLine = styled.div`
  position: relative;
  display: inline-block;
  color: transparent;
  animation: .1s animate-text forwards;
  animation-delay: ${props => props.lineNr === 0 ? '2.9s' : props.lineNr === 1 ? '3.9s' : '4.9s'};

  ::before {
    content: '';
    display: inline-block;
    position: absolute;
    left: 0;
    height: 98%;
    background-color: white;
    animation: 1s animate-text-before forwards;
    animation-delay: ${props => props.lineNr === 0 ? '2.5s' : props.lineNr === 1 ? '3.5s' : '4.5s'}
  }

  @keyframes animate-text-before {
    0% {
      width: 0%;
      clip-path: inset(0 0 0 0);
    }
    50% {
      width: 100%;
      clip-path: inset(0 0 0 0);
    }
    100% {
      width: 100%;
      clip-path: inset(0 0 0 100%);
    }
  }

  @keyframes animate-text {
    to {
      color: white;
    }
  }
`
const HeadshotContainer = styled.div`
  display: flex;
  background: rgb(104, 41, 25);
  animation: 1s 6s animate-headshot forwards;
  filter: blur(5px);
  opacity: 0;

  ::after {
    content: '';
    background: #706fd3;
    width: 112px;
    height: 151px;
    display: inline-block;
    position: absolute;
    bottom: 50px;
    right: -112px;
    opacity: .7;
  }

  @keyframes animate-headshot {
    10% {
      opacity: 1;
    }
    100% {
      filter: blur(0);
      opacity: 1;
    }
  }
`

const ThatsMeContainer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: -70px;
  left: -110px;
  background-color: #ff793f;
`

const HeadshotText = styled.p`
  font-family: "Caveat", sans-serif;
  margin: 10px 7px 0 0;
`

const Headshot = styled.img`
  height: 60vh;
  max-height: 500px;
  mix-blend-mode: lighten;
`

/**
 * Each title line has to be a inline-block element but
 * should all be on a separate line of text. This element
 * acts as a breaker between lines.
 */
const InlineLineBreak = styled.div``

export default function Home() {
  return (
    <Layout>
      <Curtain />
      <Container>
        <h1>
          <TitleLine lineNr={0}>
            I'm Ívar,
          </TitleLine>
          <InlineLineBreak />
          <TitleLine lineNr={1}>A web developer</TitleLine>
          <InlineLineBreak />
          <TitleLine lineNr={2}>based in Iceland</TitleLine>
        </h1>
        <HeadshotContainer>
          <Headshot src="/cv_img.jpg" alt="my headshot" />
          <ThatsMeContainer>
            <HeadshotText>Thats me</HeadshotText>
            <Arrow version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 43.1 85.9" style="enable-background:new 0 0 43.1 85.9;" xmlSpace="preserve"></Arrow>
          </ThatsMeContainer>
        </HeadshotContainer>
      </Container>
    </Layout>
  )
}
