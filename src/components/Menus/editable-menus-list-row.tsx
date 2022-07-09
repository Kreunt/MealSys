import { Button, Flex, Input, Td, Tr } from "@chakra-ui/react";
import React, { useState } from "react";

interface MenusListRowUI {
  position: number;
  menu: {
    id: number;
    name: string;
    price: number;
    calories: number;
  };
  handleMenuRemove: (id: number) => void;
  handleSaveClick: (event: any, menu: any) => void;
}

export const EditableMenusListRow = (props: MenusListRowUI) => {
  const [changeForm, setChangeForm] = useState({
    id: props.menu.id,
    name: props.menu.name,
    price: props.menu.price,
    calories: props.menu.calories,
  });

  return (
    <Tr className="table-row">
      <Td className="table-item">{props.position}</Td>
      {Object.keys(props.menu)
        .slice(1)
        .map((key: string, index: number) => {
          return (
            <Td key={index} className="table-item">
              <Input
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
            </Td>
          );
        })}
      <Td className="table-item">
        <Flex direction={"row"} gap="5">
          <Button
            className="btn btn-save"
            onClick={(event) => props.handleSaveClick(event, changeForm)}
            colorScheme={"green"}
          >
            Speichern
          </Button>
          <Button
            className="btn btn-remove"
            colorScheme={"red"}
            onClick={() => {
              props.handleMenuRemove(props.menu.id);
            }}
          >
            Menü Löschen
          </Button>
        </Flex>
      </Td>
    </Tr>
  );
};
