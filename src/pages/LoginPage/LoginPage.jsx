import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../../css/Login.css';
import axios from 'axios';




export default function LoginPage({ setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    
    const fetchToken = async (credentials) => {
        axios
            .post('http://localhost:4001/returnToken', credentials)
            .then(res => {
                if(res.data.id !== undefined) {
                    setToken(res.data.id);
                    handleRedirect(credentials);
                } else {
                    alert('Falsche Zugangsdaten');
                }
            })
            .catch(err => console.log(err))
    }


    const handleRedirect = (credentials) => {
        axios
            .post('http://localhost:4001/returnArea', credentials)
            .then(res => {
                if(res.data.area === 'Management') {
                    alert('Als ' + username + ' in die Management Dashboard ingelogd');
                    if(window.location.href !== 'http://localhost:3000/management') {
                        window.location = '/management';
                    }
                } else if(res.data.area === 'Delivery') {
                    alert('Als ' + username + ' in die Delivery Dashboard ingelogd');
                    if(window.location.href !== 'http://localhost:3000/delivery') {
                        window.location = '/delivery';
                    }
                }
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
                <input type="text" onChange={e => setUserName(e.target.value)} />
            </label>
            <label>
                <p>Passwort</p>
                <input type="password" onChange={e => setPassword(e.target.value)} />
            </label>
            <div>
                <button type="submit">Einloggen</button>
            </div>
        </form>
    </div>
  );
}

LoginPage.propTypes = {
    setToken: PropTypes.func.isRequired,
};