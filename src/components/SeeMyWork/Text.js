import seeMyWorkCopy from '../../copy/seeMyWorkCopy'

const style = {
  fontFamily: 'WorkSans-SemiBold',
  fontSize: '23pt',
  lineHeight: '36pt',
  letterSpacing: '-2px',
  width: '400px',
  textAlign: 'center'
}

function Text({ language }) {
  const text= seeMyWorkCopy.main[language]
  
  return (
    <div>
      <h2 style={style}>{text}</h2>
    </div>
  )
}

export default Text