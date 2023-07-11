import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.css";
import Base from "./Base";
import axios from "axios";
import UploadFile from "./Upload";
import { Select } from "@chakra-ui/react";
import { isAuthenticated } from "../auth/helper";
function Files() {
  const { id } = useParams();

  const [data, setData] = useState([]);
  const [fileUrl, setFileUrl] = useState(null);
  const [x, setX] = useState(false);

  const [fileType, setFiletype] = useState("All Files");

  const handleDownload = async (filename) => {
    try {
      const response = await axios.get(
        `https://finakyrback.onrender.com/classroom/${id}/files/${filename}`,
        { responseType: "blob" }
      );
      const file = new Blob([response.data], {
        type: response.headers["content-type"],
      });
      const fileUrl = URL.createObjectURL(file);
      setFileUrl(fileUrl);
      // console.log("abdfhksdkfdjlfhisdghki")
      openFile(fileUrl);
    } catch (error) {
      console.error(error);
    }
  };
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://finakyrback.onrender.com/classroom/${id}/files`
      ); // replace with your API endpoint
      setData(response.data);

      // console.log(dat);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [x]);

  //skill
  
  const [filteredData2, setFilteredDataaa] = useState([]);
  const handleFilterSubmit3 = (event) => {
    event.preventDefault();
    console.log(selectedValue + "------");
    const filter = data.filter((row) => {
      // const myarr=row.skill.split(" ");
      //  console.log(data);
      console.log("uesgdjkbsdbvjd" + row.purpose);
      console.log(selectedValue);
      setFiletype(selectedValue);
      return row.purpose === selectedValue;
    });
    console.log(filter);
    setFilteredDataaa(filter);
    if (filter.length === 0) {
      alert("Not available");
      setFiletype("All Files");

    }
    console.log("Hello" + filteredData2);
  };
  const handleFilterReset = () => {
   
    setFilteredDataaa([]);
    setFiletype("All Files");
  };
  const openFile = (url) => {
    window.open(url, "_blank");
  };
  const [selectedValue, setSelectedValue] = useState("Notes");

  const handleDropdownChange = (event) => {
    setSelectedValue(event.target.value);
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
            width: "90vw",
            fontWeight: "500",
            marginBottom:"20px"
            // textAlign: "left",
          }}
        >
          Resources
        </div>
        <div className="card2" style={{ display: "flex", justifyContent: "space-between" }}>
          <div className="search1">
            <div>
              
              <label>Search</label>
            </div>
            <Select
              id="dropdown"
              style={{ width: "100%", height: "40px" }}
              onChange={handleDropdownChange}
              value={selectedValue}
              
            >
              <option value="Notes">Notes</option>
              <option value="qa">Question Paper</option>
              <option value="assignment">assignment</option>
            </Select>
            <button
              type="submit"
              className="signin2"
              style={{ marginRight: "30px", marginTop: "20px" }}
              onClick={handleFilterSubmit3}
            >
              Search
            </button>

            <button
              type="button"
              onClick={handleFilterReset}
              style={{ marginTop: "20px" }}
              className="signin2"
            >
              Reset
            </button>
            {isAuthenticated() && <UploadFile xState2={{ x, setX }} />}
          </div>

          <div className="search2"
            style={{
              display: "inline-block",
              
              // backgroundColor: "yellow",
              textAlign: "left",
              padding: "0 10px",
            }}
          >
            <div
              style={{
                fontSize: "2.5rem",
                marginTop: "10px",
                fontWeight: "500",
                marginLeft: "15px",
              }}
            >
              {fileType}
            </div>
            <hr style={{ color: "black" }} />

            <div className="file-list-container">
              {/* <h1 style={{ color: "black" }}>Files</h1> */}
              {filteredData2.length > 0
                ? filteredData2.map((file, index) => (
                    <div
                      className="file-item"
                      onClick={() => handleDownload(file.name)}
                      key={index}
                    >
                      <div className="file-icon">
                        {file.type === "folder" ? (
                          <i className="fas fa-folder"></i>
                        ) : (
                          <i
                            class="fa-solid fa-file-pdf"
                            style={{ color: "red" }}
                          ></i>
                        )}
                      </div>
                      <div className="file-details">
                        <div className="file-name">{file.name}</div>
                        <div className="file-info">
                          {file.type !== "folder" && (
                            <React.Fragment>
                              <div className="file-size">{file.size}</div>
                              <div className="file-size">{file.uploadedBy}</div>
                            </React.Fragment>
                          )}
                        </div>
                      </div>
                    </div>
                  ))
                : data.map((file, index) => (
                    <div
                      className="file-item"
                      onClick={() => handleDownload(file.name)}
                      key={index}
                      style={{cursor:"pointer"}}
                    >
                      <div className="file-icon">
                        {file.type === "folder" ? (
                          <i className="fas fa-folder"></i>
                        ) : (
                          <i
                            class="fa-solid fa-file-pdf"
                            style={{ color: "red" }}
                          ></i>
                        )}
                      </div>
                      <div className="file-details">
                        <div className="file-name">{file.name}</div>
                        <div className="file-info">
                          {file.type !== "folder" && (
                            <React.Fragment>
                              <div className="file-size">{file.size}</div>
                              <div className="file-size">{file.uploadedBy}</div>
                            </React.Fragment>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </Base>
  );
}
export default Files;
