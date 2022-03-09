import styled from 'styled-components'
import LanguageToggle from './LanguageToggle/LanguageToggle'
import Logo from './Logo'

const StyledWrapper = styled.div`
  width: 90vw;
  height: 6vh;
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
`

const Nav = ({ language, setLanguage }) => (
  <StyledWrapper>
    <Logo />
    <StyledLine />
    <LanguageToggle language={language} setLanguage={setLanguage}/>
  </StyledWrapper>
)

export default Nav