import headerCopy from '../copy/headerCopy'

const style = {
  fontFamily: 'Morganite-SemiBold',
  // fontSize: '215pt',
  // fontSize: '233.5pt',
  fontSize: '15.2vw',
  whiteSpace: 'nowrap',
  fontWeight: '400',
  letterSpacing: '5.3px',
  textTransform: 'uppercase',
  textAlign: 'center',
  marginTop: '64px',
  marginBottom: 0
}

function Header({language}) {
  const text = headerCopy[language]

  return (
    <div>
      <h1 style={style}>{text}</h1>
    </div>
  )
}

export default Header