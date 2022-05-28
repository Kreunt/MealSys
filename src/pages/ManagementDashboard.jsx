import React from 'react';
import { ButtonBar } from '../components/ButtonBar';
import '../css/ManagementDashboard.css';

function logout() {
  window.location.href = '/';
}
export function ManagementDashboard() {
  return(
    <div>
      <h2>Management Dashboard</h2>
      <p>Welcome!</p>
      <button className='logoutButton' type='button' onClick={logout}>Logout</button>
      <ButtonBar renderCustomers={true} renderMenus={true} renderOrders={true} renderUsers={true} renderIngredients={true} renderPersonals={true} renderIncomeExpenses={true} />
    </div>
    
  );
}