import React, { useState, useRef, useEffect } from "react";
import ThemeDropDown from "./ThemeDropDown";
import SignInDropDown from "./SignInDropDown";
import { useSelector } from "react-redux";

function MainMenu(props) {
  const [open, setOpen] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const data = useSelector((state) => state.themeData);
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open, showSignIn]);
  const container = useRef();
  const handleClickOutside = (event) => {
    if (container.current && !container.current.contains(event.target)) {
      setOpen(false);
      setShowSignIn(false);
    }
  };
  const toggleDropDown = () => {
    if (showSignIn) setShowSignIn(false);
    setOpen(!open);
  };
  const toggleSignInDropDown = () => {
    if (open) setOpen(false);
    setShowSignIn(!showSignIn);
  };
  return (
    <>
      <div className="mainmenu">
        <div className="title1">Web Theme</div>
        <div className="container" ref={container}>
          <button
            type="button"
            className="dropdown-button"
            onClick={toggleDropDown}
          >
            Theme▼
          </button>
          {open && (
            <div className="dropdown">
              <ul>
                <ThemeDropDown toggleDropDown={toggleDropDown} />
              </ul>
            </div>
          )}
          {data.id && data.name ? (
            <button
              type="button"
              className="normal-button"
              onClick={toggleSignInDropDown}
            >
              {data.name}
            </button>
          ) : (
            <button
              type="button"
              className="normal-button"
              onClick={toggleSignInDropDown}
            >
              Sign In
            </button>
          )}
          {showSignIn && (
            <div className="signin-dropdown">
              <SignInDropDown toggleSignInDropDown={toggleSignInDropDown} />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default MainMenu;
