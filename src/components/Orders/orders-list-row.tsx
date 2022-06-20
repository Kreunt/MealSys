import React from "react";

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
  handleOrderEditClick: (event: any, order: any) => void;
}

export const OrdersListRow = (props: OrdersListRowUI) => {
  return (
    <tr className="table-row">
      <td className="table-item">{props.position}</td>
      {Object.keys(props.order)
        .slice(1)
        .map((key: string, index: number) => {
          return (
            <td key={index} className="table-item">
              {props.order[key as keyof typeof props.order]}
            </td>
          );
        })}
      <td className="table-item">
        <button
          className="btn btn-edit"
          onClick={(event) => props.handleOrderEditClick(event, props.order)}
        >
          Edit Order
        </button>
      </td>
      <td className="table-item">
        <button
          className="btn btn-remove"
          onClick={() => props.handleOrderRemove(props.order.id)}
        >
          Remove Order
        </button>
      </td>
    </tr>
  );
};
