import styled from 'styled-components'
import seeMyWorkCopy from '../../../copy/seeMyWorkCopy'

const StyledWrapper = styled.div`
  width: 16vw;
`

const StyledHeader = styled.h2`
  font-family: WorkSans-SemiBold;
  font-size: 1.3vw;
  line-height: 25pt;
  letter-spacing: -1px;
  text-align: center;
  margin: 0;
`

const Text = ({ language }) => {
  const text = seeMyWorkCopy.main[language]
  
  return (
    <StyledWrapper>
      <StyledHeader>{text}</StyledHeader>
    </StyledWrapper>
  )
}

export default Text