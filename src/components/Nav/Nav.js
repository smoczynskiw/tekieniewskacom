import LanguageToggle from './LanguageToggle/LanguageToggle'
import Logo from './Logo'

const style = {
  width: '100%',
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

function Nav() {
  return (
    <div style={style}>
      <Logo />
      <hr style={lineStyle}/>
      <LanguageToggle />
    </div>
  )
}

export default Nav