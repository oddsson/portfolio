import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import Arrow from "../components/arrow"
import Project from "../components/project"

const Curtain = styled.div`
  position: fixed;
  top: 0;
  background-color: white;
  width: 100%;
  animation: 1.4s animate-curtain cubic-bezier(0.25, 0.1, 0.9, 0.1);

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

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 90%;
  margin: 4em auto 0 auto;

  @media (min-width: 1440px) {
    position: relative;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 70vw;
    max-width: 1500px;
    margin-top: 0;
  }
`

const Title = styled.h1`
  margin-bottom: 1em;

  @media (min-width: 650px) {
    margin-right: 1em;
  }
`

const TitleLine = styled.div`
  position: relative;
  display: inline-block;
  color: transparent;
  white-space: nowrap;
  animation: 0.1s animate-text forwards;
  animation-delay: ${props =>
    props.lineNr === 0 ? "2.9s" : props.lineNr === 1 ? "3.9s" : "4.9s"};

  ::before {
    content: "";
    display: inline-block;
    position: absolute;
    left: 0;
    height: 98%;
    background-color: white;
    animation: 1s animate-text-before forwards;
    animation-delay: ${props =>
      props.lineNr === 0 ? "2.5s" : props.lineNr === 1 ? "3.5s" : "4.5s"};
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
/**
 * Each title line has to be a inline-block element but
 * should all be on a separate line of text. This element
 * acts as a breaker between lines.
 */
const InlineLineBreak = styled.div``

const HeadshotContainer = styled.div`
  display: flex;
  align-self: flex-start;
  background: rgb(104, 41, 25);
  margin-bottom: 5em;
  animation: 1s 6s animate-headshot forwards;
  filter: blur(5px);
  opacity: 0;

  ::after {
    content: "";
    background: #706fd3;
    position: absolute;
    width: 112px;
    height: 112px;
    bottom: -47px;
    right: -14px;
    display: inline-block;
    opacity: 0.7;
  }

  @media (min-width: 1440px) {
    align-self: center;
    position: absolute;
    right: 0;
    z-index: -1;
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
  background-color: #ff793f;

  @media (min-width: 1440px) {
    left: -110px;
  }
`

const CaveatText = styled.p`
  font-family: "Caveat", sans-serif;
`

const HeadshotText = styled(CaveatText)`
  margin: 10px 7px 0 0;
`

const Headshot = styled.img`
  max-height: 100%;
  width: 100%;
  max-width: 500px;
  mix-blend-mode: lighten;

  @media (min-width: 650px) {
    width: 500px;
  }
`
const ProjectsContainer = styled.div`
  display: grid;
  row-gap: 2em;
  width: 90%;
  margin: 0 auto;

  @media (min-width: 1440px) {
    width: 70vw;
    max-width: 1500px;
  }
`

const HollowTitle = styled.h2`
  color: #ff793f;
  text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff,
    1px 1px 0 #fff;
`

export default function Home() {
  const projects = [
    {
      name: "TM",
      developedAt: "Kolibri",
      platform: "website",
      skills: ["React", "Typescript", "CSS Modules"],
      link: "https://tm.is/kaupa",
    },
    {
      name: "TM App",
      developedAt: "Kolibri",
      platform: "website",
      skills: ["React Native", "Typescript", "Expo"],
      link: "",
    },
    {
      name: "Marel",
      developedAt: "Kolibri",
      platform: "website",
      skills: ["React", "Typescript", "Styled Components"],
      awards: "",
      link: "https://marel.com",
    },
    {
      name: "Discovered.is",
      developedAt: "Hobby",
      platform: "website",
      skills: ["React", "Spotify API"],
      link: "https://discovered.is",
    },
  ]
  return (
    <Layout>
      <Curtain />
      <HeroContainer>
        <Title>
          <TitleLine lineNr={0}>I'm Ívar,</TitleLine>
          <InlineLineBreak />
          <TitleLine lineNr={1}>A web developer</TitleLine>
          <InlineLineBreak />
          <TitleLine lineNr={2}>based in Iceland</TitleLine>
        </Title>
        <HeadshotContainer>
          <Headshot src="/cv_img.jpg" alt="my headshot" />
          <ThatsMeContainer>
            <HeadshotText>Thats me</HeadshotText>
            <Arrow />
          </ThatsMeContainer>
        </HeadshotContainer>
      </HeroContainer>
      <ProjectsContainer>
        <HollowTitle>Pro&shy;jec&shy;ts</HollowTitle>
        {projects.map((project, index) => {
          return (
            <Project
              key={index}
              name={project.name}
              developedAt={project.developedAt}
              platform={project.platform}
              skills={project.skills}
              awards={project.awards}
              link={project.awards}
              projectNr={index}
            />
          )
        })}
      </ProjectsContainer>
    </Layout>
  )
}
