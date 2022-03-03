function LanguageButton({ language, setLanguage, label }) {
  const style = {
    width: '58px',
    height: '58px',
    display: 'flex',
    backgroundColor: language === label ? '#FF7122' : '#DADADA',
    borderRadius: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    fontSize: '21px',
    fontFamily: 'WorkSans-SemiBold',
    letterSpacing: '-1.5px',
    border: language === label ? 'none' : '2px solid #161616',
    textTransform: 'uppercase'
  }

  return (
    <div>
      <button onClick={() => setLanguage(label)} style={style}>{label}</button>
    </div>
  )
}

export default LanguageButton