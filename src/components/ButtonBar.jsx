import React, { useState } from "react";
import { Customers } from './Customers/customers';

export function ButtonBar({ renderCustomers, renderMenus, renderOrders, renderUsers, renderPersonals, renderIngredients }) {
    const [viewCustomers, setViewCustomers] = useState(false);
    const [viewMenus, setViewMenus] = useState(false);
    const [viewOrders, setViewOrders] = useState(false);
    const [viewUsers, setViewUsers] = useState(false);
    const [viewPersonals, setViewPersonals] = useState(false);
    const [viewIngredients, setViewIngredients] = useState(false);


    const handleViewCustomers = () => {
        setViewMenus(false);
        setViewOrders(false);
        setViewUsers(false);
        setViewPersonals(false);
        setViewIngredients(false);
        setViewCustomers(!viewCustomers);
    };

    const handleViewMenus = () => {
        setViewCustomers(false);
        setViewOrders(false);
        setViewUsers(false);
        setViewPersonals(false);
        setViewIngredients(false);
        setViewMenus(!viewMenus);
    };

    const handleViewOrders = () => {
        setViewCustomers(false);
        setViewMenus(false);
        setViewUsers(false);
        setViewPersonals(false);
        setViewIngredients(false);
        setViewOrders(!viewOrders);
    };

    const handleViewUsers = () => {
        setViewCustomers(false);
        setViewMenus(false);
        setViewOrders(false);
        setViewPersonals(false);
        setViewIngredients(false);
        setViewUsers(!viewUsers);
    };

    const handleViewPersonals = () => {
        setViewCustomers(false);
        setViewMenus(false);
        setViewOrders(false);
        setViewUsers(false);
        setViewIngredients(false);
        setViewPersonals(!viewPersonals);
    };

    const handleViewIngredients = () => {
        setViewCustomers(false);
        setViewMenus(false);
        setViewOrders(false);
        setViewUsers(false);
        setViewPersonals(false);
        setViewIngredients(!viewIngredients);
    };

    return (
        <div className='button-wrapper'>
            {renderUsers && <button className='UsersButton' type='button' onClick={handleViewUsers}>Users</button>}
            {renderPersonals && <button className='PersonalsButton' type='button' onClick={handleViewPersonals}>Personals</button>}
            {renderCustomers && <button className='customersButton' type='button' onClick={handleViewCustomers}>Customers</button>}
            {renderMenus && <button className='MenusButton' type='button' onClick={handleViewMenus}>Menus</button>}
            {renderOrders && <button className='OrdersButton' type='button' onClick={handleViewOrders}>Orders</button>}
            {renderIngredients && <button className='IngredientsButton' type='button' onClick={handleViewIngredients}>Ingredients</button>}
                {viewUsers && <div>Users</div>}
                {viewPersonals && <div>Personals</div>}
                {viewCustomers && <Customers />}
                {viewMenus && <div>Menus</div>}
                {viewOrders && <div>Orders</div>}
                {viewIngredients && <div>Ingredients</div>}
        </div>
    );
}