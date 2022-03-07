import styled from 'styled-components'
import seeMyWorkCopy from '../../copy/seeMyWorkCopy'

const StyledLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25vw;
  height: 68px;
  background-color: #FF7122;
  border: none;
  border-radius: 50px;
  font-family: WorkSans-SemiBold;
  font-size: 1.1vw;
  letter-spacing: 6px;
  text-transform: uppercase;
  margin-top: 35px;
  appearance: button;
  text-decoration: none;
  color: #191919;
  transition: 0.2s ease-in-out background-color;
  &:hover {
    background-color: #ed671f;
    transition: 0.2s ease-in-out background-color;
  }
`

const CTA = ({ language }) => {
  const text = seeMyWorkCopy.cta[language]
  
  return (
    <div>
      <StyledLink href='https://www.behance.net/tekieniewska' target='_blank' rel="noreferrer">{text}</StyledLink>
    </div>
  ) 
}

export default CTA