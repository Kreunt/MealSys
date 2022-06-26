import React, { useState } from "react";
import "../css/Login.css";
import axios from "axios";
import { Button, FormLabel, Heading, Input } from "@chakra-ui/react";

export default function LoginPage({ setLoggedIn, setRole }) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const fetchToken = async (credentials) => {
    axios
      .post("http://localhost:4001/api/login/returnToken", credentials)
      .then((res) => {
        if (res.data.id !== undefined) {
          setLoggedIn(true);
          handleRedirect(credentials);
        } else {
          alert("Falsche Zugangsdaten");
        }
      })
      .catch((err) => console.log(err));
  };

  const handleRedirect = (credentials) => {
    axios
      .post("http://localhost:4001/api/login/returnArea", credentials)
      .then((res) => {
        setRole(res.data.area);
      })
      .catch((err) => console.log(err));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await fetchToken({
      username,
      password,
    });
  };

  return (
    <div className="login-wrapper">
      <Heading fontSize={"m"}>Bitte Einloggen</Heading>
      <form onSubmit={handleSubmit}>
        <FormLabel>
          <p>Username</p>
          <Input type="text" onChange={(e) => setUsername(e.target.value)} />
        </FormLabel>
        <FormLabel>
          <p>Passwort</p>
          <Input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormLabel>
        <div>
          <Button className="login-button" type="submit" colorScheme={"green"}>
            Einloggen
          </Button>
        </div>
      </form>
    </div>
  );
}
