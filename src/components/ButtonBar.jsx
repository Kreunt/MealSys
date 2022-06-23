import React, { useState } from "react";
import { VStack, Button, Flex } from "@chakra-ui/react";
import { Customers } from "./Customers/customers";
import { Users } from "./Users/users";
import { Personals } from "./Personals/personals";
import { Orders } from "./Orders/orders";

export function ButtonBar({
  renderCustomers,
  renderMenus,
  renderOrders,
  renderUsers,
  renderPersonals,
  renderIngredients,
  renderIncomeExpenses,
}) {
  const [viewCustomers, setViewCustomers] = useState(false);
  const [viewMenus, setViewMenus] = useState(false);
  const [viewOrders, setViewOrders] = useState(false);
  const [viewUsers, setViewUsers] = useState(false);
  const [viewPersonals, setViewPersonals] = useState(false);
  const [viewIngredients, setViewIngredients] = useState(false);
  const [viewIncomeExpenses, setViewIncomeExpenses] = useState(false);

  const handleViewCustomers = () => {
    setViewMenus(false);
    setViewOrders(false);
    setViewUsers(false);
    setViewPersonals(false);
    setViewIngredients(false);
    setViewIncomeExpenses(false);
    setViewCustomers(!viewCustomers);
  };

  const handleViewMenus = () => {
    setViewCustomers(false);
    setViewOrders(false);
    setViewUsers(false);
    setViewPersonals(false);
    setViewIngredients(false);
    setViewIncomeExpenses(false);
    setViewMenus(!viewMenus);
  };

  const handleViewOrders = () => {
    setViewCustomers(false);
    setViewMenus(false);
    setViewUsers(false);
    setViewPersonals(false);
    setViewIngredients(false);
    setViewIncomeExpenses(false);
    setViewOrders(!viewOrders);
  };

  const handleViewUsers = () => {
    setViewCustomers(false);
    setViewMenus(false);
    setViewOrders(false);
    setViewPersonals(false);
    setViewIngredients(false);
    setViewIncomeExpenses(false);
    setViewUsers(!viewUsers);
  };

  const handleViewPersonals = () => {
    setViewCustomers(false);
    setViewMenus(false);
    setViewOrders(false);
    setViewUsers(false);
    setViewIngredients(false);
    setViewIncomeExpenses(false);
    setViewPersonals(!viewPersonals);
  };

  const handleViewIngredients = () => {
    setViewCustomers(false);
    setViewMenus(false);
    setViewOrders(false);
    setViewUsers(false);
    setViewPersonals(false);
    setViewIncomeExpenses(false);
    setViewIngredients(!viewIngredients);
  };

  const handleViewIncomeExpenses = () => {
    setViewCustomers(false);
    setViewMenus(false);
    setViewOrders(false);
    setViewUsers(false);
    setViewPersonals(false);
    setViewIngredients(false);
    setViewIncomeExpenses(!viewIncomeExpenses);
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
        //border="2px solid"
        //borderColor="#01213a"
        //boxShadow={"2px 1px black"}
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
            Users
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
            Personals
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
            Customers
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
            Menus
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
            Orders
          </Button>
        )}
        {renderIngredients && (
          <Button
            colorScheme={viewIngredients ? "gray" : "teal"}
            variant="solid"
            className="IngredientsButton"
            type="button"
            filter={"drop-shadow(2px 2px 0.25rem teal)"}
            onClick={handleViewIngredients}
          >
            Ingredients
          </Button>
        )}
        {renderIncomeExpenses && (
          <Button
            colorScheme={viewIncomeExpenses ? "gray" : "teal"}
            variant="solid"
            className="IncomeExpensesButton"
            type="button"
            filter={"drop-shadow(2px 2px 0.25rem teal)"}
            onClick={handleViewIncomeExpenses}
          >
            Income/Expenses
          </Button>
        )}
      </Flex>
      <VStack>
        {viewUsers && <Users />}
        {viewPersonals && <Personals />}
        {viewCustomers && <Customers />}
        {viewMenus && <div>Menus</div>}
        {viewOrders && <Orders />}
        {viewIngredients && <div>Ingredients</div>}
        {viewIncomeExpenses && <div>Income/Expenses</div>}
      </VStack>
    </Flex>
  );
}
