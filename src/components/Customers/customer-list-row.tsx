import { Button, Flex } from "@chakra-ui/react";
import React from "react";
import { Tr, Td } from "@chakra-ui/react";

interface CustomerListRowUI {
  position: number;
  customer: {
    id: number;
    name: string;
    age: number;
    address: string;
    phone: string;
    dateOfSubscription: string;
    dateOfSubscriptionEnd: string;
    paidAmount: number;
  };
  handleCustomerRemove: (id: number, name: string) => void;
  handleCustomerEditClick: (event: any, customer: any) => void;
}

export const CustomerListRow = (props: CustomerListRowUI) => {
  return (
    <Tr className="table-row">
      <Td className="table-item">{props.position}</Td>
      {Object.keys(props.customer)
        .slice(1)
        .map((key: string, index: number) => {
          return (
            <Td key={index} className="table-item">
              {props.customer[key as keyof typeof props.customer]}
            </Td>
          );
        })}

      <Td className="table-item">
        <Flex direction={"row"} gap="5">
          <Button
            className="btn btn-edit"
            colorScheme={"blue"}
            onClick={(event) =>
              props.handleCustomerEditClick(event, props.customer)
            }
          >
            Edit Customer
          </Button>
          <Button
            className="btn btn-remove"
            colorScheme={"red"}
            onClick={() =>
              props.handleCustomerRemove(props.customer.id, props.customer.name)
            }
          >
            Remove Customer
          </Button>
        </Flex>
      </Td>
    </Tr>
  );
};
