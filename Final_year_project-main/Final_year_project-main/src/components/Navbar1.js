import { React, useEffect } from "react";

import { useState } from "react";

import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./nav1.css";

import GoogleSignInButton from "./LoginButton";
import { isAuthenticated } from "../auth/helper";
import axios from "axios";
const Navbar1 = () => {
  var { user, token } = isAuthenticated();
  // var isOpen = useState(true);
  const [click, setClick] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    // const axios = require("axios");

    const options = {
      method: "GET",
      url: "https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe",
      params: {
        query: "Chicken curry",
      },
      headers: {
        "X-RapidAPI-Key": "f67b579418msh92a54c580f490b3p1985d3jsnbcff2ac8fe7b",
        "X-RapidAPI-Host": "recipe-by-api-ninjas.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {})
      .catch(function (error) {});
    function handleScroll() {
      setScrollPosition(window.scrollY);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarClasses = ["navbar"];
  const logo = ["nav-logo"];
  const centeredPlaceholder = ["centered-placeholder"];

  const navigate = useNavigate();
  const signout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("jwt");
      navigate("/");
      window.location.reload();
    }
  };

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  return (
    <div>
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <nav className={navbarClasses.join(" ")}>
        <div className="nav-container">
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "1.5rem",
              fontWeight: "400",
              color: "orange",
            }}
            className={logo.join(" ")}
            onClick={() => {
              navigate("/");
            }}
          >
            <img
              src="/images/IIIT_Bhubaneswar_Logo-removebg-preview.png"
              className="iiitim"
            ></img>
            <p>Electronics and Telecommunication</p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
              flexGrow: "1",
              alignItems: "center",
            }}
          >
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li onClick={toggleDropdown} className="nav-item">
                <div className="nav links f">People &#9662;</div>
                {isOpen && (
                  <ul className="dropdown-menu">
                    <li>
                      <NavLink to="/faculties">Faculties</NavLink>
                    </li>

                    <li>
                      <NavLink to="/research">Research Scholar</NavLink>
                    </li>
                    <li>
                      <NavLink to="/staff">Staff</NavLink>
                    </li>
                  </ul>
                )}{" "}
              </li>

              <li className="nav-item">
                <NavLink
                  exact
                  to="/lab"
                  onClick={click ? handleClick : null}
                  activeClassName="active"
                  className="nav-links f"
                >
                  Laboratory
                </NavLink>
              </li>

              <li onClick={toggleDropdown} className="nav-item">
                <div className="nav links f">Students &#9662;</div>
                {isOpen && (
                  <ul className="dropdown-menu">
                    <li>
                      <NavLink to="/Student">Details</NavLink>
                    </li>
                    <li>
                      <NavLink to="/achievement">Achievements</NavLink>
                    </li>
                  </ul>
                )}{" "}
              </li>

              <li onClick={toggleDropdown} className="nav-item">
                <div className="nav links f">Research &#9662;</div>
                {isOpen && (
                  <ul className="dropdown-menu">
                    <li>
                      <NavLink to="/researchArea">Research Areas</NavLink>
                    </li>
                    <li>
                      <NavLink to="/projects">Projects</NavLink>
                    </li>
                    <li>
                      <NavLink to="/publication">Publication</NavLink>
                    </li>
                  </ul>
                )}{" "}
              </li>

              <li className="nav-item">
                <NavLink
                  exact
                  to="/resources"
                  activeClassName="active"
                  className="nav-links f"
                  onClick={click ? handleClick : null}
                >
                  Resources
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  exact
                  to="/contactus"
                  activeClassName="active"
                  className="nav-links f"
                  onClick={click ? handleClick : null}
                >
                  Contact Us
                </NavLink>
              </li>
              <li className="nav-item">
                {isAuthenticated() && user.role === 2 && (
                  <button
                    className={centeredPlaceholder.join(" ")}
                    onClick={() => {
                      navigate("/updates");
                    }}
                  >
                    Update Profile
                  </button>
                )}
                {isAuthenticated() && user.role === 1 && (
                  <button
                    className={centeredPlaceholder.join(" ")}
                    onClick={() => {
                      navigate("/update");
                    }}
                  >
                    Update Profile
                  </button>
                )}
              </li>
              <li className="nav-item google">
                {!isAuthenticated() ? (
                  <div>
                    {" "}
                    <GoogleSignInButton />
                  </div>
                ) : (
                  ""
                )}
              </li>
              <li className="nav-item">
                {isAuthenticated() ? (
                  <button

                  className="logoutbut"
                    style={{
                      backgroundColor: "red",
                      borderRadius: "10px",
                      padding: "10px",
                      color: "white",
                      fontSize: "1.2rem",
                      height: "40px",
                  
                    }}
                    onClick={signout}
                  >
                    Log out
                  </button>
                ) : (
                  ""
                )}
              </li>
            </ul>
            <div></div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar1;
