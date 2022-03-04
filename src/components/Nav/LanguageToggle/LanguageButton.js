import styled from 'styled-components'

const StyledButton = styled.button`
  width: 58px;
  height: 58px;
  display: flex;
  background-color: ${({language, label}) => language === label ? '#FF7122' : '#DADADA'};
  border-radius: 100%;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 21px;
  font-family: WorkSans-SemiBold;
  letter-spacing: -1.5px;
  border: ${({language, label}) => language === label ? 'none' : '2px solid #161616'};
  text-transform: uppercase;
  &:hover {
    border: 2px solid #FF7122;
  }
`

const LanguageButton = ({ language, setLanguage, label }) => (
  <div>
    <StyledButton label={label} language={language} onClick={() => setLanguage(label)}>{label}</StyledButton>
  </div>
)

export default LanguageButton