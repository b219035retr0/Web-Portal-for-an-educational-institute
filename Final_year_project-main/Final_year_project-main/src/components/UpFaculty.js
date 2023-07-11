import React, { useState } from "react";
import { isAuthenticated } from "../auth/helper";
import Base from "./Base";
import "./profile.css";
import axios from "axios";
import Profilefac from "./Profilefac";

function UpFaculty() {
  const [profession, setProfession] = useState("");
  const [Conference_publications, setConference] = useState("");
  const [journals, setJournals] = useState("");

  const { user, token } = isAuthenticated();

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.put(
        "https://finakyrback.onrender.com/faculty/updateFaculty",
        {
          email: user.email,
          Conference_publications: Conference_publications,
          International_Journal: journals,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response.data);
      window.location.reload(false);

    } catch (error) {
      console.error(error);
    }
  };
  const onSubmits = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.put(
        "https://finakyrback.onrender.com/faculty/updateFacultys",
        {
          email: user.email,
          profession: profession,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response.data);

      window.location.reload(false);

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Base>
      <div style={{ width: "90vw" ,margin:"auto"}}>
        <div
        className="commonheader"
          style={{
            fontSize: "4rem",
            fontWeight: "500",
            margin: "15px 0px",
          }}
        >
          My Profile
        </div>
        <div className="containers">
          <div className="right">
            <Profilefac />
          </div>
          <div className="left">
            <form onSubmit={onSubmits}>
              <div
                style={{
                  padding: "10px 0",
                  fontSize: "1.5rem",
                  fontWeight: "500",
                }}
              >
                Update Your Profession
                <br />
                <input
                  type="text"
                  placeholder="Profession"
                  value={profession}
                  onChange={(e) => setProfession(e.target.value)}
                  style={{ margin: "10px 0", margin: "10px 10px" }}
                />
                <button
           
                  type="submit"
                  className="signin2"
                  marginBottom="10px"
                >
                  Add
                </button>
              </div>
            </form>

            <hr />
            <div
              style={{
                padding: "10px 0",
                fontSize: "1.5rem",
                fontWeight: "500",
              }}
            >
              Add a new Conference publications.
              <form onSubmit={onSubmit}>
                <div>
                  <input
                    type="text"
                    id="name"
                    value={Conference_publications}
                    placeholder="Name"
                    style={{ width: "80%", marginTop: "10px" }}
                    onChange={(e) => setConference(e.target.value)}
                  />
                </div>
                Add Your InterNational Journals
                <div>
                  <input
                    type="text"
                    id="name"
                    placeholder="InterNational Journal"
                    style={{ width: "80%", marginTop: "10px" }}
                    value={journals}
                    onChange={(e) => setJournals(e.target.value)}
                  />
                </div>
                <button
                  
                  className="signin2"
                  style={{ margin: "10px 0 0 0" }}
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </Base>
  );
}

export default UpFaculty;
