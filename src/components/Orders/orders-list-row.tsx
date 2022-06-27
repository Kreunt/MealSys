import { Button, Flex, Tr, Td } from "@chakra-ui/react";
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
    <Tr className="table-row">
      <Td className="table-item">{props.position}</Td>
      {Object.keys(props.order)
        .slice(1)
        .map((key: string, index: number) => {
          return (
            <Td key={index} className="table-item">
              {props.order[key as keyof typeof props.order]}
            </Td>
          );
        })}
      <Td className="table-item">
        <Flex direction={"row"} gap="5">
          <Button
            className="btn btn-edit"
            colorScheme={"blue"}
            onClick={(event) => props.handleOrderEditClick(event, props.order)}
          >
            Bestellung bearbeiten
          </Button>
          <Button
            className="btn btn-remove"
            colorScheme={"red"}
            onClick={() => props.handleOrderRemove(props.order.id)}
          >
            Bestellung löschen
          </Button>
        </Flex>
      </Td>
    </Tr>
  );
};
