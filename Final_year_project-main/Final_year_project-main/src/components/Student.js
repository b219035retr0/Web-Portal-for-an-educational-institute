import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Base from "./Base";

import { Input, InputGroup, InputLeftElement, Select } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
const Student = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://finakyrback.onrender.com/user/alluser"
      ); // replace with your API endpoint
      setData(response.data);
    } catch (error) {}
  };
  // id
  const [filterText, setFilterText] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  // name
  const [filterText1, setFilterTexts] = useState("");
  const [filteredData1, setFilteredData1] = useState([]);
  // skill
  const [filterText2, setFilterText2] = useState("");
  const [filteredData2, setFilteredData2] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  // const [d, setD] = useState({
  //     classId:'',
  //     name: '',
  // email: '',
  // skill:[],
  // projects: [],
  // experience: [],
  // role:0});

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [skill, setSkill] = useState([]);

  const [data2, setData2] = useState(null);
  const [data3, setData3] = useState(null);

  const handleClick = async (email1) => {
    const response = await axios.get(
      `https://finakyrback.onrender.com/user/${email1}`
    );
    // setDs(response.data);

    const { collegId, name, email, skill, projects, experience } =
      response.data;
    setName(name);
    setEmail(email);
    setSkill(skill);

    const response1 = await axios.get(
      `https://finakyrback.onrender.com/student/${email}/projects`
    );
    setData2(response1.data);

    const response2 = await axios.get(
      `https://finakyrback.onrender.com/student/${email}/experience`
    );
    setData3(response2.data);

    setShowDetails(true);
  };

  const handleClose = () => {
    setShowDetails(false);
  };

  const handleFilterReset = () => {
    setFilterText("");
    setFilteredData([]);

    setFilterTexts("");
    setFilteredData1([]);

    setFilterText2("");
    setFilteredData2([]);
  };
  return (
    <Base>
      <div
        style={{
          fontSize: "4rem",
          width: "80vw",
          margin: "auto",
        }}
      >
        <div
          style={{
            fontSize: "4rem",
            fontWeight: "500",
            margin: "15px 0px",
            textAlign: "left",
          }}
        >
          Search Students
        </div>
        <div
          className="welcomepara"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItem: "center",
          }}
        >
          <div
            className="select123"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Select
              placeholder="Batch"
              onChange={async (e) => {
                const response = await axios.get(
                  `https://finakyrback.onrender.com/student/batch/${e.target.value}`
                ); // replace with your API endpoint

                setFilteredData(response.data);
              }}
              style={{ fontSize: "1.5rem", marginBottom: "15px" }}
              size="lg"
              height={"50px"}
              top={"0"}
            >
              <option value="2019">2019</option>
              <option value="2018">2018</option>
              <option value="2017">2017</option>
            </Select>
          </div>

          <div
            className="select123"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <InputGroup
              style={{
                height: "45px",
              }}
            >
              <InputLeftElement
                pointerEvents="none"
                style={{ height: "100%" }}
                children={
                  <SearchIcon
                    style={{
                      margin: "auto",
                      fontSize: "1.5rem",
                    }}
                    color="gray.500"
                  />
                }
              />
              <Input
                type="tel"
                style={{
                  height: "100%",
                  fontSize: "1.5rem",
                }}
                placeholder="College Id"
                onChange={async (e) => {
                  setFilterText(e.target.value);
                  const response = await axios.get(
                    `https://finakyrback.onrender.com/student/id/${filterText}`
                  );
                  // replace with your API endpoint
                  // setData1(response.data);

                  setFilteredData(response.data);
                }}
              />
            </InputGroup>
          </div>
          <div
            className="select123"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <InputGroup
              style={{
                height: "45px",
              }}
            >
              <InputLeftElement
                pointerEvents="none"
                style={{ height: "100%" }}
                children={
                  <SearchIcon
                    style={{
                      margin: "auto",
                      fontSize: "1.5rem",
                    }}
                    color="gray.500"
                  />
                }
              />
              <Input
                type="tel"
                style={{
                  height: "100%",
                  fontSize: "1.5rem",
                }}
                placeholder="Student Name"
                onChange={async (e) => {
                  setFilterTexts(e.target.value);
                  const response = await axios.get(
                    `https://finakyrback.onrender.com/student/${filterText1}`
                  );

                  setFilteredData1(response.data);
                }}
              />
            </InputGroup>
          </div>
          <div
            className="select123"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <InputGroup
              style={{
                height: "45px",
              }}
            >
              <InputLeftElement
                pointerEvents="none"
                style={{ height: "100%" }}
                children={
                  <SearchIcon
                    style={{
                      margin: "auto",
                      fontSize: "1.5rem",
                    }}
                    color="gray.500"
                  />
                }
              />
              <Input
                type="tel"
                style={{
                  height: "100%",
                  fontSize: "1.5rem",
                }}
                placeholder="Type Skill..."
                onChange={async (e) => {
                  setFilterText2(e.target.value);
                  const response = await axios.get(
                    `https://finakyrback.onrender.com/student/sk/${filterText2}`
                  );

                  setFilteredData2(response.data);
                }}
              />
            </InputGroup>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button
              type="button"
              onClick={handleFilterReset}
              className="signin2"
            >
              Reset
            </button>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            marginTop: "20px",
          }}
        >
          <table
            class="table"
            style={{
              width: "100%",
              border: "solid black 1px",
            }}
          >
            <thead>
              <tr
                style={{
                  backgroundColor: "rgb(8, 39, 65)",
                  color: "white",
                }}
              >
                <th style={{ textAlign: "left" }}>ID</th>
                <th style={{ textAlign: "left" }}>Name</th>
                {/* <th className="centered-text">Skill</th> */}{" "}
              </tr>
            </thead>
            <tbody>
              {" "}
              {filteredData.length > 0
                ? filteredData.map((row) => (
                    <tr
                      style={{
                        cursor: "pointer",
                      }}
                      key={row._id}
                      onClick={() => handleClick(row.email)}
                    >
                      <td>{row.collegeId}</td>
                      <td>{row.name}</td>
                      {/* <td>{row.email}</td> */}
                      {/* <td>{ row.skill.map((skill)=>(<span>{skill},</span>))}</td> */}{" "}
                    </tr>
                  ))
                : filteredData1.length > 0
                ? filteredData1.map((row) => (
                    <tr key={row._id} onClick={() => handleClick(row.email)}>
                      <td>{row.collegeId}</td>
                      <td>{row.name}</td>
                      {/* <td>{ds.data.email}</td> */}
                      {/* <td>{ row.skill.map((skill)=>(<span>{skill},</span>))}</td> */}{" "}
                    </tr>
                  ))
                : filteredData2.length > 0
                ? filteredData2.map((row) => (
                    <tr key={row._id} onClick={() => handleClick(row.email)}>
                      <td>{row.collegeId}</td>
                      <td>{row.name}</td>
                      {/* <td>{ds.data.email}</td> */}
                      {/* <td>{ row.skill.map((skill)=>(<span>{skill},</span>))}</td> */}{" "}
                    </tr>
                  ))
                : ""}{" "}
            </tbody>
          </table>
        </div>
        {showDetails && (
          <div className="modal-overlay">
            <div className="modal-container">
              <span className="modal-close" onClick={handleClose}>
                &times;
              </span>

              <div>
                <div className="resume1">
                  <h1
                    className="name"
                    style={{ textAlign: "center", color: "black" }}
                  >
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
            </div>
          </div>
        )}{" "}
      </div>
    </Base>
  );
};

export default Student;

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
