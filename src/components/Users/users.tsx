import React, { useEffect, useState } from "react";
import axios from "axios";

import { UsersList } from "./users-list";

export const Users = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [area, setArea] = useState("");
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchUsers();
    }, []);
    
    const fetchUsers = async () => {
        axios
            .get("http://localhost:4001/api/users/all")
            .then(response => {
                setUsers(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.log("Es ist ein Fehler aufgetreten: ", error);
            }
            );
    };

    const handleInputsReset = () => {
        setUsername("");
        setPassword("");
        setArea("");
    }

    const handleUserSubmit = () => {
        if(username.length > 0 && password.length > 0 && area.length > 0) {
            handleUserCreate();
            console.info(`User ${username} created`);
            handleInputsReset();
        }
    }

    const handleUserCreate = () => {
        axios
            .post("http://localhost:4001/api/users/create", {
                username: username,
                password: password,
                area: area
            })
            .then(() => {
                fetchUsers();
                handleInputsReset();
            })
            .catch(error => {
                console.log("Es ist ein Fehler aufgetreten: ", error);
            });
    }

    const handleUserRemove = (id: number, title: string) => {
        axios
            .put(`http://localhost:4001/api/users/delete`, { id: id })
            .then(() => {
                fetchUsers();
                alert(`${title} wurde gelöscht!`);
            })
            .catch(error => {
                console.log("Es ist ein Fehler aufgetreten: ", error);
            });
    }

    const handleUserUpdate = (user: any) => {
        axios
            .put(`http://localhost:4001/api/users/update`, user)
            .then(() => {
                fetchUsers();
                alert(`${user.username} wurde geändert!`);
            })
            .catch(error => {
                console.log("Es ist ein Fehler aufgetreten: ", error);
            });
    }

    return (
        <div className="user-list-wrapper">
            <div className="user-list-form">
                <div className="form-wrapper" onSubmit={handleUserSubmit}>
                    
                    <div className="form-row">
                        <fieldset>
                            <label className="form-label" htmlFor="username">Enter username:</label>
                            <input className="form-input" type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                        </fieldset>

                        <fieldset>
                            <label className="form-label" htmlFor="password">Enter password:</label>
                            <input className="form-input" type="text" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </fieldset>

                        <fieldset>
                            <label className="form-label" htmlFor="area">Enter area:</label>
                            <input className="form-input" type="text" id="area" value={area} onChange={(e) => setArea(e.target.value)} />
                        </fieldset>
                    </div>
                </div>
                
                <button className="btn btn-add" type="submit" onClick={handleUserSubmit}>Add User</button>
            </div>
            <UsersList users={users} loading={loading} handleUserRemove={handleUserRemove} handleUserUpdate={handleUserUpdate} />
        </div>
    );
}
