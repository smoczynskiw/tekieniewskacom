import styled from 'styled-components'
import LanguageToggle from './LanguageToggle/LanguageToggle'
import Logo from './Logo'

const StyledWrapper = styled.div`
  width: 90vw;
  height: 8vh;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 0.5vh;
`

const StyledLine = styled.hr`
  width: 1470px;
  height: 3px;
  background-color: #191919;
  border: none;
  margin-bottom: 34px;
  margin-left: 32px;
  margin-right: 32px
`

const Nav = ({ language, setLanguage }) => (
  <StyledWrapper>
    <Logo />
    <StyledLine />
    <LanguageToggle language={language} setLanguage={setLanguage}/>
  </StyledWrapper>
)

export default Nav