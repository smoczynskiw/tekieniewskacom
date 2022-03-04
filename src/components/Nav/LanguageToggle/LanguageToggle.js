import styled from 'styled-components'
import LanguageButton from './LanguageButton'

const languages = [`pl`, `en`]

const StyledWrapper = styled.div`
  min-width: 120px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 6.5px
`

const LanguageToggle = ({ language, setLanguage }) => (
  <StyledWrapper>
    {languages.map(lang => <LanguageButton language={language} setLanguage={setLanguage} label={lang}/>)}
  </StyledWrapper>
)

export default LanguageToggle