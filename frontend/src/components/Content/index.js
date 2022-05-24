import React  from 'react'
import { ContentContainer } from './ContentElements'

import { useSelector } from 'react-redux'

function Content({children}) {

const lightTheme = useSelector(state => state.stylesReducer.principal)
  return (
    <ContentContainer style={lightTheme ?{background: "#fff"} : null }>{children} </ContentContainer>
  )
}

export default Content