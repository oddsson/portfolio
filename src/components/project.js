import React from "react"
import styled from "styled-components"

const StyledProject = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  border: 1px solid white;
  padding: 10%;
  color: white;
  min-height: 400px;

  &:hover::after {
    height: 100%;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: ${props => props.color};
    z-index: -1;
    width: 100%;
    height: 0;
    transition: height 0.8s cubic-bezier(0.25, 0.1, 0, 0.99);
  }
`

const ProjectInfo = styled.span`
  font-size: 16px;
  font-weight: 500;
  text-transform: uppercase;
  order: -1;
  margin-bottom: 0.5em;
`

const ProjectTitle = styled.h3`
  display: flex;
  margin-bottom: 1em;
`

const ProjectNumber = styled.span`
  font-size: 0.6rem;
  margin: 6px 6px 0 0;
  color: white;
  letter-spacing: 2px;

  @media (min-width: 1440px) {
    margin-top: 12px;
  }
`

const ProjectAbout = styled.p`
  margin: 0;
`

export default function Project({
  name,
  skills,
  about,
  platform,
  projectNr,
  color,
}) {
  return (
    <StyledProject color={color}>
      <ProjectTitle>
        <ProjectNumber>{`0${projectNr}`}</ProjectNumber>
        {name}
      </ProjectTitle>
      <ProjectInfo>{`${platform} - ${skills
        .toString()
        .replace(",", ", ")}`}</ProjectInfo>
      <ProjectAbout>{about}</ProjectAbout>
    </StyledProject>
  )
}
