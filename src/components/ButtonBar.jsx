import React, { useState } from "react";
import { Customers } from './Customers/customers';

export function ButtonBar({ renderCustomers, renderMenus, renderOrders, renderUsers }) {
    const [viewCustomers, setViewCustomers] = useState(false);
    const [viewMenus, setViewMenus] = useState(false);
    const [viewOrders, setViewOrders] = useState(false);
    const [viewUsers, setViewUsers] = useState(false);


    const handleViewCustomers = () => {
        setViewMenus(false);
        setViewOrders(false);
        setViewUsers(false);
        setViewCustomers(!viewCustomers);
    };

    const handleViewMenus = () => {
        setViewCustomers(false);
        setViewOrders(false);
        setViewUsers(false);
        setViewMenus(!viewMenus);
    };

    const handleViewOrders = () => {
        setViewCustomers(false);
        setViewMenus(false);
        setViewUsers(false);
        setViewOrders(!viewOrders);
    };

    const handleViewUsers = () => {
        setViewCustomers(false);
        setViewMenus(false);
        setViewOrders(false);
        setViewUsers(!viewUsers);
    };
    return (
        <div className='button-wrapper'>
            {renderCustomers && <button className='customersButton' type='button' onClick={handleViewCustomers}>Customers</button>}
            {renderMenus && <button className='MenusButton' type='button' onClick={handleViewMenus}>Menus</button>}
            {renderOrders && <button className='OrdersButton' type='button' onClick={handleViewOrders}>Orders</button>}
            {renderUsers && <button className='UsersButton' type='button' onClick={handleViewUsers}>Users</button>}
                {viewCustomers && <Customers />}
                {viewMenus && <div>Menus</div>}
                {viewOrders && <div>Orders</div>}
                {viewUsers && <div>Users</div>}
        </div>
    );
}