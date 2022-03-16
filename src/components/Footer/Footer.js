import styled from 'styled-components'
import Contact from './Contact'
import Copyright from './Copyright'
import SocialLinks from './SocialLinks'

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90vw;
  border-top: 1px solid black;
  height: 10vh;
  
  @media(max-width: 425px) {
    align-items: flex-end;
    height: 13.7vh;
    margin-bottom: 2vh;
    border: none;
  }
`

const StyledLine = styled.hr`
  width: 15vw;
  height: 1px;
  background-color: #191919;
  border: none;

  @media (max-width: 1690px) {
    display: none
  }
`

const Footer = () => (
  <StyledWrapper>
    <Contact />
    <StyledLine/>
    <Copyright text={'© 2022 Gosia Tekieniewska. All rights reserved'} />
    <StyledLine/>
    <SocialLinks />
  </StyledWrapper>
)

export default Footer