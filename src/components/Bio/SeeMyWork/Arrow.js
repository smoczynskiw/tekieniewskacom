import styled from 'styled-components'
import arrow from '../../../images/arrow.png'
import { breakpoint } from '../../../consts'

const StyledWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`

const StyledImage = styled.img`
  height: 35%;

  @media(max-width: ${breakpoint}) {
    height: 55%;
  }
`

const Arrow = () => (
  <StyledWrapper>
    <StyledImage src={arrow} alt='arrow' />
  </StyledWrapper>
)

export default Arrow