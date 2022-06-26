import { Button, Flex, Tr, Td } from "@chakra-ui/react";
import React from "react";

interface UsersListRowUI {
  position: number;
  user: {
    id: number;
    username: string;
    password: string;
    area: string;
  };
  handleUserRemove: (id: number, username: string) => void;
  handleUserEditClick: (event: any, user: any) => void;
}

export const UsersListRow = (props: UsersListRowUI) => {
  return (
    <Tr className="table-row">
      <Td className="table-item">{props.position}</Td>
      {Object.keys(props.user)
        .slice(1)
        .map((key: string, index: number) => {
          return (
            <Td key={index} className="table-item">
              {props.user[key as keyof typeof props.user]}
            </Td>
          );
        })}
      <Td className="table-item">
        <Flex direction={"row"} gap="5">
          <Button
            className="btn btn-edit"
            colorScheme={"blue"}
            onClick={(event) => props.handleUserEditClick(event, props.user)}
          >
            Edit User
          </Button>
          <Button
            className="btn btn-remove"
            colorScheme={"red"}
            onClick={() =>
              props.handleUserRemove(props.user.id, props.user.username)
            }
          >
            Remove User
          </Button>
        </Flex>
      </Td>
    </Tr>
  );
};
