import logo from './logo.svg';
import './App.css';
import { Button } from '@mui/material';
import SideBar from './Components/SideBar';
import Home from './Components/Home';
import CryptoCoins from './Components/CryptoCoins';
import News from './Components/News';
import Exchanges from './Components/Exchanges';
import { Routes, Route } from 'react-router';
import { contentStyle } from './Styles/ContentStyles';

function App() {
  const { classes } = contentStyle();
  return (
    <div>
      <header className="App-header">
        <SideBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/CRYPTOVERSE/" element={<Home/>} />
          <Route path="/cryptocurrencies" element={<CryptoCoins />} />
          <Route path="/exchanges" element={<Exchanges />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
