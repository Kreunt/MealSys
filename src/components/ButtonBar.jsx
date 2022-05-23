import React, { useState } from "react";
import { Customers } from './Customers/customers';

export function ButtonBar({ renderCustomers, renderMenus, renderOrders, renderUsers }) {
    const [viewCustomers, setViewCustomers] = useState(false);
    const [viewMenus, setViewMenus] = useState(false);
    const [viewOrders, setViewOrders] = useState(false);
    const [viewUsers, setViewUsers] = useState(false);


    const handleViewCustomers = () => {
        setViewMenus(false);
        setViewCustomers(!viewCustomers);
    };

    const handleViewMenus = () => {
        setViewCustomers(false);
        setViewMenus(!viewMenus);
    };


    return (
        <div className='button-wrapper'>
            {renderCustomers && <button className='customersButton' type='button' onClick={handleViewCustomers}>Customers</button>}
            {renderMenus && <button className='MenusButton' type='button' onClick={handleViewMenus}>Menus</button>}
                {viewCustomers && <Customers />}
                {viewMenus && <div>Menus</div>}
        </div>
    );
}