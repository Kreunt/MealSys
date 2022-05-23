import React from "react";
import { ButtonBar } from "../components/ButtonBar";
import '../css/DeliveryDashboard.css';

function logout() {
    sessionStorage.clear();
    window.location.href = '/';
}

export default function DeliveryDashboard({ token }) {
    return (
        <div>
            <h1>Delivery Dashboard</h1>
            <p>Welcome User {token}</p>
            <button className='logoutButton' type='button' onClick={logout}>Logout</button>
            <ButtonBar renderOrders={true} renderCustomers={true} renderIncomeExpenses={true} />
        </div>
    );
}