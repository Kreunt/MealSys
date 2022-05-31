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
        {Object.keys(props.customer)
            .slice(1)
            .map((key: string, index: number) => {
                return (
                    <td key={index} className='table-item'>
                        {props.customer[key as keyof typeof props.customer]}
                    </td>
                );
            })
        }
        <td className='table-item'>
            <button
                className='btn btn-remove'
                onClick={() => props.handleCustomerRemove(props.customer.id, props.customer.name)}>
                Remove Customer
                </button>
        </td>  
    </tr>
)