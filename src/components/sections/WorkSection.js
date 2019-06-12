import React from "react"
import styled from "styled-components"
import Title from "../title"
import Card from "../card"
import * as variables from "../../styles/variables"

const WSection = styled.section`
  background-color: #f2f1ef;
  padding: 120px 32px;

  @media (min-width: ${variables.mobileMin}) {
    padding: 136px 64px;
  }

  .title {
    margin-bottom: 32px;
  }
`

const SectionLi = styled.li`
  display: grid;
  justify-items: center;
  grid-row-gap: 32px;
  grid-column-gap: 32px;

  @media (min-width: ${variables.tabletMin}) {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 8rem;
  }
`

const WorkSection = () => {
  return (
    <WSection>
      <Title>Projects I've helped create.</Title>
      <ul>
        <SectionLi>
          <Card
            title="Marel.com"
            myInvovement="Lead frontend developer"
            tech="React, C#, UmbracoCMS"
            link="https://marel.com/"
            img="marel"
          />
          <Card
            title="Discovered.is"
            myInvovement="Hobby project"
            tech="NextJS, Now"
            link="https://discovered.is/"
            img="discovered"
          />
          <Card
            title="IcelandTravel booking flow"
            myInvovement="Frontend developer"
            tech="React"
            img="icelandtravel"
          />
        </SectionLi>
      </ul>
    </WSection>
  )
}

export default WorkSection
