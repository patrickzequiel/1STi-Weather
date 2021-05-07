import Header from './components/Header';
import Weather from './components/Weather';
import { GlobalStyle } from './styles/global';


function App() {

  return (
    <>
    <GlobalStyle />
    <Header />
    <h1>home</h1>
    <Weather />
    </>
  );
}

export default App;
