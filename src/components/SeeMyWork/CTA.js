const style = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '491px',
  height: '68px',
  backgroundColor: '#FF7122',
  border: 'none',
  borderRadius: '50px',
  fontFamily: 'WorkSans-SemiBold',
  fontSize: '17pt',
  letterSpacing: '6px',
  textTransform: 'uppercase',
  marginTop: '35px',
  appearance: 'button',
  textDecoration: 'none',
  color: '#191919'
}

function CTA() {
  return (
    <div>
      <a style={style} href='https://www.behance.net/tekieniewska' target='_blank' rel="noreferrer">See my work</a>
    </div>
  ) 
}

export default CTA