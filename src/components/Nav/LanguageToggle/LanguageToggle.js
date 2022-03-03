import LanguageButton from './LanguageButton'

const style = {
  minWidth: '120px',
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '6.5px'
}

function LanguageToggle(props) {
  const { language, setLanguage } = props

  return (
    <div style={style}>
      <LanguageButton language={language} setLanguage={setLanguage} label='pl'/>
      <LanguageButton language={language} setLanguage={setLanguage} label='en'/>
    </div>
 )
}

export default LanguageToggle