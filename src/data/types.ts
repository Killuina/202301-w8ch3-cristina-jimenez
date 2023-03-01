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
  id: number;
  name: string;
  brand: string;
  description: string;
  price: number;
  stock: number;
}

export type Drinks = Drink[];

export interface Client {
  email: string;
  username: string;
  address: string;
  drinks: Drinks;
  orders: Orders;
  token: string;
}

export interface ClientState extends Client {
  isLogged: boolean;
}

export type Clients = Client[];
