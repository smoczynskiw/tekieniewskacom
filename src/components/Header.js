import styled from 'styled-components'
import headerPL from '../images/headerPL.svg'
import headerEN from '../images/headerEN.svg'

const StyledWrapper = styled.div`
  display: flex;
  justify-content: ${({ language }) => language === 'pl' ? 'flex-start' : 'center'};
  width: ${({ language }) => language === 'pl' && '65%'};
`

const StyledImage = styled.img`
  width: 100%;
`

const Header = ({ language }) => {
  const headerImage = language === 'pl' ? headerPL : headerEN

  return (
    <StyledWrapper language={language}>
      <StyledImage src={headerImage} alt='header'/>
    </StyledWrapper>
  )
}

export default Header