const text = `Until then you can see my work here`

const style = {
  fontFamily: 'WorkSans-SemiBold',
  fontSize: '23pt',
  lineHeight: '36pt',
  letterSpacing: '-2px',
  width: '400px',
  textAlign: 'center'
}

function Text() {
  return (
    <div>
      <h2 style={style}>{text}</h2>
    </div>
  )
}

export default Text