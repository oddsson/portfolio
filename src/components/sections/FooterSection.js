import React from "react"
import styled from "styled-components"
import * as variables from "../../styles/variables"

const SFooter = styled.footer`
  background-color: #353b48;
  padding: 132px 32px;
  color: white;


  @media (min-width: ${variables.mobileMin}) {
    padding: 132px 64px;
  }
`

const FooterLink = styled.a`
  color: white;
  cursor: pointer;
`

const Footer = () => {
  return (
    <SFooter>
      I am currently available for hire{" "}
      <span role="img" aria-label="Tada emoji">
        🎉
      </span>
      <br /> Looking for someone to join your team? Let's talk about it!
      <br />
      <br />
      You can find me on{" "}
      <FooterLink href="https://www.linkedin.com/in/%C3%ADvar-oddsson-152b25b7/">
        LinkedIn
      </FooterLink>{" "}
      and{" "}
      <FooterLink href="mailto:ivaroddsson@gmail.com">
        feel free to send me an email
      </FooterLink>
    </SFooter>
  )
}

export default Footer
