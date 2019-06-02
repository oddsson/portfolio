import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import Image from "./imageComponents/heroImg"
import MarelImg from "./imageComponents/marelImg"
import DiscoveredImg from "./imageComponents/discoveredImg"
import IctImg from "./imageComponents/ictImg"

const SCard = styled.a`
  position: relative;
  width: 100%;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s;

  :hover {
    transform: translate(-4px, -4px);
    box-shadow: 16px 8px 16px 0px rgba(0, 0, 0, 0.37);
  }
`

const CardImgWrapper = styled.div``

const CardInfo = styled.div`
  margin-top: 16px;
  padding: 50px 16px 32px 16px;
`

const CardTitle = styled.span`
  font-weight: 600;
`

const Card = ({ title, myInvovement, tech, link, img }) => {
  return (
    <SCard href={link} className="card">
      <CardImgWrapper>
        {img === "marel" ? (
          <MarelImg />
        ) : img === "discovered" ? (
          <DiscoveredImg />
        ) : img === "icelandtravel" ? (
          <IctImg />
        ) : (
          <Image />
        )}
      </CardImgWrapper>
      <CardInfo>
        <CardTitle>{`${title}.`}</CardTitle>
        {` ${myInvovement}`}
        <br />
        {tech}
      </CardInfo>
    </SCard>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  myInvovement: PropTypes.string.isRequired,
  tech: PropTypes.string.isRequired,
  img: PropTypes.string,
}

Card.defaultProps = {
  title: "",
  myInvovement: "",
  tech: "",
  link: "",
  img: "",
}

export default Card
