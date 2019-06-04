import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const heroImg = ({ img }) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          placeholderImage: file(relativePath: { eq: "IMG_0292.png" }) {
            childImageSharp {
              fluid(maxWidth: 1024) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => (
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      )}
    />
  )
}

export default heroImg
