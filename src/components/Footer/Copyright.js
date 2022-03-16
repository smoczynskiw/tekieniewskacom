import styled from 'styled-components'
import Text from './Text'

const StyledWrapper = styled.div`
  @media(max-width: 425px) {
    display: none;
  }
`

const Copyright = ({ text }) => (
  <StyledWrapper>
    <Text text={text} />
  </StyledWrapper>
)


export default Copyright