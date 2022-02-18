function LanguageButton(props) {
  const style = {
    width: '58px',
    height: '58px',
    display: 'flex',
    backgroundColor: props.isActive ? '#FF7122' : '#DADADA',
    borderRadius: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    fontSize: '21px',
    fontFamily: 'WorkSans-SemiBold',
    letterSpacing: '-1.5px',
    border: props.isActive ? 'none' : '2px solid #161616'
  }

  return (
    <div>
      <button style={style}>{props.language}</button>
    </div>
  )
}

export default LanguageButton