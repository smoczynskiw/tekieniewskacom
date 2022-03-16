import styled from 'styled-components'
import logo from '../../images/logo.png'

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-end;
  height: 52%;

  @media(max-width: 425px) {
    align-self: center;
  }
`

const StyledImage = styled.img`
  height: 100%;
`

const Logo = () => (
  <StyledWrapper>
    <StyledImage src={logo} alt='logo' />
  </StyledWrapper>
)

export default Logo