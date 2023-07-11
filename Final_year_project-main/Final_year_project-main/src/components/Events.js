import React, { useEffect, useState } from 'react';
import './events.css';
import axios from 'axios';

function Events() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://finakyrback.onrender.com/event/notices'); // replace with your API endpoint
        setData(response.data);
      
      } catch (error) {
       
      }
    };
    fetchData();
  }, []);
  const [fileUrl, setFileUrl] = useState(null);
  const handleDownload = async (fileId) => {
    try {
      const response = await axios.get(`https://finakyrback.onrender.com/event/${fileId}`, { responseType: 'blob' });
      const file = new Blob([response.data], { type: response.headers['content-type'] });
      const fileUrl = URL.createObjectURL(file);
      window.open(fileUrl, '_blank'); // use window.open() to display file in a new tab
    } catch (error) {
     
    }
  };
  

  return (
    <table style={{ width: '100%' }}>
      <tbody>
        {data.map((row) => (
          <tr key={row._id}>
            <td className='tdd'>
              <button className="bt">{new Date(row.date).toLocaleDateString()}</button>
            </td>
            <td className='tdd'>
              <b>{row.name}</b>
                <div className="ap"  onClick={() => handleDownload(row.pdf[0])}>
                  click here 
                </div>
              {/* <p>{row.description}</p> */}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Events;
