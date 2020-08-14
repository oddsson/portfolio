import React from "react"
import { createGlobalStyle } from "styled-components"
import "typeface-archivo"
import "typeface-caveat"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: #ff793f;
    font-family: "Archivo", sans-serif;
    font-size: calc(16px + (20 - 16) * ((100vw - 320px) / (1440 - 320)));
    color: white;
  }

  h1, h2, h3 {
    margin: 0;
  }

  h1 {
    font-size: calc(30px + (42 - 30) * ((100vw - 320px) / (1600 - 320)));
    font-weight: 700;
    line-height: 1.5em;
    margin: 0;

    @media (min-width: 1440px) {
      font-size: 6rem;
    }
  }

  h2 {
    font-size: 8em;

    @media (min-width: 1440px) {
      font-size: 11.3em;
    }
  }

  h3 {
    font-size: calc(40px + (60 - 40) * ((100vw - 320px) / (1440 - 320)));
  }

  p {
    line-height: 1.6em;
  }
`
export default function Layout({ children }) {
  return (
    <React.Fragment>
      <GlobalStyle />
      {children}
    </React.Fragment>
  )
}
