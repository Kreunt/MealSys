import React, { useEffect, useState } from "react";
import axios from "axios";

import { OrdersList } from "./orders-list";
import { SearchableDropdown } from "../SearchableDropdown";
import { Button, Flex, FormControl, Input, FormLabel } from "@chakra-ui/react";

export const Orders = () => {
  const [customerId, setCustomerId] = useState("");
  const [menuId, setMenuId] = useState("");
  const [date, setDate] = useState("");
  const [price, setPrice] = useState("");
  const [orders, setOrders] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [menus, setMenus] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCustomers();
    fetchOrders();
    fetchMenus();
  }, []);

  const fetchOrders = async () => {
    axios
      .get("http://localhost:4001/api/orders/all")
      .then((response) => {
        setOrders(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Es ist ein Fehler aufgetreten: ", error);
      });
  };

  const fetchCustomers = async () => {
    axios
      .get("http://localhost:4001/api/customers/all")
      .then((response) => {
        setCustomers(response.data);
      })
      .catch((error) => {
        console.log("Es ist ein Fehler aufgetreten: ", error);
      });
  };

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
    setCustomerId("");
    setMenuId("");
    setDate("");
    setPrice("");
  };

  const handleOrderSubmit = () => {
    if (
      customerId.length > 0 &&
      menuId.length > 0 &&
      date.length > 0 &&
      price.length > 0
    ) {
      handleOrderCreate();
      console.info(`Order ${customerId} created`);
      handleInputsReset();
    }
  };

  const handleOrderCreate = () => {
    axios
      .post("http://localhost:4001/api/orders/create", {
        customerId: customerId,
        menuId: menuId,
        date: date,
        price: price,
      })
      .then(() => {
        fetchOrders();
        handleInputsReset();
      })
      .catch((error) => {
        console.log("Es ist ein Fehler aufgetreten: ", error);
      });
  };

  const handleOrderRemove = (id: number) => {
    axios
      .put(`http://localhost:4001/api/orders/delete`, { id: id })
      .then(() => {
        fetchOrders();
      })
      .catch((error) => {
        console.log("Es ist ein Fehler aufgetreten: ", error);
      });
  };

  const handleOrderUpdate = (order: any) => {
    axios
      .put(`http://localhost:4001/api/orders/update`, order)
      .then(() => {
        fetchOrders();
        alert(`Order ${order.id} wurde geändert!`);
      })
      .catch((error) => {
        console.log("Es ist ein Fehler aufgetreten: ", error);
      });
  };

  return (
    <div className="orders-list-wrapper">
      <div className="orders-list-form">
        <div className="form-wrapper" onSubmit={handleOrderSubmit}>
          <div className="form-row">
            <Flex
              float="left"
              align="left"
              direction={"column"}
              width="90%"
              paddingBottom={"5"}
            >
              <SearchableDropdown
                name="Kunde"
                values={customers}
                currentValue={customerId}
                setValue={setCustomerId}
              />
              <SearchableDropdown
                name="Menü"
                values={menus}
                currentValue={menuId}
                setValue={setMenuId}
              />

              <FormControl isRequired>
                <FormLabel className="form-label" htmlFor="date">
                  Datum:
                </FormLabel>
                <Input
                  className="form-input"
                  type="date"
                  id="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel className="form-label" htmlFor="price">
                  Preis:
                </FormLabel>
                <Input
                  className="form-input"
                  type="text"
                  id="price"
                  placeholder="Preis..."
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </FormControl>

              <Button
                className="btn btn-add"
                colorScheme={"green"}
                onClick={handleOrderSubmit}
                position={"relative"}
                top={"10px"}
                maxWidth={"200px"}
              >
                Bestellung hinzufügen
              </Button>
            </Flex>
          </div>
        </div>
      </div>
      <OrdersList
        customers={customers}
        orders={orders}
        menus={menus}
        loading={loading}
        handleOrderRemove={handleOrderRemove}
        handleOrderUpdate={handleOrderUpdate}
      />
    </div>
  );
};
