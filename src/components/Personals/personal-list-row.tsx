import React from "react";

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
        <tr className='table-row'>
            <td className='table-item'>
                {props.position}
            </td>
            {Object.keys(props.personal)
                .slice(1)
                .map((key: string, index: number) => {
                    return (
                        <td key={index} className='table-item' >
                            {props.personal[key as keyof typeof props.personal]}
                        </td>
                    );
                })
            }
            <td className='table-item'>
                <button
                    className='btn btn-edit'
                    onClick={(event) => props.handlePersonalEditClick(event, props.personal)}>
                    Edit Personal
                </button>
            </td>
            <td className='table-item'>
                <button
                    className='btn btn-remove'
                    onClick={() => props.handlePersonalRemove(props.personal.id, props.personal.name)}>
                    Remove Personal
                </button>
            </td>
        </tr>
    )
}