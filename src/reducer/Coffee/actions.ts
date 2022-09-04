import { AddressInformation, paymentTypeProps } from './index';

export interface IUpdateCoffeeQuantity {
  type: any;
  payload: {
    id: number;
    quantity: number;
  }
}

export interface IUpdateAddressInformation {
  type: any;
  payload: {
    addressInformation: AddressInformation
  }
}

export interface IUpdatePaymentType {
  type: any;
  payload: {
    paymentType: paymentTypeProps
  }
}