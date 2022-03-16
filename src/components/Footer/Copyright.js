import styled from 'styled-components'
import Text from './Text'
import { breakpoint } from '../../consts'

const StyledWrapper = styled.div`
  @media(max-width: ${breakpoint}) {
    display: none;
  }
`

const Copyright = ({ text }) => (
  <StyledWrapper>
    <Text text={text} />
  </StyledWrapper>
)


export default Copyright