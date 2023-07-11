import React, { useState } from "react";
import { isAuthenticated } from "../auth/helper";

import { useEffect } from "react";
import axios from "axios";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Profilefac = () => {
  const { user } = isAuthenticated();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [profession, setProfession] = useState("");
  const [Conference, setConference] = useState("");
  const [journals, setJournals] = useState("");
  //const [skill, setSkill] = useState([]);

  const [data2, setData2] = useState(null);
  const [data3, setData3] = useState(null);
  const [data4, setData4] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://finakyrback.onrender.com/faculty/${user._id}/profile`
        );
        const {
          name,
          profession,
          email,
          Conference_Publications,
          International_journal,
        } = response.data;
  
        setName(name);
        setEmail(email);
        setProfession(profession);
        setData2(profession);
        setConference(Conference_Publications);
        setData3(Conference_Publications);
        setJournals(International_journal);
        setData4(International_journal);
      } catch (error) {
        console.error('Error fetching profile data:', error);
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
        <h2 className="section-title" style={{color: "black" }}>Profession</h2>
        <div>
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
                      color: "black",
                      textAlign: "left",
                    }}
                  >
                    <div className="project" key={index}>
                      <h1 style={{ textAlign: "left",color:"black" }}>{project}</h1>
                    </div>
                  </li>
                  // <SkillBox skill={project}/>
                ))
              : ""}{" "}
          </ol>
        </div>

        <h2 className="section-title">Conference publications</h2>

        <ol>
          {" "}
          {Conference
            ? Conference.map((project, index) => (
                <li
                  key={index}
                  style={{
                    listStyle: "decimal",
                    fontSize: "1.5rem",
                    margin: "20px",
                    textAlign: "left",
                  }}
                >
                  <div className="project" key={project}>
                    <h1
                      className="project-title"
                      style={{ textAlign: "left", color: "black" }}
                    >
                      {project}
                    </h1>
                  </div>
                </li>
              ))
            : ""}{" "}
        </ol>

        {/* </ol> */}

        <h2 className="section-title">InterNational Journals</h2>
        <ol>
          {" "}
          {journals
            ? journals.map((exp, index) => (
                <li
                  key={index}
                  style={{
                    listStyle: "decimal",
                    fontSize: "1.5rem",
                    margin: "20px",
                    textAlign: "left",
                  }}
                >
                  <div className="experience" key={exp}>
                    <h3
                      className="experience-company"
                      style={{ textAlign: "left", color: "black" }}
                    >
                      {exp}
                    </h3>
                  </div>
                </li>
              ))
            : ""}{" "}
        </ol>
      </div>
    </div>
  );
};

export default Profilefac;
