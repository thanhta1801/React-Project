// import logo from "./logo.svg";
import "./App.css";
import React from "react";
import MyComponent from "./components/MyComponent";
// import { useDispatch, useSelector } from "react-redux";
// import { increaseCounter, decreaseCounter } from "./redux/action/counterAction";

class App extends React.Component {
  render() {
    return (
      <>
        <MyComponent />
      </>
    );
  }
}
// const App = () => {
//   const count = useSelector((state) => state.counter.count);
//   const dispatch = useDispatch();
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>Hello các bạn</p>
//         <div>Count = {count}</div>
//         <button onClick={() => dispatch(increaseCounter())}>Increase</button>
//         <button onClick={() => dispatch(decreaseCounter())}>Decrease</button>
//       </header>
//     </div>
//   );
// };

export default App;
