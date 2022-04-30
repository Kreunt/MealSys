import './css/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ManagementDashboard from './pages/ManagementDashboard/ManagementDashboard';
import LoginPage from './pages/LoginPage/LoginPage';
import useToken from './useToken';

function App() {

const { token, setToken } = useToken();

if(!token) {
  return (
  <div className='wrapper'>
    <h1>Meal-Sys</h1> 
    <LoginPage setToken={setToken} />
  </div>
  )
}

  return (
    <div className="wrapper">
      <h1>Meal-Sys</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage setToken={setToken}/>} />
          <Route path="/management" element={<ManagementDashboard token={token}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;