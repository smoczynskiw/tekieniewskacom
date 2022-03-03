import seeMyWorkCopy from '../../copy/seeMyWorkCopy'

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

function CTA({ language }) {
  const text = seeMyWorkCopy.cta[language]
  return (
    <div>
      <a style={style} href='https://www.behance.net/tekieniewska' target='_blank' rel="noreferrer">{text}</a>
    </div>
  ) 
}

export default CTA