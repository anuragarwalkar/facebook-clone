import { Fragment } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import HomeScreen from "./screen/HomeScreen";

function App() {
  const user = "aarwalka";
  return (
    <div className="app">
      {!user ? (
        <h1>Login</h1>
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
