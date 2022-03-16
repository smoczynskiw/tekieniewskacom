import styled from 'styled-components'
import LanguageButton from './LanguageButton'
import { breakpoint } from '../../../consts'

const languages = [`pl`, `en`]

const StyledWrapper = styled.div`
  min-width: 120px;
  display: flex;
  justify-content: space-between;

  @media(max-width: ${breakpoint}) {
    min-width: 90px;
  }
`

const LanguageToggle = ({ language, setLanguage }) => (
  <StyledWrapper>
    {languages.map((lang, i) => <LanguageButton language={language} setLanguage={setLanguage} label={lang} key={i}/>)}
  </StyledWrapper>
)

export default LanguageToggle