import { Button, Flex, Input, Td, Tr } from "@chakra-ui/react";
import React, { useState } from "react";
import { DropdownMenu } from "../DropdownMenu";

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
  handleSaveClick: (event: any, personal: any) => void;
}

export const EditablePersonalListRow = (props: PersonalListRowUI) => {
  const [changeForm, setChangeForm] = useState({
    id: props.personal.id,
    name: props.personal.name,
    age: props.personal.age,
    workingHours: props.personal.workingHours,
    freeDays: props.personal.freeDays,
    area: props.personal.area,
    phone: props.personal.phone,
  });

  const setArea = (value: string) => {
    setChangeForm({
      ...changeForm,
      area: value,
    });
  };

  return (
    <Tr className="table-row">
      <Td className="table-item">{props.position}</Td>
      {Object.keys(props.personal)
        .slice(1)
        .map((key: string, index: number) => {
          if (key === "area") {
            return (
              <Td key={index} className="table-item">
                <DropdownMenu
                  setValue={setArea}
                  currentVal={changeForm.area}
                  optionsToSelect={["Management", "MealPlanning", "Delivery"]}
                />
              </Td>
            );
          }
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
            onClick={(event) => {
              props.handleSaveClick(event, changeForm);
            }}
            colorScheme={"green"}
          >
            Speichern
          </Button>
          <Button
            className="btn btn-remove"
            onClick={() => {
              props.handlePersonalRemove(
                props.personal.id,
                props.personal.name
              );
            }}
            colorScheme={"red"}
          >
            Personal löschen
          </Button>
        </Flex>
      </Td>
    </Tr>
  );
};
