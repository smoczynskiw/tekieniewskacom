import styled from 'styled-components'
import headerCopy from '../copy/headerCopy'

const StyledHeader = styled.h1`
  font-family: Morganite-SemiBold;
  font-size: 15.2vw;
  white-space: nowrap;
  font-weight: 400;
  letter-spacing: 5.3px;
  text-transform: uppercase;
  text-align: center;
  margin-top: 64px;
  margin-bottom: 0
`

const Header = ({ language }) => {
  const text = headerCopy[language]

  return (
    <div>
      <StyledHeader>{text}</StyledHeader>
    </div>
  )
}

export default Header