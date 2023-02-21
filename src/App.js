import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeScreen from './Pages/HomeScreen';
// import logo from './logo.svg';
import Routing from './Router/routing';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomeScreen />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
