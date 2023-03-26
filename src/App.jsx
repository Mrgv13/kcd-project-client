import AppRouter from './components/AppRouter';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import { useSelector } from 'react-redux';

function App() {
  const auth = useSelector((state) => state.auth.auth[0].type);
  return (
    <BrowserRouter>
      {auth ? <NavBar /> : <></>}
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
