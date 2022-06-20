import React, { useEffect, useState } from "react";
import axios from "axios";

import { OrdersList } from "./orders-list";

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
            <fieldset>
              <label className="form-label" htmlFor="customerId">
                Enter Customer ID:
              </label>
              <input
                className="form-input"
                type="text"
                id="customerId"
                value={customerId}
                onChange={(e) => setCustomerId(e.target.value)}
              />
            </fieldset>

            <fieldset>
              <label className="form-label" htmlFor="menuId">
                Enter Menu ID:
              </label>
              <input
                className="form-input"
                type="text"
                id="menuId"
                value={menuId}
                onChange={(e) => setMenuId(e.target.value)}
              />
            </fieldset>

            <fieldset>
              <label className="form-label" htmlFor="date">
                Enter date:
              </label>
              <input
                className="form-input"
                type="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </fieldset>

            <fieldset>
              <label className="form-label" htmlFor="price">
                Enter price:
              </label>
              <input
                className="form-input"
                type="text"
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </fieldset>
          </div>
        </div>

        <button
          className="btn btn-add"
          type="submit"
          onClick={handleOrderSubmit}
        >
          Add Order
        </button>
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
