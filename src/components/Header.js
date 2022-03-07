import styled from 'styled-components'
import headerCopy from '../copy/headerCopy'

const StyledWrapper = styled.div`
  height: 30vh;
`

const StyledHeader = styled.h1`
  font-family: Morganite-SemiBold;
  font-size: 15.2vw;
  white-space: nowrap;
  font-weight: 400;
  letter-spacing: 5.3px;
  text-transform: uppercase;
  text-align: ${props => props.language === 'pl' ? 'left' : 'center'};
  margin: 5vh 0;
`

const Header = ({ language }) => {
  const text = headerCopy[language]

  return (
    <StyledWrapper>
      <StyledHeader language={language}>{text}</StyledHeader>
    </StyledWrapper>
  )
}

export default Header