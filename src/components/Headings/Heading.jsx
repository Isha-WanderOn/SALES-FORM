import React from 'react'
import { HeadingDiv, H1 } from './Heading.style'

const Heading = (props) => {
  return (
    <HeadingDiv>
        <H1>{props.Heading}</H1>
    </HeadingDiv>
  )
}

export default Heading