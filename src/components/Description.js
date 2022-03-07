import styled from 'styled-components'
import descriptionCopy from '../copy/descriptionCopy'

const StyledWrapper = styled.div`
  height: 15vh;
  width: 32vw;
`

const StyledText = styled.p`
  font-family: WorkSans-Regular;
  fontSize: 19pt;
  font-size: 1.3vw;
  letter-spacing: -2px;
  line-height: 26.4pt;
  padding-bottom: 3vh;
  border-bottom: 1px solid #191919;
  text-align: justify;
`

const Description = ({ language }) => {
  const textBold = descriptionCopy.bold[language]
  const text = descriptionCopy.main[language]
  
  return (
    <StyledWrapper>
      <StyledText><strong>{textBold}</strong>{text}</StyledText>
    </StyledWrapper>
  )
}
export default Description