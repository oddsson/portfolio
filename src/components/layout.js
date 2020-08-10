import React from 'react';
import { createGlobalStyle } from "styled-components"
import "typeface-archivo"
import "typeface-caveat"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: #ff793f;
  }

  h1 {
    font-family: "Archivo", sans-serif;
    font-size: 6rem;
    line-height: 8rem;
    font-weight: 700;
    margin: 0;
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
