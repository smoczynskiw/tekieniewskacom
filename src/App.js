import styled from 'styled-components'
import UnderConstruction from './components/UnderConstruction'
import backgroundMain from './images/backgroundMain.png'
import backgroundMobile from './images/backgroundMobile.jpg'

const StyledWrapper = styled.div`
  background-image: url(${backgroundMain});
  background-size: 100% 100%;
  
  @media(max-width: 425px) {
    background-image: url(${backgroundMobile});
    height: -webkit-fill-available;
  }
`

function App() {
  return (
    <StyledWrapper>
      <UnderConstruction />
    </StyledWrapper>
  );
}

export default App;
