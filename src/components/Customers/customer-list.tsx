import React, { Fragment, useState } from "react";
import { CustomerListRow } from "./customer-list-row";
import { EditableCustomerListRow } from "./editable-customer-list-row";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

interface CustomerUI {
  id: number;
  name: string;
  age: number;
  address: string;
  phone: string;
  dateOfSubscription: string;
  dateOfSubscriptionEnd: string;
  paidAmount: number;
}

interface CustomerListUI {
  customers: CustomerUI[];
  loading: boolean;
  handleCustomerRemove: (id: number, name: string) => void;
  handleCustomerUpdate: (customer: CustomerUI) => void;
}

export const CustomerList = (props: CustomerListUI) => {
  const [editCustomerId, setEditCustomerId] = useState(null);

  if (props.loading) {
    return <p>Kundenliste wird geladen...</p>;
  }

  const handleCustomerEditClick = (event: any, customer: any) => {
    event.preventDefault();
    setEditCustomerId(customer.id);
  };

  const handleSaveClick = (event: any, customer: any) => {
    event.preventDefault();
    props.handleCustomerUpdate(customer);
    setEditCustomerId(null);
  };

  return (
    <Table className="table">
      <Thead>
        <Tr>
          <Th className="table-head-item">Kunde ID</Th>

          <Th className="table-head-item">Name</Th>

          <Th className="table-head-item">Alter</Th>

          <Th className="table-head-item">Adresse</Th>

          <Th className="table-head-item">Telefonnumer</Th>

          <Th className="table-head-item">Datum der Anmeldung</Th>

          <Th className="table-head-item">Ende des Abos</Th>

          <Th className="table-head-item">Bezahlter Betrag</Th>

          <Th className="table-head-item">Aktionen</Th>

          <Th className="table-head-item" />
        </Tr>
      </Thead>

      <Tbody className="table-body">
        {props.customers.length > 0 ? (
          props.customers.map((customer: CustomerUI, index: number) => (
            <Fragment key={index}>
              {editCustomerId === customer.id ? (
                <EditableCustomerListRow
                  key={customer.id}
                  customer={customer}
                  position={customer.id}
                  handleCustomerRemove={props.handleCustomerRemove}
                  handleSaveClick={handleSaveClick}
                />
              ) : (
                <CustomerListRow
                  key={customer.id}
                  customer={customer}
                  position={customer.id}
                  handleCustomerRemove={props.handleCustomerRemove}
                  handleCustomerEditClick={handleCustomerEditClick}
                />
              )}
            </Fragment>
          ))
        ) : (
          <Tr className="table-row">
            <Td
              className="table-item"
              style={{ textAlign: "center" }}
              colSpan={9}
            >
              Keine Kunden vorhanden
            </Td>
          </Tr>
        )}
      </Tbody>
    </Table>
  );
};
