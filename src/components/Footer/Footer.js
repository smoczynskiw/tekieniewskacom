import styled from 'styled-components'
import Contact from './Contact'
import Text from './Text'
import SocialLinks from './SocialLinks'

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90vw;
  border-top: 1px solid black;
  margin-top: 75px;
  padding: 40px 0;
  height: 5vh;
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
    <Text text={'© 2022 Gosia Tekieniewska. All rights reserved'} />
    <StyledLine/>
    <SocialLinks />
  </StyledWrapper>
)

export default Footer