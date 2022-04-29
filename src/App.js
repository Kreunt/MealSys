import './css/App.css';
import React, { useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import ManagementDashboard from './pages/ManagementDashboard/ManagementDashboard';
import LoginPage from './pages/LoginPage/LoginPage';


function App() {
const [token, setToken] = useState();

if(!token) {
  return <LoginPage setToken={setToken} />
}

  return (
    <div className="wrapper">
      <h1>Meal-Sys</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/management" element={<ManagementDashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;