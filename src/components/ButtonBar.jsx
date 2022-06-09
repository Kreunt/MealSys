import React, { useState } from "react";
import { Customers } from './Customers/customers';
import { Users } from './Users/users';

export function ButtonBar({ renderCustomers, renderMenus, renderOrders, renderUsers, renderPersonals, renderIngredients, renderIncomeExpenses }) {
    const [viewCustomers, setViewCustomers] = useState(false);
    const [viewMenus, setViewMenus] = useState(false);
    const [viewOrders, setViewOrders] = useState(false);
    const [viewUsers, setViewUsers] = useState(false);
    const [viewPersonals, setViewPersonals] = useState(false);
    const [viewIngredients, setViewIngredients] = useState(false);
    const [viewIncomeExpenses, setViewIncomeExpenses] = useState(false);


    const handleViewCustomers = () => {
        setViewMenus(false);
        setViewOrders(false);
        setViewUsers(false);
        setViewPersonals(false);
        setViewIngredients(false);
        setViewIncomeExpenses(false);
        setViewCustomers(!viewCustomers);
    };

    const handleViewMenus = () => {
        setViewCustomers(false);
        setViewOrders(false);
        setViewUsers(false);
        setViewPersonals(false);
        setViewIngredients(false);
        setViewIncomeExpenses(false);
        setViewMenus(!viewMenus);
    };

    const handleViewOrders = () => {
        setViewCustomers(false);
        setViewMenus(false);
        setViewUsers(false);
        setViewPersonals(false);
        setViewIngredients(false);
        setViewIncomeExpenses(false);
        setViewOrders(!viewOrders);
    };

    const handleViewUsers = () => {
        setViewCustomers(false);
        setViewMenus(false);
        setViewOrders(false);
        setViewPersonals(false);
        setViewIngredients(false);
        setViewIncomeExpenses(false);
        setViewUsers(!viewUsers);
    };

    const handleViewPersonals = () => {
        setViewCustomers(false);
        setViewMenus(false);
        setViewOrders(false);
        setViewUsers(false);
        setViewIngredients(false);
        setViewIncomeExpenses(false);
        setViewPersonals(!viewPersonals);
    };

    const handleViewIngredients = () => {
        setViewCustomers(false);
        setViewMenus(false);
        setViewOrders(false);
        setViewUsers(false);
        setViewPersonals(false);
        setViewIncomeExpenses(false);
        setViewIngredients(!viewIngredients);
    };

    const handleViewIncomeExpenses = () => {
        setViewCustomers(false);
        setViewMenus(false);
        setViewOrders(false);
        setViewUsers(false);
        setViewPersonals(false);
        setViewIngredients(false);
        setViewIncomeExpenses(!viewIncomeExpenses);
    };

    return (
        <div className='button-wrapper'>
            {renderUsers && <button className='UsersButton' type='button' onClick={handleViewUsers}>Users</button>}
            {renderPersonals && <button className='PersonalsButton' type='button' onClick={handleViewPersonals}>Personals</button>}
            {renderCustomers && <button className='CustomersButton' type='button' onClick={handleViewCustomers}>Customers</button>}
            {renderMenus && <button className='MenusButton' type='button' onClick={handleViewMenus}>Menus</button>}
            {renderOrders && <button className='OrdersButton' type='button' onClick={handleViewOrders}>Orders</button>}
            {renderIngredients && <button className='IngredientsButton' type='button' onClick={handleViewIngredients}>Ingredients</button>}
            {renderIncomeExpenses && <button className='IncomeExpensesButton' type='button' onClick={handleViewIncomeExpenses}>Income/Expenses</button>}
                {viewUsers && <Users />}
                {viewPersonals && <div>Personals</div>}
                {viewCustomers && <Customers />}
                {viewMenus && <div>Menus</div>}
                {viewOrders && <div>Orders</div>}
                {viewIngredients && <div>Ingredients</div>}
                {viewIncomeExpenses && <div>Income/Expenses</div>}
        </div>
    );
}