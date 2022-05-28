import React from "react";
import { ButtonBar } from "../components/ButtonBar";
import '../css/DeliveryDashboard.css';

function logout() {
    window.location.href = '/';
}

export function DeliveryDashboard() {
    return (
        <div>
            <h1>Delivery Dashboard</h1>
            <p>Welcome!</p>
            <button className='logoutButton' type='button' onClick={logout}>Logout</button>
            <ButtonBar renderOrders={true} renderCustomers={true} renderIncomeExpenses={true} />
        </div>
    );
}