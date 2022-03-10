import UnderConstruction from './components/UnderConstruction'
import backgroundMain from './images/backgroundMain.png'

const style = {
  backgroundImage: `url(${backgroundMain})`,
  backgroundSize: '100% 100%'
}

function App() {
  return (
    <div style={style}>
      <UnderConstruction />
    </div>
  );
}

export default App;
