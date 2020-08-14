import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import { useInView } from "react-intersection-observer"
import Layout from "../components/layout"
import Arrow from "../components/arrow"
import Project from "../components/project"
import Icon from "../assets/get_in_touch.svg"

const Container = styled.section`
  margin: 0 16px;

  @media (min-width: 1440px) {
    width: 70vw;
    max-width: 1500px;
  }
`

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

const HeroContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin-top: 4em;

  @media (min-width: 1440px) {
    position: relative;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
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
    height: 88%;
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
  color: black;
`
const Headshot = styled.img`
  width: 100%;
  height: 350px;
  object-fit: cover;
  mix-blend-mode: lighten;

  @media (min-width: 650px) {
    width: 500px;
    height: auto;
  }
`
const ProjectsContainer = styled(Container)`
  display: grid;
  grid-auto-rows: 1fr;

  @media (min-width: 1440px) {
    grid-template-columns: 1fr 1fr;
  }
`

const SectionTitleContainer = styled.div`
  overflow: hidden;
  position: relative;
  height: 100%;
  align-self: center;
`

const HollowTitle = styled.h2`
  position: absolute;
  bottom: -100%;
  left: 8px;
  color: #ff793f;
  text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff,
    1px 1px 0 #fff;
  margin-bottom: 0.3em;
  animation: 665.244ms cubic-bezier(0, 0, 0.5, 0.96) 0ms 1 normal forwards
    slide-up;
  animation-delay: 665.244ms;
  animation-play-state: paused;

  ::after {
    content: "";
    position: absolute;
    bottom: -100%;
    left: 0;
    background-color: white;
    width: 100%;
    height: 100%;
    animation: 1.4s cubic-bezier(0, 0, 0.5, 0.96) 0ms 1 normal forwards
      deco-slide-up;
  }

  &.visible,
  &.visible::after {
    animation-play-state: running;
  }

  &.hidden,
  &.hidden::after {
    animation-play-state: paused;
  }

  @media (min-width: 1440px) {
    margin-bottom: 0;
  }

  @keyframes slide-up {
    to {
      bottom: 0%;
    }
  }

  @keyframes deco-slide-up {
    0% {
      bottom: -100%;
      clip-path: inset(0 0 0 0);
    }
    50%,
    60%,
    70% {
      bottom: 0;
      clip-path: inset(0 0 0 0);
    }
    100% {
      bottom: 0;
      clip-path: inset(0 0 100% 0);
    }
  }
`
//test

const AboutContainer = styled(ProjectsContainer)`
  margin-top: 2em;

  @media (min-width: 1440px) {
    margin: 12em auto;
  }
`

const AboutMe = styled.p`
  padding: 10%;
  margin: 0;
  border: 1px solid white;
`

const AboutSkills = styled(AboutMe)`
  border: 1px solid white;
`

const AboutSkillsList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 2em;
  list-style: none;
  padding: 0;
  margin-top: 3.5em;
`

const AboutSkillsListItem = styled.li`
  min-height: 2.75em;
`

const ContactMeContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
  margin: 2em auto;
  min-height: 50vh;
  padding: 2em 0;

  @media (min-width: 1440px) {
    padding: 0;
    margin: 12em auto;
  }
`

const ContactMeText = styled.p`
  max-width: 90%;
  text-align: center;
  margin-bottom: 4em;

  @media (min-width: 650px) {
    max-width: 40%;
  }
`

const GetInTouchIconWrapper = styled.div`
  display: flex;
  position: relative;
  transition: transform 1s;

  &:hover,
  &:focus {
    transform: scale(1.2);
  }
`

const GetInTouchIcon = styled.a`
  animation: 10s rotate linear infinite;

  @keyframes rotate {
    to {
      transform: rotate(360deg);
    }
  }
`

const GetInTouchEmoji = styled.span`
  position: absolute;
  top: 33%;
  left: 36%;
  font-size: 1.9em;
  z-index: -1;
`

export default function Home() {
  const projectTitleRef = useRef()
  const aboutTitleRef = useRef()

  const [ptRef, ptInView] = useInView({
    /* Optional options */
    threshold: 0.7,
  })

  const [abRef, abInView] = useInView({
    /* Optional options */
    threshold: 0.7,
  })

  useEffect(() => {
    if (ptInView) {
      projectTitleRef.current.style.animationPlayState = "running"
    }
  }, [ptInView])

  useEffect(() => {
    if (abInView) {
      aboutTitleRef.current.style.animationPlayState = "running"
    }
  }, [abInView])

  const projects = [
    {
      name: "TM",
      developedAt: "Kolibri",
      platform: "website",
      skills: ["React", "Typescript", "CSS Modules"],
      about:
        "Allows users to buy insurances with one of Icelands largest insurance companies online.",
      link: "https://tm.is/kaupa",
      color: "#2C4A33",
    },
    {
      name: "TM App",
      developedAt: "Kolibri",
      platform: "website",
      skills: ["React Native", "Typescript", "Expo"],
      about: "A mobile app for users to buy and manage their insurances.",
      link: "",
      color: "#F2C96F",
    },
    {
      name: "Marel",
      developedAt: "Kolibri",
      platform: "website",
      skills: ["React", "Typescript", "Styled Components"],
      about: "A marketing website for one of Iceland's largest companies.",
      awards: "",
      link: "https://marel.com",
      color: "#003a70",
    },
    {
      name: "dis\ncovered.is",
      developedAt: "Hobby",
      platform: "website",
      skills: ["NextJS", "Spotify API"],
      about:
        "A website that lists new releases on Spotify along with their genres. A brilliant way to discover new music.",
      link: "https://discovered.is",
      color: "#1db954",
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
            <HeadshotText>This is me</HeadshotText>
            <Arrow />
          </ThatsMeContainer>
        </HeadshotContainer>
      </HeroContainer>
      <ProjectsContainer>
        <SectionTitleContainer ref={ptRef}>
          <HollowTitle
            ref={projectTitleRef}
            className={ptInView ? "visible" : "hidden"}
          >
            Pro&shy;jects
          </HollowTitle>
        </SectionTitleContainer>
        {projects.map((project, index) => {
          return (
            <Project
              key={index}
              name={project.name}
              developedAt={project.developedAt}
              platform={project.platform}
              skills={project.skills}
              about={project.about}
              awards={project.awards}
              link={project.awards}
              projectNr={index}
              color={project.color}
            />
          )
        })}
      </ProjectsContainer>
      <AboutContainer>
        <SectionTitleContainer ref={abRef}>
          <HollowTitle
            ref={aboutTitleRef}
            className={abInView ? "visible" : "hidden"}
          >
            Abo&shy;ut
          </HollowTitle>
        </SectionTitleContainer>
        <AboutMe>
          I am a {new Date().getFullYear() - 1990} year old frontend developer
          with and eye and passion for design. I have experience with creating
          websites and apps, primerally using React. I am happily employed at
          the moment but love discussing projects. Feel free to reach out and
          lets talk.
        </AboutMe>
        <AboutSkills as="div">
          <h3>Skills</h3>
          <AboutSkillsList>
            <AboutSkillsListItem>React</AboutSkillsListItem>
            <AboutSkillsListItem>JavaScript</AboutSkillsListItem>
            <AboutSkillsListItem>Styled components</AboutSkillsListItem>
            <AboutSkillsListItem>Animations</AboutSkillsListItem>
            <AboutSkillsListItem>Figma</AboutSkillsListItem>
            <AboutSkillsListItem>User interviews</AboutSkillsListItem>
            <AboutSkillsListItem>Soft skills</AboutSkillsListItem>
          </AboutSkillsList>
        </AboutSkills>
      </AboutContainer>
      <ContactMeContainer>
        <h3>Let's talk!</h3>
        <ContactMeText>
          I might not be immediately available for hire but I'd love to hear
          from you if I'm the type of person you're looking for.
        </ContactMeText>
        <GetInTouchIconWrapper>
          <GetInTouchIcon
            href="mailto:ivaroddsson@gmail.com?subject=👋 Ívar"
            aria-label="get in touch"
          >
            <Icon />
          </GetInTouchIcon>
          <GetInTouchEmoji
            aria-label="an open mailbox with a letter inside"
            role="img"
          >
            📬
          </GetInTouchEmoji>
        </GetInTouchIconWrapper>
      </ContactMeContainer>
    </Layout>
  )
}
