import './App.css';
import Header from './header';
import styled from 'styled-components';
import Wrapper from './wrapper';

const AppStyled = styled.main `
background: radial-gradient(circle at top, hsl(214, 47%, 23%), hsl(237, 49%, 15%));
min-height:100vh;
padding: 2em
body{
  font-family: "Barlow Semi Condensed", sans-serif;
}
`

function App() {
  return (
    <AppStyled>
      <Wrapper>
      <Header/>   
      </Wrapper>
    </AppStyled>
  );
}

export default App;
