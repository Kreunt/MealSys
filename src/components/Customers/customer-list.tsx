import React from "react";
import { CustomerListRow } from "./customer-list-row";
import '../../css/customer-list.css';

interface CustomerUI {
    id: number;
    name: string;
    age: number;
    address: string;
    phone: string;
    dateOfSubscription: string;
    dateOfSubscriptionEnd: string;
    paidAmount: number;
}

interface CustomerListUI {
    customers: CustomerUI[];
    loading: boolean;
    handleCustomerRemove: (id: number, name: string) => void;
    handleCustomerUpdate: (rowToChange: any, value: any) => void;
}

export const CustomerList = (props: CustomerListUI) => {
    if(props.loading) {return <p>Customer List is loading...</p>}

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th className='table-head-item' />

                    <th className="table-head-item">Name</th>

                    <th className="table-head-item">Age</th>

                    <th className="table-head-item">Address</th>

                    <th className="table-head-item">Phone</th>

                    <th className="table-head-item">Date of subscription</th>

                    <th className="table-head-item">Date of subscription end</th>

                    <th className="table-head-item">Paid amount</th>

                    <th className="table-head-item" />
                </tr>
            </thead>


            <tbody className="table-body">
                {props.customers.length > 0 ? (
                    props.customers.map((customer: CustomerUI, index) => (
                        <CustomerListRow
                            key={customer.id}
                            customer={customer}
                            position={index + 1}
                            handleCustomerRemove={props.handleCustomerRemove}
                            handleCustomerUpdate={props.handleCustomerUpdate}
                        />
                        )
                    )
                ) : (
                    <tr className="table-row">
                        <td className="table-item"  style={{ textAlign: 'center' }} colSpan={6}>
                            No customers found
                        </td>
                    </tr>
                    
                )}
            </tbody>
        </table>
    )
}