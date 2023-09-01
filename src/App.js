import "./styles.css";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Counter from "./Counter";
import Reducer from "./Reducer";

let store = createStore(Reducer);

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Increment_Decrement Using REDUX</h1>
        <Counter />
      </div>
    </Provider>
  );
}
