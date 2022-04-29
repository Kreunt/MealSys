import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../../css/Login.css';
import axios from 'axios';


export default function LoginPage({ setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    
    const fetchToken = async () => {
        axios
            .post('http://localhost:4001/returnToken', {
                username: username,
                password: password
            })
            .then(res => {
                console.log(res.data.id)
                setToken(res.data.id)
            })
            .catch(err => console.log(err))
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const token = await fetchToken({ 
            username, 
            password 
        });
        console.log('the token is', token)
        setToken(token);
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