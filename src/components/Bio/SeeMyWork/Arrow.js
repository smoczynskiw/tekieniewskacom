import styled from 'styled-components'
import arrow from '../../../images/arrow.png'

const StyledWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`

const StyledImage = styled.img`
  height: 35%;
`

const Arrow = () => (
  <StyledWrapper style={{ height: '100%', display: 'flex', alignItems: 'center'}}>
    <StyledImage src={arrow} alt='arrow' />
  </StyledWrapper>
)

export default Arrow