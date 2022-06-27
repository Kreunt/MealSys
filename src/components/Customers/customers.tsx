import React, { useEffect, useState } from "react";
import axios from "axios";

import { CustomerList } from "./customer-list";
import { Button, Flex, FormControl, Input, FormLabel } from "@chakra-ui/react";

export const Customers = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [dateOfSubscription, setDateOfSubscription] = useState("");
  const [dateOfSubscriptionEnd, setDateOfSubscriptionEnd] = useState("");
  const [paidAmount, setPaidAmount] = useState("");
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    axios
      .get("http://localhost:4001/api/customers/all")
      .then((response) => {
        setCustomers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Es ist ein Fehler aufgetreten: ", error);
      });
  };

  const handleInputsReset = () => {
    setName("");
    setAge("");
    setAddress("");
    setPhone("");
    setDateOfSubscription("");
    setDateOfSubscriptionEnd("");
    setPaidAmount("");
  };

  const handleCustomerSubmit = () => {
    if (
      name.length > 0 &&
      age.length > 0 &&
      address.length > 0 &&
      phone.length > 0 &&
      dateOfSubscription.length > 0 &&
      dateOfSubscriptionEnd.length > 0 &&
      paidAmount.length > 0
    ) {
      handleCustomerCreate();
      console.info(`Customer ${name} created`);
      handleInputsReset();
    }
  };
  const handleCustomerCreate = () => {
    axios
      .post("http://localhost:4001/api/customers/create", {
        name: name,
        age: age,
        address: address,
        phone: phone,
        dateOfSubscription: dateOfSubscription,
        dateOfSubscriptionEnd: dateOfSubscriptionEnd,
        paidAmount: paidAmount,
      })
      .then(() => {
        fetchCustomers();
        handleInputsReset();
      })
      .catch((error) => {
        console.log("Es ist ein Fehler aufgetreten: ", error);
      });
  };

  const handleCustomerRemove = (id: number, title: string) => {
    axios
      .put(`http://localhost:4001/api/customers/delete`, { id: id })
      .then(() => {
        fetchCustomers();
        alert(`${title} wurde gelöscht!`);
      })
      .catch((error) => {
        console.log("Es ist ein Fehler aufgetreten: ", error);
      });
  };

  const handleCustomerUpdate = (customer: any) => {
    axios
      .put(`http://localhost:4001/api/customers/update`, customer)
      .then(() => {
        fetchCustomers();
        alert(`${customer.name} wurde erfolgreich geändert!`);
      })
      .catch((error) => {
        console.log("Es ist ein Fehler aufgetreten: ", error);
      });
  };

  return (
    <div className="customer-list-wrapper">
      <div className="customer-list-form">
        <div className="form-wrapper" onSubmit={handleCustomerSubmit}>
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
                  className="form-Input"
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
                  className="form-Input"
                  type="number"
                  id="age"
                  name="age"
                  placeholder="Alter..."
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel className="form-FormLabel" htmlFor="address">
                  Adresse:
                </FormLabel>
                <Input
                  className="form-Input"
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Adresse..."
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel className="form-FormLabel" htmlFor="phone">
                  Telefonnumer:
                </FormLabel>
                <Input
                  className="form-Input"
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="Telefonnumer..."
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel
                  className="form-FormLabel"
                  htmlFor="dateOfSubscription"
                >
                  Datum der Anmeldung:
                </FormLabel>
                <Input
                  className="form-Input"
                  type="date"
                  id="dateOfSubscription"
                  name="dateOfSubscription"
                  value={dateOfSubscription}
                  onChange={(e) => setDateOfSubscription(e.target.value)}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel
                  className="form-FormLabel"
                  htmlFor="dateOfSubscriptionEnd"
                >
                  Ende des Abos:
                </FormLabel>
                <Input
                  className="form-Input"
                  type="date"
                  id="dateOfSubscriptionEnd"
                  name="dateOfSubscriptionEnd"
                  value={dateOfSubscriptionEnd}
                  onChange={(e) => setDateOfSubscriptionEnd(e.target.value)}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel className="form-FormLabel" htmlFor="paidAmount">
                  Bezahlter Betrag:
                </FormLabel>
                <Input
                  className="form-Input"
                  type="number"
                  id="paidAmount"
                  name="paidAmount"
                  placeholder="Bezahlter Betrag:..."
                  value={paidAmount}
                  onChange={(e) => setPaidAmount(e.target.value)}
                />
              </FormControl>
              <Button
                className="btn btn-add"
                colorScheme={"green"}
                onClick={handleCustomerSubmit}
                position={"relative"}
                top={"10px"}
                maxWidth={"200px"}
              >
                Kunde hinzufügen
              </Button>
            </Flex>
          </div>
        </div>
      </div>
      <CustomerList
        customers={customers}
        loading={loading}
        handleCustomerRemove={handleCustomerRemove}
        handleCustomerUpdate={handleCustomerUpdate}
      />
    </div>
  );
};
