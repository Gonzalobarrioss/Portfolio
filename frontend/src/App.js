import './App.css';
import { /*BrowserRouterHashRouter as Router*/HashRouter, Routes, Route} from 'react-router-dom'


import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';


import React from 'react';

import Home from './pages';
import SigninPage from './pages/signin'
import About from './pages/AboutMe'

function App() {
  return (
    <>
    <Provider store={store}>
    { /*  <PersistGate loading={null} persistor={persistor}>  */}
        <HashRouter base='https://gonzalobarrioss.github.io/Portfolio/'>
          <Routes>
            <Route path='/' element={ <Home />} />
            <Route path='/signin' element={ <SigninPage />} />
            <Route path='/cv' element={ <About />} />
          </Routes>
        </HashRouter>
   { /*   </PersistGate> */ }
    </Provider>
    </>
  );
}

export default App;
