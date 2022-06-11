import React, { Fragment, useState } from "react";
import { UsersListRow } from "./users-list-row";
import { EditableUsersListRow } from "./editable-users-list-row";

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

    if (props.loading) {return <p>Users List is loading...</p>}

    const handleUserEditClick = (event: any, user: any) => {
        event.preventDefault();
        setEditUserId(user.id);
    }

    const handleSaveClick = (event: any, user: any) => {
        event.preventDefault();
        props.handleUserUpdate(user);
        setEditUserId(null);
    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th className='table-head-item' />

                    <th className="table-head-item">Username</th>

                    <th className="table-head-item">Password</th>

                    <th className="table-head-item">Area</th>

                    <th className="table-head-item">Actions</th>

                    <th className="table-head-item" />
                </tr>
            </thead>

            <tbody className='table-body'>
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
                        )
                    )
                }
            </tbody>
        </table>
    );
}

