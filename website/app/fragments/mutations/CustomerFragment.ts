import { queryBuilder } from "../../../../client/src";

type CustomerInput = {
  name: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  text?: string; // Optional
};

export const createCustomerMutation = (customer: CustomerInput) =>
  queryBuilder.create('Customer', {
    data: {
      name: customer.name,
      lastName: customer.lastName,
      phoneNumber: customer.phoneNumber,
      email: customer.email,
      text: customer.text,
    },
  });