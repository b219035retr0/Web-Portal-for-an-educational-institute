import React, { useEffect, useState } from "react";
import ClassroomBox from "./ClassroomBox";
import Base from "./Base";
import axios from "axios";

const Resources = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://finakyrback.onrender.com/classroom/classrooms"
      ); // replace with your API endpoint
      setData(response.data);
     
    } catch (error) {
   
    }
  };

  return (
    <Base>
      <div style={{width:"90vw",margin:"auto"}}>
        <div
          style={{
            marginLeft: "35px",
            fontSize: "4rem",
            width: "90vw",
            fontWeight: "500",
            margin: "15px 0",
            
          }}
          className="commonheader"
        >
          Resources
        </div>
        <div className="classroom_container">
          {" "}
          {data.map((item) => (
            <ClassroomBox title={item.name} id={item._id} />
          ))}{" "}
        </div>
      </div>
    </Base>
  );
};

export default Resources;
