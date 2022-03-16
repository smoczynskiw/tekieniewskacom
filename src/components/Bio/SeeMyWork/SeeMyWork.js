import styled from 'styled-components'
import Text from './Text'
import Arrow from './Arrow'
import CTA from './CTA'

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 32vw;
  height: 25vh;
  margin-top: 5vh;

  @media(max-width: 425px) {
    height: 20vh;
    margin-top: 0;
    width: 100%;
  }
`

const SeeMyWork = ({ language }) => (
  <StyledWrapper>
    <Text language={language}/>
    <Arrow />
    <CTA language={language}/>
  </StyledWrapper> 
)

export default SeeMyWork