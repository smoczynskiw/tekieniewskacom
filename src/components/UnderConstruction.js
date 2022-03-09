import { useState } from 'react'
import styled from 'styled-components'
import Nav from './Nav/Nav'
import Header from './Header'
import SeeMyWork from './SeeMyWork/SeeMyWork'
import Footer from './Footer/Footer'

const StyledWrapper = styled.div`
  margin: 0 5vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

function UnderConstruction() {
  const [ language, setLanguage ] = useState('en')

  return (
    <StyledWrapper>
      <Nav language={language} setLanguage={setLanguage}/>
      <Header language={language}/>
      <SeeMyWork language={language}/>
      <Footer language={language}/>
    </StyledWrapper>
  )
}

export default UnderConstruction