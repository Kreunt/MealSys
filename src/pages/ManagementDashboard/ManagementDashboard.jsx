import React from 'react';
import { ButtonBar } from '../../components/ButtonBar';
import '../../css/ManagementDashboard.css';

function logout() {
  sessionStorage.clear();
  window.location.href = '/';
}
export default function ManagementDashboard({ token }) {
  return(
    <div>
      <h2>Management Dashboard</h2>
      <p>Welcome User {token}</p>
      <button className='logoutButton' type='button' onClick={logout}>Logout</button>
      <ButtonBar renderCustomers={true} renderMenus={true} renderOrders={true} renderUsers={true} renderIngredients={true} renderPersonals={true} />
    </div>
    
  );
}