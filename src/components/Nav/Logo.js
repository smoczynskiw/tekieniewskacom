import styled from 'styled-components'
import logo from '../../images/logo.png'

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
`

const Logo = () => (
  <StyledWrapper>
    <img src={logo} alt='logo' />
  </StyledWrapper>
)

export default Logo