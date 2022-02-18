const textBold = `Hi there! My name is Gosia Tekieniewska, `

const text = `I'm a graphic designer and illustrator. 
I'm still working to make this website available. 
You'll find here: my portfolio, more info about me and about how I can help you design-wise.`

const containerStyle = {
  height: '15%',
  width: '650px',
  marginBottom: '50px',
}

const textStyle = {
  fontFamily: 'WorkSans-Regular',
  fontSize: '18pt',
  letterSpacing: '-2px',
  lineHeight: '26.4pt',
  paddingBottom: '45px',
  borderBottom: '1px solid #191919'
}

function Description() {
  return (
    <div style={containerStyle}>
      <p style={textStyle}><strong>{textBold}</strong>{text}</p>
    </div>
  )
}
export default Description