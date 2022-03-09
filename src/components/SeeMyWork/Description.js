import styled from 'styled-components'
import descriptionCopy from '../../copy/descriptionCopy'

const StyledText = styled.p`
  font-family: WorkSans-Regular;
  fontSize: 19pt;
  font-size: 1.3vw;
  letter-spacing: -2px;
  line-height: 26.4pt;
  text-align: justify;
`

const Description = ({ language }) => {
  const textBold = descriptionCopy.bold[language]
  const text = descriptionCopy.main[language]
  
  return (
    <div>
      <StyledText><strong>{textBold}</strong>{text}</StyledText>
    </div>
  )
}
export default Description