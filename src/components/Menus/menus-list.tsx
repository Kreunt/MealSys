import React, { Fragment, useState } from "react";
import { MenusListRow } from "./menus-list-row";
import { EditableMenusListRow } from "./editable-menus-list-row";
import { Table, Thead, Tbody, Tr, Th } from "@chakra-ui/react";

interface MenuUI {
  id: number;
  name: string;
  price: number;
  calories: number;
}

interface MenusListUI {
  menus: MenuUI[];
  loading: boolean;
  handleMenuRemove: (id: number) => void;
  handleMenuUpdate: (menu: MenuUI) => void;
}

export const MenusList = (props: MenusListUI) => {
  const [editMenuId, setEditMenuId] = useState(null);

  if (props.loading) {
    return <p>Menü Liste wird geladen...</p>;
  }

  const handleMenuEditClick = (event: any, menu: any) => {
    event.preventDefault();
    setEditMenuId(menu.id);
  };

  const handleSaveClick = (event: any, menu: any) => {
    event.preventDefault();
    props.handleMenuUpdate(menu);
    setEditMenuId(null);
  };

  return (
    <Table className="table">
      <Thead>
        <Tr>
          <Th className="table-head-item" />

          <Th className="table-head-item">Name</Th>

          <Th className="table-head-item">Preis</Th>

          <Th className="table-head-item">Kalorien</Th>

          <Th className="table-head-item">Aktionen</Th>

          <Th className="table-head-item" />
        </Tr>
      </Thead>

      <Tbody className="table-body">
        {props.menus.map((menu: MenuUI, index: number) => (
          <Fragment key={menu.id}>
            {editMenuId === menu.id ? (
              <EditableMenusListRow
                key={menu.id}
                menu={menu}
                position={index + 1}
                handleMenuRemove={props.handleMenuRemove}
                handleSaveClick={handleSaveClick}
              />
            ) : (
              <MenusListRow
                key={menu.id}
                menu={menu}
                position={index + 1}
                handleMenuEditClick={handleMenuEditClick}
                handleMenuRemove={props.handleMenuRemove}
              />
            )}
          </Fragment>
        ))}
      </Tbody>
    </Table>
  );
};
