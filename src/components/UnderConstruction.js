import { useState } from 'react'
import styled from 'styled-components'
import Nav from './Nav/Nav'
import Header from './Header'
import Bio from './Bio/Bio'
import Footer from './Footer/Footer'

const StyledWrapper = styled.div`
  margin: 0 5vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

function UnderConstruction() {
  const [ language, setLanguage ] = useState(window.sessionStorage.getItem('label') || 'en')

  return (
    <StyledWrapper>
      <Nav language={language} setLanguage={setLanguage}/>
      <Header language={language}/>
      <Bio language={language}/>
      <Footer language={language}/>
    </StyledWrapper>
  )
}

export default UnderConstruction