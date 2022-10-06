import './App.css';
import { /*BrowserRouterHashRouter as Router*/HashRouter, Routes, Route} from 'react-router-dom'


import { Provider } from 'react-redux';
import { store } from './redux/store';


import React from 'react';

import Home from './pages';
import About from './pages/AboutMe'

function App() {
  return (
    <Provider store={store}>
        <HashRouter base='https://gonzalobarrioss.github.io/Portfolio/'>
          <Routes>
            <Route path='/' element={ <Home />} />
            <Route path='/cv' element={ <About />} />
          </Routes>
        </HashRouter>
    </Provider>
  );
}

export default App;
