import React, { Fragment, useState } from "react";
import { UsersListRow } from "./users-list-row";
import { EditableUsersListRow } from "./editable-users-list-row";
import { Table, Thead, Tbody, Tr, Th } from "@chakra-ui/react";

interface UserUI {
  id: number;
  username: string;
  password: string;
  area: string;
}

interface UsersListUI {
  users: UserUI[];
  loading: boolean;
  handleUserRemove: (id: number, username: string) => void;
  handleUserUpdate: (user: UserUI) => void;
}

export const UsersList = (props: UsersListUI) => {
  const [editUserId, setEditUserId] = useState(null);

  if (props.loading) {
    return <p>Users List is loading...</p>;
  }

  const handleUserEditClick = (event: any, user: any) => {
    event.preventDefault();
    setEditUserId(user.id);
  };

  const handleSaveClick = (event: any, user: any) => {
    event.preventDefault();
    props.handleUserUpdate(user);
    setEditUserId(null);
  };

  return (
    <Table className="table">
      <Thead>
        <Tr>
          <Th className="table-head-item" />

          <Th className="table-head-item">Username</Th>

          <Th className="table-head-item">Password</Th>

          <Th className="table-head-item">Area</Th>

          <Th className="table-head-item">Actions</Th>

          <Th className="table-head-item" />
        </Tr>
      </Thead>

      <Tbody className="table-body">
        {props.users.map((user: UserUI, index: number) => (
          <Fragment key={index}>
            {editUserId === user.id ? (
              <EditableUsersListRow
                key={user.id}
                user={user}
                position={index + 1}
                handleUserRemove={props.handleUserRemove}
                handleSaveClick={handleSaveClick}
              />
            ) : (
              <UsersListRow
                key={user.id}
                user={user}
                position={index + 1}
                handleUserEditClick={handleUserEditClick}
                handleUserRemove={props.handleUserRemove}
              />
            )}
          </Fragment>
        ))}
      </Tbody>
    </Table>
  );
};
