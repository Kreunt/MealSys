import React, { Fragment, useState } from "react";
import { OrdersListRow } from "./orders-list-row";
import { EditableOrdersListRow } from "./editable-orders-list-row";
import { Table, Thead, Tbody, Tr, Th } from "@chakra-ui/react";

interface OrderUI {
  id: number;
  customerId: number;
  menuId: number;
  date: string;
  price: number;
}

interface OrdersListUI {
  orders: OrderUI[];
  loading: boolean;
  handleOrderRemove: (id: number) => void;
  handleOrderUpdate: (order: OrderUI) => void;
}

export const OrdersList = (props: OrdersListUI) => {
  const [editOrderId, setEditOrderId] = useState(null);

  if (props.loading) {
    return <p>Orders List is loading...</p>;
  }

  const handleOrderEditClick = (event: any, order: any) => {
    event.preventDefault();
    setEditOrderId(order.id);
  };

  const handleSaveClick = (event: any, order: any) => {
    event.preventDefault();
    props.handleOrderUpdate(order);
    setEditOrderId(null);
  };

  return (
    <Table className="table">
      <Thead>
        <Tr>
          <Th className="table-head-item" />

          <Th className="table-head-item">Customer ID</Th>

          <Th className="table-head-item">Menu ID</Th>

          <Th className="table-head-item">Date</Th>

          <Th className="table-head-item">Price</Th>

          <Th className="table-head-item">Actions</Th>

          <Th className="table-head-item" />
        </Tr>
      </Thead>

      <Tbody className="table-body">
        {props.orders.map((order: OrderUI, index: number) => (
          <Fragment key={index}>
            {editOrderId === order.id ? (
              <EditableOrdersListRow
                key={order.id}
                order={order}
                position={index + 1}
                handleOrderRemove={props.handleOrderRemove}
                handleSaveClick={handleSaveClick}
              />
            ) : (
              <OrdersListRow
                key={order.id}
                order={order}
                position={index + 1}
                handleOrderEditClick={handleOrderEditClick}
                handleOrderRemove={props.handleOrderRemove}
              />
            )}
          </Fragment>
        ))}
      </Tbody>
    </Table>
  );
};
