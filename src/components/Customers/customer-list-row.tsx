import React from 'react';

interface CustomerListRowUI {
    position: number;
    customer: {
        id: number;
        name: string;
        age: number;
        address: string;
        phone: string;
        dateOfSubscription: string;
        dateOfSubscriptionEnd: string;
        paidAmount: number;
    };
    handleCustomerRemove: (id: number, name:string) => void;
}

export const CustomerListRow = (props: CustomerListRowUI) => (
    <tr className='table-row'>
        <td className='table-item'>
            {props.position}
        </td>

        <td className='table-item'>
            {props.customer.name}
        </td>

        <td className='table-item'>
            {props.customer.age}
        </td>

        <td className='table-item'>
            {props.customer.address}
        </td>

        <td className='table-item'>
            {props.customer.phone}
        </td>

        <td className='table-item'>
            {props.customer.dateOfSubscription}
        </td>

        <td className='table-item'>
            {props.customer.dateOfSubscriptionEnd}
        </td>

        <td className='table-item'>
            {props.customer.paidAmount}
        </td>

        <td className='table-item'>
            <button
                className='btn btn-remove'
                onClick={() => props.handleCustomerRemove(props.customer.id, props.customer.name)}>
                Remove Customer
                </button>
        </td>  
    </tr>
)