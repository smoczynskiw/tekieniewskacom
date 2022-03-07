import styled from 'styled-components'
import seeMyWorkCopy from '../../copy/seeMyWorkCopy'

const StyledWrapper = styled.div`
  width: 20vw;
`

const StyledHeader = styled.h2`
  font-family: WorkSans-SemiBold;
  font-size: 1.5vw;
  line-height: 36pt;
  letter-spacing: -2px;
  text-align: center;
  margin: 2vh 0;
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