import styled from 'styled-components'
import UnderConstruction from './components/UnderConstruction'
import { breakpoint } from './consts'
import backgroundMain from './images/backgroundMain.png'
import backgroundMobile from './images/backgroundMobile.jpg'

const StyledWrapper = styled.div`
  background-image: url(${backgroundMain});
  background-size: 100% 100%;
  
  @media(max-width: ${breakpoint}) {
    background-image: url(${backgroundMobile});
    background-size: 100% 100%;
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
