import React, { useState } from "react";
import { Customers } from './Customers/customers';

export function ButtonBar({ renderCustomers, renderProducts, renderOrders, renderUsers }) {
    const [viewCustomers, setViewCustomers] = useState(false);
    const [viewProducts, setViewProducts] = useState(false);

    const handleViewCustomers = () => {
        setViewCustomers(!viewCustomers);
    };

    const handleViewProducts = () => {
        setViewProducts(!viewProducts);
    };


    return (
        <div className='button-wrapper'>
            {renderCustomers && <button className='customersButton' type='button' onClick={handleViewCustomers}>Customers</button>}
            {renderProducts && <button className='productsButton' type='button' onClick={handleViewProducts}>Products</button>}
                {viewCustomers && <Customers />}
                {viewProducts && <div>Products</div>}
        </div>
    );
}