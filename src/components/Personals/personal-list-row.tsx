import React from "react";
import { Button, Flex, Tr, Td } from "@chakra-ui/react";

interface PersonalListRowUI {
  position: number;
  personal: {
    id: number;
    name: string;
    age: number;
    workingHours: number;
    freeDays: string;
    area: string;
    phone: string;
  };
  handlePersonalRemove: (id: number, name: string) => void;
  handlePersonalEditClick: (event: any, personal: any) => void;
}

export const PersonalListRow = (props: PersonalListRowUI) => {
  return (
    <Tr className="table-row">
      <Td className="table-item">{props.position}</Td>
      {Object.keys(props.personal)
        .slice(1)
        .map((key: string, index: number) => {
          return (
            <td key={index} className="table-item">
              {props.personal[key as keyof typeof props.personal]}
            </td>
          );
        })}
      <Td className="table-item">
        <Flex direction={"row"} gap="5">
          <Button
            className="btn btn-edit"
            colorScheme={"blue"}
            onClick={(event) =>
              props.handlePersonalEditClick(event, props.personal)
            }
          >
            Edit Personal
          </Button>
          <Button
            className="btn btn-remove"
            colorScheme={"red"}
            onClick={() =>
              props.handlePersonalRemove(props.personal.id, props.personal.name)
            }
          >
            Remove Personal
          </Button>
        </Flex>
      </Td>
    </Tr>
  );
};
