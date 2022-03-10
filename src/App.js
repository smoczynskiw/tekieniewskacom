import UnderConstruction from './components/UnderConstruction'
import backgroundMain from './images/backgroundMain.png'

const style = {
  backgroundImage: `url(${backgroundMain})`
}

function App() {
  return (
    <div style={style}>
      <UnderConstruction />
    </div>
  );
}

export default App;
