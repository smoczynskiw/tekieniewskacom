import styled from 'styled-components'
import headerWebPL from '../images/headerWebPL.svg'
import headerWebEN from '../images/headerWebEN.svg'
import headerMobilePL from '../images/headerMobilePL.svg'
import headerMobileEN from '../images/headerMobileEN.svg'
import { breakpoint } from '../consts'

const StyledWrapper = styled.div`
  display: flex;
  justify-content: ${({ language }) => language === 'pl' ? 'flex-start' : 'center'};
  width: ${({ language }) => language === 'pl' && '65%'};

  @media(max-width: ${breakpoint}) {
    width: ${({language}) => language === 'pl' ? '75%' : '100%'};
    align-self: flex-start;
  }
`

const StyledImageWeb = styled.img`
  @media(max-width: ${breakpoint}) {
    display: none;
  }
  width: 100%;
`

const StyledImageMobile = styled.img`
  display: none;
  width: 100%;
  @media(max-width: ${breakpoint}) {
    display: block;
  }
`

const Header = ({ language }) => {
  const headerImageWeb = language === 'pl' ? headerWebPL : headerWebEN
  const headerImageMobile = language === 'pl' ? headerMobilePL : headerMobileEN

  return (
    <StyledWrapper language={language}>
      <StyledImageWeb src={headerImageWeb} alt='header'/>
      <StyledImageMobile src={headerImageMobile} alt='header'/>
    </StyledWrapper>
  )
}

export default Header