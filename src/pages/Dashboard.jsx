import React from "react";
import { DeliveryDashboard } from "./DeliveryDashboard.jsx";
import { ManagementDashboard } from "./ManagementDashboard.jsx";
import { MealPlanningDashboard } from "./MealPlanningDashboard.jsx";
import { StorageDashboard } from "./StorageDashboard.jsx";


export default function Dashboard({ role }) {
    switch (role) {
        case "Management":
        return <ManagementDashboard />;
        case "Delivery":
        return <DeliveryDashboard />;
        case "MealPlanning":
        return <MealPlanningDashboard />;
        case "Storage":
        return <StorageDashboard />;
        default:
        return <div>Fehler, keine Rolle spezifiziert</div>;
    }
    }
