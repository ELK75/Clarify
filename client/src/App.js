import React from 'react';
import './App.css';

import LandingPage from './pages/LandingPage';
import SocketButton from './components/SocketButton';
import SocketFrontEnd from './SocketFrontEnd';
// import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <LandingPage />
      <SocketButton />
      <SocketFrontEnd />
    </div>
  );
}

export default App;
