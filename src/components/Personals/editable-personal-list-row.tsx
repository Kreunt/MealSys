import React, { useState } from "react";

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
        phone: props.personal.phone
    });

    return (
        <tr className='table-row'>
            <td className='table-item'>
                {props.position}
            </td>
            {
                Object.keys(props.personal)
                    .slice(1)
                    .map((key: string, index: number) => {
                        return (
                            <td key={index} className='table-item' >
                                <input 
                                type='text'
                                required={true}
                                placeholder={`Enter the ${key}...`}
                                name={`${key}`}
                                value={changeForm[key as keyof typeof changeForm]}
                                onChange={(e) => {
                                    setChangeForm({
                                        ...changeForm,
                                        [key]: e.target.value
                                    })
                                }} />
                            </td>
                        );
                    })
            }
            <td className='table-item'>
                <button
                    className='btn btn-remove'
                    onClick={() => {props.handlePersonalRemove(props.personal.id, props.personal.name)}} >
                    Remove Personal
                </button>
                <button
                    className='btn btn-save'
                    onClick={(event) => {props.handleSaveClick(event, changeForm)}} >
                    Save Changes
                </button>
            </td>
        </tr>
    );
}