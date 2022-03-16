import styled from 'styled-components'
import { breakpoint } from '../../consts'

const StyledText = styled.div`
  font-family: WorkSans-Regular;
  font-size: 0.9vw;
  letter-spacing: -1px;
  & + & {
    margin-left: 8px;
  }

  @media(max-width: ${breakpoint}){
    font-family: WorkSans-Light;
    font-size: 4vw;
    color: #DADADA;
    letter-spacing: -0.5px;
  }
`

const Text = ({ text }) => (
  <StyledText>
    {text}
  </StyledText>
)

export default Text