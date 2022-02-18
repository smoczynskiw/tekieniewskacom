import logo from '../../images/logo.png'

const style = {
  display: 'flex',
  alignItems: 'center'
}

function Logo() {
  return (
    <div style={style}>
      <img src={logo} alt='logo' />
    </div>
  )
}

export default Logo