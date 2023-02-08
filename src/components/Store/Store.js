import { createStore } from "redux";
const initialValue = { count: 0, amount: 0, seat: "" };
const reducerHandler = (state = initialValue, action) => {
  if (action.type === "recliner") {
    return {
      count: state.count + 1,
      amount: state.amount + action.num,
      seat: state.seat + ` R${action.seat}`,
    };
  }
  if (action.type === "prime") {
    return {
      count: state.count + 1,
      amount: state.amount + action.num,
      seat: state.seat + ` P${action.seat}`,
    };
  }
  if (action.type === "classic") {
    return {
      count: state.count + 1,
      amount: state.amount + action.num,
      seat: state.seat + ` C${action.seat}`,
    };
  }
  return state;
};
const store = createStore(reducerHandler);
export default store;
