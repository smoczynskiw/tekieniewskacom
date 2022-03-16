import styled from 'styled-components'
import descriptionCopy from '../../copy/descriptionCopy'
import { breakpoint } from '../../consts'

const StyledWrapper = styled.div`
  @media(max-width: ${breakpoint}) {
    width: 100%;
  }
`

const StyledText = styled.p`
  font-family: WorkSans-Regular;
  font-size: ${({language}) => language === 'pl' ? '1.1vw' : '1.2vw'};
  letter-spacing: -2px;
  line-height: 22pt;
  text-align: justify;
  
  @media(max-width: ${breakpoint}) {
    font-size: ${({language}) => language === 'pl' ? '4vw' : '4vw'};
    letter-spacing: -1px;
    line-height: 18pt;
  }
`

const Description = ({ language }) => {
  const textBold = descriptionCopy.bold[language]
  const text = descriptionCopy.main[language]
  
  return (
    <StyledWrapper>
      <StyledText language={language}><strong>{textBold}</strong>{text}</StyledText>
    </StyledWrapper>
  )
}
export default Description