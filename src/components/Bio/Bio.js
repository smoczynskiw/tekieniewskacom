import styled from 'styled-components'
import SeeMyWork from './SeeMyWork/SeeMyWork'
import Description from './Description'

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 32vw;
  height: 45vh;
`

const StyledLine = styled.hr`
  width: 100%;
  height: 1px;
  background-color: #191919;
  margin: 0 0 1.5vh 0;
  border: none;
`

const Bio = ({ language }) => (
  <StyledWrapper>
    <Description language={language} />
    <StyledLine />
    <SeeMyWork language={language}/>
  </StyledWrapper> 
)

export default Bio