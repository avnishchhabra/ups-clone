type Customer = {
  email: string;
  name: string;
};

type CustomerList = {
  name: ID;
  value: Customer;
};

type Item = {
  item_id: ID;
  name: string;
  price: number;
  quantity: number;
};

type OrderResponse = {
  name: ID;
  value: Order;
};

type CustomerResponse = {
  name: ID;
  value: Customer;
};

type TrackingItem = {
  customer_id: ID;
  customer: Customer;
  items: Item[];
};

type Order = {
  carrier: string;
  createdAt: Date;
  shippingCost: Int;
  trackingId: string;
  Address: string;
  City: string;
  Lat: Float;
  Lng: Float;
  trackingItems: TrackingItem;
};

export {Customer , CustomerList , Item, OrderResponse, TrackingItem, Order , CustomerResponse}