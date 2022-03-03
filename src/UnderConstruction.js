import { useState } from 'react'
import Nav from './components/Nav/Nav'
import Header from './components/Header'
import Description from './components/Description'
import SeeMyWork from './components/SeeMyWork/SeeMyWork'
import Footer from './components/Footer/Footer'

const style = {
  margin: '0 5vw',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between'
}

function UnderConstruction() {
  const [ language, setLanguage ] = useState('en')

  return (
    <div style={style}>
      <Nav language={language} setLanguage={setLanguage}/>
      <Header language={language}/>
      <Description language={language}/>
      <SeeMyWork language={language}/>
      <Footer language={language}/>
    </div>
  )
}

export default UnderConstruction