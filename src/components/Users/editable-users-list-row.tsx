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
    <tr className="table-row">
      <td className="table-item">{props.position}</td>
      {Object.keys(props.user)
        .slice(1)
        .map((key: string, index: number) => {
          return (
            <td key={index} className="table-item">
              <input
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
            </td>
          );
        })}
      <td className="table-item">
        <button
          className="btn btn-remove"
          onClick={() => {
            props.handleUserRemove(props.user.id, props.user.username);
          }}
        >
          Remove User
        </button>
        <button
          className="btn btn-save"
          onClick={(event) => {
            props.handleSaveClick(event, changeForm);
          }}
        >
          Save Changes
        </button>
      </td>
    </tr>
  );
};
