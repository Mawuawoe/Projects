import React from "react";

const Dragme = () => {
  const handleDragStart = (e) => {
    e.dataTransfer.setData("text/plain", "drag-me");
  };
  return (
    <div
      draggable
      onDragStart={handleDragStart}
      className="inline-flex m-10 p-5 bg-blue-500 cursor-grab"
    >
      Drag me
    </div>
  );
};

export default Dragme;
