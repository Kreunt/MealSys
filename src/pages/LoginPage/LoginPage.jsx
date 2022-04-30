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
                } else {
                    alert('Invalid credentials');
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
        <h2>Please Log In</h2>
        <form onSubmit={handleSubmit} >
            <label>
                <p>Username</p>
                <input type="text" onChange={e => setUserName(e.target.value)} />
            </label>
            <label>
                <p>Password</p>
                <input type="password" onChange={e => setPassword(e.target.value)} />
            </label>
            <div>
                <button type="submit">Login</button>
            </div>
        </form>
    </div>
  );
}

LoginPage.propTypes = {
    setToken: PropTypes.func.isRequired,
};