import styled from 'styled-components'
import Text from './Text'
import Arrow from './Arrow'
import CTA from './CTA'
import { breakpoint } from '../../../consts'

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 32vw;
  height: 23vh;
  margin-top: 5vh;

  @media(max-width: ${breakpoint}) {
    height: 20vh;
    margin-top: 0;
    width: 100%;
  }

  @media(max-width: 375px) {
    margin-top: 50px;
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