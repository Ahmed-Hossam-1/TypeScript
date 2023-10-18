// import  store  from "../store/Store";

// Global Type in APP
export type Product = {
  id: number;
  desc: string;
  price: number;
  name: string;
};

export type CounterState = {
  count: number;
};

type updateAction = {
  type: "increment" | "decrement";
  payload: number;
};

type resetAction = {
  type: "reset";
};

export type CounterAction = updateAction | resetAction;

// export type RootState = store
// Store User
export type User = {
  id: number;
  username: string;
};
