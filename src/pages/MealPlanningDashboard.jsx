import { ArrowBackIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import React from "react";
import { ButtonBar } from "../components/ButtonBar";

function logout() {
  window.location.href = "/";
}

export function MealPlanningDashboard() {
  return (
    <div>
      <h2>Speisepersonal Dashboard</h2>
      <IconButton
        className="logoutButton"
        type="button"
        onClick={logout}
        colorScheme="red"
        position="absolute"
        top="40px"
        right="40px"
        icon={<ArrowBackIcon />}
      />
      <ButtonBar renderMenus={true} />
    </div>
  );
}
