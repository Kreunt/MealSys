import React, { useEffect, useState } from "react";
import axios from "axios";

import { PersonalList } from "./personal-list";

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
        alert(`Personal ${title} wurde gelöscht!`);
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
            <fieldset>
              <label className="form-label" htmlFor="name">
                Enter name:
              </label>
              <input
                className="form-input"
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </fieldset>

            <fieldset>
              <label className="form-label" htmlFor="age">
                Enter age:
              </label>
              <input
                className="form-input"
                type="text"
                id="age"
                name="age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </fieldset>

            <fieldset>
              <label className="form-label" htmlFor="workingHours">
                Enter working hours:
              </label>
              <input
                className="form-input"
                type="text"
                id="workingHours"
                name="workingHours"
                value={workingHours}
                onChange={(e) => setWorkingHours(e.target.value)}
              />
            </fieldset>

            <fieldset>
              <label className="form-label" htmlFor="freeDays">
                Enter free days:
              </label>
              <input
                className="form-input"
                type="text"
                id="freeDays"
                name="freeDays"
                value={freeDays}
                onChange={(e) => setFreeDays(e.target.value)}
              />
            </fieldset>

            <fieldset>
              <label className="form-label" htmlFor="area">
                Enter area:
              </label>
              <input
                className="form-input"
                type="text"
                id="area"
                name="area"
                value={area}
                onChange={(e) => setArea(e.target.value)}
              />
            </fieldset>

            <fieldset>
              <label className="form-label" htmlFor="phone">
                Enter phone:
              </label>
              <input
                className="form-input"
                type="text"
                id="phone"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </fieldset>
          </div>
        </div>

        <button className="btn btn-add" onClick={handlePersonalSubmit}>
          Add Personal
        </button>
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
