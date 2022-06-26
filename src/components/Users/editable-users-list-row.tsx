import { Button, Flex, Input, Td, Tr } from "@chakra-ui/react";
import React, { useState } from "react";

interface UsersListRowUI {
  position: number;
  user: {
    id: number;
    username: string;
    password: string;
    area: string;
  };
  handleUserRemove: (id: number, username: string) => void;
  handleSaveClick: (event: any, user: any) => void;
}

export const EditableUsersListRow = (props: UsersListRowUI) => {
  const [changeForm, setChangeForm] = useState({
    id: props.user.id,
    username: props.user.username,
    password: props.user.password,
    area: props.user.area,
  });

  return (
    <Tr className="table-row">
      <Td className="table-item">{props.position}</Td>
      {Object.keys(props.user)
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
            colorScheme={"green"}
            onClick={(event) => {
              props.handleSaveClick(event, changeForm);
            }}
          >
            Save Changes
          </Button>
          <Button
            className="btn btn-remove"
            onClick={() => {
              props.handleUserRemove(props.user.id, props.user.username);
            }}
            colorScheme={"red"}
          >
            Remove User
          </Button>
        </Flex>
      </Td>
    </Tr>
  );
};
