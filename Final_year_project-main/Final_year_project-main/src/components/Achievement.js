import React from "react";
import Base from "./Base";
import { students } from "./AchiApi";
// import { Button } from 'react-scroll'

const Achievement = () => {
  return (
    <Base>
      <div
        className="commonheader"
        style={{
          fontSize: "4rem",
          width: "80vw",
          fontWeight: "500",
          margin: "15px auto 0 auto",
        }}
      >
        Achievements
      </div>
      {/* <hr style={{ marginTop: "1rem", marginBottom: "1rem", border: "0", borderTop: "1px solid rgba(0,0,0,.1)" }} /> */}
      <div>
        {students.map((curElem) => {
          const { competition, about, image } = curElem;
          return (
            <div style={{ marginBottom: "50px", marginTop: "10px" }}>
              <div className="card1" style={{ width: "79vw" }}>
                {image !== "" ? (
                  <div
                    className="achieveimage"
                    style={{
                      height: "200px",
                      position: "relative",
                      backgroundColor: "black",
                    }}
                  >
                    <img
                      src={image}
                      style={{
                        maxWidth: "100%",
                        maxHeight: "100%",
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                      alt=""
                    />
                  </div>
                ) : (
                  ""
                )}

                <div style={{ fontSize: "1.3rem", paddingLeft: "1rem" }}>
                  <div
                    style={{
                      textAlign: "left",
                      marginBottom: "5px",
                      fontSize: "1.75rem",
                    }}
                  >
                    {competition}
                  </div>
                  <hr
                    style={{
                      width: "25%",
                      backgroundColor: "rgb(8, 39, 65)",
                      height: "0.3vh",
                      marginLeft: "0",
                    }}
                  />
                  <div
                    style={{
                      fontSize: "1.5rem",
                      marginTop: "10px",
                      textAlign: "left",
                    }}
                  >
                    {about}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Base>
  );
};

export default Achievement;
