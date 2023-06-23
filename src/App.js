import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './LoginPage.css'
import './style.css'
import LoginPage from './LoginPage'
import Homepage from './Homepage'
import {BrowserRouter,Route,Routes} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
    <Routes>
          <Route path="/"  element={<Homepage/>} />
          <Route path="/login"  element={<LoginPage/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;