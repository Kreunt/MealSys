import React, { useState } from 'react';
import '../css/Login.css';
import axios from 'axios';


export default function LoginPage({ setLoggedIn, setRole }) {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const fetchToken = async (credentials) => {
        axios
            .post('http://localhost:4001/api/login/returnToken', credentials)
            .then(res => {
                if(res.data.id !== undefined) {
                    setLoggedIn(true);
                    handleRedirect(credentials);
                } else {
                    alert('Falsche Zugangsdaten');
                }
            })
            .catch(err => console.log(err))
    }


    const handleRedirect = (credentials) => {
        axios
            .post('http://localhost:4001/api/login/returnArea', credentials)
            .then(res => {
                setRole(res.data.area);
            })
            .catch(err => console.log(err))
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        await fetchToken({ 
            username, 
            password 
        });
    };

  return(
    <div className='login-wrapper'>
        <h2>Bitte Einloggen</h2>
        <form onSubmit={handleSubmit} >
            <label>
                <p>Username</p>
                <input type="text" onChange={e => setUsername(e.target.value)} />
            </label>
            <label>
                <p>Passwort</p>
                <input type="password" onChange={e => setPassword(e.target.value)} />
            </label>
            <div>
                <button className="login-button" type="submit">Einloggen</button>
            </div>
        </form>
    </div>
  );
}