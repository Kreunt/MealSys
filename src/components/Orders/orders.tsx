import React, { useEffect, useState } from "react";
import axios from "axios";

import { OrdersList } from "./orders-list";
import { Button, Flex, FormControl, Input, FormLabel } from "@chakra-ui/react";

export const Orders = () => {
  const [customerId, setCustomerId] = useState("");
  const [menuId, setMenuId] = useState("");
  const [date, setDate] = useState("");
  const [price, setPrice] = useState("");
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrders();
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
              <FormControl isRequired>
                <FormLabel className="form-label" htmlFor="customerId">
                  Enter Customer ID:
                </FormLabel>
                <Input
                  className="form-input"
                  type="text"
                  id="customerId"
                  placeholder="Customer ID..."
                  value={customerId}
                  onChange={(e) => setCustomerId(e.target.value)}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel className="form-label" htmlFor="menuId">
                  Enter Menu ID:
                </FormLabel>
                <Input
                  className="form-input"
                  type="text"
                  id="menuId"
                  placeholder="Menu ID..."
                  value={menuId}
                  onChange={(e) => setMenuId(e.target.value)}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel className="form-label" htmlFor="date">
                  Enter date:
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
                  Enter price:
                </FormLabel>
                <Input
                  className="form-input"
                  type="text"
                  id="price"
                  placeholder="Price..."
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
                <Button
                  className="btn btn-add"
                  colorScheme={"green"}
                  onClick={handleOrderSubmit}
                  position={"relative"}
                  top={"10px"}
                  maxWidth={"150px"}
                >
                  Add Order
                </Button>
              </FormControl>
            </Flex>
          </div>
        </div>
      </div>
      <OrdersList
        orders={orders}
        loading={loading}
        handleOrderRemove={handleOrderRemove}
        handleOrderUpdate={handleOrderUpdate}
      />
    </div>
  );
};
