import React from "react";
import Dragme from "./Dragme";

const DropZone = ({ title, zone, location, setLocation }) => {
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setLocation(zone);
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className="w-[200px] h-[200px] border-2 border-dashed border-gray-500 p-10"
    >
      <h4>{title}</h4>
      {location === zone && <Dragme />}
    </div>
  );
};

export default DropZone;
