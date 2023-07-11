import React, { useState } from 'react';
import axios from 'axios';

const DownloadButton = ({ fileId,filename }) => {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = async () => {
    try {
      setDownloading(true);
      const response = await axios.get(`https://finakyrback.onrender.com/classroom/download/${fileId}`, {
        responseType: 'blob'
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', filename);
      document.body.appendChild(link);
      link.click();
      setDownloading(false);
    } catch (error) {
      console.error(error);
      setDownloading(false);
    }
  };

  return (
    <button disabled={downloading} onClick={handleDownload}>
      {downloading ? 'Downloading...' : 'Download File'}
    </button>
  );
};

export default DownloadButton;
