import { useState } from 'react'
import styled from 'styled-components'
import Nav from './Nav/Nav'
import Header from './Header'
import Bio from './Bio/Bio'
import Footer from './Footer/Footer'
import { breakpoint } from '../consts'

const StyledWrapper = styled.div`
  margin: 0 5vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media(max-width: ${breakpoint}) {
    align-items: center;
    margin: 0 10vw;
  }

  @media(max-width: 414px) {
    height: 896px;
  }

  @media(max-width: 375px) {
    height: 667px;
  }
`

const UnderConstruction = () => {
  const [ language, setLanguage ] = useState(window.localStorage.getItem('language') || 'en')

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