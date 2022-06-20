import React from "react";
import { ButtonBar } from "../components/ButtonBar";

function logout() {
  window.location.href = "/";
}

export function DeliveryDashboard() {
  return (
    <div>
      <h2>Delivery Dashboard</h2>
      <p>Welcome!</p>
      <button className="logoutButton" type="button" onClick={logout}>
        Logout
      </button>
      <ButtonBar
        renderOrders={true}
        renderCustomers={true}
        renderIncomeExpenses={true}
      />
    </div>
  );
}
