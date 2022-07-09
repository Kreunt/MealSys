import { Button, Flex, Tr, Td } from "@chakra-ui/react";
import React from "react";

interface MenusListRowUI {
  position: number;
  menu: {
    id: number;
    name: string;
    price: number;
    calories: number;
  };
  handleMenuRemove: (id: number) => void;
  handleMenuEditClick: (event: any, menu: any) => void;
}

export const MenusListRow = (props: MenusListRowUI) => {
  return (
    <Tr className="table-row">
      <Td className="table-item">{props.position}</Td>
      {Object.keys(props.menu)
        .slice(1)
        .map((key: string, index: number) => {
          return (
            <Td key={index} className="table-item">
              {props.menu[key as keyof typeof props.menu]}
            </Td>
          );
        })}
      <Td className="table-item">
        <Flex direction={"row"} gap="5">
          <Button
            className="btn btn-edit"
            colorScheme={"blue"}
            onClick={(event) => props.handleMenuEditClick(event, props.menu)}
          >
            Menü bearbeiten
          </Button>
          <Button
            className="btn btn-remove"
            colorScheme={"red"}
            onClick={() => props.handleMenuRemove(props.menu.id)}
          >
            Menü löschen
          </Button>
        </Flex>
      </Td>
    </Tr>
  );
};
