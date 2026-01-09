import React from "react";

const ProgressBar = ({ progress }) => {
  return (
    <div className="w-full h-3 bg-bgmain rounded-lg overflow-hidden">
      <div className="h-3 bg-primary" style={{ width: `${progress}%` }}></div>
    </div>
  );
};

export default ProgressBar;
