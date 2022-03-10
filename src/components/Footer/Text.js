import styled from 'styled-components'

const StyledText = styled.div`
  font-family: WorkSans-Regular;
  font-size: 15pt;
  letter-spacing: -1px;
  & + & {
    margin-left: 8px;
  }
`

const Text = ({ text }) => (
  <StyledText>
    {text}
  </StyledText>
)

export default Text