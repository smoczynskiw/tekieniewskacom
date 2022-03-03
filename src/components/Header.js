const style = {
  fontFamily: 'Morganite-SemiBold',
  // fontSize: '215pt',
  // fontSize: '233.5pt',
  fontSize: '15.25vw',
  whiteSpace: 'nowrap',
  fontWeight: '400',
  letterSpacing: '5.3px',
  marginRight: '-5px',
  textTransform: 'uppercase',
  textAlign: 'center',
  marginTop: '64px',
  marginBottom: 0
}

function Header() {
  return (
    <div style={{ width: '100%' }}>
      <h1 style={style}>Website under construction</h1>
    </div>
  )
}

export default Header