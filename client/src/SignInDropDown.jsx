import React, { useState } from "react";
import { updateLogin } from "./redux/actions";
import { useSelector, useDispatch } from "react-redux";

function SignInDropDown(props) {
  const dispatch = useDispatch();
  const [inp, setInp] = useState("");
  const themeData = useSelector((state) => state.themeData);
  const loginClickHandle = (event) => {
    fetch(`/user/${inp}`)
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        if (data.id && data.name) {
          localStorage.setItem("webtheme", JSON.stringify(data));
          updateLogin(dispatch, data);
        }
        props.toggleSignInDropDown();
      });
  };

  const logoutClickHandle = () => {
    localStorage.clear();
    props.toggleSignInDropDown();
    updateLogin(dispatch, { id: "", name: "", theme: "white" });
  };
  return (
    <>
      {themeData.id && themeData.name ? (
        <button
          type="button"
          className="change-button"
          onClick={logoutClickHandle}
        >
          Logout
        </button>
      ) : (
        <>
          <input
            type="text"
            style={{ height: "25px" }}
            onChange={(e) => {
              setInp(e.target.value);
            }}
          ></input>
          <button
            type="button"
            className="change-button"
            onClick={loginClickHandle}
          >
            Change
          </button>
        </>
      )}
    </>
  );
}

export default SignInDropDown;
