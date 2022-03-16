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
  
  @media(max-width: 425px) {
    align-items: center;
    margin: 0 10vw;
  }
`

const UnderConstruction = () => {
  const [ language, setLanguage ] = useState(window.sessionStorage.getItem('language') || 'en')

  return (
    <StyledWrapper>
      <Nav language={language} setLanguage={setLanguage}/>
      <Header language={language}/>
      <Bio language={language}/>
      <Footer />
    </StyledWrapper>
  )
}

export default UnderConstruction