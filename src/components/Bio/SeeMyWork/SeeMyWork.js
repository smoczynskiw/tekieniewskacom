import styled from 'styled-components'
import Text from './Text'
import Arrow from './Arrow'
import CTA from './CTA'
import Description from '../Description'

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 32vw;
  height: 42vh;
`

const StyledLine = styled.hr`
  width: 100%;
  height: 1px;
  background-color: #191919;
  margin: 0 0 1.5vh 0;
  border: none;
`

const SeeMyWork = ({ language }) => (
  <StyledWrapper>
    <Description language={language} />
    <StyledLine />
    <Text language={language}/>
    <Arrow />
    <CTA language={language}/>
  </StyledWrapper> 
)

export default SeeMyWork