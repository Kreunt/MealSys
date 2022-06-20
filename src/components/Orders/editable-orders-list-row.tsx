import React, { useState } from "react";

interface OrdersListRowUI {
  position: number;
  order: {
    id: number;
    customerId: number;
    menuId: number;
    date: string;
    price: number;
  };
  handleOrderRemove: (id: number) => void;
  handleSaveClick: (event: any, order: any) => void;
}

export const EditableOrdersListRow = (props: OrdersListRowUI) => {
  const [changeForm, setChangeForm] = useState({
    id: props.order.id,
    customerId: props.order.customerId,
    menuId: props.order.menuId,
    date: props.order.date,
    price: props.order.price,
  });

  return (
    <tr className="table-row">
      <td className="table-item">{props.position}</td>
      {Object.keys(props.order)
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
          onClick={() => {
            props.handleOrderRemove(props.order.id);
          }}
        >
          Remove Order
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
