import React from "react";
import { updateTheme, updateLogin } from "./redux/actions";
import { useSelector, useDispatch } from "react-redux";

function ThemeDropDown(props) {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.themeData);
  const colorList = [
    "white",
    "red",
    "green",
    "blue",
    "yellow",
    "orange",
    "black",
  ];
  return colorList.map((item, index) => {
    return (
      <li
        key={item + "-" + index}
        className={
          item.toLocaleUpperCase() === data.theme.toLocaleUpperCase()
            ? "active"
            : ""
        }
        value={item}
        onClick={(e) => {
          if (data.id && data.name) {
            fetch(`/user/${data.id}`, {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ theme: e.target.getAttribute("value") }),
            })
              .then((resp) => {
                return resp.json();
              })
              .then((data) => {
                updateLogin(dispatch, data);
              });
            data.theme = e.target.getAttribute("value");
            localStorage.setItem("webtheme", JSON.stringify(data));
          } else {
            updateTheme(dispatch, e.target.getAttribute("value"));
          }
          props.toggleDropDown();
        }}
      >
        {item.toLocaleUpperCase()}
      </li>
    );
  });
}

export default ThemeDropDown;
