import React, { useEffect, useState } from "react";
import axios from "axios";

import { DropdownMenu } from "../DropdownMenu";
import { UsersList } from "./users-list";
import { Button, Flex, FormControl, Input, FormLabel } from "@chakra-ui/react";

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
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Es ist ein Fehler aufgetreten: ", error);
      });
  };

  const handleInputsReset = () => {
    setUsername("");
    setPassword("");
    setArea("");
  };

  const handleUserSubmit = () => {
    if (username.length > 0 && password.length > 0 && area.length > 0) {
      handleUserCreate();
      console.info(`User ${username} created`);
      handleInputsReset();
    }
  };

  const handleUserCreate = () => {
    axios
      .post("http://localhost:4001/api/users/create", {
        username: username,
        password: password,
        area: area,
      })
      .then(() => {
        fetchUsers();
        handleInputsReset();
      })
      .catch((error) => {
        console.log("Es ist ein Fehler aufgetreten: ", error);
      });
  };

  const handleUserRemove = (id: number, title: string) => {
    axios
      .put(`http://localhost:4001/api/users/delete`, { id: id })
      .then(() => {
        fetchUsers();
      })
      .catch((error) => {
        console.log("Es ist ein Fehler aufgetreten: ", error);
      });
  };

  const handleUserUpdate = (user: any) => {
    axios
      .put(`http://localhost:4001/api/users/update`, user)
      .then(() => {
        fetchUsers();
      })
      .catch((error) => {
        console.log("Es ist ein Fehler aufgetreten: ", error);
      });
  };

  return (
    <div className="user-list-wrapper">
      <div className="user-list-form">
        <div className="form-wrapper" onSubmit={handleUserSubmit}>
          <div className="form-row">
            <Flex
              float="left"
              align="left"
              direction={"column"}
              width="90%"
              paddingBottom={"5"}
            >
              <FormControl isRequired>
                <FormLabel className="form-FormLabel" htmlFor="username">
                  Username:
                </FormLabel>
                <Input
                  className="form-input"
                  type="text"
                  id="username"
                  placeholder="Username..."
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel className="form-FormLabel" htmlFor="password">
                  Passwort:
                </FormLabel>
                <Input
                  className="form-input"
                  type="text"
                  placeholder="Passwort..."
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel className="form-FormLabel" htmlFor="area">
                  Bereich:
                </FormLabel>
                <DropdownMenu
                  currentVal={area}
                  setValue={setArea}
                  optionsToSelect={["Management", "MealPlanning", "Delivery"]}
                />
              </FormControl>
              <Button
                className="btn btn-add"
                colorScheme={"green"}
                type="submit"
                onClick={handleUserSubmit}
                position={"relative"}
                top={"10px"}
                maxWidth={"200px"}
              >
                Nutzer hinzufügen
              </Button>
            </Flex>
          </div>
        </div>
      </div>
      <UsersList
        users={users}
        loading={loading}
        handleUserRemove={handleUserRemove}
        handleUserUpdate={handleUserUpdate}
      />
    </div>
  );
};
