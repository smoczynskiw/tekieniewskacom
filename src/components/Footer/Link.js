import styled from 'styled-components'
import { breakpoint } from '../../consts'

const StyledLink = styled.a`
  font-family: WorkSans-Regular;
  font-size: 1vw;
  letter-spacing: -2px;
  color: #161616;
  margin: 0 8px;
  transition: 0.1s ease-in-out color;
  &:last-of-type {
    margin-right: 0;
  }
  &:hover {
    color: #FF7122;
    transition: 0.1s ease-in-out;
  }

  @media(max-width: ${breakpoint}) {
    font-family: WorkSans-Light;
    color: #DADADA;
    font-size: 4vw;
    letter-spacing: -0.5px;
    text-decoration: none;
  }
`

const Link = ({text, link}) => (
  <div>
    <StyledLink href={link} target='_blank' rel="noreferrer">{text}</StyledLink>
  </div>
)
  
export default Link