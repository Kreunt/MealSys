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
    return <p>Personal List wird geladen...</p>;
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

          <Th className="table-head-item">Alter</Th>

          <Th className="table-head-item">Werkstunden</Th>

          <Th className="table-head-item">Feiertage</Th>

          <Th className="table-head-item">Bereich</Th>

          <Th className="table-head-item">Telefonnumer</Th>

          <Th className="table-head-item">Aktionen</Th>

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
              Kein Personal vorhanden
            </Td>
          </Tr>
        )}
      </Tbody>
    </Table>
  );
};
