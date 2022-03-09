import styled from 'styled-components'

const StyledWrapper = styled.div`
  height: 25vh;
  width: 90vw;
  display: flex;
  justify-content: ${({language}) => language === 'pl' ? 'flex-start' : 'center'}
`

const StyledImage = styled.div`
  width: 40vw;
  height: 100%;
  background-color: red;
`

const Header = ({ language }) => {
  return (
    <StyledWrapper language={language}>
      <StyledImage />
    </StyledWrapper>
  )
}

export default Header