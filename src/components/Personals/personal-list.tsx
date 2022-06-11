import React, { Fragment, useState } from "react";
import { PersonalListRow } from "./personal-list-row";
import { EditablePersonalListRow } from "./editable-personal-list-row";

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

    if (props.loading) {return <p>Personal List is loading...</p>}

    const handlePersonalEditClick = (event: any, personal: any) => {
        event.preventDefault();
        setEditPersonalId(personal.id);
    }

    const handleSaveClick = (event: any, personal: any) => {
        event.preventDefault();
        props.handlePersonalUpdate(personal);
        setEditPersonalId(null);
    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th className='table-head-item' />

                    <th className="table-head-item">Name</th>

                    <th className="table-head-item">Age</th>

                    <th className="table-head-item">Working hours</th>

                    <th className="table-head-item">Free days</th>

                    <th className="table-head-item">Area</th>

                    <th className="table-head-item">Phone</th>

                    <th className="table-head-item">Actions</th>

                    <th className='table-head-item' />
                </tr>
            </thead>


            <tbody className="table-body">
                {props.personals.length > 0 ? (
                    props.personals.map((personal: PersonalUI, index: number) => (
                        <Fragment key={index} >
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
                    <tr className="table-row">
                        <td colSpan={9} className="table-item" style={{ textAlign: 'center' }}>
                            No personals found
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}