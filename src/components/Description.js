import styled from 'styled-components'
import descriptionCopy from '../copy/descriptionCopy'

const StyledWrapper = styled.div`
  height: 15%;
  width: 650px;
  margin-bottom: 50px;
`

const StyledText = styled.p`
  font-family: WorkSans-Regular;
  font-size: 18pt;
  letter-spacing: -2px;
  line-height: 26.4pt;
  padding-bottom: 45px;
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