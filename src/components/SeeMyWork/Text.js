import styled from 'styled-components'
import seeMyWorkCopy from '../../copy/seeMyWorkCopy'

const StyledHeader = styled.h2`
  font-family: WorkSans-SemiBold;
  font-size: 23pt;
  line-height: 36pt;
  letter-spacing: -2px;
  width: 400px;
  text-align: center
`

const Text = ({ language }) => {
  const text = seeMyWorkCopy.main[language]
  
  return (
    <div>
      <StyledHeader>{text}</StyledHeader>
    </div>
  )
}

export default Text