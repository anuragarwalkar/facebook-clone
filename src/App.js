import { Fragment } from "react";
import "./App.scss";
import Login from "./components/Auth/Login";
import Header from "./components/Header/Header";
import HomeScreen from "./screen/HomeScreen";

function App() {
  const user = null;
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <Fragment>
          <Header />
          <div className="app__body">
            <HomeScreen />
          </div>
        </Fragment>
      )}
    </div>
  );
}

export default App;
