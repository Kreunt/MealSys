import React, { Fragment, useState } from "react";
import { PersonalListRow } from "./personal-list-row";
import { EditablePersonalListRow } from "./editable-personal-list-row";
import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";

interface PersonalUI {
  id: number;
  name: string;
  age: number;
  workingHours: number;
  freeDays: string;
  area: string;
  phone: string;
}

interface PersonalListUI {
  personals: PersonalUI[];
  loading: boolean;
  handlePersonalRemove: (id: number, name: string) => void;
  handlePersonalUpdate: (personal: PersonalUI) => void;
}

export const PersonalList = (props: PersonalListUI) => {
  const [editPersonalId, setEditPersonalId] = useState(null);

  if (props.loading) {
    return <p>Personal List is loading...</p>;
  }

  const handlePersonalEditClick = (event: any, personal: any) => {
    event.preventDefault();
    setEditPersonalId(personal.id);
  };

  const handleSaveClick = (event: any, personal: any) => {
    event.preventDefault();
    props.handlePersonalUpdate(personal);
    setEditPersonalId(null);
  };

  return (
    <Table className="table">
      <Thead>
        <Tr>
          <Th className="table-head-item" />

          <Th className="table-head-item">Name</Th>

          <Th className="table-head-item">Age</Th>

          <Th className="table-head-item">Working hours</Th>

          <Th className="table-head-item">Free days</Th>

          <Th className="table-head-item">Area</Th>

          <Th className="table-head-item">Phone</Th>

          <Th className="table-head-item">Actions</Th>

          <Th className="table-head-item" />
        </Tr>
      </Thead>

      <Tbody className="table-body">
        {props.personals.length > 0 ? (
          props.personals.map((personal: PersonalUI, index: number) => (
            <Fragment key={index}>
              {editPersonalId === personal.id ? (
                <EditablePersonalListRow
                  key={index}
                  personal={personal}
                  position={index + 1}
                  handleSaveClick={handleSaveClick}
                  handlePersonalRemove={props.handlePersonalRemove}
                />
              ) : (
                <PersonalListRow
                  key={index}
                  personal={personal}
                  position={index + 1}
                  handlePersonalEditClick={handlePersonalEditClick}
                  handlePersonalRemove={props.handlePersonalRemove}
                />
              )}
            </Fragment>
          ))
        ) : (
          <Tr className="table-row">
            <Td
              colSpan={9}
              className="table-item"
              style={{ textAlign: "center" }}
            >
              No personals found
            </Td>
          </Tr>
        )}
      </Tbody>
    </Table>
  );
};
