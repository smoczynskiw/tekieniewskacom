import UnderConstruction from './components/UnderConstruction'
import backgroundMain from './images/backgroundMain.png'

const style = {
  width: '100vw',
  height: '100vh',
  backgroundImage: `url(${backgroundMain})`,
  overflow: 'scroll'
}

function App() {
  return (
    <div style={style}>
      <UnderConstruction />
    </div>
  );
}

export default App;
