import styled from 'styled-components'
import arrow from '../../images/arrow.png'

const StyledWrapper = styled.div`
  margin: -15px;
`

const Arrow = () => (
  <StyledWrapper>
    <img src={arrow} alt='arrow' />
  </StyledWrapper>
)

export default Arrow