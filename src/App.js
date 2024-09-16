// import logo from "./logo.svg";
import "./App.scss";
import React from "react";
import Header from "./components/Header/Header";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Header />

      <div>
        Test Link
        <div>
          <button>
            <Link to="/users" className="nav-link">
              Go To User
            </Link>
          </button>
          <button>
            <Link to="/admins" className="nav-link">
              Go To Admin
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
