import React, { Fragment, useState } from "react";
import { CustomerListRow } from "./customer-list-row";
import { EditableCustomerListRow } from "./editable-customer-list-row";
import "../../css/customer-list.css";

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
  handleCustomerUpdate: (customer: CustomerUI) => void;
}

export const CustomerList = (props: CustomerListUI) => {
  const [editCustomerId, setEditCustomerId] = useState(null);

  if (props.loading) {
    return <p>Customer List is loading...</p>;
  }

  const handleCustomerEditClick = (event: any, customer: any) => {
    event.preventDefault();
    setEditCustomerId(customer.id);
  };

  const handleSaveClick = (event: any, customer: any) => {
    event.preventDefault();
    props.handleCustomerUpdate(customer);
    setEditCustomerId(null);
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th className="table-head-item">Customer ID</th>

          <th className="table-head-item">Name</th>

          <th className="table-head-item">Age</th>

          <th className="table-head-item">Address</th>

          <th className="table-head-item">Phone</th>

          <th className="table-head-item">Date of subscription</th>

          <th className="table-head-item">Date of subscription end</th>

          <th className="table-head-item">Paid amount</th>

          <th className="table-head-item">Actions</th>

          <th className="table-head-item" />
        </tr>
      </thead>

      <tbody className="table-body">
        {props.customers.length > 0 ? (
          props.customers.map((customer: CustomerUI, index: number) => (
            <Fragment key={index}>
              {editCustomerId === customer.id ? (
                <EditableCustomerListRow
                  key={customer.id}
                  customer={customer}
                  position={customer.id}
                  handleCustomerRemove={props.handleCustomerRemove}
                  handleSaveClick={handleSaveClick}
                />
              ) : (
                <CustomerListRow
                  key={customer.id}
                  customer={customer}
                  position={customer.id}
                  handleCustomerRemove={props.handleCustomerRemove}
                  handleCustomerEditClick={handleCustomerEditClick}
                />
              )}
            </Fragment>
          ))
        ) : (
          <tr className="table-row">
            <td
              className="table-item"
              style={{ textAlign: "center" }}
              colSpan={6}
            >
              No customers found
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};
