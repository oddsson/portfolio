import React from 'react';
import styled from 'styled-components';

const StyledArrow = styled.svg`
  width: 70px;
  height: 70px;
  transform: rotate(-90deg);
`

const Path = styled.path`
  stroke-width: 5;
  stroke: #706fd3;
  fill: none;
  stroke-dasharray: 400;
  stroke-dashoffset: 400;
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
  animation-name: draw;
  animation-delay: 6.5s;

  &.first-tail {
    animation-delay: 7s;
  }

  &.second-tail {
    animation-delay: 7.5s;
  }

  @keyframes draw {
    to {
      stroke-dashoffset: 0;
    }
  }
`

export default function Arrow() {
  return (
    <StyledArrow version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 43.1 85.9" xmlSpace="preserve">
      <Path strokeLinecap="round" strokeLinejoin="round" d="M11.3,2.5c-5.8,5-8.7,12.7-9,20.3s2,15.1,5.3,22c6.7,14,18,25.8,31.7,33.1"></Path>
      <Path strokeLinecap="round" strokeLinejoin="round" d="M40.6,78.1C39,71.3,37.2,64.6,35.2,58" className="first-tail"></Path>
      <Path strokeLinecap="round" strokeLinejoin="round" d="M39.8,78.5c-7.2,1.7-14.3,3.3-21.5,4.9" className="second-tail"></Path>
    </StyledArrow>
  )
}
