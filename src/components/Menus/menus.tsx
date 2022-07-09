import React, { useEffect, useState } from "react";
import axios from "axios";

import { MenusList } from "./menus-list";
import { Button, Flex, FormControl, Input, FormLabel } from "@chakra-ui/react";

export const Menus = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [calories, setCalories] = useState("");
  const [menus, setMenus] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMenus();
  }, []);

  const fetchMenus = async () => {
    axios
      .get("http://localhost:4001/api/menus/all")
      .then((response) => {
        setMenus(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Es ist ein Fehler aufgetreten: ", error);
      });
  };

  const handleInputsReset = () => {
    setName("");
    setPrice("");
    setCalories("");
  };

  const handleMenuSubmit = () => {
    if (name.length > 0 && price.length > 0 && calories.length > 0) {
      handleMenuCreate();
      console.info(`Menu ${name} created`);
      handleInputsReset();
    }
  };

  const handleMenuCreate = () => {
    axios
      .post("http://localhost:4001/api/menus/create", {
        name: name,
        price: price,
        calories: calories,
      })
      .then(() => {
        fetchMenus();
        handleInputsReset();
      })
      .catch((error) => {
        console.log("Es ist ein Fehler aufgetreten: ", error);
      });
  };

  const handleMenuRemove = (id: number) => {
    axios
      .put(`http://localhost:4001/api/menus/delete`, { id: id })
      .then(() => {
        fetchMenus();
      })
      .catch((error) => {
        console.log("Es ist ein Fehler aufgetreten: ", error);
      });
  };

  const handleMenuUpdate = (menu: any) => {
    axios
      .put(`http://localhost:4001/api/menus/update`, menu)
      .then(() => {
        fetchMenus();
        alert(`Menü ${menu.name} wurde erfolgreich aktualisiert`);
      })
      .catch((error) => {
        console.log("Es ist ein Fehler aufgetreten: ", error);
      });
  };

  return (
    <div className="menus-list-wrapper">
      <div className="menus-list-form">
        <div className="form-wrapper" onSubmit={handleMenuSubmit}>
          <div className="form-row">
            <Flex
              float="left"
              align="left"
              direction={"column"}
              width="90%"
              paddingBottom={"5"}
            >
              <FormControl isRequired>
                <FormLabel htmlFor="name">Name</FormLabel>
                <Input
                  className="form-input"
                  type="text"
                  id="name"
                  placeholder="Name..."
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel htmlFor="price">Preis</FormLabel>
                <Input
                  className="form-input"
                  type="text"
                  id="price"
                  placeholder="Preis..."
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel htmlFor="calories">Kalorien</FormLabel>
                <Input
                  className="form-input"
                  type="text"
                  id="calories"
                  placeholder="Kalorien..."
                  value={calories}
                  onChange={(e) => setCalories(e.target.value)}
                />
              </FormControl>

              <Button
                className="btn btn-add"
                colorScheme={"green"}
                onClick={handleMenuSubmit}
                position={"relative"}
                top={"10px"}
                maxWidth={"200px"}
              >
                Menü hinzufügen
              </Button>
            </Flex>
          </div>
        </div>
      </div>
      <MenusList
        menus={menus}
        loading={loading}
        handleMenuRemove={handleMenuRemove}
        handleMenuUpdate={handleMenuUpdate}
      />
    </div>
  );
};
