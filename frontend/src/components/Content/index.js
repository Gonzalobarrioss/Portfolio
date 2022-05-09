import React  from 'react'
import { ContentContainer } from './ContentElements'

function Content({children}) {
  return (
    <ContentContainer>{children} </ContentContainer>
  )
}

export default Content