import React, {useState} from 'react'
import Base from './Base'

import {NavLink, useParams} from "react-router-dom";
import {Imghelper} from '../auth/helper/admin';
import {useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Faculty = () => {

    const {emailId} = useParams();
    // const emailId="fghjkl@ghjk.com"
  
    const [data, setData] = useState("");
    // const [imgee,setimgee]=useState("");
    const navigate=useNavigate()
    const [loading, setLoading] = useState(true);
  
const [isLoading, setIsLoading] = useState(true);

    // Simulate a delay of 2 seconds before setting isLoading to false
    // setTimeout(() => {
    //   setIsLoading(false);
    // }, 3000);

    useEffect(() => {
        fetchData().then(() => setIsLoading(false));
    }, [])
    const fetchData = async () => {
        try {
            const response = await axios.get(`https://finakyrback.onrender.com/faculty/${emailId}/profile`);

            setData(response.data);

        } catch (error) {
            console.log(error);
        }
    };


    return (
      <Base>
        <div style={{width:"90vw",margin:"auto" }}>
       { isLoading ? (
        <i className="fa fa-refresh fa-spin" style={{ fontSize: '24px' }}></i>):""}
      

          <div
          className='commonheader'
            style={{
              marginLeft: "35px",
              fontSize: "2.5rem",
              width: "90vw",
              fontWeight: "600",
              margin: "15px 0px",
              // textAlign: "left",
            }}
          >
            {data.name}
          </div>
          <div className='hodflex'
            style={{
              width: "100%",
              display: "flex",
            }}
          >
            <div
            className='hodimgee'
              style={{
               
                display: "inline-block",
                direction: "column",
              }}
            >
              <img style={{ marginBottom: "20px" }} src={Imghelper(data)} />
              <div
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "500",
                  textAlign: "left",
                  backgroundColor: "#00235B",
                  padding: "20px 10px",
                  color: "white",
                }}
              >
                {data.quote}
              </div>
            </div>

            <div className="hoddetail"
              style={{
               
                padding: "10px 30px",
              }}
            >
              <h1
                style={{
                  fontSize: "2.4rem",
                  fontWeight: "500",
                  textAlign: "left",
                  color: "black",
                  marginBottom: "20px",
                }}
              >
                {data.profession}
              </h1>

              <p
                style={{
                  textAlign: "left",
                  fontSize: "2rem",
                  lineHeight: "30px",
                }}
              >
                {data.description}{" "}
              </p>
            </div>

            <div
            className="hodqual"
              style={{
                
                backgroundColor: "#FEFBE9",
                borderTop: "5px #A84448 solid",
                padding: "20px",
                lineHeight: "30px",
              }}
            >
              <div style={{ marginBottom: "15px" }}>
                <h1
                  style={{
                    fontSize: "2rem",
                    color: "black",
                  }}
                >
                  Qualifications
                </h1>
                <p
                  style={{
                    textAlign: "left",
                    fontSize: "1.5rem",
                    fontWeight: "500",
                    color: "#B46060",
                  }}
                >
                  {data.qualification}
                </p>
              </div>
              <div style={{ marginBottom: "15px" }}>
                <h1
                  style={{
                    fontSize: "2rem",
                    color: "black",
                  }}
                >
                  Contact Details
                </h1>

                <p
                  style={{
                    textAlign: "left",
                    fontSize: "1.5rem",
                    fontWeight: "500",
                    color: "#B46060",
                  }}
                >
                  Email: {data.email}{" "}
                </p>
                <p
                  style={{
                    textAlign: "left",
                    fontSize: "1.5rem",
                    fontWeight: "500",
                    color: "#B46060",
                  }}
                >
                  Phone Number: {data.phone}{" "}
                </p>
              </div>
              <div style={{ marginBottom: "15px" }}>
                <h1
                  style={{
                    fontSize: "2rem",
                    color: "black",
                  }}
                >
                  Websites
                </h1>
                <p
                  style={{
                    textAlign: "left",
                    fontSize: "2rem",
                    fontWeight: "500",
                    color: "#B46060",
                  }}
                >
                  <NavLink
                    exact
                    to={data.url}
                    onClick={() => navigate(`${data.url}`)}
                  >
                    Visit Website
                  </NavLink>
                </p>
              </div>
            </div>
          </div>
          </div>
        
      </Base>
    );
}

export default Faculty
