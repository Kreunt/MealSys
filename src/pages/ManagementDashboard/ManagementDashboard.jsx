import React from 'react';

export default function ManagementDashboard({ token }) {
  return(
    <div>
      <h2>Management Dashboard</h2>
      <p>Welcome User {token}</p>
    </div>
    
  );
}