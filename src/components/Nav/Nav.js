import styled from 'styled-components'
import LanguageToggle from './LanguageToggle/LanguageToggle'
import Logo from './Logo'

const StyledWrapper = styled.div`
  width: 100%;
  height: 6vh;
  min-height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5vh;
`

const StyledLine = styled.hr`
  width: 80%;
  height: 3px;
  background-color: #191919;
  border: none;
  margin: 0 2.5vw;

  @media(max-width: 425px) {
    display: none;
  }
`

const Nav = ({ language, setLanguage }) => (
  <StyledWrapper>
    <Logo />
    <StyledLine />
    <LanguageToggle language={language} setLanguage={setLanguage}/>
  </StyledWrapper>
)

export default Nav