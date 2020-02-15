import React from 'react';
import './App.css';

import LandingPage from './pages/LandingPage';
import SocketButton from './components/SocketButton';
// import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <LandingPage />
      <SocketButton />
    </div>
  );
}

export default App;
