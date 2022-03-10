import styled from 'styled-components'
import descriptionCopy from '../../copy/descriptionCopy'

const StyledText = styled.p`
  font-family: WorkSans-Regular;
  font-size: ${({language}) => language === 'pl' ? '1.1vw' : '1.2vw'};
  letter-spacing: -2px;
  line-height: 26.4pt;
  text-align: justify;
`

const Description = ({ language }) => {
  const textBold = descriptionCopy.bold[language]
  const text = descriptionCopy.main[language]
  
  return (
    <div>
      <StyledText language={language}><strong>{textBold}</strong>{text}</StyledText>
    </div>
  )
}
export default Description