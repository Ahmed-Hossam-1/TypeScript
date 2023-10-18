import { useReducer } from "react";
import { CounterAction, CounterState } from "../types/app";

const initialstate = { count: 0 };

const reducer = (state: CounterState, action: CounterAction) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    case "reset":
      return initialstate;
    default:
      return state;
  }
};

function CounterUseRducer() {
  const [state, dispatch] = useReducer(reducer, initialstate);
  return (
    <div>
      <h1>Count : {state.count}</h1>

      <button onClick={() => dispatch({ type: "increment", payload: 5 })}>
        clicked +
      </button>

      <button onClick={() => dispatch({ type: "decrement", payload: 5 })}>
        clicked -
      </button>

      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default CounterUseRducer;
