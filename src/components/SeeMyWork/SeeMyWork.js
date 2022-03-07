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
  height: 20vh;
`

const SeeMyWork = ({ language }) => (
  <StyledWrapper>
    <Text language={language}/>
    <Arrow />
    <CTA language={language}/>
  </StyledWrapper> 
)

export default SeeMyWork