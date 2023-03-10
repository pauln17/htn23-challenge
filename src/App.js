// Libraries
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import ParticleEffects from './components/background/ParticleEffects';
import Home from './components/main-page/Home';
import Login from './components/user-info/Login';
import Register from './components/user-info/Register';

function App() {
  return (
    <>
      <ParticleEffects />
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
