import LanguageButton from './LanguageButton'

const style = {
  minWidth: '120px',
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '6.5px'
}

function LanguageToggle() {
  return (
    <div style={style}>
      <LanguageButton language='PL'/>
      <LanguageButton language='EN' isActive/>
    </div>
 )
}

export default LanguageToggle