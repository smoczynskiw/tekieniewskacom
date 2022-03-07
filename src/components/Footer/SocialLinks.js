import styled from 'styled-components'
import Link from './Link'

const socials = [
  { name: `Behance`, link: `https://www.behance.net/tekieniewska` },
  { name: `Instagram`, link: `https://instagram.com/gosiatek` },
  { name: `Facebook`, link: `https://www.facebook.com/gosia.tekieniewska` }
]

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 20%;
`

const SocialLinks = () => (
  <StyledWrapper>
    {socials.map((social, i) => <Link text={social.name} link={social.link} key={i}/>)}
  </StyledWrapper>
)

export default SocialLinks