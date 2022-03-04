import styled from 'styled-components'
import Text from './Text'

const contactInfo = [`tekieniewska@gmail.com`, `+48 889 331 839`]

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 20%
`

const Contact = () => (
  <StyledWrapper>
    {contactInfo.map(el => <Text text={el}/>)}
  </StyledWrapper>
)

export default Contact