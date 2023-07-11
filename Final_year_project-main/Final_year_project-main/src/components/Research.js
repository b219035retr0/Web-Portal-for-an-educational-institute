import React, { useEffect } from "react";
import "./research.css";
import Base from "./Base";
import { useState } from "react";
import axios from "axios";
function Research() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://finakyrback.onrender.com/research/researchs"
        ); // replace with your API endpoint
        setData(response.data);

      } catch (error) {
   
      }
    };
    fetchData();
  }, []);

  return (
    <Base>
      <div style={{ fontSize: "4rem", width: "80vw",margin:"auto" }}>
        <div className="commonheader" style={{ fontSize: "3rem", fontWeight: "500"}}>
          Research Scholars
        </div>
        <div className="table-container">
        <table
          style={{
            margin: "auto",
            textAlign: "left",
            marginTop: "10px",
            border: "1px solid grey",
            padding: "0 20px",
            width: "100%",
            
          }}
        >
          <tbody>
            <tr style={{ textAlign: "left" }}>
              <th style={{ textAlign: "left" }}>Name</th>
              <th style={{ textAlign: "left" }}>Category</th>
              <th style={{ textAlign: "left" }}>SuperVisor</th>
              <th style={{ textAlign: "left" }}>Area</th>
              <th style={{ textAlign: "left" }}>Year of Joining</th>
            </tr>
            {data.map((row) => (
              <tr key={row._id}>
                <td style={{ textAlign: "left" }}>{row.name}</td>
                <td style={{ textAlign: "left" }}>{row.category}</td>
                <td style={{ textAlign: "left" }}>{row.supervisor}</td>
                <td style={{ textAlign: "left" }}>{row.area}</td>
                <td style={{ textAlign: "left" }}>{row.yoj}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    </Base>
  );
}

export default Research;
