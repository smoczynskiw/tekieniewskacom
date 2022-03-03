import LanguageToggle from './LanguageToggle/LanguageToggle'
import Logo from './Logo'

const style = {
  width: '90vw',
  height: '8vh',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: `flex-end`,
  marginTop: '0.5vh'
}

const lineStyle = {
  width: '1470px',
  height: '3px',
  backgroundColor: '#191919',
  border: 'none',
  marginBottom: '34px',
  marginLeft: '32px',
  marginRight: '32px'
}

function Nav({ language, setLanguage }) {
  return (
    <div style={style}>
      <Logo />
      <hr style={lineStyle}/>
      <LanguageToggle language={language} setLanguage={setLanguage}/>
    </div>
  )
}

export default Nav