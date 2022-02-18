const style = {
  fontFamily: 'WorkSans-Regular',
  fontSize: '17pt',
  letterSpacing: '-2px',
  color: '#161616'
}

function Link(props) {
  return (
    <div>
      <a href={props.link} target='_blank' style={style} rel="noreferrer">{props.text}</a>
    </div>
  )
}

export default Link