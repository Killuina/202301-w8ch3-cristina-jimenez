export enum OrderStatus {
  received,
  inProcess,
  completed,
}

export interface Order {
  id: string;
  status: OrderStatus;
}

export type Orders = Order[];

export interface Drink {
  name: string;
  brand: string;
  description: string;
  price: number;
  stock: number;
}

export type Drinks = Drink[];

export interface Client {
  isLogged: boolean;
  username: string;
  address: string;
  drinks: Drinks;
  orders: Orders;
  token: string;
}

export type Clients = Client[];
