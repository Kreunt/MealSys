import React, { useEffect, useState } from "react";
import axios from "axios";

import { PersonalList } from "./personal-list";
import { Button, Flex, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { DropdownMenu } from "../DropdownMenu";

export const Personals = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [workingHours, setWorkingHours] = useState("");
  const [freeDays, setFreeDays] = useState("");
  const [area, setArea] = useState("");
  const [phone, setPhone] = useState("");
  const [personals, setPersonals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPersonals();
  }, []);

  const fetchPersonals = async () => {
    axios
      .get("http://localhost:4001/api/personal/all")
      .then((response) => {
        setPersonals(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Es ist ein Fehler aufgetreten: ", error);
      });
  };

  const handleInputsReset = () => {
    setName("");
    setAge("");
    setWorkingHours("");
    setFreeDays("");
    setArea("");
    setPhone("");
  };

  const handlePersonalSubmit = () => {
    if (
      name.length > 0 &&
      age.length > 0 &&
      workingHours.length > 0 &&
      freeDays.length > 0 &&
      area.length > 0 &&
      phone.length > 0
    ) {
      handlePersonalCreate();
      console.info(`Personal ${name} created`);
      handleInputsReset();
    }
  };

  const handlePersonalCreate = () => {
    axios
      .post("http://localhost:4001/api/personal/create", {
        name: name,
        age: age,
        workingHours: workingHours,
        freeDays: freeDays,
        area: area,
        phone: phone,
      })
      .then((response) => {
        fetchPersonals();
        handleInputsReset();
      })
      .catch((error) => {
        console.log("Es ist ein Fehler aufgetreten: ", error);
      });
  };

  const handlePersonalRemove = (id: number, title: string) => {
    axios
      .put(`http://localhost:4001/api/personal/delete`, { id: id })
      .then((response) => {
        fetchPersonals();
      })
      .catch((error) => {
        console.log("Es ist ein Fehler aufgetreten: ", error);
      });
  };

  const handlePersonalUpdate = (personal: any) => {
    axios
      .put(`http://localhost:4001/api/personal/update`, personal)
      .then(() => {
        fetchPersonals();
        handleInputsReset();
      })
      .catch((error) => {
        console.log("Es ist ein Fehler aufgetreten: ", error);
      });
  };

  return (
    <div className="personal-list-wrapper">
      <div className="personal-list-form">
        <div className="form-wrapper" onSubmit={handlePersonalSubmit}>
          <div className="form-row">
            <Flex
              float="left"
              align="left"
              direction={"column"}
              width="90%"
              paddingBottom={"5"}
            >
              <FormControl isRequired>
                <FormLabel className="form-FormLabel" htmlFor="name">
                  Name:
                </FormLabel>
                <Input
                  className="form-input"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name..."
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel className="form-FormLabel" htmlFor="age">
                  Alter:
                </FormLabel>
                <Input
                  className="form-input"
                  type="text"
                  id="age"
                  name="age"
                  placeholder="Alter..."
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel className="form-FormLabel" htmlFor="workingHours">
                  Werkstunden:
                </FormLabel>
                <Input
                  className="form-input"
                  type="text"
                  id="workingHours"
                  name="workingHours"
                  placeholder="Werkstunden..."
                  value={workingHours}
                  onChange={(e) => setWorkingHours(e.target.value)}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel className="form-FormLabel" htmlFor="freeDays">
                  Feiertage:
                </FormLabel>
                <Input
                  className="form-input"
                  type="text"
                  id="freeDays"
                  name="freeDays"
                  placeholder="Feiertage..."
                  value={freeDays}
                  onChange={(e) => setFreeDays(e.target.value)}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel className="form-FormLabel" htmlFor="area">
                  Bereich:
                </FormLabel>
                <DropdownMenu
                  setValue={setArea}
                  currentVal={area}
                  optionsToSelect={["Management", "MealPlanning", "Delivery"]}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel className="form-FormLabel" htmlFor="phone">
                  Telefonnumer:
                </FormLabel>
                <Input
                  className="form-input"
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="Telefonnumer..."
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </FormControl>
              <Button
                className="btn btn-add"
                onClick={handlePersonalSubmit}
                position={"relative"}
                top={"10px"}
                maxWidth={"200px"}
                colorScheme={"green"}
              >
                Personal hinzufügen
              </Button>
            </Flex>
          </div>
        </div>
      </div>
      <PersonalList
        personals={personals}
        loading={loading}
        handlePersonalRemove={handlePersonalRemove}
        handlePersonalUpdate={handlePersonalUpdate}
      />
    </div>
  );
};
