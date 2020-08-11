import React from "react"
import styled from "styled-components"

const StyledProject = styled.div`
  border: 1px solid white;
  padding: 1em;
  color: white;
`
const ProjectInfo = styled.span`
  text-transform: uppercase;
  order: -1;
`

const ProjectTitle = styled.h3`
  font-size: 2rem;
`

const ProjectNumber = styled.span`
  font-size: 0.9rem;
  color: #ff793f;
  text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff,
    1px 1px 0 #fff;
  letter-spacing: 2px;
`

export default function Project({ name, skills, platform, projectNr }) {
  return (
    <StyledProject>
      <ProjectTitle>
        <ProjectNumber>{`0${projectNr}.`}</ProjectNumber>
        {name}
      </ProjectTitle>
      <ProjectInfo>{`${platform} - ${skills}`}</ProjectInfo>
    </StyledProject>
  )
}
