import React, { useState } from "react";

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
  handleCustomerRemove: (id: number, name: string) => void;
  handleSaveClick: (event: any, customer: any) => void;
}

export const EditableCustomerListRow = (props: CustomerListRowUI) => {
  const [changeForm, setChangeForm] = useState({
    id: props.customer.id,
    name: props.customer.name,
    age: props.customer.age,
    address: props.customer.address,
    phone: props.customer.phone,
    dateOfSubscription: props.customer.dateOfSubscription,
    dateOfSubscriptionEnd: props.customer.dateOfSubscriptionEnd,
    paidAmount: props.customer.paidAmount,
  });

  return (
    <tr className="table-row">
      <td className="table-item">{props.position}</td>
      {Object.keys(props.customer)
        .slice(1)
        .map((key: string, index: number) => {
          return (
            <td key={index} className="table-item">
              <input
                type="text"
                required={true}
                placeholder={`Enter the ${key}...`}
                name={`${key}`}
                value={changeForm[key as keyof typeof changeForm]}
                onChange={(e) => {
                  setChangeForm({
                    ...changeForm,
                    [key]: e.target.value,
                  });
                }}
              />
            </td>
          );
        })}
      <td className="table-item">
        <button
          className="btn btn-remove"
          onClick={() =>
            props.handleCustomerRemove(props.customer.id, props.customer.name)
          }
        >
          Remove Customer
        </button>
        <button
          className="btn btn-save"
          onClick={(event) => props.handleSaveClick(event, changeForm)}
        >
          Save Changes
        </button>
      </td>
    </tr>
  );
};
