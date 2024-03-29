import React, { useState } from "react";
import { VStack, Button, Flex } from "@chakra-ui/react";
import { Customers } from "./Customers/customers";
import { Users } from "./Users/users";
import { Personals } from "./Personals/personals";
import { Orders } from "./Orders/orders";
import { Menus } from "./Menus/menus";

export function ButtonBar({
  renderCustomers,
  renderMenus,
  renderOrders,
  renderUsers,
  renderPersonals,
}) {
  const [viewCustomers, setViewCustomers] = useState(false);
  const [viewMenus, setViewMenus] = useState(false);
  const [viewOrders, setViewOrders] = useState(false);
  const [viewUsers, setViewUsers] = useState(false);
  const [viewPersonals, setViewPersonals] = useState(false);

  const handleViewCustomers = () => {
    setViewMenus(false);
    setViewOrders(false);
    setViewUsers(false);
    setViewPersonals(false);
    setViewCustomers(!viewCustomers);
  };

  const handleViewMenus = () => {
    setViewCustomers(false);
    setViewOrders(false);
    setViewUsers(false);
    setViewPersonals(false);
    setViewMenus(!viewMenus);
  };

  const handleViewOrders = () => {
    setViewCustomers(false);
    setViewMenus(false);
    setViewUsers(false);
    setViewPersonals(false);
    setViewOrders(!viewOrders);
  };

  const handleViewUsers = () => {
    setViewCustomers(false);
    setViewMenus(false);
    setViewOrders(false);
    setViewPersonals(false);
    setViewUsers(!viewUsers);
  };

  const handleViewPersonals = () => {
    setViewCustomers(false);
    setViewMenus(false);
    setViewOrders(false);
    setViewUsers(false);
    setViewPersonals(!viewPersonals);
  };

  return (
    <Flex direction="column" align="center" justify="center" gap={"2"}>
      <Flex
        direction="row"
        align="center"
        justify="center"
        p="15px"
        gap="3"
        backgroundColor={"#E6FFFA"}
        borderRadius="20px"
        shrink={"0"}
        border="1px solid #00BFFF"
        filter={"drop-shadow(0 0 0.75rem #08afa8)"}
      >
        {renderUsers && (
          <Button
            colorScheme={viewUsers ? "gray" : "teal"}
            variant="solid"
            className="UsersButton"
            type="button"
            filter={"drop-shadow(2px 2px 0.25rem teal)"}
            onClick={handleViewUsers}
          >
            Nutzer
          </Button>
        )}
        {renderPersonals && (
          <Button
            colorScheme={viewPersonals ? "gray" : "teal"}
            variant="solid"
            className="PersonalsButton"
            type="button"
            filter={"drop-shadow(2px 2px 0.25rem teal)"}
            onClick={handleViewPersonals}
          >
            Personal
          </Button>
        )}
        {renderCustomers && (
          <Button
            colorScheme={viewCustomers ? "gray" : "teal"}
            variant="solid"
            className="CustomersButton"
            type="button"
            filter={"drop-shadow(2px 2px 0.25rem teal)"}
            onClick={handleViewCustomers}
          >
            Kunden
          </Button>
        )}
        {renderMenus && (
          <Button
            colorScheme={viewMenus ? "gray" : "teal"}
            variant="solid"
            className="MenusButton"
            type="button"
            filter={"drop-shadow(2px 2px 0.25rem teal)"}
            onClick={handleViewMenus}
          >
            Menüs
          </Button>
        )}
        {renderOrders && (
          <Button
            colorScheme={viewOrders ? "gray" : "teal"}
            variant="solid"
            className="OrdersButton"
            type="button"
            filter={"drop-shadow(2px 2px 0.25rem teal)"}
            onClick={handleViewOrders}
          >
            Bestellungen
          </Button>
        )}
      </Flex>
      <VStack>
        {viewUsers && <Users />}
        {viewPersonals && <Personals />}
        {viewCustomers && <Customers />}
        {viewMenus && <Menus />}
        {viewOrders && <Orders />}
      </VStack>
    </Flex>
  );
}
