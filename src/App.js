import './css/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';

function App() {

const [loggedIn, setLoggedIn] = useState(false);
const [role, setRole] = useState();

if(!loggedIn) {
  return (
  <div className='wrapper'>
    <h1>Meal-Sys</h1> 
    <LoginPage setLoggedIn={setLoggedIn} setRole={setRole} />
  </div>
  )
}

  return (
    <div className="wrapper">
      <h1>Meal-Sys</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard role={role} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;