import styled from 'styled-components'
import SeeMyWork from './SeeMyWork/SeeMyWork'
import Description from './Description'
import { breakpoint } from '../../consts'

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 32vw;
  height: 45vh;
  
  @media(max-width: ${breakpoint}) {
    width: 100%;
  }
`

const Bio = ({ language }) => (
  <StyledWrapper>
    <Description language={language} />
    <SeeMyWork language={language}/>
  </StyledWrapper> 
)

export default Bio