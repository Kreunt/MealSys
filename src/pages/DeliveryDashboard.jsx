import { ArrowBackIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import React from "react";
import { ButtonBar } from "../components/ButtonBar";

function logout() {
  window.location.href = "/";
}

export function DeliveryDashboard() {
  return (
    <div>
      <h2>Delivery Dashboard</h2>
      <IconButton
        className="logoutButton"
        type="button"
        onClick={logout}
        colorScheme="red"
        position="absolute"
        top="40px"
        right="40px"
        icon={<ArrowBackIcon />}
      >
        Logout
      </IconButton>
      <ButtonBar
        renderOrders={true}
        renderCustomers={true}
        renderIncomeExpenses={true}
      />
    </div>
  );
}
