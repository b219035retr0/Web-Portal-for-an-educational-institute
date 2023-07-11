import React, { useState } from "react";
import { isAuthenticated } from "../auth/helper";

import { useEffect } from "react";
import axios from "axios";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Profile = () => {
  const { user, token } = isAuthenticated();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [skill, setSkill] = useState([]);

  const [data2, setData2] = useState(null);
  const [data3, setData3] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://finakyrback.onrender.com/user/${user.email}`
        );
        console.log(response.data);
        const { collegId, name, email, skill } = response.data;
        console.log("<<<<<<<<<<<<<", user.email);

        setName(name);
        setEmail(email);
        setSkill(skill);

        const response1 = await axios.get(
          `https://finakyrback.onrender.com/student/${user.email}/projects`
        );
        setData2(response1.data);
        console.log("projects--" + data2);

        const response2 = await axios.get(
          `https://finakyrback.onrender.com/student/${user.email}/experience`
        );
        setData3(response2.data);
      } catch (error) {
        // Handle error here
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="resume">
        <h1 className="name" style={{ textAlign: "center", color: "black" }}>
          {name}
        </h1>
        <p className="email" style={{ textAlign: "center" }}>
          {email}
        </p>
        <h2 className="section-title">Skills</h2>
        <div>
          <ol>
            {" "}
            {skill.map((project, index) => (
              // <li key={index}
              //     style={
              //         {
              //             listStyle: "decimal",
              //             fontSize: "1.5rem",
              //             margin: "20px",
              //             textAlign: "left"
              //         }
              // }>
              //     <div className="project"
              //         key={index}>
              //         <h1 style={
              //             {textAlign: "left"}
              //         }>
              //             {project}</h1>

              //     </div>
              // </li>
              <SkillBox skill={project} />
            ))}{" "}
          </ol>
        </div>

        <h2 className="section-title">Projects</h2>

        <ol>
          {" "}
          {data2
            ? data2.map((project, index) => (
                <li
                  key={index}
                  style={{
                    listStyle: "decimal",
                    fontSize: "1.5rem",
                    margin: "20px",
                    textAlign: "left",
                  }}
                >
                  <div className="project" key={project.name}>
                    <h1
                      className="project-title"
                      style={{ textAlign: "left", color: "black" }}
                    >
                      {project.name}
                    </h1>
                    <p
                      className="project-description"
                      style={{ textAlign: "left", color: "black" }}
                    >
                      {project.description}
                    </p>
                    <p
                      className="project-description"
                      style={{ textAlign: "left", color: "black",fontStyle:"italic" ,fontWeight:"600"}}
                    >
                      {project.url}
                    </p>
                  </div>
                </li>
              ))
            : ""}{" "}
        </ol>

        {/* </ol> */}

        <h2 className="section-title">Experience</h2>
        <ol>
          {" "}
          {data3
            ? data3.map((exp, index) => (
                <li
                  key={index}
                  style={{
                    listStyle: "decimal",
                    fontSize: "1.5rem",
                    margin: "20px",
                    textAlign: "left",
                  }}
                >
                  <div className="experience" key={exp.name}>
                    <h3
                      className="experience-company"
                      style={{ textAlign: "left", color: "black" }}
                    >
                      {exp.name}
                    </h3>
                    <h1
                      className="experience-description"
                      style={{ textAlign: "left" }}
                    >
                      {exp.description}
                    </h1>
                    <p
                      className="experience-role"
                      style={{ textAlign: "left" }}
                    >
                      Role: {exp.role}
                    </p>
                  </div>
                </li>
              ))
            : ""}{" "}
        </ol>
      </div>
    </div>
  );
};

export default Profile;

const SkillBox = ({ skill }) => {
  return (
    <div
      className="skill-box"
      style={{ marginBottom: "7px", backgroundColor: "rgb(8, 39, 65)" }}
    >
      {skill}{" "}
    </div>
  );
};
