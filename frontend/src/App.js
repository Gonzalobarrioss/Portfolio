import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import React from 'react';

import Home from './pages';
import SigninPage from './pages/signin'

function App() {
  return (
    <Router basename="https://gonzalobarrioss.github.io/Portfolio/">
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/signin' element={ <SigninPage />} />
      </Routes>
    </Router>
  );
}

export default App;