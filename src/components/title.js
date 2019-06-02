import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const STitle = styled.h2`
  font-weight: 700;
  display: flex;
  width: 100%;
  color: #d63031;
`

const Title = ({ children }) => <STitle className="title">{children}</STitle>

Title.propTypes = { children: PropTypes.any }

Title.defaultProps = {}

export default Title
