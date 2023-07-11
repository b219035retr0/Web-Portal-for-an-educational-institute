import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { isAuthenticated } from '../auth/helper';

function ClassBox({ classroom, onClassroomClick }) {
  return (
    <div onClick={() => onClassroomClick(classroom._id)}>
      <h2>hiiii{classroom.name}</h2>
    </div>
  );
}

function ClassRoom() {
  const [classrooms, setClassrooms] = useState([]);
  const [selectedClassroom, setSelectedClassroom] = useState(null);
  const {user,token}=isAuthenticated()
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('');

  useEffect(() => {
    fetch('https://finakyrback.onrender.com/classroom/classrooms')
      .then((response) => response.json())
      .then((data) => setClassrooms(data))
      .catch((error) => console.error(error));
  }, []);

  const handleClassroomClick = (classId) => {
    setSelectedClassroom(classId);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    setFileName(event.target.files[0].name);
  };

  const [fileUrl, setFileUrl] = useState(null);

  const handleDownload = async (filename) => {
    
    try {
      const response = await axios.get(`https://finakyrback.onrender.com/classroom/${selectedClassroom}/files/${filename}`, { responseType: 'blob' });
      const file = new Blob([response.data], { type: response.headers['content-type'] });
      const fileUrl = URL.createObjectURL(file);
      setFileUrl(fileUrl);
    } catch (error) {
      console.error(error);
    }
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    try {
      await axios.post(`https://finakyrback.onrender.com/classroom/${user.name}/${selectedClassroom}/files`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Accept: 'application/json',
          Authorization: `Bearer ${token}`
        }
      });
      // Do something after successful upload, e.g., display a success message
    } catch (error) {
      console.error(error);
      // Handle the error
    }
  }
  ;

  if (selectedClassroom) {
    console.log(`class hai ${selectedClassroom}`)
    return (
      <div>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
      {fileName && <p>Selected file: {fileName}</p>}
      <button onClick={handleDownload(fileName)}>Download</button> 
     {fileUrl && <a href={fileUrl} target="_blank" rel="noopener noreferrer">View file</a>} 
    </div>
    );
  } else {
    return (
      <div>
        {classrooms.map((classroom) => (
           
          <ClassBox key={classroom._id} classroom={classroom} onClassroomClick={handleClassroomClick} />
        ))}
      </div>
    );
  }
}

export default ClassRoom;