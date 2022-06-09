import React from "react";

interface UsersListRowUI {
    position: number;
    user: {
        id: number;
        username: string;
        password: string;
        area: string;
    };
    handleUserRemove: (id: number, username:string) => void;
    handleUserUpdate: (user: any) => void;
    handleUserEditClick: (event: any, user: any) => void;
}

export const UsersListRow = (props: UsersListRowUI) => {
    
        return (
            <tr className='table-row'>
                <td className='table-item'>
                    {props.position}
                </td>
                {Object.keys(props.user)
                    .slice(1)
                    .map((key: string, index: number) => {
                        return (
                            <td key={index} className='table-item' >
                                {props.user[key as keyof typeof props.user]}
                            </td>
                        );
                    })
                }
                <td className='table-item'>
                    <button
                        className='btn btn-edit'
                        onClick={(event) => props.handleUserEditClick(event, props.user)}>
                        Edit User
                    </button>
                </td>
                <td className='table-item'>
                    <button
                        className='btn btn-remove'
                        onClick={() => props.handleUserRemove(props.user.id, props.user.username)}>
                        Remove User
                    </button>
                </td>
            </tr>
        )
}