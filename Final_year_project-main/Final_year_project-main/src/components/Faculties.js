import React from "react";

import Base from "./Base";

// import { Button } from '@chakra-ui/react'
// import ComponentOne from './ComponentOne';
// import { Button, ButtonGroup } from '@chakra-ui/react'
// import './collapse.css';
import { Faculty } from "./FacultyApi";

import { useNavigate } from "react-router-dom";

const Faculties = () => {
  const navigate = useNavigate();

  const moredetails = async (email) => {
    navigate(`/Faculty/${email}`);
  };

  return (
    <Base>
      <div style={{ width: "90vw", margin: "auto" }}>
        <div
          className="commonheader"
          style={{ fontSize: "4rem", fontWeight: "500" }}
        >
          Faculty Members
        </div>
        <div className="main-cardd">
          {Faculty.map((curElem) => {
            // const {batch,name,email,profession,image}=curElem;
            const { _id, name, profession, email, url, qualification, image } =
              curElem;

            return (
              <div style={{ margin: "auto" }}>
                <div className="card">
                  <div className="card-body">
                    <div className="facimage" style={{ width: "50%" }}>
                      <img
                        src={image}
                        onClick={() => (window.location.href = url)}
                      />
                    </div>
                    <div className="facdata">
                      <div className="facname" style={{ textAlign: "left" }}>
                        {name}
                      </div>
                      <div>Profession: {profession}</div>
                      <div>Qualification: {qualification}</div>
                      <div>
                        <p>Email: {email}</p>
                      </div>
                      <button
                        className="facultybutton"
                        onClick={() => moredetails(_id.$oid)}
                      >
                        More Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Base>
  );
};
export default Faculties;
