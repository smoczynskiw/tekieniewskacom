import styled from 'styled-components'

const StyledLink = styled.a`
  font-family: WorkSans-Regular;
  font-size: 17pt;
  letter-spacing: -2px;
  color: #161616;
  margin: 0 8px;
  &:last-of-type {
    margin-right: 0;
  }
`

const Link = ({text, link}) => (
  <div>
    <StyledLink href={link} target='_blank' rel="noreferrer">{text}</StyledLink>
  </div>
)
  
export default Link