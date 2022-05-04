import './App.css';
import { /*BrowserRouterHashRouter as Router*/HashRouter, Routes, Route} from 'react-router-dom'

import React from 'react';

import Home from './pages';
import SigninPage from './pages/signin'

function App() {
  return (
    <>
    <div>Hola</div>
    <HashRouter basename='https://gonzalobarrioss.github.io/Portfolio/'>
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/signin' element={ <SigninPage />} />
      </Routes>
    </HashRouter>
    </>
  );
}

export default App;
