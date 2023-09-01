import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./Actions";

let Counter = () => {
  let counter = useSelector((state) => state.count);
  let dispatch = useDispatch();

  let handleIncrement = () => {
    dispatch(increment());
  };

  let handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <>
      <div>{counter}</div>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </>
  );
};

export default Counter;
