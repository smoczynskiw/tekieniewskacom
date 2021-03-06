import styled from 'styled-components'
import Text from './Text'
import { breakpoint } from '../../consts'

const contactInfo = [`tekieniewska@gmail.com`, `+48 889 331 839`]

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 20vw;

  @media(max-width: ${breakpoint}) {
    height: 40%;
    flex-direction: column;
    justify-content: space-between;
  }
`

const Contact = () => (
  <StyledWrapper>
    {contactInfo.map((el, i) => <Text text={el} key={i}/>)}
  </StyledWrapper>
)

export default Contact