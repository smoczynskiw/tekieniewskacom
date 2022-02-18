import Nav from './components/Nav/Nav'
import Header from './components/Header'
import Description from './components/Description'
import SeeMyWork from './components/SeeMyWork/SeeMyWork'
import Footer from './components/Footer/Footer'

const style = {
  margin: '0 99px',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between'
}

function UnderConstruction() {
  return (
    <div style={style}>
      <Nav />
      <Header />
      <Description />
      <SeeMyWork />
      <Footer />
    </div>
  )
}

export default UnderConstruction