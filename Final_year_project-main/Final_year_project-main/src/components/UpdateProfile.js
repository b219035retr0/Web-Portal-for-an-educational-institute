import React, { useEffect, useState } from "react";
import { isAuthenticated } from "../auth/helper";
import { updateProfile } from "../auth/helper/user";
import { updateProfiles } from "../auth/helper/user";
import Base from "./Base";
import { updateProfiless } from "../auth/helper/user";
import Profile from "./Profile";
import "./profile.css";

function UpdateProfile() {
  const [skill, setSkill] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [erole, seteRole] = useState("");
  const [ename, seteName] = useState("");
  const [edescription, seteDescription] = useState("");
  const [url, setUrl] = useState("");

  

  const { user, token } = isAuthenticated();
  const onSubmit = (event) => {
    console.log(`user ${user.email}`);
    event.preventDefault();

    //backend request
    updateProfile(user.email, token, skill ).then((data) => {
      if (data.error) {
        console.log("error occured");
        setSkill("");

      } else {
        console.log("hogya occured");
        setSkill("");
      }
    }).then(()=>{
      window.location.reload(false);
    });

  };
  const onSubmits = (event) => {
    console.log(`user ${user.email}`);
    event.preventDefault();

    //backend request
    updateProfiles(user.email, token, name, description, url).then((data) => {
      if (data.error) {
        console.log("error occured");
      } else {
        console.log("project hogya occured");
        setName("");
        setDescription("");
        setUrl("");
      }
    }).then(()=>{
      window.location.reload(false);
    });
  };
  const handleClick = (event) => {
    // console.log(`user ${user.email}`)
    event.preventDefault();

    //backend request
    updateProfiless(user.email, token, ename, edescription, erole).then(
      (data) => {
        if (data.error) {
          console.log("error occured");
        } else {
          console.log("project hogya occured");
          seteName("");
          seteDescription("");
          seteRole("");
        }
      }
    ).then(()=>{
      window.location.reload(false);
    });
  };

  return (
    <Base>
      <div
        style={{
          width: "90vw",
          margin:"auto"
        }}
      >
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
            <Profile />
          </div>
          <div className="left">
            {/* <h1>Add Skill!</h1> */}
            <div
              style={{
                padding: "10px 0",
                fontSize: "1.5rem",
                fontWeight: "500",
              }}
            >
              Update Your Skill
              <br />
              <form onSubmit={onSubmit}>
              <input
                type="text"
                placeholder="Skill"
                value={skill}
                onChange={(e) => setSkill(e.target.value)}
                style={{ margin: "10px 0", margin: "10px 10px" }}
                required

              
              />
              <button
                type="submit"
                className="signin2"
                marginBottom="10px"
              >
                Add{" "}
              </button>
              </form>
            </div>

            <hr />
            <div
              style={{
                padding: "10px 0",
                fontSize: "1.5rem",
                fontWeight: "500",
              }}
            >
              Add a new Project.
              <form onSubmit={onSubmits}>
                <div>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    placeholder="Name"
                    style={{ width: "80%", marginTop: "10px" }}
                    onChange={(e) => setName(e.target.value)}
                    required

                  />
                </div>
                <div>
                  <textarea
                    type="text"
                    id="description"
                    value={description}
                    placeholder="Description"
                    style={{
                      width: "80%",
                      height: "50%",
                      marginTop: "10px",
                      padding: "10px",
                      fontSize: "1.5rem",
                      backgroundColor: "#f2f2f2",
                      border: "1px solid #ccc",

                    }}
                    onChange={(e) => setDescription(e.target.value)}
                required

                  />
                </div>
                <div>
                  <input
                    type="text"
                    id="url"
                    value={url}
                    style={{ width: "80%", marginTop: "10px" }}
                    placeholder="url"
                    onChange={(e) => setUrl(e.target.value)}
                required

                  />
                </div>
                <button
                  className="signin2"
                  style={{ margin: "10px 0" }}
                  type="submit"
                >
                  Update{" "}
                </button>
              </form>
              <hr />
              <div
                style={{
                  padding: "10px 0",
                  fontSize: "1.5rem",
                  fontWeight: "500",
                }}
              >
                Add Your Experience
                <form onSubmit={handleClick}>
                  <div>
                    <input
                      type="text"
                      id="name"
                      placeholder="Name"
                      style={{ width: "80%", marginTop: "10px" }}
                      value={ename}
                      onChange={(e) => seteName(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    {/* <label htmlFor="description">Description</label> */}
                    <textarea
                      type="text"
                      placeholder="Description"
                      style={{
                        width: "80%",
                        height: "50%",
                        marginTop: "10px",
                        padding: "10px",
                        fontSize: "1.5rem",
                        backgroundColor: "#f2f2f2",
                        border: "1px solid #ccc",
                      }}
                      id="description"
                      value={edescription}
                      onChange={(e) => seteDescription(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    {/* <label htmlFor="url">URL</label> */}
                    <input
                      type="text"
                      placeholder="Role"
                      style={{ width: "80%", marginTop: "10px" }}
                      id="url"
                      value={erole}
                      onChange={(e) => seteRole(e.target.value)}
                      required
                    />
                  </div>
                  <button
                    className="signin2"
                    style={{ margin: "10px 0 0 0" }}
                    type="submit"
                  >
                    Submit{" "}
                  </button>
                </form>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </Base>
  );
}

export default UpdateProfile;
