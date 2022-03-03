import descriptionCopy from '../copy/descriptionCopy'

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

function Description({ language }) {
  const textBold = descriptionCopy.bold[language]
  const text = descriptionCopy.main[language]
  
  return (
    <div style={containerStyle}>
      <p style={textStyle}><strong>{textBold}</strong>{text}</p>
    </div>
  )
}
export default Description