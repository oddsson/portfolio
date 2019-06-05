import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const discoveredImg = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          placeholderImage: file(relativePath: { eq: "discovered.png" }) {
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

export default discoveredImg
