import React from "react";

import { useNavigate } from "react-router-dom";
const ClassroomBox = ({ title, description, image, id }) => {
  const navigate = useNavigate();
  return (
    <div className="classroom-box" onClick={() => navigate(`/files/${id}`)}>
      <h2>{title}</h2>
    </div>
  );
};

export default ClassroomBox;
