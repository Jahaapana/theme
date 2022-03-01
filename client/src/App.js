import "./App.scss";
import React from "react";
import MainMenu from "./MainMenu";
import MainBody from "./MainBody";
import { updateLogin } from "./redux/actions";

import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  if (localStorage.getItem("webtheme")) {
    updateLogin(dispatch, JSON.parse(localStorage.getItem("webtheme")));
  }

  return (
    <div className="App">
      <MainMenu />
      <MainBody />
    </div>
  );
}

export default App;
