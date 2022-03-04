import styled from 'styled-components'

const StyledWrapper = styled.div`
  font-family: WorkSans-Regular;
  font-size: 13pt;
  letter-spacing: -1px;
`

const StyledText = styled.span`
  margin: 0 8px;
  &:first-of-type {
    margin-left: 0;
  }
`

const Text = ({ text }) => (
  <StyledWrapper>
    <StyledText>{text}</StyledText>
  </StyledWrapper>
)

export default Text